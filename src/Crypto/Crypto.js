function Crypto ({
    crypto,
}){
    return (
        crypto.map(x => 
            <li key={x.id}><strong>{x.name}</strong>
             - Price: ${x.priceUsd}
             </li>) 
    )
}
export default Crypto;