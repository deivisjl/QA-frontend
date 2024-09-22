import { Route, Routes} from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import { Container } from '@mui/material'
import Home from './components/Pages/Home/Home'
import Login from './components/Pages/Login/Login'

import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import ProtectedRoute from './components/Router/ProtectedRoute'

const navLinks = [
  {
      title:"Home", path:"/", icon:<InboxIcon />
  },
  {
      title:"Login", path:"/Login", icon:<DraftsIcon />
  }
];

function App() {

  return (
    <>
      <Navbar navLinks={navLinks}/>
      <Container sx={{ mt: 5, height:'100vh'}}>
         <Routes>
            <Route exact path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
            <Route path='/Login' element={<Login/>}/>
          </Routes>
      </Container>
    </>
  )
}

export default App
