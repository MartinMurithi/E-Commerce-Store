window.addEventListener("load", fetchProducts);

let cartArr = [];

const body = document.body;
const gridImages = document.querySelector(".imageGrid");
const product = document.querySelector(".product");
const form = document.querySelector(".form");

const topProductsBtn = document.querySelector(".topProducts");
const electronicsBtn = document.querySelector(".electronicsBtn");
const menBtn = document.querySelector(".menBtn");
const womenBtn = document.querySelector(".womenBtn");
const jewelleryBtn = document.querySelector(".jewelleryBtn");

const cartBtn = document.getElementById("cartBtn");
const cartDiv = document.querySelector(".cartDiv");

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

let res;
let jsonData;
let allData; 

async function fetchProducts(url) {
  const productsUrl = "https://fakestoreapi.com/products/";

  try {
    res = await fetch(productsUrl);
    jsonData = await res.json();
    allData = localStorage.setItem("data", JSON.stringify(jsonData));
    // let x = localStorage.getItem(JSON.parse("data"));
    // console.log(x);


    product.innerHTML = "";
    cartDiv.style.display = "none";
    formDiv.style.display = "none";
    jsonData.forEach((data) => {
      product.innerHTML += `   
        <div class="item">
          <img class="imgProduct" src="${data.image}" alt="Image of a product" srcset="">
          <p class="productName">${data.title}</p>
          <p class="productPrice">$ ${data.price}</p>
                    
          <div class="addViewBtns">

                       <button class="addCartBtn" data-id= ${data.id}>Add To Cart</button>

          </div>
        </div>
            `;
    });
  } catch (error) {
    console.log(error);
  }


  let cart = document.querySelectorAll(".addCartBtn");
  cart.forEach((element) => {
    element.addEventListener("click", () => {
      let cartId = element.getAttribute("data-id");
      console.log(cartId);
      jsonData.forEach((element) => {
        if (cartId == element.id) {
          cartArr.push(element);
          console.log(cartArr);
        }
      });
    });
  });
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
    cartDiv.style.display = "none";
    formDiv.style.display = "none";
    jsonData.forEach((data) => {
      product.innerHTML += `   <div class="item">
                    <img class="imgProduct" src="${data.image}" alt="Image of a product" srcset="">
                    <p class="productName">${data.title}</p>
                    <p class="productPrice">$ ${data.price}</p>


                    <div class="addViewBtns">

                      <button class="addCartBtn" data-id= ${data.id}>Add To Cart</button>
                    </div>
                </div>
            `;
    });
  } catch (error) {
    console.log(error);
  }
  let cart = document.querySelectorAll(".addCartBtn");
  cart.forEach((element) => {
    element.addEventListener("click", () => {
      let cartId = element.getAttribute("data-id");
      console.log(cartId);
      jsonData.forEach((element) => {
        if (cartId == element.id) {
          cartArr.push(element);
          console.log(cartArr);
        }
      });
    });
  });
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
    cartDiv.style.display = "none";
    formDiv.style.display = "none";
    jsonData.forEach((data) => {
      product.innerHTML += `   
        <div class="item">
            <img class="imgProduct" src="${data.image}" alt="Image of a product" srcset="">
            <p class="productName">${data.title}</p>
            <p class="productPrice">$ ${data.price}</p>


            <div class="addViewBtns">
              <button class="addCartBtn" data-id= ${data.id}>Add To Cart</button>
            </div>

        </div>
            `;
    });
  } catch (error) {
    console.log(error);
  }


  let cart = document.querySelectorAll(".addCartBtn");
  cart.forEach((element) => {
    element.addEventListener("click", () => {
      let cartId = element.getAttribute("data-id");
      console.log(cartId);
      jsonData.forEach((element) => {
        if (cartId == element.id) {
          cartArr.push(element);
          console.log(cartArr);
        }
      });
    });
  });
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
    cartDiv.style.display = "none";
    formDiv.style.display = "none";
    jsonData.forEach((data) => {
      product.innerHTML += `   
        <div class="item">
            <img class="imgProduct" src="${data.image}" alt="Image of a product" srcset="">
            <p class="productName">${data.title}</p>
            <p class="productPrice">$ ${data.price}</p>


            <div class="addViewBtns">

            <button class="addCartBtn" data-id= ${data.id}>Add To Cart</button>
          </div>
        </div>
            `;
    });
  } catch (error) {
    console.log(error);
  }

  let cart = document.querySelectorAll(".addCartBtn");
  cart.forEach((element) => {
    element.addEventListener("click", () => {
      let cartId = element.getAttribute("data-id");
      console.log(cartId);
      jsonData.forEach((element) => {
        if (cartId == element.id) {
          cartArr.push(element);
          console.log(cartArr);
        }
      });
    });
  });

}

