"use client";
import { FC, useState } from "react";
import { Plus, X } from "lucide-react";
interface AddStepsProps {
  onAdd: any;
  onRemove: any;
  showAdd: any;
  showRemove: any;
  number: number;
  onQuestionChange: any;
}

const AddSteps: FC<AddStepsProps> = ({
  onAdd,
  onRemove,
  showAdd,
  showRemove,
  onQuestionChange,
  number,
}) => {
  const [question, setQuestion] = useState("");

  function handleQuestionChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setQuestion(value);
    onQuestionChange(number, value);
  }

  return (
    <section className="flex items-center gap-4 w-full">
      <h1>{number}.</h1>{" "}
      <input
        type="text"
        className="bg-gray-100 max-w-[7rem] text-center py-2 rounded-md"
      />
      <h1>Display</h1>
      <input
        type="text"
        className="bg-gray-100 max-w-[7rem] text-center py-2 rounded-md"
      />
      <h1> The Question</h1>
      <input
        type="text"
        value={question}
        onChange={handleQuestionChange}
        className="bg-gray-100 max-w-[12rem] text-center py-2 rounded-md"
      />
      {showRemove && (
        <button
          onClick={onRemove}
          className="bg-purple-400 px-4 py-1 text-white rounded-md"
        >
          <X />
        </button>
      )}
      {showAdd && (
        <button
          onClick={onAdd}
          className="bg-purple-400 px-4 py-1 text-white rounded-md"
        >
          <Plus />
        </button>
      )}
    </section>
  );
};

export default AddSteps;
