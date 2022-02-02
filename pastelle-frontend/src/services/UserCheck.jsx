import jwtDecode from "jwt-decode";

export default function verifyUserToken() {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = JSON.parse(localStorage.getItem("token"));

    if(user && token) {
        if(Date.now() >= jwtDecode(token).exp) {
            return true;
        }
        else {
            return false;
        }
    }
}