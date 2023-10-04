"use client";
import { useState, useRef, useEffect } from "react";
import { Eye, ChevronLeft, ChevronRight, Copy } from "lucide-react";
import SettingsSection from "@/components/SettingsSection";
import EditSection from "@/components/EditSection";
import toast from "react-hot-toast";
import Modal from "@/components/Modal";
type DataToSaveType = {
  code: string;
  seconds: string;
  times: string;
  freq: string;
  question: { [key: string]: string };
};
export default function Home() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);

  const [dataToSave, setDataToSave] = useState<DataToSaveType>({
    code: "",
    seconds: "",
    times: "",
    freq: "",
    question: {},
  });

  const handleCopy = () => {
    if (textareaRef.current) {
      textareaRef.current.select();
      document.execCommand("copy");
    }
    toast.success("text Copied");
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name.startsWith("question.")) {
      const questionKey = name.split(".")[1];
      setDataToSave((prevState) => ({
        ...prevState,
        question: {
          ...prevState.question,
          [questionKey]: value,
        },
      }));
    } else {
      setDataToSave((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  useEffect(() => {
    console.log(dataToSave);
  }, [dataToSave]);

  const openModal = () => {
    if (Object.keys(dataToSave.question).length < 1) {
      toast.error("Please add at least one question before generating.");
      return;
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentQuestionIndex(1); // Reset to the first question when closing
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const prevQuestion = () => {
    setCurrentQuestionIndex((prev) => prev - 1);
  };

  return (
    <main className="min-h-screen w-full ">
      <section className="flex flex-col justify-start items-start gap-2 px-10 py-10  border-b-2 ">
        <button
          onClick={openModal}
          className="bg-purple-400 px-4 py-1 text-white rounded-md"
        >
          Generate
        </button>
        <div className="relative">
          <textarea
            cols={30}
            rows={4}
            name="code"
            ref={textareaRef}
            onChange={handleChange}
            placeholder="JavaScript Code....."
            className="bg-gray-100 resize-none min-w-[25rem]  px-2 py-1 rounded-md"
          ></textarea>
          <Copy onClick={handleCopy} className="absolute right-2 top-6" />
        </div>
      </section>
      <SettingsSection handleChange={handleChange} />
      <EditSection handleChange={handleChange} dataToSave={dataToSave} />

      {/* modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex flex-col gap-4 w-full h-full py-4">
          <h2>Question {currentQuestionIndex}</h2>
          <p>{dataToSave.question[`ques${currentQuestionIndex}`]}</p>
          <input className="w-40 py-2 px-2 bg-slate-200" />
          <div className="flex w-full h-full justify-between px-10">
            {currentQuestionIndex > 1 && (
              <button
                onClick={prevQuestion}
                className="bg-purple-400 px-4 py-1 text-white rounded-md"
              >
                Previous
              </button>
            )}
            {currentQuestionIndex < Object.keys(dataToSave.question).length && (
              <button
                onClick={nextQuestion}
                className="bg-purple-400 px-4 py-1 text-white rounded-md"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </Modal>
    </main>
  );
}
