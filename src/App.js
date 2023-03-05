/**
 * @file app
 */

// other modules on which the component depends.
import { Route, Routes } from 'react-router-dom';
import Layout from './theme/Layout';
import Home from './Home'
import Like from './Like'
import Counter from './Counter'

/**
 * this is react component
 */
function App() {
  // html content to display when rendering the component
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index path="/" element={<Home></Home>} />
          <Route path="like" element={<Like></Like>} />
          <Route path="counter" element={<Counter></Counter>} />
        </Route>
      </Routes>
    </div>
  );
}
// export
// when importing this module, named exports must be referenced by the exact same name
export default App;