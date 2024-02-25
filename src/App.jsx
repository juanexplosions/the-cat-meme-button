import { useState } from 'react'

function App({catImages}) {
  const [currentImageIndex, setImageIndex] = useState(0)
  const [shownCats, setShownCats] = useState([])


  const handleMew = () =>{
    const newIndex = currentImageIndex + 1

    setImageIndex(newIndex)
    setShownCats([...shownCats, catImages[currentImageIndex]])

    if(currentImageIndex === catImages.length -1){
      setImageIndex(0)
    }
  }

  const renderImages = () => {   
    if(shownCats.length === 0){
      return <p>Click to make the magic meme happen</p>
    }else{
      return shownCats.map((cat, index) => {
        return <img key={index} src={`/images/cat-${cat.image}.png`} alt="Imagen de gato" />
      })  
    }
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
      </div>
      <div>
      {renderImages()}
      </div>
      <div>
        <p>Made with PURR by @juanexplosions</p>
      </div>
    </>
  )
}

export default App
