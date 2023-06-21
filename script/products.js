const adminProducts = JSON.parse(localStorage.getItem("adminProducts")) || [];
let items = [
    {
      id: 1,
      name: "Christian Louboutin Rantulow",
      image: "https://i.postimg.cc/ZRPBB105/1180255bk01-1180255bk01-main-image-ecommerce-christianlouboutin-rantulow-1180255-bk01-1-1200x1200.jpg",
      desc: "Sneakers - Grained alf leather - Black",
      price: "R 15 000.00",
      category: "Christian-Louboutin",
      quantity: 5,
    },
    {
      id: 2,
      name: "Christian Louboutin Varsimoc",
      image: "https://i.postimg.cc/8kMQWT1H/1230964bwi3-1230964bwi3-main-image-ecommerce-christianlouboutin-varsimoc-1230964-bwi3-1-1200x1200.jpg",
      desc: "Loafers - Calf leather - Havane",
      price: "R 17 500.00",
      category: "Christian-Louboutin",
      quantity: 5,
    },
    {
      id: 3,
      name: "Christian Louboutin No Penny Spikes",
      image: "https://i.postimg.cc/wTLyB96J/1230933bk65-1230933bk65-main-image-ecommerce-christianlouboutin-nopennyspikes-1230933-bk65-1-1200x12.jpg",
      desc: "Loafers - Calf leather - Black",
      price: "R 21 000.00",
      category: "Christian-Louboutin",
      quantity: 5,
    },
    {
      id: 4,
      name: "Christian Louboutin Louis Junior Spikes",
      image: "https://i.postimg.cc/XqzC49pf/3190797u829-3190797u829-main-image-ecommerce-christianlouboutin-seavaste2orlato-3190797-u829-1-1200x.jpg",
      desc: "Sneakers - Veau velours - Black",
      price: "R 12 300.00",
      category: "Christian-Louboutin",
      quantity: 5,
    },
    {
      id: 5,
      name: "Christian Louboutin Lou Pik Pik 2 Strass",
      image: "https://i.postimg.cc/KjHZRN7Y/1230174cm47-1230174cm47-main-image-ecommerce-christianlouboutin-loupikpik2strassorlato-1230174-cm47.jpg",
      desc: "High-top sneakers - Suede , jacquard César and strass - Black",
      price: "R 50 000.00",
      category: "Christian-Louboutin",
    },
    {
        id: 6,
        name: "Christian Louboutin Louis",
        image: "https://i.postimg.cc/PNsR3vT4/3230004bk09-3230004bk09-main-image-ecommerce-christianlouboutin-louisorlato-3230004-bk09-1-1200x1200.jpg",
        desc: "High-top sneakers - Suede and coated canva Techno CL - Black",
        price: "R 10 000.00",
        category: "Christian-Louboutin",
        quantity: 5,
      },
      {
        id: 7,
        name: "Replay Field Mix Lace Up Sneaker",
        image: "https://i.postimg.cc/5yVxv0Th/RS1-P0024-L-3161-2-scaled.jpg",
        desc: "",
        price: "R 15 000.00",
        category: "Replay",
        quantity: 5,
      },
      {
        id: 8,
        name: "Replay Field Jupiter Lace Up Sneaker",
        image: "https://i.postimg.cc/q76C01Kj/GMS1-P-000-C0020-L-057-S.jpg",
        desc: "",
        price: "R 3 500.00",
        category: "Replay",
        quantity: 5,
      },
      {
        id: 9,
        name: "Replay",
        image: "https://i.postimg.cc/LXqDck4p/CROSS-SKATE-RZ4-B0001-L-039-S-scaled.jpg",
        desc: "",
        price: "R 2 700.00",
        category: "Replay",
        quantity: 5,
      },
      {
        id: 10,
        name: "Replay Tennet Shoot Lace Up Sneaker",
        image: "https://i.postimg.cc/Bv2QMkH9/POLARIS-UP-RZ3-P0005-L-061-S-scaled.jpg",
        desc: "",
        price: "R 3 100,00",
        category: "Replay",
        quantity: 5,
      },
      {
        id: 11,
        name: "Replay 'Polys UP' Lace Up Sneakers",
        image: "https://i.postimg.cc/yNj21Tz3/GMZ4-B-000-C0002-T-003-S.jpg",
        desc: "",
        price: "R 3 000.00",
        category: "Replay",
        quantity: 5,
      },
      {
          id: 12,
          name: "Replay Cross Skate Lace Up Sneaker",
          image: "https://i.postimg.cc/dV6K3F20/GMS6-I-000-C0007-T-3125-B.jpg",
          desc: "",
          price: "R 3 200.00",
          category: "Replay",
          quantity: 5,
      },
      {
        id: 13,
        name: "Dolce & Gabbana Jacquard Portofino Sneaker",
        image: "https://i.postimg.cc/pTx8ZD9C/CS1761-AB940-80001-1.jpg",
        desc: "",
        price: "R 21 000.00",
        category: "Dolce-Gabbana",
        quantity: 5,
      },
      {
        id: 14,
        name: "Dolce & Gabbana Calfskin Portofino Sneaker",
        image: "https://i.postimg.cc/zfYRznkN/CS1772-AH502-HWF57-1.jpg",
        desc: "",
        price: "R 19 500.00",
        category: "Dolce-Gabbana",
        quantity: 5,
      },
      {
        id: 15,
        name: "Dolce & Gabbana Mixed Materials NS-1 Sneaker",
        image: "https://i.postimg.cc/Mp9K4Vrt/CS1810-AO844-HARZN-1.jpg",
        desc: "",
        price: "R 12 700.00",
        category: "Dolce-Gabbana",
        quantity: 5,
      },
      {
        id: 16,
        name: "Dolce & Gabbana Calfskin Loafer",
        image: "https://i.postimg.cc/kGq0qh2S/A50506-A1037-80999-1.jpg",
        desc: "",
        price: "R 15 100,00",
        category: "Dolce-Gabbana",
        quantity: 5,
      },
      {
        id: 17,
        name: "Dolce & Gabbana Polished Loafer",
        image: "https://i.postimg.cc/W1hjK615/A50411-AW593-80999-1.jpg",
        desc: "",
        price: "R 21 000.00",
        category: "Dolce-Gabbana",
        quantity: 5,
      },
      {
          id: 18,
          name: "Dolce & Gabbana Brushed Monk Strap Loafer",
          image: "https://i.postimg.cc/gJ2c49QT/A10644-A1203-80999-1.jpg",
          desc: "",
          price: "R 17 200.00",
          category: "Dolce-Gabbana",
          quantity: 5,
      },
      {
        id: 19,
        name: "Diesel Leather And Suede Sneaker",
        image: "https://i.postimg.cc/D07Hks1j/430220-3193-022034-2-1052x.jpg",
        desc: "",
        price: "R 5 000.00",
        category: "Diesel",
        quantity: 5,
      },
      {
        id: 20,
        name: "Diesel S-Principia Low X",
        image: "https://i.postimg.cc/XNxDBrfW/426149-7552-941624-2-1052x.jpg",
        desc: "",
        price: "R 4 900.00",
        category: "Diesel",
        quantity: 5,
      },
      {
        id: 21,
        name: "Diesel Perforated D Logo Sneaker",
        image: "https://i.postimg.cc/QtfkCWRn/423138-5840-831324-3-1052x.jpg",
        desc: "",
        price: "R 3 700.00",
        category: "Diesel",
        quantity: 5,
      },
      {
        id: 22,
        name: "Diesel Full-Grain Leather Sneaker",
        image: "https://i.postimg.cc/8kFtcZzR/430246-2812-642034-2-1052x.jpg",
        desc: "",
        price: "R 4 900,00",
        category: "Diesel",
        quantity: 5,
      },
      {
        id: 23,
        name: "Diesel S-Hua Low X",
        image: "https://i.postimg.cc/qRxDrPNd/430241-5109-142034-2-1052x.jpg",
        desc: "",
        price: "R 5 500.00",
        category: "Diesel",
        quantity: 5,
      },
      {
          id: 24,
          name: "Diesel S-Keegy Mid",
          image: "https://i.postimg.cc/8cVGXQqQ/430308-0608-803034-2-1052x.jpg",
          desc: "",
          price: "R 5 200.00",
          category: "Diesel",
          quantity: 5,
      }
  ];

  for(let i = 0; i < adminProducts.length; i++) {
    items.push(adminProducts[i]);
  }
