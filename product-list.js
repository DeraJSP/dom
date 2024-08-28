const products = [
    { name: "Chike And The River 1", price: 19.99, image: "catr.png"},
    { name: "Game Of Thrones", price: 24.99, image: "got.png"},
    { name: "Harry Potter And The Cursed Child", price: 19.99, image: "hpatcc.png" },
    { name: "There Was A Country", price: 19.99 , image: "tfa.png"},
    { name: "Things Fall Apart", price: 19.99, image: "twac.png" }
  ];
  
  const productList = document.getElementById("productList");
  
  products.forEach(product => {
    const listItem = document.createElement("p");
    listItem.setAttribute("class", "productText");
    const itemImage = document.createElement("img");
    itemImage.setAttribute("class", "productImage");
    const itemDiv = document.createElement('div');
    itemDiv.setAttribute("class", "itemContainer");
    

    itemImage.src = `${product.image}`;
    listItem.textContent = `${product.name} - $${product.price}`;
    itemDiv.appendChild(listItem);
    itemDiv.appendChild(itemImage);
    productList.appendChild(itemDiv);
  });