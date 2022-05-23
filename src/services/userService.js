function getOne(userId){

    const url = '%PUBLIC_URL%/backEnd/user/getUserInfo.php';
    console.log(url);
    
    // fetch (`${url}?userId=${userId}`)
    // .then(response => response.json())

}
export default getOne;

export const create = async (userData) => {
    let response = await 
        fetch('../src/BackEnd/data.php', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(userData)
        });
        let result = await response.json();
        return result;
}