export default function ImageGallery({ images }) {
  return (
    <div className="image-gallery-container">
      {Array.isArray(images) && images.length > 0 && (
        <>
          <img
            src={images[0]}
            alt="car"
            style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
          />
          {images.length > 1 && (
            <div className="gallery">
              {images.map((img, index) => (
                <img
                  key={index}
                  className="image"
                  src={img}
                  alt={`car${index}`}
                  style={{ maxWidth: '100px', height: 'auto' }}
                />
              ))}
            </div>
          )}
        </>
      )}
      {!Array.isArray(images) && (
        <img
          src={images}
          alt="car"
          style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
        />
      )}
    </div>
  )
}
