import {useParams} from 'react-router-dom';

function User(){

    let {username,userId} = useParams();
    
    let myString = 'Hello JS!';
    console.log(myString.toLowerCase()); //hello js!

    console.log(`type of 1 is: ${typeof 1}`); 

    return(
        <div className="container">
            User: {username}
            <br></br>
            User ID: {userId}
        </div>
    )
}
export default User;