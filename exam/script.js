//write a function that gathers data of product and creates his object,pushes it into a list
let productList = [];

const createProduct = ()=>{
    let product = new Object();
    product.productName = document.getElementById("productName").value;
    product.productPrice = document.getElementById("productPrice").value;
    product.catName = document.getElementById("catName").value;
    product.productPic = document.getElementById("productPic").value;
    productList.push(product);
}
// after i created object of product in my list i need to create table cell for it
const createTable = ()=>{
    result = `<tr><th>Product Name</th>
    <th>Product Price</th>
    <th>Category</th>
    <th>Picture of your product</th>
    <th>Actions</th>
    </tr>`;
    for(let index = 0; index < productList.length; index++){
        result += `<tr>
        <td>${productList[index].productName}</td>
        <td>${productList[index].productPrice}</td>
        <td>${productList[index].catName}</td>
        <td><img src="${productList[index].productPic}"/></td>
        <td><input type="button" value="clear" onclick="removeProduct(this)"/></td>
        </tr>`
    }
    document.getElementById("myCart").innerHTML = result;
}
//After i submit the form input fields should be empty
const resetForm = ()=>{
    document.getElementById("myForm").reset();
}
const addProduct = ()=>{
    createProduct();
    createTable();
    resetForm();
}
// remove item from product cart
const removeProduct = (row)=>{
    var i = row.parentNode.parentNode.rowIndex;
    console.log(i);
    document.getElementById("myCart").deleteRow(i);
    productList = productList.splice(i, 1);
    
}
