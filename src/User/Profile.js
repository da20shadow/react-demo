import {useParams} from 'react-router-dom';

const ProfileDetails = () => {

    let {userId} = useParams();

    return (
        <section id='user-details'>
            <h2>Profile ID: {userId}</h2>
        </section>
    )
}
export default ProfileDetails;