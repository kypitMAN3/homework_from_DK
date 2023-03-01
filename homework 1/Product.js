class Product {
    constructor(name, price, quantity, description) {
        this.name = name
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}

function strToRule(str) {
    let arr = str.split('&');

    return arr.map(item => ({
        item: item.split('-')
    }))
}

function processRules(str) {
    let rules = strToRule(str);
    console.log(rules);
}

function findProduct(arrOfProducts, str) {

}

processRules('name-contains-fd&price-=25&quantity->5&description-ends-abc');

