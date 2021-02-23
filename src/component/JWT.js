import { useReducer } from "react";
import UserStore from './SignIn/UserStore'
const JWT = {
    jwt: UserStore.token
}
export default JWT;