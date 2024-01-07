import React, { useState } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import styles from './UserPage.module.css';

const User = () => {
    const { keycloak, initialized } = useKeycloak();
    const [user, setUser] = useState({
        username: "",
        email: "",
        name: ""
    });


    if (!keycloak.authenticated) {
        return <p>Please login to view your user information.</p>;
    }

    keycloak.loadUserInfo()
    .then((data) => {
        setUser(data);
    });

    return (
        <div className={styles.modal}>
            <p>Username: {user.preferred_username}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default User;