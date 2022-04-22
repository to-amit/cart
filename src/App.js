import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList.js";
import Footer from "./components/Footer.js";
import AddItem from "./components/AddItem";


function App() {
  const products = [
    {
      price: 60,
      Name: "Kiwi",
      quantity: 0,
    },
    {
      price: 99,
      Name: "sweet potato",
      quantity: 0,
    },
    {
      price: 20,
      Name: "Capcicum",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [total, setTotal] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotal = total;
    newProductList[index].quantity++;
    newTotal += newProductList[index].price;
    setTotal(newTotal);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotal = total;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotal -= newProductList[index].price;
    }
    setTotal(newTotal);
    setProductList(newProductList);
  };

  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    setTotal(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotal = total;
    newTotal -= newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index , 1);
    setProductList(newProductList);
    setTotal(newTotal);
  };
 const addItem =(Name,price) =>{
  let newProductList = [...productList];
  newProductList.push({
    price :price,
    Name:Name,
    quantity:0
  });
  setProductList(newProductList);
 };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem ={addItem} />
        <ProductsList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem ={removeItem}
        />
      </main>
      <Footer total={total} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
