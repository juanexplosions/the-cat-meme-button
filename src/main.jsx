import ReactDOM from 'react-dom/client'
import catRed from '../public/images/cat-red.png'
import catBlue from '../public/images/cat-blue.png'
import catGray from '../public/images/cat-gray.png'
import catGreen from '../public/images/cat-green.png'
import catPink from '../public/images/cat-pink.png'
import catPurple from '../public/images/cat-purple.png'
import catYellow from '../public/images/cat-yellow.png'

import App from './App'

const catImages = [{
        id:1,
        image: catRed
    },
    {
        id:2,
        image: catBlue
    },
    {
        id:3,
        image: catGray
    },
    {
        id:4,
        image: catGreen
    },
    {
        id:5,
        image: catPink
    },
    {
        id: 6,
        image: catPurple
    },
    {
        id: 7,
        image: catYellow
    }
]

ReactDOM.createRoot(document.getElementById('root')).render(
    <App catImages={catImages} />
  )