import { useState } from 'react'


const SquareImage = () => {
  
}


function App({catImages}) {
  const [image, setImage] = useState(0)

  return (
    <>
      <div>
        <p>logo</p>
        <button>?</button>
        <button>restart</button>
      </div>
      <div>
        <img src={catImages[0].image} alt="cat" />
        <button>mew</button>
        <p>Click to make the magic meme happen</p>
      </div>
      <div>
        <p>Made with PURR by @juanexplosions</p>
      </div>
    </>
  )
}

export default App
