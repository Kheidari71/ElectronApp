import Home from "./pages/Main";
import { CheckboxBtnContainer } from "./context/CheckboxContext";
import { Galleryontainer } from "./context/GalleryContext";

import Authorize from "./auth/Authorize";
import { useState } from "react";


function App() {

  const [logIn , setLogIn] = useState(false);
  
  return (
    <CheckboxBtnContainer>
       <Galleryontainer>
        {!logIn ? <Authorize setLogIn={setLogIn}/> : ( <Home/>)}
    </Galleryontainer>
    </CheckboxBtnContainer>
  );
}

export default App;
