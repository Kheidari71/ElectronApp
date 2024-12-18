
import { useState } from "react";
import ToggleButton from "../../../components/ToggleButton";
import { useGalleryContex } from "../../../context/GalleryContext";

const Sidebar = () => {
const {changeCategory , imageGroup}= useGalleryContex()

  return (
    <aside className="p-2">
      <div className="w-full h-full border rounded flex flex-col">
        <div className="flex-1 ">
          <div className="flex justify-end gap-2 p-2">
            <span>Autoplay</span>
            <ToggleButton />
          </div>
          <div className="pt-12">
            <ul className="transition-all flex flex-col gap-3 justify-center">
              <li 
             onClick={()=>changeCategory("Nature")}
              className={`text-sm pl-2 py-2 cursor-pointer ${imageGroup === "Nature" ? "bg-orange-400 text-white pl-6" : ""}`}>Nature</li>
              <li 
               onClick={()=>changeCategory("House")} className={`text-sm pl-2  py-2 cursor-pointer ${imageGroup === "House" ? "bg-orange-400 text-white pl-6" : ""}`}>House</li>
              <li 
              onClick={()=>changeCategory("Sky")}className={`text-sm pl-2  py-2 cursor-pointer ${imageGroup === "Sky" ? "bg-orange-400 text-white pl-6" : ""}`} >Sky</li>
            </ul>
          </div>
        </div>
        <div>
          <button
          onClick={()=>changeCategory("Nature")}
          className="bg-gray-700 
          text-white w-full p-1">
            Back
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
