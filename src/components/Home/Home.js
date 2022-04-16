import React from 'react';
import useFirebase from '../../hooks/useFirebae';

const Home = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h2>THis is home</h2>
            <p>Current User is: {user ? user.displayName:"no User"}</p>
        </div>
    );
};

export default Home;