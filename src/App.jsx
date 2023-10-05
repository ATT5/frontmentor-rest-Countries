import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { query } from "./util/http";
import FlagsPage from "./pages/FlagsPage";
import CountryFlagPage from "./pages/CountryFlagPage";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <FlagsPage /> },
      {
        path: "/:flagId",
        element: <CountryFlagPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={query}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
