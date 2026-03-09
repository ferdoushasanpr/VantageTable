import { Upload } from "lucide-react";
import React, { ChangeEvent, useRef, useState } from "react";

export default function ImagePicker(): React.ReactNode {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const imageReference = useRef<HTMLInputElement>(null);

  const imageInputHandler = () => {
    imageReference.current?.click();
  };

  const imagePreviewrHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      return;
    }
    const file = files[0];

    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <section className="bg-[#1D1912] p-8 rounded-3xl border border-[#2A2419]">
      <div className="flex items-center gap-2 mb-6">
        <Upload size={20} className="text-primary" />
        <h3 className="text-xl font-semibold">Food Media</h3>
      </div>

      <div
        className="border-2 border-dashed border-[#332D21] rounded-2xl p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#F5A623] transition-colors mb-6"
        onClick={imageInputHandler}
      >
        <div className="text-primary mb-4">
          <Upload size={48} strokeWidth={1} />
        </div>
        <p className="font-bold text-white mb-1">Click to upload image</p>
        <p className="text-[10px] text-light uppercase">
          PNG, JPG or WEBP (Max. 5MB)
        </p>
      </div>

      <input
        type="file"
        name="image"
        ref={imageReference}
        className="hidden"
        onChange={imagePreviewrHandler}
      />
      {pickedImage && (
        <div className="flex gap-3">
          <img
            src={pickedImage}
            className="w-14 h-14 rounded-xl object-cover border-2 border-[#F5A623]"
            alt="prev"
          />
        </div>
      )}
    </section>
  );
}
