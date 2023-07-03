import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Container from "./components/Container/Container"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"

const App = () => {
  const Layout = () => {
    return (
      <Container>
          <Outlet />
      </Container>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home />},
        { path: "/contact", element: <Contact />},
        { path: "/about", element: <About />}
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App