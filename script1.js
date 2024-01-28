// console.log("hs")
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
function ready() {
  // console.log("varsha");
}

// product add to the cart page
const imgURL = document.getElementsByClassName("image");
const cart = document.querySelectorAll(".addtocart");
const title = document.getElementsByClassName("products-titling");

let price = document.querySelectorAll(".desc h4 span");


let categoryButton = document.querySelectorAll(".slides button");
let category = document.querySelectorAll(".slides h2");
let productsCategory = document.querySelector(".productsCategory");
categoryItem();

function categoryItem() {
  for (let i = 0; i < categoryButton.length; i++) {
    categoryButton[i].addEventListener("click", () => {
      productsCategory.innerText = category[i].innerText;
    });
  }
}
for (let i = 0; i < cart.length; i++) {
  cart[i].addEventListener("click", () => {
    console.log(category.innerText);
    let products = {
      name: title[i].innerText,
      tag: imgURL[i].src,
      price: price[i].innerText,
      inCart: 0,
      category: productsCategory.innerText,
    };

    setItems(products);
    cartNumbers();
  });
}
function onLoadFunction() {
  let count = localStorage.getItem("productsCount");
  if (count) {
    document.querySelector(".cartAmount span").textContent = count;
  }
}
// let increaseItem=document.getElementsByClassName('cartAmount');
function cartNumbers() {
  let count = localStorage.getItem("productsCount");
  if (count) {
    count = parseInt(count);
    localStorage.setItem("productsCount", count + 1);
    document.querySelector(".cartAmount span").textContent = count + 1;
  } else {
    localStorage.setItem("productsCount", 1);
    document.querySelector(".cartAmount span").textContent = 1;
  }
}

