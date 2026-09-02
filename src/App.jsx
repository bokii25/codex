import './index.css'
import { Routes, Route } from 'react-router-dom'
import Site from './Site'
import Pocetak from './Pocetak'



function App() {

  return (

    <Routes>
<Route path='/' element={ <Site/> } />     


<Route while path='/pocetak' element={ <Pocetak/> } />      

    </Routes>


  )
}

export default App
