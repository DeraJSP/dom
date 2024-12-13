const products = [
  {
    id: 1,
    name: "Chike And The River",
    price: 19.99,
    image: "catr.png",
    src: "https://www.youtube.com/0/QJe6AApmO5E",
  },
  {
    id: 2,
    name: "Game Of Thrones",
    price: 24.99,
    image: "got.png",
    src: "https://www.youtube.com/embed/qU5OE9Ffo4I",
  },
  {
    id: 3,
    name: "Harry Potter And The Cursed Child",
    price: 19.99,
    image: "hpatcc.png",
    src: "https://www.youtube.com/embed/Lawu_5p8Kg4",
  },
  {
    id: 4,
    name: "There Was A Country",
    price: 19.99,
    image: "twac.png",
    src: "https://www.youtube.com/embed/vRwnbyQN0qs",
  },
  {
    id: 5,
    name: "Things Fall Apart",
    price: 19.99,
    image: "tfa.png",
    src: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
];

products.forEach((product) => {
  const productElement = document.createElement("div");

  const video = document.getElementById("videos-container");

  productElement.textContent = product.name;

  video.innerHTML += `
    <iframe
        width="420"
        height="315"
        src="${product.src}"
        allowfullscreen
      >
    </iframe>
  `;

  // declare productId as a block-scoped variable
  let productId = product.id;

  productElement.addEventListener("click", () => {
    // redirect to the details page with the product ID as a parameter

    window.location.href = `details.html?id=${productId}`;
  });

  productList.appendChild(productElement);
});
