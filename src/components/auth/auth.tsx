import axios  from 'axios'

import {useToken, TokenInterface} from './useToken';


export interface AuthInterface {
    token: TokenInterface;
    logout: () => any;
    login: (email:string, password:string) => any;
    register: (email:string, username:string, password:string) => any;
}



export const Auth = () => {

  const token = useToken();
   

  function login(email:string, password:string): any {
    axios({
      method: "POST",
      url:"/token",
      data:{
        email: email,
        password: password
      }
    })
    // pass the retrieved access_token to useToken.setToken through a prop.
    .then((response: any) => {
      token.setToken(response.data.access_token)
      return response.data.access_token
        // Log any errors.
    }).catch((error: any) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
    })
  }

  function logout(): any {
    axios({
        method: "POST",
        url:"/logout",
    })
    .then((response: any) => {
        token.removeToken()
        return response
    }).catch((error: any) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
    })
  }

  function register(email:string, username:string, password:string): any {
    axios({
        method: "POST",
        url:"/register",
        data:{
          email: email,
          username: username,
          password: password
        }
    })
    .then((response: any) => {
        token.removeToken()
        return response
    }).catch((error: any) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
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