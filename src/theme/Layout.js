/**
 * @file layout
 */

// other modules on which the component depends.
import { Outlet } from 'react-router-dom';
import Navigation from './navigation';

/**
 * this is react component
 */
function Layout() {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
}

// export
// when importing this module, named exports must be referenced by the exact same name
export default Layout;