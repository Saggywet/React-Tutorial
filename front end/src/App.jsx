import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from './pages/home'
import Favorites from './pages/favorite'

function App() {
  return (
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/favorites' element={<Favorites/>}></Route>

      </Routes>
    </main>
  )
}


export default App
