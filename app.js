window.addEventListener("load", fetchProducts);

const body = document.body;
const gridImages = document.querySelector(".imageGrid");
const product = document.querySelector(".product");
const form = document.querySelector(".form");

const topProductsBtn = document.querySelector(".topProducts");
const electronicsBtn = document.querySelector(".electronicsBtn");
const menBtn = document.querySelector(".menBtn");
const womenBtn = document.querySelector(".womenBtn");
const jewelleryBtn = document.querySelector(".jewelleryBtn");

const menDiv = document.querySelector(".menDiv");
const womenDiv = document.querySelector(".menDiv");
const electronicsDiv = document.querySelector(".menDiv");
const jewelleryDiv = document.querySelector(".menDiv");

const addProductBtn = document.querySelector(".addProductBtn");
const submitProductBtn = document.querySelector(".submitProductBtn");
const formDiv = document.querySelector(".formProduct");

const API_LINK_PRODUCT = "https://fakestoreapi.com/products/1";
const API_LINK_CATEGORY = "https://fakestoreapi.com/products/category";

//EVENT LISTENERS FOR PRODUCT CATEGORIES
topProductsBtn.addEventListener("click", fetchProducts);
jewelleryBtn.addEventListener("click", jewelleryCategory);
electronicsBtn.addEventListener("click", electronicsCategory);
womenBtn.addEventListener("click", womenCategory);
menBtn.addEventListener("click", menCategory);

async function fetchProducts(url) {
  let res;
  let jsonData;
  const productsUrl = "https://fakestoreapi.com/products/";
  try {
    res = await fetch(productsUrl);
    jsonData = await res.json();
    console.log(jsonData);

    product.innerHTML = "";
    jsonData.forEach((data) => {
      product.innerHTML += `   
        <div class="item">
          <img class="imgProduct" src="${data.image}" alt="Image of a product" srcset="">
          <p class="productName">${data.title}</p>
          <p class="productPrice">KSH ${data.price}</p>
                    
          <div class="addViewBtns">
            <button class="viewProductBtn">View Product</button>
            <button class="addCartBtn">Add To Cart</button>
          </div>
        </div>
            `;
    });
  } catch (error) {
    console.log(error);
  }
}

async function jewelleryCategory() {
  let res;
  let jsonData;
  const jewelleryLink = "https://fakestoreapi.com/products/category/jewelery";

  try {
    res = await fetch(jewelleryLink);
    jsonData = await res.json(res);
    console.log(jsonData);

    product.innerHTML = "";
    jsonData.forEach((data) => {
      product.innerHTML += `   <div class="item">
                    <img class="imgProduct" src="${data.image}" alt="Image of a product" srcset="">
                    <p class="productName">${data.title}</p>
                    <p class="productPrice">KSH ${data.price}</p>
                </div>
            `;
    });
  } catch (error) {
    console.log(error);
  }
}

async function menCategory() {
  let res;
  let jsonData;
  const menLink = "https://fakestoreapi.com/products/category/men's clothing";

  try {
    res = await fetch(menLink);
    jsonData = await res.json();
    console.log(jsonData);

    product.innerHTML = "";
    jsonData.forEach((data) => {
      product.innerHTML += `   
        <div class="item">
            <img class="imgProduct" src="${data.image}" alt="Image of a product" srcset="">
            <p class="productName">${data.title}</p>
            <p class="productPrice">KSH ${data.price}</p>
        </div>
            `;
    });
  } catch (error) {
    console.log(error);
  }
}

async function womenCategory() {
  let res;
  let jsonData;
  const womenLink =
    "https://fakestoreapi.com/products/category/women's clothing";
  try {
    res = await fetch(womenLink);
    jsonData = await res.json();
    console.log(jsonData);

    product.innerHTML = "";
    jsonData.forEach((data) => {
      product.innerHTML += `   
        <div class="item">
            <img class="imgProduct" src="${data.image}" alt="Image of a product" srcset="">
            <p class="productName">${data.title}</p>
            <p class="productPrice">KSH ${data.price}</p>
        </div>
            `;
    });
  } catch (error) {
    console.log(error);
  }
}

async function electronicsCategory() {
  let res;
  let jsonData;

  try {
    res = await fetch("https://fakestoreapi.com/products/category/electronics");
    jsonData = await res.json();
    console.log(jsonData);

    product.innerHTML = "";
    jsonData.forEach((data) => {
      product.innerHTML += `   
        <div class="item">
            <img class="imgProduct" src="${data.image}" alt="Image of a product" srcset="">
            <p class="productName">${data.title}</p>
            <p class="productPrice">KSH ${data.price}</p>
        </div>
            `;
    });
  } catch (error) {
    console.log(error);
  }
}

function toggleNavbarOnScroll() {
  let prevScrollpos = window.pageYOffset; //set it to the current vertical scroll position
  //console.log(prevScrollpos);

  window.addEventListener("scroll", () => {
    let currentScrollPos = window.pageYOffset; //store current position of the vertical scroll
    //console.log(currentScrollPos);
    let navbar = document.querySelector(".nav");
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0"; //this will show the navbar
      navbar.style.transition = ".5s all ease-in-out";
    } else {
      navbar.style.top = "-80px"; // Replace with the height of your navbar && hide the navbar
    }
    prevScrollpos = currentScrollPos;
  });
}

toggleNavbarOnScroll();

addProductBtn.addEventListener("click", () => {
  product.innerHTML = "";
  formDiv.style.display = "block";
  formDiv.style.margin = "20px auto 20px auto";
  formDiv.style.width = "30%";
});

//function to display all cart items

const cartBtn = document.getElementById("cartBtn");
cartBtn.addEventListener('click', displayCartItems)

function displayCartItems(){
  const cartDiv = document.querySelector(".cart");
  cartDiv.innerHTML= `
     <img src="" alt="" srcset="">
     <p>Title</p>
     <p>Description</p>
     <p>Price</p>
  `;



  // console.log(clickedcart);
  
}

const img = document.getElementById("image");
let imgData;
img.addEventListener("change", (e) => {
  let reader = new FileReader();
  reader.readAsDataURL(img.files[0]);
  //console.log(img.files[0]);

  reader.onload = () => {
    //onLoad Event is fired when a file's content has been read sucessfully
    imgData = reader.result;
    //console.log(imgData);
  };
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // const formData = new FormData(form);
  // console.log(formData.get('imgData'));
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
  const category = document.getElementById("selectCategory").value;

  //console.log(title, description, price, category, imgData);

  const objData = {
    title: title,
    desc: description,
    price: price,
    category: category,
    image: imgData,
  };

  console.log(objData);

  fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify(objData),
  })
    .then((res) => res.json())
    .then((json) => console.log(objData));
  console.log(jsonData);
});