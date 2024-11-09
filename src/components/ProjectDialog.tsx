import { useContext, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { ThemeContext } from "../App";

type ProjectDialogProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  close: () => void;
};

const ProjectDialog: React.FC<ProjectDialogProps> = ({ title, children, isOpen, close }) => {
  const { theme } = useContext(ThemeContext);

  const [isCloseButtonHovered, setIsCloseButtonHovered] = useState(false);

  // Reference to this dialog.
  const dialogRef = useRef<HTMLDivElement | null>(null);

  // Reference to the previous focused element.
  const previousFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen || !dialogRef.current) return;

    // Store the currently focused element.
    previousFocusedElement.current = document.activeElement as HTMLElement;

    // First and last focusable elements within the dialog.
    let firstElement: HTMLElement;
    let lastElement: HTMLElement;

    // All focusable elements within the dialog.
    let focusableElements: NodeListOf<HTMLElement>;

    // Find all the focusable elements in the dialog only after the dialog has fully rendered in the browser.
    // This useEffect runs once the dialog has rendered in React, but before the browser has fully rendered the elements to the page.
    setTimeout(() => {
      // Find all focusable elements within the dialog.
      if (dialogRef.current) {
        focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          `button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])`
        );

        firstElement = focusableElements.item(0);
        lastElement = focusableElements.item(focusableElements.length - 1);
      }
    }, 100);

    dialogRef.current.focus();

    const handleTabKeyDown = (event: KeyboardEvent) => {
      // Prevent keyboard focus moving to elements outside the dialog.
      if (event.key === "Tab") {
        if (event.shiftKey) {
          // Tab + Shift: If the active element is the dialog and the user tabs to the previously focused element, move the focus to the last element within the dialog.
          if (document.activeElement === dialogRef.current) {
            event.preventDefault();
            lastElement.focus();
          }
          // Tab + Shift: If the focused element is the first element within the dialog, move the focus to the last element within the dialog.
          else if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab: If the focused element is the dialog and the user tabs to the next element, move the focus to the first focusable element within the dialog.
          if (document.activeElement === dialogRef.current) {
            event.preventDefault();
            firstElement.focus();
          }
          // Tab: If the focused element is the last element within the dialog, move the focus to the first element within the dialog.
          else if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleEscapeKeyDown);
    document.addEventListener("keydown", handleTabKeyDown);

    // Cleanup: remove event listeners and move focus to previously focused element.
    return () => {
      document.removeEventListener("keydown", handleEscapeKeyDown);
      document.removeEventListener("keydown", handleTabKeyDown);

      if (previousFocusedElement.current) {
        previousFocusedElement.current.focus();
      }
    };
  }, [isOpen]);

  const handleCloseButtonMouseEnter = () => setIsCloseButtonHovered(true);

  const handleCloseButtonMouseLeave = () => setIsCloseButtonHovered(false);

  // Close the dialog when the escape keyboard key is pressed.
  const handleEscapeKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      close();
    }
  };

  return (
    <>
      {ReactDOM.createPortal(
        <div
          className="fixed inset-0 flex justify-center items-center backdrop-blur-sm z-40 bg-opacity-50 bg-black max-h-dvh"
          onClick={close}
        >
          <div
            ref={dialogRef}
            className="w-11/12 lg:w-5/6 xl:w-3/4 2xl:w-2/3 z-50 bg-white dark:bg-gray-950 p-5 rounded-xl border border-gray-200 dark:border-gray-800 relative overflow-y-scroll max-h-[95%] my-2"
            role="dialog"
            tabIndex={-1}
            aria-labelledby="project-dialog-title"
            aria-describedby="project-dialog-description"
            onClick={(event) => event.stopPropagation()}
            aria-modal={true}
          >
            <h1 id="project-dialog-title" className="mr-24 text-3xl text-green-600">
              {title}
            </h1>
            <button
              type="button"
              className="absolute top-5 right-5"
              aria-label="Close dialog"
              onMouseEnter={handleCloseButtonMouseEnter}
              onMouseLeave={handleCloseButtonMouseLeave}
              onClick={close}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 -960 960 960"
                width="30px"
                fill={(isCloseButtonHovered && "#16a34a") || (theme === "light" ? "#000" : "#fff")}
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>
            <div id="project-dialog-description" className="space-y-5 mt-5">
              {children}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default ProjectDialog;
