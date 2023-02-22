
const body = document.body;
const gridImages = document.querySelector(".imageGrid");
const product = document.querySelector(".product");

const API_LINK_PRODUCTS = "https://fakestoreapi.com/products/";
const API_LINK_PRODUCT = "https://fakestoreapi.com/products/1";
const API_LINK_CATEGORY = "https://fakestoreapi.com/products/category";
const API_LINK_ELECTRONICS = "('https://fakestoreapi.com/products/category/electronics";
const API_LINK_MEN_CLOTHING = "('https://fakestoreapi.com/products/category/men's clothing";
const API_LINK_WOMEN_CLOTHING = "('https://fakestoreapi.com/products/category/women's clothing";
const API_LINK_JEWELLERY = "('https://fakestoreapi.com/products/category/jewelery";


async function fetchData(url) {
    let res;
    let jsonData;

    try {
        res = await fetch(url);
        jsonData = await res.json();
        console.log(jsonData);

        jsonData.forEach(data => {
            
            product.innerHTML +=
                `   <div class="item">
                    <img class="imgProduct" src="${data.image}" alt="Image of a product" srcset="">
                    <p class="productName">${data.title}</p>
                    <p class="productPrice">KSH ${data.price}</p>
                </div>
            `
        });
        
    } catch (error) {
        console.log(error);
    }
}

fetchData(API_LINK_PRODUCTS);

async function fetchProduct(url) {
    let res;
    let jsonData;

    try {
        res = await fetch(url);
        jsonData = await res.json();
        console.log(jsonData);
    } catch (error) {
        console.log(error);
    }

    body.innerHTML += `
        <p>${jsonData.title}</p>
        <p>${jsonData.description}</p>
        <p>${jsonData.price}</p>
        <img src="${jsonData.image}" alt="" srcset="">
    `

}

//fetchProduct(API_LINK_PRODUCT);

async function category(url) {
    let res;
    let jsonData;

    try {
        res = await fetch(url);
        jsonData = await res.json();
        console.log(jsonData);

        
            body.innerHTML +=
            `<img src="${data}" alt="Image of a product" srcset="">
                <p>TITLE  ${data}</p>
                <p>PRICE ${data}</p>
                
            `
        
    } catch (error) {
        console.log(error);
    }
}

//category(API_LINK_CATEGORY);