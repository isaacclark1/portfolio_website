type FeatureListItemProps = {
  header: string;
  text: string;
};

const FeatureListItem: React.FC<FeatureListItemProps> = ({ header, text }) => {
  return (
    <li>
      <strong className="block text-green-600">{header}</strong>
      {text}
    </li>
  );
};

export default FeatureListItem;
