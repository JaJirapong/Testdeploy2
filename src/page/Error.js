import { Link } from "react-router-dom"

import Home from "./Home"

export default function Error() {
    return (
        <div>
        <h2>404</h2>
        <p>page not found</p>
        <Link to='/'>back home</Link>
        </div>
    )
}