import { useState, useEffect } from 'react';
import '../App.css';

import Ul_top from './Ul_top';
import Nav_top from './Nav_top';

import ProductsInDataBase from './ProductsInDataBase';
import AmountInProducts from './AmountInProducts';
import UsersQuantity from './UsersQuantity';

import LastProductInDB from './LastProductInDB';
import LastUserInDB from './LastUserInDB';

import CategoriesInDataBase from './CategoriesInDataBase';
import ProductList from './ProductList';

import Footer from './Footer';

function Div_wrapper() {
  const [initialState, setState]= useState({totalProducts: 0, categories: [], data:{nameProduct: false, pathImage: false, descriptionProduct: false, amountProducts: 0}, productList: []});

  useEffect(() => {
    // fetch("http://localhost:3004/product/api/all_products")
    fetch("https://mameli.herokuapp.com/product/api/all_products")
      .then(response => response.json())
      .then(data => {
        var arrayProducts= data.products;
        var lastProduct= arrayProducts[arrayProducts.length-1];
        var amountProducts= 0;
        let productList= [];
        arrayProducts.map( (product) => { 
          let object= {
            name: product.name,
            stock: product.stock,
            price: product.price
          }
          productList.push(object);
          amountProducts += product.price * product.stock;
          return })
        setState({
          totalProducts: data.count,
          categories: data.countByCategory,
          data:{
            nameProduct: lastProduct.name,
            pathImage: lastProduct.image_product,
            descriptionProduct: lastProduct.description,
            amountProducts: amountProducts
          },
          productList: productList
        })
      })
      .catch(error => console.error(error))
  }, []);

  return (
    <div id="wrapper">
      <Ul_top />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
        <Nav_top />
          <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 class="h3 mb-0 text-gray-800">MAMELI App Dashboard</h1>
            </div>
            <div class="row">
              <ProductsInDataBase ProductsInDataBase={initialState.totalProducts} />
              <AmountInProducts amountInProducts={initialState.data.amountProducts} />
              <UsersQuantity />
            </div>
            <div class="row">
              <ProductList productList={initialState.productList} />
              <LastProductInDB nameProduct={initialState.data.nameProduct} pathImage={initialState.data.pathImage} descriptionProduct={initialState.data.descriptionProduct}/>
              <LastUserInDB />
              <CategoriesInDataBase categories={initialState.categories} /> 
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
  
export default Div_wrapper;