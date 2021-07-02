"use strict";

// shortcut variable names
let form = document.querySelector("form");
let select = document.querySelector("select");
let span = document.querySelector("span");
let purse = document.querySelector("section");
let balance = 0;

// on form submission
form.addEventListener("submit", (event) => {
  // prevent refresh
  event.preventDefault();

  // get form data
  let coinQuantity = +(new FormData(form).get("coinQuantity"));
  let coinValue = +(new FormData(form).get("coinName"));
  let coinName = select.selectedOptions[0].innerText;

  // print the data
  console.log("quantity:", coinQuantity);
  console.log("coin value:", coinValue);
  console.log("coin name:", coinName);


  // add coin to html
  for (let i = 0; i < coinQuantity; i++) {
      document.querySelector("section").innerHTML += `<div class="coin ${coinName}" value="${coinValue}"></div>`;
  }

  // calculate balance
  balance += coinQuantity * coinValue;
  console.log("balance:", balance);

  // update the html to reflect our balance
  span.innerText = balance;

});


// when you click a coin
purse.addEventListener("click", (event)=>{
    // if we click a coin
    if (event.target.localName === "div") {
        // remove that coin
        event.target.remove();
        // deduct balance
        balance -= +(event.target.attributes.value.value);
        console.log("new balance:", balance);
        // update the html to reflect new balance
        span.innerText = balance;



    }
    

})