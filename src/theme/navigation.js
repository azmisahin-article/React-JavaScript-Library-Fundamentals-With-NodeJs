/**
 * @file layout
 */

// other modules on which the component depends.
import { Link } from 'react-router-dom';

/**
 * this is react component
 */
function Navigation() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/like">Like</Link>
                    </li>
                    <li>
                        <Link to="/counter">Counter</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

// export
// when importing this module, named exports must be referenced by the exact same name
export default Navigation;