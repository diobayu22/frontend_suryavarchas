export default function ImageGallery({ images }) {
  const imageArray = JSON.parse(images)

  const imageUrl = imageArray[0] || ''
  console.log('Data image', imageUrl)

  // Ambil URL pertama dari array
  return (
    <div className="image-gallery-container">
      <img src={imageUrl} />
      <div className="gallery">
        {imageArray?.map((img, index) => {
          return <img key={index} className="image" src={img} />
        })}
      </div>
    </div>
  )
}
