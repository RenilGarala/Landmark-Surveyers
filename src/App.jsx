import Header from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ReactDOM from "react-dom/client";

const Applayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

function App() {
  const approuter = createBrowserRouter([

    {
      path: "/",
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={approuter} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

export default App;