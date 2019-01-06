// Write your solutio n in this file!

var customerName = "bob";
const leastFavoriteCustomer = "something"

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer () {
    bestCustomer = 'not bob'
}

function overwriteBestCustomer () {
    bestCustomer = 'maybe bob'; 
}

function changeLeastFavoriteCustomer () {
    leastFavoriteCustomer = 'something else'
    return leastFavoriteCustomer;
}


console.log(changeLeastFavoriteCustomer());