async function electronicsCategory() {
  let res;
  let jsonData;

  try {
    res = await fetch("https://fakestoreapi.com/products/category/electronics");
    jsonData = await res.json();
    console.log(jsonData);

    product.innerHTML = "";
    cartDiv.style.display = "none";
    formDiv.style.display = "none";
    jsonData.forEach((data) => {
      product.innerHTML += `   
        <div class="item">
            <img class="imgProduct" src="${data.image}" alt="Image of a product" srcset="">
            <p class="productName">${data.title}</p>
            <p class="productPrice">$ ${data.price}</p>

            <div class="addViewBtns">
            <button class="addCartBtn" data-id= ${data.id}>Add To Cart</button>
          </div>
        </div>
            `;
    });
  } catch (error) {
    console.log(error);
  }

  let cart = document.querySelectorAll(".addCartBtn");
  cart.forEach((element) => {
    element.addEventListener("click", () => {
      let cartId = element.getAttribute("data-id");
      console.log(cartId);
      jsonData.forEach((element) => {
        if (cartId == element.id) {
          cartArr.push(element);
          console.log(cartArr);
        }
      });
    });
  });
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

//fetch image from input

// submitProductBtn.addEventListener("click", () => {
//

//   //console.log(title, description, price, category, imgData);

//   fetch('https://fakestoreapi.com/products',{
//             method:"POST",
//             body:JSON.stringify(
//                 {
//                     title: title,
//                     price: price,
//                     description: description,
//                     image: imgData,
//                     category: category
//                 }
//             )
//         })
//             .then(res=>res.json())
//             .then(json=>console.log(json))
// });
const img = document.getElementById("image");
let imgData;
img.addEventListener("change", (e) => {
  let reader = new FileReader();
  reader.readAsDataURL(img.files[0]);
  console.log(img.files[0]);

  reader.onload = () => {
    //onLoad Event is fired when a file's content has been read sucessfully
    imgData = reader.result;
    console.log(imgData);
  };
});

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   // const formData = new FormData(form);
//   // console.log(formData.get('imgData'));
//   const title = document.getElementById("title").value;
//   const description = document.getElementById("description").value;
//   const price = document.getElementById("price").value;
//   const category = document.getElementById("selectCategory").value;

//   //console.log(title, description, price, category, imgData);

//   const objData = {
//     title: title,
//     desc: description,
//     price: price,
//     category: category,
//     image: imgData,
//   };

//   // console.log(objData);

//   // fetch("https://fakestoreapi.com/products", {
//   //   method: "POST",
//   //   body: JSON.stringify(objData),
//   // })
//   //   .then((res) => res.json())
//   //   .then((json) => console.log(objData));
//   // console.log(jsonData);

  
// });

function addProductToAPI(form) {

  // Extract the form data
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
  const category = document.getElementById("selectCategory").value;

  //console.log(title, description, price, category, imgData);

  const productData = {
    title: title,
    desc: description,
    price: price,
    category: category,
    image: imgData,
  }

  // Send a POST request to the API to add the new product
  fetch('https://fakestoreapi.com/products', {
    method: 'POST',
    body: JSON.stringify(productData),
    headers: {
      'Content-Type': 'application/json'
    }

  })
    
    
  .then(response => response.json())
  .then(data => {
    //fetching the updated list of products from the API
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(products => {
        // Display the updated list of products on the page
        //const productList = document.querySelector('#product-list');
        console.log(json);

        products.forEach(product => {
          //const productElement = document.createElement('div');
          product.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: ${product.price}</p>
          `;
         // productList.appendChild(productElement);
        });
      });
  })
  .catch(error => {
    console.error('Error adding product:', error);
  });
}

submitProductBtn.addEventListener('click', addProductToAPI)

cartBtn.addEventListener("click", (event) => {
  product.innerHTML = "";
  formDiv.style.display = "none";
  cartDiv.style.display = "block";
  cartDiv.style.margin = "auto";

  let items = JSON.parse(localStorage.getItem("data"));
  items.push('yeeeeey');
  allData = localStorage.setItem("data", JSON.stringify(items));


  // console.log(`YOOOOOH ${ items }`);

  cartArr.forEach((cartItem) => {

    cartDiv.innerHTML += `
      <div id="product">
        <img src=${cartItem.image} alt="" srcset="">
        <p class="cTitle">${cartItem.title}</p>
        <p class="cPrice">${cartItem.price}</p>

        <button class="removeItemBtn" data-id=${cartItem.id}>Remove</button>

      </div>

      <div class="total">
        <p class="totalPrice"></p>
      </div>
    `;
  });
  let delBtns = document.querySelectorAll(".removeItemBtn");
  //let cart = document.querySelectorAll(".addCartBtn");
  delBtns.forEach(element => {
    element.addEventListener("click", (e) => {
      console.log(456);
      e.target.parentElement.remove();
      console.log(jsonData);
      
    })

  })
});




    cartDiv.forEach((element, index) => {
      if (id == element.id) {
        cartArr.splice(index, 1);
        console.log(cartArr);
      }
    });
    console.log('jjjjjjj');
    // console.log('deleted');
  });




