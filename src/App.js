/**
 * @file app
 */

// other modules on which the component depends.
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
      <Home></Home>
      <Like></Like>
      <Counter></Counter>
    </div>
  );
}

// export
// when importing this module, named exports must be referenced by the exact same name
export default App;