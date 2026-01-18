import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage"
import AboutCompany from "./pages/AboutCompany"

const router = createBrowserRouter([
  {path: '/', element: <HomePage/>},
  {path: 'about', element: <AboutCompany/>},
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
