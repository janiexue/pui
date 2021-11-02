/* javascript for bun bun bakery */


/* setting up initial values of cartNum, all items inCart, id, flavor, glaze, and quantity */
var cartNum = 0;
var cartStatus = "off";

var inCart = new Map();
curCart = JSON.parse(sessionStorage.getItem("inCart"));
if (curCart != null) {
    inCart = curCart
}

var curId = JSON.parse(sessionStorage.getItem("curId"));
if (curId == null) {
    curId = 0;
 }

var curFlavor = "";
var curGlaze = "";
var curQuantity = "";


/*  --------- ON LOAD --------- */

function onLoad() {

    // update cart number //
    if (sessionStorage.getItem("cartNum") != null) {
        cartNum = JSON.parse(sessionStorage.getItem("cartNum"));
        document.getElementById("cartItems").innerHTML = "(" + cartNum + ")";
        cartStatus = "on";
    }

    if (cartStatus == "off") {
        document.getElementById("cartPage").innerHTML += `
        <div class="inCart" id="emptyCart"> 
        <h2> unfortunately, your cart is empty  </h2>
        </div>
        `
    }

        for(let item of Object.values(inCart)) {

            document.getElementById("cartPage").innerHTML += `
            <div class="inCart" id="${item.id}">
                <img class="leftAlign cartPic" src="${item.image}"></img>
                <div class="leftAlign cartText">
                <h3> ${item.flavor} </h3>
                <p> glaze: ${item.glaze}</p>
                <p> quantity: ${item.quantity}</p>
                </div>
    
                <div class="rightAlign cartText">
                    <h3> ${item.subtotal} </h3>
                    <br></br>
                    <p id="remove" onclick="removeItem(${item.id}) "> remove </p>
                </div>
                <img src="images/line.png"> </img>
            </div> `;
    
        }

     
    // update cart page with each line item
    

    // total up cart price
    var totalCart = document.getElementById("totalCart");
    var subtotal = 0;
    for (let item of Object.values(inCart)) {
        subtotal += item.quantity*2;
    }
    totalCart.innerHTML= "total: $" + subtotal + ".00";
}


/*  --------- CART --------- */


class cartItem {
    constructor(flavor, glaze, quantity, id) {
      this.glaze = glaze;
      this.quantity = quantity;
      this.id = id;
      this.subtotal = "$" + 2*quantity + ".00"

      switch(flavor) {
        case "og":
            this.flavor = 'original bun';
            this.image = 'images/bunog-mini.png';    
            break;

        case "gf":
            this.flavor = 'gluten-free bun';
            this.image = 'images/bungf-mini.png';    
            break;
        
        case "bb":
            this.flavor = 'blackberry bun';
            this.image = 'images/bunbb-mini.png';    
            break;

        case "ps":
            this.flavor = 'pumpkin spice bun';
            this.image = 'images/bunps-mini.png';    
            break;

        case "wal":
            this.flavor = 'walnut bun';
            this.image = 'images/bunwal-mini.png';    
            break;

        case "cp":
            this.flavor = 'caramel pecan bun';
            this.image = 'images/buncp-mini.png';    
            break;
    }
    }
}


/* adding the new item to cart and updating number in cart, on button click */
function addToCart() {
    /* add to cart number */
    cartNum = cartNum + 1
    document.getElementById("cartItems").innerHTML = "(" + cartNum + ")";
    sessionStorage.setItem("cartNum", JSON.stringify(cartNum));

    var flavor = document.getElementsByClassName("flv selected")[0];
    sessionStorage.setItem("curFlavor", JSON.stringify(flavor.id));
    var curFlavor = JSON.parse(sessionStorage.getItem("curFlavor"));

    var glaze = document.getElementsByClassName("glz selected")[0];
    sessionStorage.setItem("curGlaze", JSON.stringify(glaze.id));
    var curGlaze = JSON.parse(sessionStorage.getItem("curGlaze"));

    var quantity = document.getElementsByClassName("qty selected")[0];
    sessionStorage.setItem("curQuantity", JSON.stringify(quantity.id));
    var curQuantity = JSON.parse(sessionStorage.getItem("curQuantity"));
    
    /* add item to cart page */
    var newItem = new cartItem(curFlavor, curGlaze, curQuantity, curId);
    inCart[curId] = newItem;
    curId = curId + 1;

    sessionStorage.setItem("curId", JSON.stringify(curId));
    sessionStorage.setItem("inCart", JSON.stringify(inCart));
}



