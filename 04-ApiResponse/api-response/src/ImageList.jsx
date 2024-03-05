import ImageItem from "./ImageItem";

function ImageList({imagesPlaceholder}) {
    return (<>
    <div className="image-list">
    {imagesPlaceholder.map((image,index) => {return <ImageItem image={image} key={index}/>})}
    </div>
    </>);
}

export default ImageList;