onLoadFunction();
function setItems(products) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[products.name] == undefined) {
      cartItems = {
        ...cartItems,
        [products.name]: products,
      };
    }
    cartItems[products.name].inCart += 1;
  } else {
    products.inCart = 1;
    cartItems = {
      [products.name]: products,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  let shiftingProduct = document.getElementById("products-items");
  if (cartItems && shiftingProduct) {
    // shiftingProduct.innerHTML =' ';
    Object.values(cartItems).map((item) => {
      shiftingProduct.innerHTML += `
            
            <div class="product-items">
            <div class="img">
                <img src="${item.tag}" alt="">
            </div>
            <div class="product-info">

                <h2 class="product-name">${item.name}</h2>
                <!-- <ul> -->
                <h4 class="product-category">Category:<span>${item.category}</span></h4>
                <h4 class="price">Price: Rs.<span> ${item.price}</span></h4>
                <!-- </ul> -->
                <div class="delete-item">
                    <h4  class="delete-logo"><i onclick="deleteItemFunction()"class="fa-solid fa-trash-can"></i></h4>
                    <h4 class="remove-item" onclick="deleteItemFunction()">Remove Item</h4>
                    <div class="update">
                        
                            <li><button class="increseBtn"><i class="fa-solid fa-plus"></i></button></li>
                            <li><input type="number" class="input" value="${item.inCart}"></li>
                            <li><button class="decreseBtn"><i class="fa-solid fa-minus"></i></button></li>
                       
                    </div>
                </div>
                <h5 class="noOfPiece">How many Piece</h5>

            </div>
            
        </div>
                
            
            
            
            
            `;
    });
  }
}
displayCart();

//incresing decresing items

const incresebtn = document.getElementsByClassName("increseBtn");
const decresebtn = document.getElementsByClassName("decreseBtn");
const input = document.querySelectorAll(" .input");
const items = document.getElementsByClassName("product-items");

for (let i = 0; i < items.length; i++) {
  incresebtn[i].addEventListener("click", () => {
    let val = input[i].value;
    let values = parseInt(val) + 1;
    if (values < 6) {
      input[i].value = values;
    } else {
      alert("Not more than 5");
    }
  });
  decresebtn[i].addEventListener("click", () => {
    let val = input[i].value;
    let values = parseInt(val) - 1;

    if (values >= 1) {
      input[i].value = values;
    } else {
      alert("Not less than 1");
    }
  });
}

//delete items
let deleteName = document.querySelectorAll(".remove-item");
let deleteLogo = document.querySelectorAll(".delete-logo");
let deleteItem = document.querySelectorAll(".product-items");
let productName = document.querySelectorAll(".product-name");

function deleteItemFunction() {
  let count = localStorage.getItem("productsCount");
  for (let i = 0; i < deleteItem.length; i++) {
    deleteLogo[i].addEventListener("click", () => {
      if (count) {
        count = parseInt(count);
        localStorage.setItem("productsCount", count - 1);
        document.querySelector(".cartAmount span").textContent = count - 1;
      } 
      let cartItems = localStorage.getItem("productsInCart");
      cartItems = JSON.parse(cartItems);
      let product = productName[i].innerText;
      // console.log(product);

      list = Object.values(cartItems).filter((X) => X.name !== product);
      // console.log(list);
      localStorage.setItem("productsInCart", JSON.stringify(list));
      deleteItem[i].innerHTML = " ";
      
      // console.log(productName[i]);
    });
  }
}




let dLogo = document.querySelector(".down-logo ");

let userClick = document.querySelector(".user-click");





//calculate product price and shiffing price
let productingItem = document.getElementsByClassName("product-items");
let itemPrice = document.querySelectorAll(".price span");
let rateRs = document.querySelector(".rate span");

let shippingRs = document.querySelector(".shipping-rate span");
let nam=document.querySelectorAll('.product-name');
let cat=document.querySelectorAll('.product-category span');
let na=document.querySelector('.productsNames h3');
let ca=document.querySelector('.productsCategories h3');
let total = document.querySelector(".includes span");
let inputCount = document.querySelectorAll(".input");


let result=document.querySelector('#success-failure');

let totalCalculate = document.querySelector(".includes span");
let afterUserClick = document.getElementsByClassName(".down-logo i");

    let btns=document.querySelector('.Apply-btn');

let productscategory=document.querySelectorAll('.product-category span');

for (let i = 0; i < productingItem.length; i++) {
 
  productingItem[i].addEventListener("click", function(){

    let currentBtn=document.querySelectorAll('.active');
    
    currentBtn[0].classList=currentBtn[0].className.replace('active','');
    this.className += ' active';
    
    na.innerText=nam[i].innerText;
    ca.innerText=cat[i].innerText;
    rateRs.innerText = parseInt(itemPrice[i].innerText) * inputCount[i].value;
    let s = parseInt(rateRs.innerText);
    let shiftCharge = (5 / 100) * s;
    shippingRs.innerText = shiftCharge;
    let totalCount = s + shiftCharge;
    total.innerText = totalCount;
   });
}

let i=0;
function downLogo() {
 
  
  if (userClick.innerHTML== " " || i == 0)
    {
    
        dLogo.innerHTML = `
            <i onclick="downLogo()"class="fa-solid fa-chevron-down"></i> 
            `;
        userClick.innerHTML += `
                    <input type="text" placeholder="Enter Code">
                    
                    <button onclick="last()"class="Apply-btn">Apply</button>
                    
            `;
        i++;
        
       
    } 
  else 
    {
        dLogo.innerHTML = `
            <i onclick="downLogo()" class="fa-solid fa-chevron-right"></i> 
            `;
        
        userClick.innerHTML = " ";
       
    }
        
      
       
}



function last(){
  
  let coupanText=document.querySelector('.user-click input');
  let result=document.querySelector('.success-failure');
  let categ=document.querySelector('.productsCategories h3');
  let name=document.querySelector('.productsNames h3');
  if(categ.innerText=="Home Decor Items"){
         let coupanText=document.querySelector('.user-click input');
         let result=document.querySelector('.success-failure');
          if(coupanText.value==="varsha"){
                  
            result.innerText="Success";
            let total=(20/100)*parseInt(totalCalculate.innerHTML);
            let Total=parseInt(totalCalculate.innerHTML)-total;
            totalCalculate.innerHTML=Total;
          }
           userClick.innerHTML = " ";
  
  }
  else{
      result.innerText="Failure";
      userClick.innerHTML = " ";
  }
      coupanText.value=' ';
  
  
}



