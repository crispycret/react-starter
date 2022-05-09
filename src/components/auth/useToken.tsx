import { useState } from 'react';


export interface TokenInterface {
    setToken: (userToken: string) => void;
    token: string;
    removeToken: () => void;
    hasToken: () => boolean;
}

export const useToken = (): TokenInterface => {

    function getToken()  {
        const userToken = localStorage.getItem('token')
        return userToken && userToken
    }

    const [token, setToken] = useState(getToken());


    function saveToken(userToken: string) {
        localStorage.setItem('token', userToken);
        setToken(userToken);
    }


    function removeToken() {
        localStorage.removeItem('token');
        setToken(null)
    }

    function hasToken() {
        return (token !== null && token !== "" && token !== undefined);
    }

    function isValid() {
        let valid = false;
        if(!hasToken()) {
            return valid;
        }

        // validate token on backend

        if (!valid) {
            return valid;
        }

        return true
    }

    return {
        token,
        hasToken,
        setToken: saveToken,
        removeToken
    } as TokenInterface;

}


export default useToken;





