import { RouterProvider, createBrowserRouter } from "react-router-dom"
import BaseLayout from "./layout/baselayout"
import ErrorPage from "./pages/Errorpage"
import Home from "./pages/homepage"

const router = createBrowserRouter([
  {
    path: "",
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      }
    ],
  }
])


function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
