let items = [
    {
      id: 1,
      name: "Christian Louboutin Rantulow",
      Image: "https://i.postimg.cc/x1Z9ZDRk/1180255bk01-1180255bk01-main-image-ecommerce-christianlouboutin-rantulow-1180255-bk01-1-1200x1200.jpg",
      desc: "Sneakers - Grained alf leather - Black",
      price: "R 15 000.00",
    },
    {
      id: 2,
      name: "Christian Louboutin Varsimoc",
      Image: "https://i.postimg.cc/2jqj45Fs/1230964bwi3-1230964bwi3-main-image-ecommerce-christianlouboutin-varsimoc-1230964-bwi3-1-1200x1200.jpg",
      desc: "Loafers - Calf leather - Havane",
      price: "R 17 500.00",
    },
    {
      id: 3,
      name: "Christian Louboutin No Penny Spikes",
      Image: "https://i.postimg.cc/VNxStb0k/1230933bk65-1230933bk65-additional-2-ecommerce-christianlouboutin-nopennyspikes-1230933-bk65-4-1200x.jpg",
      desc: "Loafers - Calf leather - Black",
      price: "R 21 000.00",
    },
    {
      id: 4,
      name: "Christian Louboutin Louis Junior Spikes",
      Image: "https://i.postimg.cc/sDLZz8fW/3190797u829-3190797u829-main-image-ecommerce-christianlouboutin-seavaste2orlato-3190797-u829-1-1200x.jpg",
      desc: "Sneakers - Veau velours - Black",
      price: "R 12 300.00",
    },
    {
      id: 5,
      name: "Christian Louboutin Lou Pik Pik 2 Strass",
      Image: "https://i.postimg.cc/y6LDXN5B/1230174cm47-1230174cm47-main-image-ecommerce-christianlouboutin-loupikpik2strassorlato-1230174-cm47.jpg",
      desc: "High-top sneakers - Suede , jacquard César and strass - Black",
      price: "R 50 000.00",
    },
    {
        id: 6,
        name: "Christian Louboutin Louis",
        Image: "https://i.postimg.cc/c4j23QB3/3230004bk09-3230004bk09-main-image-ecommerce-christianlouboutin-louisorlato-3230004-bk09-1-1200x1200.jpg",
        desc: "High-top sneakers - Suede and coated canva Techno CL - Black",
        price: "R 10 000.00",
      },
  ];
  
  let dispProducts = document.querySelector(".christ-prod");
  items.forEach((data) => {
    dispProducts.innerHTML += `
  <div class="card cardA m-3 col-lg-4 col-md-4 col-12">
  <img src="${data.Image}" style="width:100%; height: 400px">
  <div card="inner-card why px-2">
  <h1 class="fs-6 px-2">${data.name}</h1>
  <p class="price fs-5 px-2">${data.price}</p>
  <p class="fs-6 px-2">${data.desc}</p>
  <p class="px-2"><button class="but add">ADD TO BAG</button></p>
  </div>
</div>`
  });

  let prods = [
    {
      id: 1,
      name: "Replay Field Mix Lace Up Sneaker",
      Image: "https://i.postimg.cc/pXr0Vp86/RS1-P0024-L-3161-2-scaled.jpg",
      desc: "Sneakers - Grained alf leather - Black",
      price: "R 15 000.00",
    },
    {
      id: 2,
      name: "Replay Field Jupiter Lace Up Sneaker",
      Image: "https://i.postimg.cc/hPPSDWSG/GMS1-P-000-C0020-L-057-S.jpg",
      desc: "Loafers - Calf leather - Havane",
      price: "R 3 500.00",
    },
    {
      id: 3,
      name: "Replay  ",
      Image: "https://i.postimg.cc/zBgkHc8b/GMZ4-B-000-C0002-T-003-S.jpg",
      desc: "Loafers - Calf leather - Black",
      price: "R 2 700.00",
    },
    {
      id: 4,
      name: "Replay Tennet Shoot Lace Up Sneaker",
      Image: "https://i.postimg.cc/hPTPZbPL/GMS6-I-000-C0007-T-3125-S.jpg",
      desc: "Sneakers - Veau velours - Black",
      price: "R 3 100,00",
    },
    {
      id: 5,
      name: "Replay 'Polys UP' Lace Up Sneakers",
      Image: "https://i.postimg.cc/26cvSpqN/POLARIS-UP-RZ3-P0005-L-061-B-scaled.jpg",
      desc: "High-top sneakers - Suede , jacquard César and strass - Black",
      price: "R 3 000.00",
    },
    {
        id: 6,
        name: "Replay Cross Skate Lace Up Sneaker",
        Image: "https://i.postimg.cc/ZqkF3hK8/CROSS-SKATE-RZ4-B0001-L-039-S-scaled.jpg",
        desc: "High-top sneakers - Suede and coated canva Techno CL - Black",
        price: "R 3 200.00",
      },
  ];
  
  let dispProds = document.querySelector(".replay-prod");
  prods.forEach((data) => {
    dispProds.innerHTML += `
  <div class="card cardB m-3 col-lg-4 col-md-4 col-12">
  <img src="${data.Image}" style="width:100%; height: 400px">
  <div card="inner-card why">
  <h1 class="fs-6 px-2">${data.name}</h1>
  <p class="price fs-5 px-2">${data.price}</p>
  <p class="px-2"><button class="but add">ADD TO BAG</button></p>
  </div>
</div>`
  });

  let dolceProds = [
    {
      id: 1,
      name: "Dolce & Gabbana Jacquard Portofino Sneaker",
      Image: "https://i.postimg.cc/pXSQwVdH/CS1761-AB940-80001-1.jpg",
      desc: "Sneakers - Grained alf leather - Black",
      price: "R 21 000.00",
    },
    {
      id: 2,
      name: "Dolce & Gabbana Calfskin Portofino Sneaker",
      Image: "https://i.postimg.cc/d05Vf3qR/CS1772-AH502-HWF57-1.jpg",
      desc: "Loafers - Calf leather - Havane",
      price: "R 19 500.00",
    },
    {
      id: 3,
      name: "Dolce & Gabbana Mixed Materials NS-1 Sneaker",
      Image: "https://i.postimg.cc/Gpt4dGgg/CS1810-AO844-HARZN-1.jpg",
      desc: "Loafers - Calf leather - Black",
      price: "R 12 700.00",
    },
    {
      id: 4,
      name: "Dolce & Gabbana Calfskin Loafer",
      Image: "https://i.postimg.cc/rmgZx6Nw/A50506-A1037-80999-1.jpg",
      desc: "Sneakers - Veau velours - Black",
      price: "R 15 100,00",
    },
    {
      id: 5,
      name: "Dolce & Gabbana Polished Loafer",
      Image: "https://i.postimg.cc/W1hjK615/A50411-AW593-80999-1.jpg",
      desc: "High-top sneakers - Suede , jacquard César and strass - Black",
      price: "R 21 000.00",
    },
    {
        id: 6,
        name: "Dolce & Gabbana Brushed Monk Strap Loafer",
        Image: "https://i.postimg.cc/gJ2c49QT/A10644-A1203-80999-1.jpg",
        desc: "High-top sneakers - Suede and coated canva Techno CL - Black",
        price: "R 17 200.00",
      },
  ];
  
  let dispDolce = document.querySelector(".dolce-prod");
  dolceProds.forEach((data) => {
    dispDolce.innerHTML += `
  <div class="card cardB m-3 col-lg-4 col-md-4 col-12">
  <img src="${data.Image}" style="width:100%; height: 400px">
  <div class="inner-card">
  <h1 class="fs-6">${data.name}</h1>
  <p class="price fs-5">${data.price}</p>
  <p><button class="but add">ADD TO BAG</button></p>
  </div>
</div>`
  });

  let dieselProds = [
    {
      id: 1,
      name: "Diesel Leather And Suede Sneaker",
      Image: "https://i.postimg.cc/D07Hks1j/430220-3193-022034-2-1052x.jpg",
      desc: "Sneakers - Grained alf leather - Black",
      price: "R 5 000.00",
    },
    {
      id: 2,
      name: "Diesel S-Principia Low X",
      Image: "https://i.postimg.cc/XNxDBrfW/426149-7552-941624-2-1052x.jpg",
      desc: "Loafers - Calf leather - Havane",
      price: "R 4 900.00",
    },
    {
      id: 3,
      name: "Diesel Perforated D Logo Sneaker",
      Image: "https://i.postimg.cc/QtfkCWRn/423138-5840-831324-3-1052x.jpg",
      desc: "Loafers - Calf leather - Black",
      price: "R 3 700.00",
    },
    {
      id: 4,
      name: "Diesel Full-Grain Leather Sneaker",
      Image: "https://i.postimg.cc/8kFtcZzR/430246-2812-642034-2-1052x.jpg",
      desc: "Sneakers - Veau velours - Black",
      price: "R 4 900,00",
    },
    {
      id: 5,
      name: "Diesel Mesh And Suede Sneaker",
      Image: "https://i.postimg.cc/GtYFQS46/430308-0608-803034-2-1052x.jpg",
      desc: "High-top sneakers - Suede , jacquard César and strass - Black",
      price: "R 3 599.00",
    },
    {
        id: 6,
        name: "Diesel Canvas Sneaker",
        Image: "https://i.postimg.cc/d1ZrsSjD/430241-5109-142034-2-1052x.jpg",
        desc: "High-top sneakers - Suede and coated canva Techno CL - Black",
        price: "R 4 599.00",
      },
  ];
  
  let dispDiesel = document.querySelector(".diesel-prod");
  dieselProds.forEach((data) => {
    dispDiesel.innerHTML += `
  <div class="card cardB m-3 col-lg-4 col-md-4 col-12">
  <img src="${data.Image}" style="width:100%; height: 400px">
  <div class="inner-card">
  <h1 class="fs-6">${data.name}</h1>
  <p class="price fs-5">${data.price}</p>
  <p><button class="px-3 add">ADD TO BAG</button></p>
  </div>
</div>`
  });