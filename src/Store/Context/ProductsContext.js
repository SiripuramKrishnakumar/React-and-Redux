import {createContext, useState} from 'react';


export const ProductContext = createContext({
 products: [],
 addProduct : (item) => {}
});


const ProductContextProvider = (props) => {

    const [productsList, setProductList] = useState([
      {name: 'TV', price: 50},
      {name: 'Remote', price: 5},
      {name: 'Car', price: 500},
      {name: 'Fridge', price: 50},
      {name: 'Table', price: 50},
      {name: 'AC', price: 50},
      {name: 'Purifier', price: 50},
      {name: 'Purifier1', price: 50},
      {name: 'Purifier2', price: 50},
      {name: 'Purifier3', price: 50},
      {name: 'Purifier4', price: 50},
      {name: 'Purifier5', price: 50},
      {name: 'Purifier6', price: 50},
      {name: 'Purifier7', price: 50},
      {name: 'Purifier8', price: 50},
      {name: 'Purifier9', price: 50},
      {name: 'Purifier10', price: 50},
      {name: 'Purifier11', price: 50},
      {name: 'Purifier12', price: 50},
      {name: 'Purifier13', price: 50},
    ]);

    function addProduct(product)
    {
        setProductList((prevState) => [...prevState,product]);
    }

    return (
      <ProductContext.Provider
        value={{
          products: productsList,
          addProduct
        }}
      >
        {props.children}
      </ProductContext.Provider>
    );
}

export default ProductContextProvider;