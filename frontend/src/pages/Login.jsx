import { Form } from "../components/Form";
import {ACCESS_TOKEN} from "../constants.js";
import {Navigate} from "react-router-dom";

export const Login = () => {
     const token  = localStorage.getItem(ACCESS_TOKEN)
      if(token){
        return <Navigate to={"/"}/>
      }
      return <Form route="/api/token/" method="login" />;
};
