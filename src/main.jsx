import ReactDOM from 'react-dom/client'
import catRed from '../public/images/cat-red.png'
import catBlue from '../public/images/cat-blue.png'

import App from './App'

const catImages = [{
        id:1,
        image: catRed
    },
    {
        id:2,
        image: catBlue
    }
]

ReactDOM.createRoot(document.getElementById('root')).render(
    <App catImages={catImages} />
  )