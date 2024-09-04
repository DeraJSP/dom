const products = [
  { id: 1, name: "Chike And The River 1", price: 19.99, image: "catr.png" },
  { id: 2, name: "Game Of Thrones", price: 24.99, image: "got.png" },
  {
    id: 3,
    name: "Harry Potter And The Cursed Child",
    price: 19.99,
    image: "hpatcc.png",
  },
  { id: 4, name: "There Was A Country", price: 19.99, image: "twac.png" },
  { id: 5, name: "Things Fall Apart", price: 19.99, image: "tfa.png" },
];

const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);

const productId = urlParams.get("id");
console.log(productId);

// assuming you have a function to retrieve the product details from the array

function getProductDetails(productId) {
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  if (product) {
    // display the product details

    const productDetailsElement = document.getElementById("product-details");

    productDetailsElement.innerHTML = `
      <img src="${product.image}">
      <h2>hello</h2>

      <p>${product.price}</p>

    `;
  } else {
    // handle the case where the product is not found

    console.error(`Product with ID ${productId} not found`);
  }
}

// call the function to retrieve and display the product details

getProductDetails(productId);

// function displayProductDetails(productId) {
//     const product = products.find(product => product.id === productId);
//     if (product) {
//       // Update the DOM to show product details
//       document.getElementById("product-name").textContent = product.name;
//       document.getElementById("product-description").textContent = product.description;
//       document.getElementById("product-price").textContent
//    = `$${product.price.toFixed(2)}`;
//     } else {
//       // Handle case where product is not found
//       console.error("Product not found.");
//     }
//   }

//   // Function to display product details on a new page
// function displayProductDetails(productId) {
//     const product = products.find(product => product.id === productId);
//     if (product) {
//       // Create a new window or tab to display product details
//       const newWindow = window.open('', '_blank');
//       newWindow.document.write(`
//         <h1>${product.name}</h1>
//         <p>${product.description}</p>
//         <p>Price: $${product.price.toFixed(2)}</p>
//       `);
//     } else {
//       // Handle case where product is not found
//       console.error("Product not found.");
//     }
//   }

//   // Event listener for product clicks
//   document.addEventListener("click", (event) => {
//     if (event.target.classList.contains("product-link")) {
//       const productId = event.target.dataset.productId;
//       displayProductDetails(productId);
//     }
//   });
