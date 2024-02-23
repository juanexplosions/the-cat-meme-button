import { useState } from 'react'

const Image = ({ image }) => {
  return(
    <div>
      <img src={image} alt="Imagen de gato" />
    </div>
  )
}

function App({catImages}) {
  const [currentImageIndex, setImageIndex] = useState(0)

  const handleMew = () =>{
    const newIndex = currentImageIndex +1

    setImageIndex(newIndex)


    if(currentImageIndex === catImages.length -1){
      setImageIndex(0)
    }
  }

  const renderImages = () => {
    return catImages.slice(0, currentImageIndex +1).map(imageObj =>(
      <Image key={imageObj.id} image={imageObj.image}/>
    ))
  }

  return (
    <>
      <div>
        <p>logo</p>
        <button>?</button>
        <button>restart</button>
      </div>
      <div>
        <button onClick={handleMew}>MEW</button>
        <p>Click to make the magic meme happen</p>
        {renderImages()}
      </div>
      <div>
        <p>Made with PURR by @juanexplosions</p>
      </div>
    </>
  )
}

export default App
