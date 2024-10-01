import { RouterProvider} from "react-router-dom";
import {getRouter} from "./config/getRouter.tsx";
import {UserProvider} from "./contexts/CurrentUserContext.tsx";

function App() {
  return (
    <UserProvider>
        <RouterProvider router={getRouter()} />
    </UserProvider>
  )
}

export default App