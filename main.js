/* javascript for bun bun bakery */

/*  --------- CART --------- */

/* cart in header and add to cart */
var cartNum = 0;

function addToCart() {
    cartNum = cartNum + 1;
    document.getElementById("cartItems").innerHTML = "(" + cartNum + ")";
}

function onLoad() {
    document.getElementById("cartItems").innerHTML = "(" + cartNum + ")";
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

    /* change price based on quantity */
    document.getElementById("price").innerHTML = "price: $" + (2*quantity.id)+".00";
    
 }
