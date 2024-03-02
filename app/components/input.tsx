import '../styles/input.css'
interface InputProps {
  label: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ label, placeholder }) => {
  return (
    <div className='inputs'>
      <label htmlFor="input">{label}</label><br />
      <input id='input' placeholder={placeholder} type="text" /><br />
    </div>
  );
};

export default Input;
