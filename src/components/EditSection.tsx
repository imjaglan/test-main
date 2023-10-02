"use clinet";
import { FC, useState } from "react";
import { Eye } from "lucide-react";
import AddSteps from "./AddSteps";
import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface EditSectionProps {
  handleChange: any;
  dataToSave: any;
}

async function addData(data: Record<string, any>) {
  try {
    const docRef = await addDoc(collection(db, "Survey"), {
      ...data,
    });
    toast.success("Data saved successfully!");
  } catch (error) {
    console.error("Error adding document: ", error);
    toast.error("Error saving data.");
  }
}

const EditSection: FC<EditSectionProps> = ({ handleChange, dataToSave }) => {
  const [components, setComponents] = useState([{}]);

  const handleAdd = (index: any) => {
    const newComponents = [...components];
    newComponents.splice(index + 1, 0, {});
    setComponents(newComponents);
  };

  const handleRemove = (index: any) => {
    const newComponents = [...components];
    newComponents.splice(index, 1);
    setComponents(newComponents);
  };

  const handleQuestionChange = (number: any, text: any) => {
    handleChange({
      target: {
        name: `ques${number}`,
        value: text,
      },
    });
  };

  return (
    <>
      <section className="flex flex-col justify-start items-start gap-2 px-10 py-10  border-b-2 ">
        <h1>Edit the Follow Steps</h1>
        <div className="flex flex-col w-full gap-3 transition-all">
          {components.map((_, index) => (
            <AddSteps
              key={index}
              number={index + 1}
              onQuestionChange={handleQuestionChange}
              onAdd={() => handleAdd(index)}
              onRemove={() => handleRemove(index)}
              showAdd={index === components.length - 1}
              showRemove={components.length > 1}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col justify-start items-start gap-2 px-10 py-10  border-b-2 ">
        <div className=" flex items-center gap-2">
          <h1>Preview</h1>
          <Eye />
        </div>
        <div className="w-full flex justify-end">
          <button
            onClick={() => addData(dataToSave)}
            className="bg-purple-400 px-10 py-1 text-white rounded-md"
          >
            Save
          </button>
        </div>
      </section>
    </>
  );
};

export default EditSection;
