
import './App.css'
import {Outlet} from 'react-router-dom'
import {Footer} from './components/Footer.jsx'
import  ContextProvider  from './context/ContextProvider.jsx'
function App() {

  return (
    <ContextProvider>
      <div className="bg-gray-50 text-black dark:text-white dark:bg-gray-900">
    <div style={{scrollBehavior:'smooth'}}>
      <Outlet/>
    </div>
    <Footer/>
    </div>
    </ContextProvider>
  )
}

export default App
