import { useState } from "react"

function AddForm(props) {

  const [ nameValue, setNameValue ] = useState("")
  const [ priceValue, setPriceValue ] = useState(0)

  const handleNameChange = (event) => {
    console.log(event.target.value)
    let realInputFromUser = event.target.value

    // if (realInputFromUser === "duck") {
    //   realInputFromUser = "rabbit"
    // }
    setNameValue(realInputFromUser)
  }

  const handlePriceChange = (event) => setPriceValue(Number(event.target.value))

  const handleAddProduct = (event) => {
    event.preventDefault() // removes any default behaviour from the form submission

    // if the name is empty or price is 0, don't execute the function
    if (nameValue === "" || priceValue === 0) {
      console.log("need a name and price for the price") // this could be an alert
      return
    }
    
    const newProduct = {
      name: nameValue,
      price: priceValue,
      isPurchased: false
    }
    
    console.log("trying to add the product to the list", newProduct)

    // we need to clone the state
    // console.log(props.allProducts)
    // const stateClone = structuredClone(props.allProducts)
    // stateClone.push(newProduct)
    // props.setAllProducts(stateClone)

    // props.setAllProducts((currentStateValue) => {
    //   console.log(currentStateValue)
    //   const stateClone = structuredClone(currentStateValue)
    //   stateClone.push(newProduct)
    //   // return what we want the new value of the state to be
    //   return stateClone
    // })

    props.setAllProducts((state) => [...state, newProduct])

    // refresh the values of the inputs
    setNameValue("")
    setPriceValue(0)
  }

  return (
    <div className="add-form container">
      
      <h2>Add Form</h2>

      <form onSubmit={handleAddProduct}>

        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" onChange={handleNameChange} value={nameValue}/>
        </div>

        <div>
          <label htmlFor="price">Price: </label>
          <input type="number" name="price" onChange={handlePriceChange} value={priceValue}/>
        </div>

        <button>Add</button>

      </form>

    </div>
  )
}

export default AddForm