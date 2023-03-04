import { useRoutes } from "react-router-dom"
import Home from "../pages/home"
import SearchCar from "../pages/search-car.js"

const routing = (props) => {
    return [
        { index: true, path: '/', element: <Home  {...props} title="Home" />, },
        { index: true, path: '/cari-mobil', element: <SearchCar  {...props} title="Cari Mobil" />, },
        { index: true, path: '*', element: <div>Halaman Not Found</div> },
    ]
}

const PublicRoutes = (props) => {
    const routes = useRoutes(routing(props))
    return routes
}

export default PublicRoutes