// function to categorize products by brand
function categorizeItemsCategory(category = "") {
    const productsContainer = document.getElementById("prods");
    productsContainer.innerHTML = "";
    let categorizedItems = [];

    if ( category === "") {
      categorizedItems = items
    } else {
      categorizedItems = items.filter((item) => item.category === category);
    }
    categorizedItems.forEach(item => {
      const categorizedItem = document.createElement("div")
      categorizedItem.innerHTML = `
      <div class="card">
      <div class="image-container">
      <img src="${item.image}"></img>
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <p>${item.price}</p>
      <button class="add-to-cart-btn" data-item-id="${item.id}">Add To Bag</button>
      </div>
      </div>
      `
      productsContainer.appendChild(categorizedItem);
    });
    combineButtons();
    // displayProducts(categorizedItems);
    console.log(categorizedItems)
  }
  const buttonsToCategorize = document.querySelectorAll(".category-button");
  
  buttonsToCategorize.forEach((button) => {
    button.addEventListener("click", (event) => {
      const category = event.target.dataset.category;
      categorizeItemsCategory(category)
    });
  });
// Function to add, display, calculate sum of items in cart
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
function addToCart(selected) {
  const selectedItem = items.find((item) => item.id === selected.id);
  if (selectedItem && selectedItem.quantity > 0) {
    selectedItem.quantity--;
    cartItems.push(selectedItem);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("Item added to cart!");
    displayCartItems();
    sumOfProducts();
  }
}
function sumOfProducts () {
  const totalCartItems = document.getElementById("total");
  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalPrice += parseFloat(item.price.replace(/[^\d.]/g, ''));
  });
  totalCartItems.innerText = `Total: R ${totalPrice}`;
}
function displayCartItems() {
    const cartContent = document.querySelector("#cart-items");
    cartContent.innerHTML = "";
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      cartItems = JSON.parse(storedCartItems)
    }
    cartItems.forEach((item, index) => {
      const cartTable = document.createElement("tr");
      cartTable.innerHTML = `
      <td class="w-30">
      <p>${item.name}</p>
      </td>
      <td class="">${item.price}</td>
      <td>${item.quantity}</td>
      `
      cartContent.appendChild(cartTable)
    });
};
displayCartItems();
// function of the add to cart button
function combineButtons() {
  const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
addToCartBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const itemId = parseInt(btn.dataset.itemId);
    const selectedItem = items.find((item) => item.id === itemId);
    addToCart(selectedItem);
  });
});
}
// function to display all products when you land on the product page
function displayProducts() {
  for (let item of items) {
    let card = document.createElement("div");
    card.classList.add("card", item.category, "hide");  //"hide"
    let imgCont = document.createElement("div");
    imgCont.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", item.image);
    imgCont.appendChild(image);
    card.appendChild(imgCont);
    let name = document.createElement("h3");
    name.textContent = item.name;
    card.appendChild(name);

    let desc = document.createElement("p");
    desc.textContent = item.desc;
    card.appendChild(desc);

    let price = document.createElement("p");
    price.textContent = item.price;
    card.appendChild(price);

    let addToCartBtn = document.createElement("button");
    addToCartBtn.classList.add("add-to-cart-btn");
    addToCartBtn.setAttribute("data-item-id", item.id);
    addToCartBtn.addEventListener('click', () => {
      addToCart(item)
    });
    addToCartBtn.textContent = "Add To Bag";
    card.appendChild(addToCartBtn);

    document.getElementById("prods").appendChild(card);
  }
}
displayProducts();
function buy() {
  if (cartItems.length > 0) {
    cartItems = [];
    localStorage.removeItem("cartItems");
    displayCartItems();
    sumOfProducts();
    alert("Thank You For Your Purchase!")
  } else {
    alert("Add Items And Checkout")
  }
}


