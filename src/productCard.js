import "./App.css"

function ProductCart({title, price, image, rating}){
    return(
        <div className="card">
        <img src={image} />
        <h3>{title}</h3>
        <h4>${price}</h4>
        <h5>{rating.rate}</h5>
        </div>
    )
}

export default ProductCart;