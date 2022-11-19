let products = [];//products array stores all the products of the transaction
//create the constructer ( best practice use capital letters for function)

function Product(paramProduct, paramPrice){
    this.attrProduct=paramProduct;
    this.attrPrice=paramPrice;
}
//get the values from the inputs using JS
let inputProduct = document.getElementById("txtProduct"); //the value is empty at this line
let inputPrice = document.getElementById("txtPrice");
//register function
function register(){
    
    let newProduct = new Product(inputProduct.value,inputPrice.value);
    products.push(newProduct);//add the product to the array
    display();
    clearForm();
}

//display function
function display(){
    let row="";
    //travel the products array
    for(let i=0;i<products.length;i++){
        let product=products[i];
        row+=`<tr>
        <td>${i+1}</td>
        <td>${product.attrProduct}</td>
        <td>${product.attrPrice}</td>
    </tr>`;
    }
    document.getElementById("productsTable").innerHTML=row;
    document.getElementById("productsInCart").innerHTML=products.length;
}
//create an init
function init(){
    let product1 = new Product("T-shirt", 12.5);
    products.push(product1);//adds the product to the array
    display();
}
function clearForm(){
    inputProduct.value="";
    inputPrice.value="";
}
window.onload=init;
//create initial objects