import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage"
import AboutCompany from "./pages/AboutCompany"
import Catalog from "./pages/Catalog";
import Contacts from "./pages/Contacts";

const router = createBrowserRouter([
  {path: '/', element: <HomePage/>},
  {path: 'catalog', element: <Catalog/>},
  {path: 'about', element: <AboutCompany/>},
  {path: 'contacts', element: <Contacts/>},
], {
  basename: "/LeoGroup" 
})

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
