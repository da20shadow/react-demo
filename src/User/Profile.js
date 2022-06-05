import { useRef } from 'react';
import { useState, useEffect } from 'react';
function ProfileDetails ({
    isLogged,
    user,
}) {
    let usernameRef = useRef();

    // let [username,setUsername] = useState('');
    let stateResult = useState('');
    const sate = stateResult[0];
    const setState = stateResult[1];

    useEffect(() => {
        
        let name = 'john';

        setTimeout(() =>{
            setState(name)
        },1500);

    },[]);

    const formSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let {username,password} = Object.fromEntries(formData);
        
        console.log(usernameRef.current.value);
    }
    const onChange = (e) => {
        console.log(usernameRef.current.value);
    }

    return (
        <section id='user-details'>
            <h2 className='text-center my-3'>Edit Profile: {user}</h2>

            <form className='mb-5' onSubmit={formSubmit}>
            <div className="mb-1">
                <label className="form-label" htmlFor="username">
                  Username
                </label>
                <input
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    ref={usernameRef}
                    placeholder="username"
                    required="required"
                    name="username"
                />
              </div>

              <div className="mb-1">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="password"
                  required="required"
                />
              </div>

              <div className="mb-1">
                <button className="btn btn-primary btn-lg" type='submit'>Save</button>
              </div>

            </form>
        </section>
    )
}
export default ProfileDetails;