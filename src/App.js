import HomePage from "./pages/HomePage";
// import ActivityPage from "./pages/ActivityPage";
import { RouterProvider, createHashRouter } from "react-router-dom";

export default function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);
  return <RouterProvider router={router} />;
}
