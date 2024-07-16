import { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImg  from "./api";
import ImageList from "./components/ImageList";

function App(){
  const[images, setImages] = useState([]);

  const handleTerm = async (term)=>{
    const res = await searchImg(term);
    setImages(res);
  }
  
  return (
  <div>
    <SearchBar gimmeTerm={handleTerm}/>
    <ImageList images={images}/>
  </div>
  )
};

export default App;