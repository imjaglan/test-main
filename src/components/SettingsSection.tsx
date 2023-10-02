import { FC } from "react";
import NumberSettingInput from "./NumberSettingInput";

interface SettingsSectionProps {
  handleChange: any;
}

const SettingsSection: FC<SettingsSectionProps> = ({ handleChange }) => {
  return (
    <main className="flex flex-col justify-start items-start gap-5 px-10 py-10  border-b-2 ">
      <div className=" flex flex-col gap-3">
        <h1>choose how much time to wait before showing the survey</h1>
        <NumberSettingInput
          label="seconds"
          max={100}
          handleChange={handleChange}
        />
      </div>
      <div className=" flex flex-col gap-3">
        <h1>choose how much time to wait before showing the survey</h1>
        <NumberSettingInput
          label="times"
          max={10}
          handleChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-3">
        <h1>Display Frequency - every</h1>
        <div className=" flex items-center gap-3">
          <input
            type="text"
            name="freq"
            onChange={handleChange}
            className="bg-gray-100 max-w-[7rem] text-center py-2 rounded-md"
          />
          <div>Other Options : 1 min, 5 min, 30 min </div>
        </div>
      </div>
    </main>
  );
};

export default SettingsSection;
