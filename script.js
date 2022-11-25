let inputProduct = document.querySelector(".product");
let inputCost = document.querySelector(".cost");
let btn = document.querySelector(".btn");
let expensesWord =document.querySelector(".expenses-word");
let expensesNum =document.querySelector(".expenses-number");
let edit =document.querySelector(".edit");
let clear = document.querySelector(".delete");
let subHead = document.querySelector("subHead")


btn.addEventListener("click",()=>{
    expensesWord.innerHTML= inputProduct.value
    expensesNum.innerHTML = inputCost.value
    
    })
    

edit.addEventListener("click",()=>{
    expensesNum.innerHTML=""
    expensesWord.innerHTML=""

})

clear.addEventListener("click",()=>{
    expensesNum.innerHTML=""
    expensesWord.innerHTML=""
    inputCost.value="";
    inputProduct.value="";
})