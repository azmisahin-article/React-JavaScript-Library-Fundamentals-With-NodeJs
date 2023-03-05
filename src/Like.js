/**
 * @file Like
 */

// other modules on which the component depends.
import LikeButton from './component/LikeButton';

/**
 * this is react component
 */
function Like() {
    // html content to display when rendering the component
    return (
        <div>
            <LikeButton></LikeButton>
        </div>
    );
}
// export
// when importing this module, named exports must be referenced by the exact same name
export default Like;