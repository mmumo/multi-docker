import react from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            I'm some other Page!
            <Link to="/">Go Back home</Link>
        </div>
    );
};