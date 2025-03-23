// Create the Product Inventory Array
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Access Product Information
function logFirstProduct() {
    console.log(products[0]);
}

// Update Product Information
function updateProductName(index, newName) {
    if (index >= 0 && index < products.length) {
        products[index] = newName;
    } else {
        console.log("Invalid index");
    }
}

// Remove a Product
function removeLastProduct() {
    products.pop();
}

// Add a Product
function addProduct(product) {
    products.push(product);
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
