import AuthContext from "../contexts/authContext";
import { useContext } from "react";

function Example() {
    const {someFunction} = useContext(AuthContext);

    return (
        <>
            <h2>Welcome {userInfo.name}</h2>
            <h2>Your Email: {userInfo.email}</h2>
            <button onClick={someFunction}></button>
        </>
    )
}