import searchImages from "./Getter";
import ImageList from "./ImageList";
import SearchHeader from "./SearchHeader"
import { useState } from "react";

function App() {

  const [images, setImages] = useState([])

const handleSubmit = async (term) =>{
   const apiAnswer = await searchImages(term);
   setImages(apiAnswer)
}

  return (
    <>
    <SearchHeader search={handleSubmit} />
    <ImageList imagesPlaceholder={images}/>
    </>
  )
}

export default App
