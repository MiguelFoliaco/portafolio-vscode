import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.less'
import { LayoutVSCode } from './modules/layout'
import { Home } from './modules/home/components'

const route = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    index: true
  }
])

function App() {

  return (
    <LayoutVSCode>
        <RouterProvider router={route} fallbackElement={<p>Loading...</p>} />
    </LayoutVSCode>
  )
}

export default App
