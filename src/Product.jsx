const Product = (props) => {
    return ( 
        <div>

            <h1>{props.name}</h1>
            <h2>{props.price}</h2>
            <p>{props.type}</p>

        </div>
     );
}
 
export default Product;