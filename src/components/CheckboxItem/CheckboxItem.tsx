import './CheckboxItem.scss';

const CheckboxItem = ({
  label,
  checked,
  setChecked,
}: {
  label: string;
  checked: boolean;
  setChecked: (b: boolean) => void;
}) => {
  return (
    <div className='checkbox-item'>
      <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
      <span>{label}</span>
    </div>
  );
};

export default CheckboxItem;