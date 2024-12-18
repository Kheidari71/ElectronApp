
import Content from "./content/Content";
import Sidebar from "./sidebar/Sidebar";

const Gallery = () => {

  return (
    <div className="grid grid-cols-4 h-full w-full">
     
      <Content />
      <Sidebar/>
  
    </div>
  );
};

export default Gallery;
