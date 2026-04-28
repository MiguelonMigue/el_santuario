import { HashRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import AlmuerzosDia from './components/AlmuerzosDia'
import AlmuerzosEspeciales from './components/AlmuerzosEspeciales'
import Bebidas from './components/Bebidas'
import Postres from './components/Postres'
import './App.css'
function App(){
  return(
    <HashRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/almuerzoDia' element={<AlmuerzosDia/>}/>
      <Route path='/almuerzoEspeciales' element={<AlmuerzosEspeciales/>}/>
      <Route path='/bebidas' element={<Bebidas/>}/>
      <Route path='/postres' element={<Postres/>}/>
    </Routes>
    </HashRouter>
  )
}

export default App