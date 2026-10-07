const products = [
    { id: "P01", name: "Notebook", price: 3500, stock: 10 },
    { id: "P02", name: "Pen", price: 500, stock: 25 },
    { id: "P03", name: "Folder", price: 1200, stock: 0 },
    { id: "P04", name: "Marker", price: 1500, stock: 4 }
];



let total = 0;

for (const product of products) {
    if (product.stock > 0) {
        total += product.price * product.stock;
    }
}

console.log("Task 1");
console.log("Inventory value:", total, "RWF");


// Calculate a purchase total


function calculateTotal(quantity, unitPrice) {

    // Check quantity
    if (
        typeof quantity !== "number" ||
        !Number.isInteger(quantity) ||
        quantity <= 0
    ) {
        return null;
    }

    // Check unit price
    if (
        typeof unitPrice !== "number" ||
        !Number.isInteger(unitPrice) ||
        unitPrice < 0
    ) {
        return null;
    }

    // Calculate the total
    return quantity * unitPrice;
}

// Required demonstrations

console.log("Task 2");

console.log(
    "3 items at 3500:",
    calculateTotal(3, 3500)
);

console.log(
    "1 item at 0:",
    calculateTotal(1, 0)
);

console.log(
    "Quantity 0:",
    calculateTotal(0, 500)
);

console.log(
    "Quantity 2.5:",
    calculateTotal(2.5, 500)
);

console.log(
    "Numeric string:",
    calculateTotal("3", 500)
);

console.log(
    "Negative price:",
    calculateTotal(2, -500)
);



// Process the product collection



// Find a product

function findProduct(productList, productId) {

    const product = productList.find(
        (item) => item.id === productId
    );

    if (product) {
        return product;
    }

    return null;
}


// Calculate inventory value

function calculateInventoryValue(productList) {

    let value = 0;

    for (const product of productList) {
        value += product.price * product.stock;
    }

    return value;
}


// find products below the stock threshold

function getLowStockProducts(productList, threshold) {

    return productList.filter(
        (product) => product.stock < threshold
    );
};

console.log("Task 3");

console.log(
    "Find P02:",
    findProduct(products, "P02")
);

console.log(
    "Find P99:",
    findProduct(products, "P99")
);

console.log(
    "Inventory value:",
    calculateInventoryValue(products)
);

console.log(
    "Products below stock 5:",
    getLowStockProducts(products, 5)
);


// we test functions with an empty array

const emptyProducts = [];

console.log(
    "Find product in empty array:",
    findProduct(emptyProducts, "P01")
);

console.log(
    "Inventory value of empty array:",
    calculateInventoryValue(emptyProducts)
);

console.log(
    "Low stock products in empty array:",
    getLowStockProducts(emptyProducts, 5)
);




const saleProducts = [
    { id: "P01", name: "Notebook", price: 3500, stock: 10 },
    { id: "P02", name: "Pen", price: 500, stock: 25 },
    { id: "P03", name: "Folder", price: 1200, stock: 0 },
    { id: "P04", name: "Marker", price: 1500, stock: 4 }
];


function sellProduct(productList, productId, quantity) {

    // Find the product
    const product = productList.find(
        (item) => item.id === productId
    );
    if (!product) {
        return null;
    }

    // Check if number is a positive whole number
    if (
        typeof quantity !== "number" ||
        !Number.isInteger(quantity) ||
        quantity <= 0
    ) {
        return null;
    }

    // Check if there is enough stock
    if (product.stock < quantity) {
        return null;
    }

    // Reduce the stock
    product.stock -= quantity;

    return product.price * quantity;
}



// Successful sale


console.log("Task 4 - Successful Sale");

const productBeforeSale = findProduct(
    saleProducts,
    "P01"
);

console.log(
    "Stock before:",
    productBeforeSale.stock
);

const successfulSale = sellProduct(
    saleProducts,
    "P01",
    2
);

console.log(
    "Sale result:",
    successfulSale
);

console.log(
    "Stock after:",
    productBeforeSale.stock
);



// Rejected sale


console.log("Task 4 - Rejected Sale");

const productRejected = findProduct(
    saleProducts,
    "P04"
);

console.log(
    "Stock before:",
    productRejected.stock
);

const rejectedSale = sellProduct(
    saleProducts,
    "P04",
    5
);

console.log(
    "Sale result:",
    rejectedSale
);

console.log(
    "Stock after:",
    productRejected.stock
);


//  Normal case

const test1 = calculateTotal(3, 3500);

console.log(
    "Test 1:",
    test1,
    "Expected: 10500",
    test1 === 10500 ? "PASS" : "FAIL"
);


// Boundary case

const test2 = calculateTotal(1, 0);

console.log(
    "Test 2:",
    test2,
    "Expected: 0",
    test2 === 0 ? "PASS" : "FAIL"
);


// Invalid input

const test3 = calculateTotal(0, 500);

console.log(
    "Test 3:",
    test3,
    "Expected: null",
    test3 === null ? "PASS" : "FAIL"
);


// Invalid input

const test4 = calculateTotal("3", 500);

console.log(
    "Test 4:",
    test4,
    "Expected: null",
    test4 === null ? "PASS" : "FAIL"
);


// Return products where stock is equal to or below



function getLowStockProductsEqualOrBelow(productList, threshold) {

    return productList.filter(
        (product) => product.stock <= threshold
    );
}


console.log(
    "Products with stock equal to or below 4:",
    getLowStockProductsEqualOrBelow(products, 4)
);
