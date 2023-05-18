import axios from "axios";

export async function productsData() {
  const products = await axios.get(
    "https://fakestoreapiserver.reactbd.com/products"
  );
  return products
}


// where we want this data 
// Ans - Home page 
// go to app.js , 