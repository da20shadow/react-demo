const url = 'https://api.coincap.io/v2/assets';

export const getAll = async () =>{

    let response = await fetch(url);
    let result = await response.json();
    let crypto = result.data;

    return crypto;
}