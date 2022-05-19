

const API = "http://localhost:3001/product"

const handleSeeProducts = () => {
    fetch(`${API}`)
    .then(response => response.json())
    .then(response => {console.log(response)
    
        product = response
        console.log(product)

        for ( i=0; i < product.length; i++) {
            
            let card = document.createElement("div");
            card.classList.add("Product-card");
            card.setAttribute("data-filter", product[i].status)
            
            let status = document.createElement("h6")
            status.classList.add("status")
            status.innerText = product[i].status
            
            let imgContainer = document.createElement("div");
            imgContainer.classList.add("img-container")
            
            let image = document.createElement("img")
            image.setAttribute("src", product[i].image);
            
            let name = document.createElement("h3")
            name.classList.add("name")
            name.innerText = product[i].name
            
            let line = document.createElement("div");
            line.classList.add("line")
            
            let price = document.createElement("h2")
            price.classList.add("price")
            price.innerText = product[i].price
            
            card.appendChild(imgContainer);
            imgContainer.appendChild(status);
            imgContainer.appendChild(image);
            card.appendChild(name)
            card.appendChild(line)

            
            console.log(product[i].name)
            console.log(product[i].price)
            console.log(product[i].image)
            console.log(product[i].status)

            if (product[i].status == "promotion") {
                let newprice = document.createElement("h2")
                newprice.classList.add("price")
                newprice.innerText = product[i].newprice
                card.appendChild(newprice)
                price.classList.add("newprice")
                }
            
            card.appendChild(price)
            document.getElementById("Products").appendChild(card)
             
        }

        
})


}

handleSeeProducts();


function getSelectedValue () {
    let selectedValue = document.getElementById("list").value
    console.log(selectedValue)
    let product = document.querySelectorAll(".Product-card");
    console.log(product)

    for (let i=0; i<product.length; i++) {
        product[i].classList.remove("active")
        product[i].classList.add("hide")

        if(product[i].getAttribute("data-filter") == selectedValue || selectedValue == "all") {
            product[i].classList.remove("hide")
            product[i].classList.add("active")
        }
    }
    // let card = document.getElementsByClassName(".Product-card")
    // console.log(card)
    // let all = document.querySelectorAll("Product-card")
    // let idnew = document.getElementById("new")
    // console.log(idnew)
    // let idrec = document.getElementById("recommended")
    // let so = document.getElementById("saleout")
    // let best = document.getElementById("bestseller")
    // let prom = document.getElementById("promotion")

    // if (selectedValue == "bestseller") {
    //     all.classList.toggle("hide")
    //     idrec.classList.toggle("hide")
    //     so.classList.toggle("hide")
    //     prom.classList.toggle("hide")
    //     idnew.classList.toggle("hide")
    // } else if (selectedValue == "new") {
    //     idrec.classList.toggle("hide")
    //     so.classList.toggle("hide")
    //     best.classList.toggle("hide")
    //     prom.classList.toggle("hide")
    // } else if (selectedValue == "recommended") {
    //     so.classList.toggle("hide")
    //     best.classList.toggle("hide")
    //     prom.classList.toggle("hide")
    //     idnew.classList.toggle("hide")
    // } else if (selectedValue == "saleout") {
    //     idrec.classList.toggle("hide")
    //     best.classList.toggle("hide")
    //     prom.classList.toggle("hide")
    //     idnew.classList.toggle("hide")
    // }else if (selectedValue == "promotion") {
    //     idrec.classList.toggle("hide")
    //     best.classList.toggle("hide")
    //     so.classList.toggle("hide")
    //     idnew.classList.toggle("hide")
    // }


    // for (i=0; i < product.length; i++) {
    //     if (product[i].status == selectedValue) {
    //         console.log(product[i].status)
    //         let card = document.getElementsByClassName("Product-card")
    //         this.card.classList.toggle("hide")
    //         console.log(card)
            
    //         //tutaj chciałam dodać atrybut disabled lub jakąś hide/active
    //         //ale coś mi nie wychodziło
    //     } 
    // }
}
getSelectedValue();

