import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({

name:"orderList",
initialState:{   
    orders :[{
        "id": 1,
        "image":"https://imgs.search.brave.com/TtyB93sdA1ewYd-TZ0NM0p1pJaOCsg-cx0uu9lXwL4o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEy/ODI5MTE2Mi9waG90/by9oYXRzLWF2b2Nh/ZG8uanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPU5iekUyTmZv/bi1kNmRTZ0VCWm1f/MHlIUnZPcktGQkhz/TnVVTzVlc3FxYmc9",
        "name": "Avocado",
        "brand": "Milan Exp",
        "price": 100,
        "quantity": 1,
        "total": 100,
        "status": ""
      },
      {
        "id": 2,
        "image":"https://imgs.search.brave.com/9kElagC-KyWFhMHXYp3jin3RLdsE8VvE2X_345cnChc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/NTAzNzU5L3Bob3Rv/L2dyYXBlcy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VlFJ/cWlwanBkWWFCVUhX/QXdjMU41ekkwX0N0/OVlOcmhCQkRVZHly/YlppMD0",
        "name": "Grapes",
        "brand": "Elite",
        "price": 200,
        "quantity": 2,
        "total": 400,
        "status": ""
      }],
    
},
reducers:{
            addOrder:(state,action)=>{
                let newId=Math.max(...state.orders.map(order=>order.id))+1;
                let newItem={...action.payload,"id" :newId};
                //        console.log("New Item: ",newItem);
                state.orders.push(newItem);
            },
            approveOrder:(state, action)=> {
              const order = state.orders.find((item) => item.id === action.payload);
              console.log("This is",order)
            
              if (order) {
                order.status = "Approved";
              }
            },
            urgentOrder:(state,action)=>{
              const order = state.orders.find((item) => item.id === action.payload);
              console.log("This is",order)
            
              if (order) {
                order.status = "Missing-Urgent";
              }
            },
            missingOrder:(state,action)=>{
              const order = state.orders.find((item) => item.id === action.payload);
              console.log("This is",order)
            
              if (order) {
                order.status = "Missing";
              }
            },
            editOrder: (state, action) => {
              const { productId, newPrice, newQuantity } = action.payload;
              const order = state.orders.find((item) => item.id === productId);
            
              if (order) {
                if (newPrice === order.price && newQuantity !== order.quantity) {
                  order.status = "Quantity-Updated";
                  order.quantity = newQuantity;
                }
                if (newPrice !== order.price && newQuantity === order.quantity) {
                  order.status = "Price-Updated";
                  order.price = newPrice;
                }
                if (newPrice !== order.price && newQuantity !== order.quantity) {
                  order.status = "Price and Quantity Updated";
                  order.price = newPrice;
                  order.quantity = newQuantity;
                }
              }
            }
            ,

        }

});
export const {addOrder,approveOrder,urgentOrder,missingOrder,editOrder} = orderSlice.actions;
export default orderSlice.reducer;