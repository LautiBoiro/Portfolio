import React from 'react' //cargo la libreria React
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css' // importo el CSS global

const root = ReactDOM.createRoot(document.getElementById('root')) // le digo a react donde vive en el transcurso de vida de la pagina

root.render(<App />) // le digo que se dibuje en sintaxis jsx
