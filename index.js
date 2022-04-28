

// const API = "http://localhost:3001/product"
// let name = [];

// const handleSeeProducts = () => {
//     fetch(`${API}`)
//     .then((response) => response.json())
//     .then((data) => console.log(data))

//   }

//   handleSeeProducts();
let products = {
    data: [
    {
    name: "T-shirt",
    price: "9,99 zł",
    image:"tshirt.jpg",
    status:"recommended"
    },
    {
    name: "Sweter",
    price: "59,99 zł",
    image:"sweter.jpg",
    status:"new"
    },
    {
    name: "Spodnie",
    price: "99,99 zł",
    image:"spodnie.jpg",
    status:"saleout"
    },
    {
    name: "Klapki",
    price: "29,99 zł",
    image:"klapki.jpg",
    status:"bestseller",
    },
    {
    name: "Czapka",
    price: "39,99 zł",
    image:"czapka.jpg",
    status:"promotion",
    newprice: "29,99 zł"
    },
    {
    name: "Spódnica",
    price: "89,99 zł",
    image:"spodnica.jpg",
    status:"new"
    },
    ]
}

for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("Product-card");
    card.setAttribute("value", i.status)

    let status = document.createElement("h6")
    status.classList.add("status")
    status.innerText = i.status
    

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container")

    let image = document.createElement("img")
    image.setAttribute("src", i.image);

    let name = document.createElement("h3")
    name.classList.add("name")
    name.innerText = i.name

    let line = document.createElement("div");
    line.classList.add("line")

    let price = document.createElement("h2")
    price.classList.add("price")
    price.innerText = i.price

    card.appendChild(imgContainer);
    imgContainer.appendChild(status);
    imgContainer.appendChild(image);
    card.appendChild(name)
    card.appendChild(line)

    if (i.status == "promotion") {
      let newprice = document.createElement("h2")
      newprice.classList.add("price")
      newprice.innerText = i.newprice
      card.appendChild(newprice)

      price.classList.add("newprice")
    }

    card.appendChild(price)
    document.getElementById("Products").appendChild(card)
}


function getSelectedValue () {
    let selectedValue = document.getElementById("list").value
    console.log(selectedValue)
    let card = document.querySelectorAll(".Product-card")
    console.log(card)


    for (let i of products.data) {
        if (i.status == selectedValue) {
            console.log(i.status)
        } 
    }
}
getSelectedValue();

