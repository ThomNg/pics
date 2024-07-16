import ImageShow from "./ImageShow";
import './ImageList.css';

function ImageList({images}){
  
  const renderedImg = images.map((image)=>{
    return <ImageShow key={image.id} image={image}/>
  })
  
  return (
  <div className="image-list">
    {renderedImg}
  </div>)
  
};

export default ImageList;