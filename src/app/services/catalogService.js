app.service("CatalogService", function(){

    // TODO: response API
    this.catalog = [{
        "id": 1,
        "name": "Sandwich",
        "description": "Bread with meat and vegetables",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/sandwich.png",
        "rating": 4.8,
        "price": 12
    },
    {
        "id": 2,
        "name": "Hot Milk",
        "description": "Hot Milk with less sugar",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/hot_milk.png",
        "rating": 4.9,
        "price": 20
    },
    {
        "id": 3,
        "name": "Coffe Ice Cream",
        "description": "Coffe with ice cream vanilla",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/coffe_ice_cream.png",
        "rating": 4.9,
        "price": 18
    },
    {
        "id": 4,
        "name": "Cappucino",
        "description": "Hot Cappucino",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/cappucino.png",
        "rating": 4.6,
        "price": 8
    },
    {
        "id": 5,
        "name": "Moccacinno",
        "description": "Hot Moccacino",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/moccacinno.png",
        "rating": 4.8,
        "price": 12
    },
    {
        "id": 6,
        "name": "Waffle Ice Crem",
        "description": "Wafle with Ice cream",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/waffle_ice_cream.png",
        "rating": 4.7,
        "price": 30
    },
    {
        "id": 7,
        "name": "Sandwich",
        "description": "Bread with meat and vegetables",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/sandwich.png",
        "rating": 4.8,
        "price": 12
    },
    {
        "id": 8,
        "name": "Hot Milk",
        "description": "Hot Milk with less sugar",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/hot_milk.png",
        "rating": 4.9,
        "price": 20
    },
    {
        "id": 9,
        "name": "Coffe Ice Cream",
        "description": "Coffe with ice cream vanilla",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/coffe_ice_cream.png",
        "rating": 4.9,
        "price": 18
    },
    {
        "id": 10,
        "name": "Cappucino",
        "description": "Hot Cappucino",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/cappucino.png",
        "rating": 4.6,
        "price": 8
    },
    {
        "id": 11,
        "name": "Moccacinno",
        "description": "Hot Moccacino",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/moccacinno.png",
        "rating": 4.8,
        "price": 12
    },
    {
        "id": 12,
        "name": "Waffle Ice Crem",
        "description": "Wafle with Ice cream",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/waffle_ice_cream.png",
        "rating": 4.7,
        "price": 30
    },
    {
        "id": 13,
        "name": "Sandwich",
        "description": "Bread with meat and vegetables",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/sandwich.png",
        "rating": 4.8,
        "price": 12
    },
    {
        "id": 14,
        "name": "Hot Milk",
        "description": "Hot Milk with less sugar",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/hot_milk.png",
        "rating": 4.9,
        "price": 20
    },
    {
        "id": 15,
        "name": "Coffe Ice Cream",
        "description": "Coffe with ice cream vanilla",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/coffe_ice_cream.png",
        "rating": 4.9,
        "price": 18
    },
    {
        "id": 16,
        "name": "Cappucino",
        "description": "Hot Cappucino",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/cappucino.png",
        "rating": 4.6,
        "price": 8
    },
    {
        "id": 17,
        "name": "Moccacinno",
        "description": "Hot Moccacino",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/moccacinno.png",
        "rating": 4.8,
        "price": 12
    },
    {
        "id": 18,
        "name": "Waffle Ice Crem",
        "description": "Wafle with Ice cream",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/waffle_ice_cream.png",
        "rating": 4.7,
        "price": 30
    },
    {
        "id": 19,
        "name": "Sandwich",
        "description": "Bread with meat and vegetables",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/sandwich.png",
        "rating": 4.8,
        "price": 12
    },
    {
        "id": 20,
        "name": "Hot Milk",
        "description": "Hot Milk with less sugar",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/hot_milk.png",
        "rating": 4.9,
        "price": 20
    },
    {
        "id": 21,
        "name": "Coffe Ice Cream",
        "description": "Coffe with ice cream vanilla",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/coffe_ice_cream.png",
        "rating": 4.9,
        "price": 18
    },
    {
        "id": 22,
        "name": "Cappucino",
        "description": "Hot Cappucino",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/cappucino.png",
        "rating": 4.6,
        "price": 8
    },
    {
        "id": 23,
        "name": "Moccacinno",
        "description": "Hot Moccacino",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/moccacinno.png",
        "rating": 4.8,
        "price": 12
    },
    {
        "id": 24,
        "name": "Waffle Ice Crem",
        "description": "Wafle with Ice cream",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/waffle_ice_cream.png",
        "rating": 4.7,
        "price": 30
    },
    {
        "id": 25,
        "name": "Sandwich",
        "description": "Bread with meat and vegetables",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/sandwich.png",
        "rating": 4.8,
        "price": 12
    },
    {
        "id": 26,
        "name": "Hot Milk",
        "description": "Hot Milk with less sugar",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/hot_milk.png",
        "rating": 4.9,
        "price": 20
    },
    {
        "id": 27,
        "name": "Coffe Ice Cream",
        "description": "Coffe with ice cream vanilla",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/coffe_ice_cream.png",
        "rating": 4.9,
        "price": 18
    },
    {
        "id": 28,
        "name": "Cappucino",
        "description": "Hot Cappucino",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/cappucino.png",
        "rating": 4.6,
        "price": 8
    },
    {
        "id": 29,
        "name": "Moccacinno",
        "description": "Hot Moccacino",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/moccacinno.png",
        "rating": 4.8,
        "price": 12
    },
    {
        "id": 30,
        "name": "Waffle Ice Crem",
        "description": "Wafle with Ice cream",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/waffle_ice_cream.png",
        "rating": 4.7,
        "price": 30
    },
    {
        "id": 31,
        "name": "Sandwich",
        "description": "Bread with meat and vegetables",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/sandwich.png",
        "rating": 4.8,
        "price": 12
    },
    {
        "id": 32,
        "name": "Hot Milk",
        "description": "Hot Milk with less sugar",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/hot_milk.png",
        "rating": 4.9,
        "price": 20
    },
    {
        "id": 33,
        "name": "Coffe Ice Cream",
        "description": "Coffe with ice cream vanilla",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/coffe_ice_cream.png",
        "rating": 4.9,
        "price": 18
    },
    {
        "id": 34,
        "name": "Cappucino",
        "description": "Hot Cappucino",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/cappucino.png",
        "rating": 4.6,
        "price": 8
    },
    {
        "id": 35,
        "name": "Moccacinno",
        "description": "Hot Moccacino",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/moccacinno.png",
        "rating": 4.8,
        "price": 12
    },
    {
        "id": 36,
        "name": "Waffle Ice Crem",
        "description": "Wafle with Ice cream",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/waffle_ice_cream.png",
        "rating": 4.7,
        "price": 30
    },
    {
        "id": 37,
        "name": "Sandwich",
        "description": "Bread with meat and vegetables",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/sandwich.png",
        "rating": 4.8,
        "price": 12
    },
    {
        "id": 38,
        "name": "Hot Milk",
        "description": "Hot Milk with less sugar",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/hot_milk.png",
        "rating": 4.9,
        "price": 20
    },
    {
        "id": 39,
        "name": "Coffe Ice Cream",
        "description": "Coffe with ice cream vanilla",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/coffe_ice_cream.png",
        "rating": 4.9,
        "price": 18
    },
    {
        "id": 40,
        "name": "Cappucino",
        "description": "Hot Cappucino",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/cappucino.png",
        "rating": 4.6,
        "price": 8
    },
    {
        "id": 41,
        "name": "Moccacinno",
        "description": "Hot Moccacino",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/moccacinno.png",
        "rating": 4.8,
        "price": 12
    },
    {
        "id": 42,
        "name": "Waffle Ice Crem",
        "description": "Wafle with Ice cream",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/waffle_ice_cream.png",
        "rating": 4.7,
        "price": 30
    },
    {
        "id": 43,
        "name": "Sandwich",
        "description": "Bread with meat and vegetables",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/sandwich.png",
        "rating": 4.8,
        "price": 12
    },
    {
        "id": 44,
        "name": "Hot Milk",
        "description": "Hot Milk with less sugar",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/hot_milk.png",
        "rating": 4.9,
        "price": 20
    },
    {
        "id": 45,
        "name": "Coffe Ice Cream",
        "description": "Coffe with ice cream vanilla",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/coffe_ice_cream.png",
        "rating": 4.9,
        "price": 18
    },
    {
        "id": 46,
        "name": "Cappucino",
        "description": "Hot Cappucino",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/cappucino.png",
        "rating": 4.6,
        "price": 8
    },
    {
        "id": 47,
        "name": "Moccacinno",
        "description": "Hot Moccacino",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/moccacinno.png",
        "rating": 4.8,
        "price": 12
    },
    {
        "id": 48,
        "name": "Waffle Ice Crem",
        "description": "Wafle with Ice cream",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/waffle_ice_cream.png",
        "rating": 4.7,
        "price": 30
    },
    {
        "id": 49,
        "name": "Sandwich",
        "description": "Bread with meat and vegetables",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/sandwich.png",
        "rating": 4.8,
        "price": 12
    },
    {
        "id": 50,
        "name": "Hot Milk",
        "description": "Hot Milk with less sugar",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/hot_milk.png",
        "rating": 4.9,
        "price": 20
    },
    {
        "id": 51,
        "name": "Coffe Ice Cream",
        "description": "Coffe with ice cream vanilla",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/coffe_ice_cream.png",
        "rating": 4.9,
        "price": 18
    },
    {
        "id": 52,
        "name": "Cappucino",
        "description": "Hot Cappucino",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/cappucino.png",
        "rating": 4.6,
        "price": 8
    },
    {
        "id": 53,
        "name": "Moccacinno",
        "description": "Hot Moccacino",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/moccacinno.png",
        "rating": 4.8,
        "price": 12
    },
    {
        "id": 54,
        "name": "Waffle Ice Crem",
        "description": "Wafle with Ice cream",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/waffle_ice_cream.png",
        "rating": 4.7,
        "price": 30
    },
    {
        "id": 55,
        "name": "Sandwich",
        "description": "Bread with meat and vegetables",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/sandwich.png",
        "rating": 4.8,
        "price": 12
    },
    {
        "id": 56,
        "name": "Hot Milk",
        "description": "Hot Milk with less sugar",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/hot_milk.png",
        "rating": 4.9,
        "price": 20
    },
    {
        "id": 57,
        "name": "Coffe Ice Cream",
        "description": "Coffe with ice cream vanilla",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/coffe_ice_cream.png",
        "rating": 4.9,
        "price": 18
    },
    {
        "id": 58,
        "name": "Cappucino",
        "description": "Hot Cappucino",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/cappucino.png",
        "rating": 4.6,
        "price": 8
    },
    {
        "id": 59,
        "name": "Moccacinno",
        "description": "Hot Moccacino",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/moccacinno.png",
        "rating": 4.8,
        "price": 12
    },
    {
        "id": 60,
        "name": "Waffle Ice Crem",
        "description": "Wafle with Ice cream",
        "imagen": "https://johdasgran.github.io/cafe_street-landing/assets/images/products/waffle_ice_cream.png",
        "rating": 4.7,
        "price": 30
    }];


    this.getCatalog = function() {
        // console.log(this.catalog)
        return this.catalog;
    }

    this.getProductById = function(id) {
        const product = this.catalog.find((product) => product.id == id);
        console.log(product);
        return product;
    }


    



})