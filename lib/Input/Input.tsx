interface InputProps {
  label: string;
}

export const Input = ({ label }: InputProps) => {
  return (
    <div>
      <label className="bg-blue-200">{label}</label>
      <input />;
    </div>
  );
};