function removeItem(itemId) {
    // remove cartItem from page
    let cartItem = document.getElementById(itemId);
    cartItem.remove();

    // delete from cartItem map
    delete inCart[itemId]
    sessionStorage.setItem("inCart", JSON.stringify(inCart));

    // subtract one from cartNum and update number next to cart
    cartNum = cartNum - 1 
    document.getElementById("cartItems").innerHTML = "(" + cartNum + ")";
    sessionStorage.setItem("cartNum", JSON.stringify(cartNum));

    // update total cart price
    var totalCart = document.getElementById("totalCart");
    var subtotal = 0;
    for (let item of Object.values(inCart)) {
        subtotal += item.quantity * 2;
    }
    totalCart.innerHTML= "total: $" + subtotal + ".00";

    // changing cart status
    if (cartNum == 0) {
        cartStatus = "off";
        document.getElementById("cartPage").innerHTML += `
        <div class="inCart" id="emptyCart"> 
        <h2> unfortunately, your cart is empty  </h2>
        </div> `
    }
  }




/* --------- PROD DESCRIPTION PAGE --------- */

/* selecting bun flavor */

function selectFlv() {
    let x = document.getElementsByClassName("flv selected");
    function removeClasses() {
     for (var i = 0; i < x.length; i++) {
       x[i].classList.remove('selected')
     }
   }
    removeClasses()
    event.target.classList.toggle("selected");
 
    var flavor = document.getElementsByClassName("flv selected")[0];
    sessionStorage.setItem("curFlavor", JSON.stringify(flavor.id));


    switch(flavor.id) {
        case "og":
            document.getElementById("pimg").src = 'images/bunog-full.png';
            document.getElementById("ptitle").innerHTML = "original bun";
            document.getElementById("pdescription").innerHTML = "Our claim to fame, the star of the show, the classic that never gets old ... say hello to the OG.";
            break;

        case "gf":
            document.getElementById("pimg").src = 'images/bungf-full.png';
            document.getElementById("ptitle").innerHTML = "gluten-free bun";
            document.getElementById("pdescription").innerHTML = "The sibling of our original cinnamon bun, in gluten-free style.";
            break;
        
        case "bb":
            document.getElementById("pimg").src = 'images/bunbb-full.png';
            document.getElementById("ptitle").innerHTML = "blackberry bun";
            document.getElementById("pdescription").innerHTML = "A delicous, blackberry-infused cinnamon roll. Filled with organic jam from local jam-makers.";
            break;

        case "ps":
            document.getElementById("pimg").src = 'images/bunps-full.png';
            document.getElementById("ptitle").innerHTML = "pumpkin spice bun";
            document.getElementById("pdescription").innerHTML = "Your fall-favorite is back -- just in time to pair with your lattes.";
            break;
        
        case "wal":
            document.getElementById("pimg").src = 'images/bunwal-full.png';
            document.getElementById("ptitle").innerHTML = "walnut bun";
            document.getElementById("pdescription").innerHTML = "A light, flakey bun with the perfect sprinkling of freshly-ground walnuts.";
            break;

        case "cp":
            document.getElementById("pimg").src = 'images/buncp-full.png';
            document.getElementById("ptitle").innerHTML = "caramel pecan bun";
            document.getElementById("pdescription").innerHTML = "This is at least ten-times better than the pie version, we swear.";
            break;
    }
   
 }


/* selecting glaze */
function selectGlaze() {
   let x = document.getElementsByClassName("glz selected");
   function removeClasses() {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove('selected')
    }
  }
   removeClasses()
   event.target.classList.toggle("selected");

   var glaze = document.getElementsByClassName("glz selected")[0];
   sessionStorage.setItem("curGlaze", JSON.stringify(glaze.id));
}

/* selecting quantity */
function selectQty() {
    let x = document.getElementsByClassName("qty selected");
    function removeClasses() {
     for (var i = 0; i < x.length; i++) {
       x[i].classList.remove('selected')
     }
   }
    removeClasses()
    event.target.classList.toggle("selected");

    var quantity = document.getElementsByClassName("qty selected")[0];
    sessionStorage.setItem("curQuantity", JSON.stringify(quantity.id));

    /* change price based on quantity */
    document.getElementById("price").innerHTML = "price: $" + (2*quantity.id)+".00";
    
 }



