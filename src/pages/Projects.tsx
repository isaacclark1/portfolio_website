import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectDialog from "../components/ProjectDialog";
import FeatureListItem from "../components/FeatureListItem";
import ProjectDialogSectionHeading from "../components/ProjectDialogSectionHeading";
import Gallery from "../components/Gallery";
import lcms1 from "/images/projects/lcms/lcms1.jpeg";
import lcms2 from "/images/projects/lcms/lcms2.jpeg";
import lcms3 from "/images/projects/lcms/lcms3.jpeg";
import lcms4 from "/images/projects/lcms/lcms4.jpeg";
import lcms5 from "/images/projects/lcms/lcms5.jpeg";
import lcms6 from "/images/projects/lcms/lcms6.jpeg";
import lcms7 from "/images/projects/lcms/lcms7.jpeg";
import lcms8 from "/images/projects/lcms/lcms8.jpeg";
import lcms9 from "/images/projects/lcms/lcms9.jpeg";
import ReactIcon from "../technology_icons/ReactIcon";
import TSIcon from "../technology_icons/TSIcon";
import TailwindIcon from "../technology_icons/TailwindIcon";
import JestIcon from "../technology_icons/JestIcon";
import ExpressIcon from "../technology_icons/ExpressIcon";
import PostgreSQLIcon from "../technology_icons/PostgreSQLIcon";
import ViteIcon from "../technology_icons/ViteIcon";
import VitePWAIcon from "../technology_icons/VitePWAIcon";
import CognitoIcon from "../technology_icons/CognitoIcon";
import EC2Icon from "../technology_icons/EC2Icon";
import RDSIcon from "../technology_icons/RDSIcon";
import Route53Icon from "../technology_icons/Route53Icon";
import CertificateManagerIcon from "../technology_icons/CertificateManagerIcon";
import AmplifyIcon from "../technology_icons/AmplifyIcon";
import CloudFrontIcon from "../technology_icons/CloudFrontIcon";

