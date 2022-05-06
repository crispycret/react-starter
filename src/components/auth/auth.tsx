import axios  from 'axios'

import {useToken, TokenInterface} from './useToken';


export interface AuthInterface {
    token: TokenInterface;
    logout: () => void;
    login: (email:string, password:string) => void;
}



export const Auth = () => {

  const token = useToken();
   

  function login(email:string, password:string) {
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

        // Log any errors.
    }).catch((error: any) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
    })
  }

  function logout() {
    axios({
        method: "POST",
        url:"/logout",
    })
    .then((response: any) => {
        token.removeToken()
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
    logout
  } as AuthInterface;
}


export default Auth;