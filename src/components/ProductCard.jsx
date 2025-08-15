
function ProductCard({eachProduct, index, setAllProducts}) {

  const handlePurchaseProduct = () => {
    // this is a modification on the object of the state
    // set function
    // to find the element to edit we usually use Ids or if no ids, we can use index.
    console.log(index)
    setAllProducts((state) => {

      const cloneState = structuredClone(state)
      cloneState[index].isPurchased = true
      // cloneState[index].isPurchased = cloneState[index].isPurchased
      return cloneState
      
      // VERY ADVANCED SOLUTION
      // return state.map((product, i) => i === index ? {...product, isPurchased: true} : product)

    })
  }

  return (
    <div className="product-card" >
      <h3>{eachProduct.name}</h3>
      <p>{eachProduct.price}€</p>
      <p>{eachProduct.isPurchased === true ? "✅" : "🟡"}</p>
      <button onClick={handlePurchaseProduct}>Buy</button>
    </div>
  )
}

export default ProductCard