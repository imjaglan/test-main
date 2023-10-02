"use client";
import { useState, useRef, useEffect } from "react";
import { Eye, ChevronLeft, ChevronRight, Copy } from "lucide-react";
import SettingsSection from "@/components/SettingsSection";
import EditSection from "@/components/EditSection";
import toast from "react-hot-toast";

export default function Home() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [dataToSave, setDataToSave] = useState({
    code: "",
    seconds: "",
    times: "",
    freq: "",
  });

  const handleCopy = () => {
    if (textareaRef.current) {
      textareaRef.current.select();
      document.execCommand("copy");
    }
    toast.success("text Copied");
  };
  const handleChange = (e: any) => {
    setDataToSave((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    console.log(dataToSave);
  }, [dataToSave]);

  return (
    <main className="min-h-screen w-full ">
      <section className="flex flex-col justify-start items-start gap-2 px-10 py-10  border-b-2 ">
        <button className="bg-purple-400 px-4 py-1 text-white rounded-md">
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
    </main>
  );
}
