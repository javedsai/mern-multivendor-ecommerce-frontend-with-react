import { useEffect, useState } from "react";
import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoutes";
import { getRoutes } from './router/routes';

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);
  // console.log(allRoutes);
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const routes = getRoutes()
    // console.log(routes);
    setAllRoutes([...allRoutes, routes])

  }, [])
  /* eslint-enable react-hooks/exhaustive-deps */
  return <Router allRoutes={allRoutes} />
}

export default App;
