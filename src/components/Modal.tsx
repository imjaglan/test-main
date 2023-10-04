import { X } from "lucide-react";
function Modal({ isOpen, onClose, children }: any) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white p-4 rounded-md shadow-lg max-w-lg w-full min-h-[20rem]">
        <div className="w-full ">
          <div className="justify-end flex">
            <button onClick={onClose}>
              <X />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
