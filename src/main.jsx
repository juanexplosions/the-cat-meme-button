import ReactDOM from 'react-dom/client'

import App from './App'

const catImages = [{
        id:1,
        image: "red"
    },
    {
        id:2,
        image: "blue"
    },
    {
        id:3,
        image: "gray"
    },
    {
        id:4,
        image: "green"
    },
    {
        id:5,
        image: "pink"
    },
    {
        id: 6,
        image: "purple"
    },
    {
        id: 7,
        image: "yellow"
    }
]

ReactDOM.createRoot(document.getElementById('root')).render(
    <App catImages={catImages} />
  )