import { createContext, useContext, useState } from "react";

export const GalleryContext = createContext();

export const Galleryontainer = ({children})=>{
    const [imageGroup , setImageGroup]= useState("Nature")

const changeCategory = (category)=>{
    setImageGroup(category)
}

    return (
        <GalleryContext.Provider value={{
            imageGroup , setImageGroup , changeCategory
        }}>

            {children}
        </GalleryContext.Provider>
    )
}

export const useGalleryContex =()=>{
    return useContext(GalleryContext)
}