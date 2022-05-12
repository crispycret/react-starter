import axios  from 'axios'

import {useToken, TokenInterface} from './useToken';

// Setting to toggle verbosity in default callbacks.
export let VERBOSE_CALLBACK = false;



// Default Response Callback Function
export const ResponseCallback = (response: any): void => {
  if (VERBOSE_CALLBACK && response) {
    console.log(response)
    console.log(response.status)
    console.log(response.headers)
    console.log(response.database)
  }
}

// Default Error Callback Function
export const ErrorCallback = (error: any): void => {
  if (VERBOSE_CALLBACK && error.response) {
    console.log(error.response)
    console.log(error.response.status)
    console.log(error.response.headers)
    console.log(error.response.data)
  }
}




export interface AuthInterface {
    token: TokenInterface;
    logout: (
      responseCallback: (response:any) => void, 
      errorCallback: (error:any) => void
    ) => void;
    
    
    login: (
      email:string, password:string, 
      responseCallback: (response:any) => void, 
      errorCallback: (error:any) => void
    ) => void;


    // After converting promises using .then().catch() to callbacks change return type to void.
    register: (
      email:string, username:string, password:string,
      responseCallback: (response:any) => void, 
      errorCallback: (error:any) => void
      ) => any;
}


export const Auth = () => {
  // Every authentication function accepts a callback function for succesful and unsuccessful response states.

  // Token manager to get, set, remove, check, validate access token
  const token = useToken();   

  // Send back-end request to destroy user's access token. 
  // On Success remove token fron front-end local storage 
  function login(
    email:string, password:string, 
    responseCallback: (response: any) => void,
    errorCallback: (error: any) => void
  ){
    axios({
      method: "POST",
      url:"/login",
      data:{
        email: email,
        password: password
      }
    }).then((response) => {
      token.setToken(response.data.access_token)
      responseCallback(response)

    }).catch((error: any) => {
      errorCallback(error);
    })

  }

  // Send back-end request to destroy user's access token. 
  // On Success remove token fron front-end local storage 
  function logout(
    responseCallback: (response: any) => void,
    errorCallback: (error: any) => void
  ): any {
    axios({
      method: "POST",
      url:"/logout",

    }).then((response: any) => {
      token.removeToken()
      if (responseCallback !== null) responseCallback(response)
      
    }).catch((error: any) => {
      if (errorCallback !== null) errorCallback(error)
    })
  }


  // Send back-end request to register a new user.
  function register(
    email:string, username:string, password:string,
    responseCallback: (response: any) => void,
    errorCallback: (error: any) => void
  ): any {
    let response = axios({
      method: "POST",
      url:"/register",
      data:{
        email: email,
        username: username,
        password: password
      }
    }).then((response: any) => {
      if (responseCallback !== null) responseCallback(response)

    }).catch((error: any) => {
      if (errorCallback !== null) errorCallback(error)
    })
  }




  return {
    token,
    login,
    logout,
    register,
  } as AuthInterface;
}


export default Auth;