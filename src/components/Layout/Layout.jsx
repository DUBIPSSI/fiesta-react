import { Outlet, Link, NavLink} from "react-router-dom";
import "./Layout.css"
function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Counter">Counter</Link>
                    </li>
                    <li>
                        <Link to="/Fiesta">Fiesta</Link>
                    </li>
                    <li>
                        <Link to="/Quizz">Quizz</Link>
                    </li>
                    <li>
                        <Link to="/Shop">Shop</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Layout;