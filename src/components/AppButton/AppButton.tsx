import './AppButton.scss';

const AppButton = ({
  label,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
}) => {
  return (
    <button className="app-button" {...rest}>
      {label}
    </button>
  );
};

export default AppButton;