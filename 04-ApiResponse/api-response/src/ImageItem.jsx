function ImageItem({image}) {
    console.log(image)
    return (
    <>
    <img className="image-list-img" src={image.urls.small} alt={image.alt_description}></img>
    </>);
}

export default ImageItem;