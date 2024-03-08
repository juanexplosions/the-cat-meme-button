import { useState, useEffect } from 'react'
import Modal from './components/modal/modal'
import { useWindowSize } from "@uidotdev/usehooks";


function App({catImages}) {
  const [shownCats, setShownCats] = useState([])
  const [prevIndex, setPrevIndex] = useState(0)
  const [maxCats, setMaxCats] = useState(0)
  const [showClickText, setShowClickText] = useState(true)

  const isGridFull = maxCats === shownCats.length;
  console.log("🚀 ~ App ~ isGridFull:", isGridFull)

  const disableButton = isGridFull;
  const buttonText = isGridFull ? 'OUT OF CATS' : 'MEW';

  const size = useWindowSize();

  const isMobile = size.width <= 600
  const sizeImageCat = isMobile ? 75 : 100

  useEffect(() => {
    setTimeout(() => {


    const grid = document.getElementById('cats-grid');

    const altoGrid = grid.clientHeight;
    const gridWidth = grid.clientWidth;

    const maxCatsAux = Math.floor(altoGrid / sizeImageCat) * Math.floor(gridWidth / sizeImageCat);
    console.log("🚀 ~ useEffect ~ gridWidth:", gridWidth)
    console.log("🚀 ~ useEffect ~ altoGrid:", altoGrid)
    console.log("🚀 ~ useEffect ~ sizeImageCat:", sizeImageCat)
    console.log("🚀 ~ useEffect ~ maxCatsAux:", maxCatsAux)
    console.log("test1",Math.floor(altoGrid / sizeImageCat))
    console.log("test2",Math.floor(gridWidth / sizeImageCat))
    setMaxCats(maxCatsAux);

    console.log(shownCats.length, maxCatsAux, shownCats.length > maxCatsAux)
    if(shownCats.length > maxCatsAux){
      const auxArray = shownCats.slice(0, maxCatsAux)
      setShownCats(auxArray)
    }
  }, "100");

  }, [size])

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
      setShowClickText(false)

  }

  const handleRefresh = () => {
    const auxArray = []
    setShownCats(auxArray)

    setShowClickText(true)
    console.log(showClickText)
  }

  const renderImages = () => {

    if(shownCats.length === 0){
      
    }else{
      return shownCats.map((cat, index) => {
        return <img className="cat-image" key={index} src={`/images/cat-${cat.image}.png`} alt="Imagen de gato" />
      })
    }
  }

  return (
    <div className='container'>
      <div className='header'>
        <img className='logo' src='/images/tcmb-logo.png'/>
        <div className='buttons'>
          <Modal />
          <button onClick={handleRefresh} className='secondary'>
            <img className='refresh-button' src='/images/refresh-button.svg' alt='Recargar' />
          </button>
        </div>
      </div>
      <div className='cats-grid' id='cats-grid'>
        <div className='cat-button' id='cat-button'>
          <button className='primary' onClick={handleMew} disabled={disableButton}> {buttonText} </button>
          <p className='click-to' style={{ visibility: showClickText ? 'visible' : 'hidden' }}><b>Click</b> to make the <del>magic</del> meme happen</p>
        </div>
        {renderImages()}
      </div>
      <div className='footer'>
        <p>Made with <b>PURR</b> by <a href="https://www.instagram.com/juanexplosions/" target="_blank">@juanexplosions</a></p>
      </div>
    </div>
  )
}

export default App