const Projects: React.FC = () => {
  const [isProjectDialogOpen, setIsProjectDialogOpen] = useState(false);

  // The project that is currently selected (by clicking a project card)
  const [projectSelected, setProjectSelected] = useState<string | null>(null);

  // The project details to render in the project dialog.
  const [currentProjectInDialog, setCurrentProjectInDialog] = useState<JSX.Element | null>(null);

  // Is the tooltip hint to open more details visible?
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  // When the selected project changes change the components rendered inside the dialog.
  useEffect(() => {
    switch (projectSelected) {
      case "lcms-project":
        setCurrentProjectInDialog(lcmsProjectDetails);
        break;

      default:
        setCurrentProjectInDialog(null);
        break;
    }
  }, [projectSelected]);

  const openProjectDialog = () => setIsProjectDialogOpen(true);

  const closeProjectDialog = () => setIsProjectDialogOpen(false);

  // When a project card is clicked open the dialog and set the selected project to the clicked project.
  const handleProjectCardClick = (project: string) => {
    setProjectSelected(project);
    openProjectDialog();
    setIsTooltipVisible(false);
  };

  const lcmsProjectDetails = (
    <div className="text-lg space-y-5 dark:text-green-100 text-green-950">
      <p>
        My final university project involved designing and implementing a software solution to
        improve the efficiency of operations at a leisure centre.
      </p>

      <ProjectDialogSectionHeading text="Scope" />

      <p>The inital scope involved functionality to cover the following areas:</p>

      <ul className="list-square ml-10 space-y-2">
        <li>Managing and recording the assignment of cleaning task lists to staff members.</li>
        <li>Managing lifeguard rotations.</li>
        <li>Managing events.</li>
        <li>Managing schedules for setting up and dismantling activity areas.</li>
        <li>Managing lifeguard training sessions.</li>
      </ul>

      <p>
        I quickly realised, however, that the project scope was far to ambitious for the time
        available. Therefore I focused on just the cleaning functionality.
      </p>

      <ProjectDialogSectionHeading text="Features" />

      <ul className="list-square ml-10 space-y-2 mt-2">
        <FeatureListItem
          header="Customisable cleaning task lists"
          text="Managers can create cleaning task lists, either by building from scratch or by selecting
          from a pre-made master list of cleaning tasks."
        />

        <FeatureListItem
          header="List Assignment"
          text="Managers can assign cleaning task lists to specific staff members."
        />
        <FeatureListItem
          header="Status Tracking"
          text="Track the status of each list and each cleaning task within a list - either complete or
          incomplete."
        />
        <FeatureListItem header="Task Creation" text="Organise tasks by area for easier sorting." />
        <FeatureListItem
          header="Digital Signatures"
          text="Staff members can digitally sign task lists to confirm that all assigned tasks are done. Managers can then countersign the list to verify completion."
        />
        <FeatureListItem
          header="Access Control"
          text="Managers can create new users and give new managers enhanced privileges such as the
          ability to create new lists. Different user interfaces are rendered depending on the user's access level."
        />
        <FeatureListItem
          header="Multi-platform Accessibility"
          text="Access the app from any device, including desktop, mobile and tablet."
        />
      </ul>

      <ProjectDialogSectionHeading text="Technologies" />

      <div className="flex gap-5 justify-center flex-wrap">
        <ViteIcon />
        <ReactIcon />
        <TSIcon />
        <TailwindIcon />
        <JestIcon />
        <ExpressIcon />
        <PostgreSQLIcon />
        <VitePWAIcon />
        <AmplifyIcon />
        <CognitoIcon />
        <EC2Icon />
        <RDSIcon />
        <Route53Icon />
        <CloudFrontIcon />
        <CertificateManagerIcon />
      </div>

      <Gallery
        images={[
          { id: 0, src: lcms1, alt: "Login user interface for the LCMS system" },
          { id: 1, src: lcms2, alt: "User interface displaying cleaning task lists" },
          { id: 2, src: lcms3, alt: "User interface displaying a cleaning task list" },
          {
            id: 3,
            src: lcms4,
            alt: "User interface to add a cleaning task to a cleaning task list",
          },
          { id: 4, src: lcms5, alt: "User interface to create a new cleaning task list" },
          { id: 5, src: lcms6, alt: "User interface displaying master cleaning task lists" },
          { id: 6, src: lcms7, alt: "User interface displaying a master cleaning task list" },
          { id: 7, src: lcms8, alt: "User interface to create a new master cleaning task list" },
          { id: 8, src: lcms9, alt: "User interface to create a new master cleaning task" },
        ]}
      />
    </div>
  );

  return (
    <main className="flex flex-col max-w-7xl min-w-[66.666667%] mx-auto md:mt-32 mt-20 ">
      {isProjectDialogOpen && (
        <ProjectDialog
          title="Leisure Centre Management System PWA"
          isOpen={isProjectDialogOpen}
          close={closeProjectDialog}
        >
          {currentProjectInDialog}
        </ProjectDialog>
      )}

      <h2 className="sm:text-6xl text-5xl lg:text-7xl sm:text-left text-center animate-slideInFromTop">
        Projects
      </h2>
      <p className="mt-10 text-center sm:text-left animate-slideInFromLeft">
        A collection of my university and personal projects.
      </p>

      <section className="grid gap-x-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 animate-slideInFromBottom">
        <ProjectCard
          imageSource={lcms3}
          imageAltText="Picture of LCMS project web page."
          projectTitle="Leisure Centre Management System PWA"
          projectDescription={`
            My final university project.
            An easy to use Progressive Web Application that improves operational efficiency at a leisure centre.
          `}
          websiteLink="https://isaacclark.org"
          gitHubLink="https://github.com/isaacclark1/LCMS"
          projectId="lcms-project"
          handleClick={handleProjectCardClick}
          isTooltipVisible={isTooltipVisible}
          setIsTooltipVisible={setIsTooltipVisible}
        />
      </section>
    </main>
  );
};

export default Projects;
