const Item = ({ name,img,price }) => {
    return (
        <li>
            <img src={img} alt={name}/>
            <br></br>
            {name}
            <br></br>
            <p>Precio:{price}</p>
            <button>Ver detalles</button>
        </li>
    )
}
export default Item