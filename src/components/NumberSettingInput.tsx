import { FC, useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
interface NumberSettingInputProps {
  label: string;
  max: number;
  handleChange: any;
}

const NumberSettingInput: FC<NumberSettingInputProps> = ({
  label,
  max,
  handleChange,
}) => {
  const [value, setValue] = useState(0);

  const handleNextVal = () => {
    if (value < max) {
      const newValue = value + 1;
      setValue(newValue);
      handleChange({ target: { name: label, value: newValue } } as any);
    }
  };
  const handlePrevVal = () => {
    if (value > 0) {
      const newValue = value - 1;
      setValue(newValue);
      handleChange({ target: { name: label, value: newValue } } as any);
    }
  };
  return (
    <div className=" flex items-center gap-2">
      <div className="w-20 flex items-center bg-slate-100 py-1 px-1 rounded-md">
        <ChevronLeft onClick={handlePrevVal} />
        <input name="label" value={value} className="w-full text-center" />

        <ChevronRight onClick={handleNextVal} />
      </div>
      <h1>{label}</h1>
    </div>
  );
};

export default NumberSettingInput;
