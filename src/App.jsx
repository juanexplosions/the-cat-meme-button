import { useState } from 'react'

function App({catImages}) {
  const [shownCats, setShownCats] = useState([])
  const [prevIndex, setPrevIndex] = useState(0)

  const handleMew = () =>{
    let newIndex = 0

    if(shownCats.length === 0){
      newIndex = Math.floor(Math.random() * catImages.length)
    }else{
      do{
        newIndex = Math.floor(Math.random() * catImages.length)
      }while(newIndex === prevIndex)
    }

    setPrevIndex(newIndex)   
    setShownCats([...shownCats, catImages[newIndex]])

  }

  const renderImages = () => { 
    if(shownCats.length === 0){
      return <p>Click to make the magic meme happen</p>
    }else{
      return shownCats.map((cat, index) => {
        return <img className="catImage" key={index} src={`/images/cat-${cat.image}.png`} alt="Imagen de gato" />
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
        <p>Made with <b>PURR</b> by @juanexplosions</p>
      </div>
    </>
  )
}

export default App
