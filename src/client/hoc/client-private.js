import React, {useContext, useEffect, useState} from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../context';

export default function clientPrivate(Component) {
    return function WrappedComponent(props) {
        const userService = useContext(UserContext);
        const [user, seUser] = useState({});

        useEffect( () => {
            const user = userService.getCurrentUser();
            seUser(user);
        }, []);

        return user
            ? <Component {...props} user={user} />
            : <Redirect to='/welcome' />
    }
}
