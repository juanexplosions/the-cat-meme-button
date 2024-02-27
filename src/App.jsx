import { useState } from 'react'
import Modal from './components/modal/modal' 

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

  const handleRefresh = () => {
    setShownCats([])
  }

  const renderImages = () => { 
    if(shownCats.length === 0){
      return <p className='click-to'>Click to make the magic meme happen</p>
    }else{
      return shownCats.map((cat, index) => {
        return <img className="cat-image" key={index} src={`/images/cat-${cat.image}.png`} alt="Imagen de gato" />
      })  
    }
  }

  return (
    <div className='container'>
      <div className='header'>
        <img className='logo' src="/images/tcmb-logo.png"/>
        <div className='buttons'>
          <Modal />
          <button onClick={handleRefresh} className='secondary'>
            <img className='refresh-button' src='/images/refresh-button.svg' alt='Recargar' />
          </button>
        </div>
      </div>
      <div className='cats-grid'>
        <button className='primary' onClick={handleMew}>MEW</button>
        {renderImages()}
      </div>
      <div className='footer'>
        <p>Made with <b>PURR</b> by <a href="https://www.instagram.com/juanexplosions/">@juanexplosions</a></p>
      </div>
    </div>
  )
}

export default App
