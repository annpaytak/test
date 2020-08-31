import { Subject } from 'rxjs';

import api from './auth.http.service';
import {statuses} from '../config/api.config';
import { getCookie } from '../utils';

export default class AuthServices {
    user;
    userName;
    userChange;

    isLoaded = false;
    _login = false;

    constructor() {
        console.log('hello auth');
        this.userChange = new Subject();
    }

    async load() {
        this.isLoaded = true;
        console.log('loaded')

        const user = this.getCurrentUser();
        if(user) {
            this.user = user;
            this.userName = user.username;
            this.userChange.next(this.user);
            this._login = true;
        }
        // if (getCookie('userId')) {
        //     const userId = getCookie('userId');
        //     console.log(userId)
        //     // call endpoint -> check users if any has this id
        //     //if true -> get this user data
        //     //login this user
        //
        //     // let response = await api.getUserContentByToken(token);
        //     // console.log(response);//user content. want to return
        // }
    }

    async signup(userData) {
        let response = await api.createUser(userData);
        console.log(response)

        if (response.status === 200) { // if (status[response.status] === 'success')
            // {
            //     "message": "User was registered successfully."
            // }
            return response;
        }

        console.log('response error:', response);
    }

    async signin(userData) {
        try {
            let response = await api.signinUser(userData);
            console.log('success')
            this.user = response.data;
            this.userName = response.data.username;
            this.userChange.next(this.user);
            this._login = true;
            // const encodedUserId = encodeURIComponent(response.data.id);
            // document.cookie = `userId=${encodedUserId}`;
            localStorage.setItem("user", JSON.stringify(response.data));
            return response;//this.user;
        } catch (e) {
            console.log( e.response, 'error')
            return e.response;
        }

        // if (statuses[response.status] === 'success') { // if (response.status === 200)
        //     this.userName = response.data.username;
        //     this.user = response.data;
        //     this.userChange.next(this.user);
        //     this._login = true;
        //
        //     const encodedUserId = encodeURIComponent(response.data.id);
        //     document.cookie = `userId=${encodedUserId}`;
        //     console.log('signed in');
        //     return this.user;
        // }
        // return response
        // console.log('response error:', response);
        // throw new Error(response.status);
    }

    isSignedIn() {
        console.log("user is signed in");
        return this.user && !!this.userName;
    }

    signout() {
        localStorage.removeItem("user");
        return;
        console.log('logged out');
        this.userName = null;
        this.user = {};
        this.userChange.next(this.userName);
        this._login = false;
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }

}
