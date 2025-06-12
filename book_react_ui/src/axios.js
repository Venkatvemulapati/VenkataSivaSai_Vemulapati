import axios from "axios";

const APIURL = "http://localhost:8383/bookproj";

export const REQUEST_TYPE={
    GET : 'GET',
    POST : 'POST',
    PUT : 'PUT',
    DELETE : 'DELETE',
}

export const server_request = (method,url,data)=>{
    return axios({method,url : APIURL+url,data});
}


