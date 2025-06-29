import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from './pages/home'
import Favorites from './pages/favorite'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <NavBar></NavBar>
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/favorites' element={<Favorites/>}></Route>

      </Routes>
    </main>
    </div>
  )
}


export default App
