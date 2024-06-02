export default function ImageGalerry({images}){
    return(
        <div className="image-gallery-container">
            <img src={images[0]} />
            <div className="gallery">
                {images?.map((img, index) => {
                    return (
                        <img key={index} className="image" src={img} />
                    )
                } )}
            </div>
        </div>
    )
}