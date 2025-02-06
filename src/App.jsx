import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  Routes,
} from "react-router-dom";
//layout
import MainLayout from "./layout/MainLayout";

//pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

//component
import ProtectedRoutes from "./components/ProtectedRoutes";
//actions

function App() {
  const user = true ;
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
