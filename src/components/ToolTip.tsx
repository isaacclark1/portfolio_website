import ReactDOM from "react-dom";

type ToolTipProps = {
  isVisible: boolean;
  position: { x: number; y: number };
  text: string;
};

const ToolTip: React.FC<ToolTipProps> = ({ isVisible, position, text }) => {
  return (
    <>
      {isVisible &&
        ReactDOM.createPortal(
          <div
            className="fixed w-max text-sm p-0.5 rounded dark:bg-gray-900 bg-gray-100 border dark:border-gray-100 border-gray-800 z-50"
            style={{
              top: `${position.y}px`,
              left: `${position.x}px`,
            }}
            aria-hidden={true}
          >
            {text}
          </div>,
          document.body
        )}
    </>
  );
};

export default ToolTip;
