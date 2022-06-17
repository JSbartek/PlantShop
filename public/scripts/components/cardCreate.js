const plants = document.querySelector("#plants");

const flowerDatabase = [ // data from database
    { name: "Sevilla", price: "$41.99", text:"Aute adipisicing ut enim aliqua laborum. Reprehenderit reprehenderit pariatur proident excepteur et elit esse nisi deserunt.", urlImg: "https://github.com/JSbartek/inspirations/blob/FlowerShop/public/plant1.jpg?raw=true" },
    { name: "Bronisia", price: "$4.99", text:"enim veniam nostrud. enim veniam nostrud. enim veniam nostrud. enim veniam nostrud.", urlImg: "https://github.com/JSbartek/inspirations/blob/FlowerShop/public/plant2.jpg?raw=true" },
    { name: "Stella", price: "$10.99", text:" Commodo ex nostrud  Commodo ex nostrud enim veniam nostrud.", urlImg: "https://github.com/JSbartek/inspirations/blob/FlowerShop/public/plant3.jpg?raw=true" },
    { name: "Trapolia", price: "$9.99", text:"Occaecat esse aute ipsum est exercitation magna cupidatat ut Lorem cupidatat occaecat elit. Reprehenderit sunt dolore esse", urlImg: "https://github.com/JSbartek/inspirations/blob/FlowerShop/public/plant4.jpg?raw=true" },
    { name: "Vancucoria", price: "$11.99", text:"Incididunt pariatur sint voluptate duis aute aliqua in cupidatat commodo cupidatat ea", urlImg: "https://github.com/JSbartek/inspirations/blob/FlowerShop/public/plant5.jpg?raw=true" },
    { name: "Klementella", price: "$12.99", text:"Amet aliquip sunt dolor officia dolor proident. Quis incididunt cupidatat culpa sint eu id.", urlImg: "https://github.com/JSbartek/inspirations/blob/FlowerShop/public/plant6.jpg?raw=true" },
    { name: "Robusta del Vella", price: "$13.99", text:"Occaecat esse aute ipsum est exercitation magna cupidatat ut Lorem cupidatat occaecat elit. Reprehenderit sunt dolore esse reprehenderit officia eiusmod aliqua laborum aliquip. Quis non eiusmod commodo dolor mollit.", urlImg: "https://github.com/JSbartek/inspirations/blob/FlowerShop/public/plant7.jpg?raw=true" },
];

const cardComponent = () => {
    // cardComponent has creating cards in #plants but
    // has return description for current plant
    const textForCards = flowerDatabase.map((flower, index) => {
        
        let div = document.createElement('div');
        div.id = `card-${index}`;
        div.title = flower.name;
        console.log(index);
        if (index === 0) {
            // First element must be active
            div.className = "col-2 card border-0 pr-2 activeCard";
        } else {
            div.className = "col-2 card border-0 pr-2";
        }
        let img = document.createElement('img');
        img.src = flower.urlImg;
        img.alt = flower.name;
        img.className = "card-img-top img-fluid mx-auto";
        
        div.appendChild(img);
        plants.appendChild(div);

        return {
            text: flower.text.slice(0,120),
            price: flower.price
        };
    })

    return textForCards;
}

export default cardComponent;

