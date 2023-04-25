import {useEffect, useState} from "react"

import ProductCart from "./productCard"

import "./App.css"

function App(){
  const [products, setProducts] = useState([])

  useEffect(()=>{
      getProducts()
  },[])

  async function getProducts(){

    let res = await fetch("https://fakestoreapi.com/products");

    let productList = await res.json();

    setProducts(productList)

    console.log(productList)
  }

  if (products.length===0){
      return(<h1>fetching...</h1>)
  }
  return(
    <>
      <div className="product-list">
      {
        products.map((p)=> <ProductCart {...p} key={p.id}></ProductCart>)
      }
      </div>
    </>
  ) 
}
export default App;