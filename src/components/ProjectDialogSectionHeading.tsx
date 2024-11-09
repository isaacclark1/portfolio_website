type ProjectDialogSectionHeadingProps = {
  text: string;
};

const ProjectDialogSectionHeading: React.FC<ProjectDialogSectionHeadingProps> = ({ text }) => (
  <h3 className="font-bold text-xl text-green-600">{text}</h3>
);

export default ProjectDialogSectionHeading;
