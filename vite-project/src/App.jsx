import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Router/PrivateRouts/Routes'

function App() {
  // Something like that
  if(process.env.NODE_ENV === 'debug'){
      setDebugLevel(1)
  }


  return (
    <div className="App">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  )
}

export default App
