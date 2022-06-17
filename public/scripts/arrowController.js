import cardComponent from "./components/cardCreate";

const plantDescriptions = cardComponent(); // first we must create cards
const plantList = document.querySelector("#plantList");
const plantText = document.querySelector("#plantText");
const plantPrice = document.querySelector("#price");
const plants = document.querySelector("#plants");
const right = document.querySelector("#right");
const left = document.querySelector("#left");
const img = document.querySelector("#img");
const allCards = Object.values(plants.children);
const CssRuleIMG = document.styleSheets[4].cssRules[6];
const titleContainer = document.querySelector("#titleContainer");

const turnX = Object.values(plants.children).map(element => {
    return element.offsetWidth;
})[0];

const pics = Object.values(plants.children).map(element => {
    return Object.values(element.children)[0].src;
});
// Objects
const actual = { // object for current marked plant here we manipulate an index
    index: 0,
    last: 0,
    get indexInc() {
        return this.index;
    },

    set indexInc(number) {
        if (this.index < this.last - 1) {
            this.index = this.index + (number);
        }
    },
    set indexDec(number) {
        if (this.index > 0) {
            this.index = this.index + (number);
        }
    },

    get indexDec() {
        return this.index;
    },
    set stop(last) {
        this.last = last;
    }
}

// functions
const changeStyle = (prop, value) => {
    CssRuleIMG.style[prop] = `url('${value}') no-repeat local center`;
    CssRuleIMG.style['background-size'] = "cover";
}

const controllRight = (e) => {
    
    plantList.scrollLeft = Number(plantList.scrollLeft) + (turnX / 2);
    actual.stop = allCards.length;
    // first image is set also when I click then will set next image
    if (actual.indexInc < pics.length) {
        
        const checkActiveCard = allCards[actual.indexInc].classList.toString().split(" ").indexOf('activeCard');

        if (checkActiveCard != -1 && actual.indexDec < allCards.length-1) {
            // here we dont want delete class activeCard for last card so this is reason for this code allCards.length-1
            allCards[actual.indexInc].classList.remove("activeCard");
        }

        try {
            titleContainer.textContent = allCards[actual.indexInc + 1].title;
            plantText.textContent = plantDescriptions[actual.indexInc + 1].text;
            plantPrice.textContent = plantDescriptions[actual.indexInc + 1].price;
            allCards[actual.indexInc + 1].classList.add("activeCard");
        } catch (err) {
            //nothing here
        }

        let source = pics[actual.indexInc].replace('http://localhost:5050/', '../');
        changeStyle('background', source);
    }
    actual.indexInc = 1;
    let source = pics[actual.indexInc].replace('http://localhost:5050/', '../');
    changeStyle('background', source);
}

const controllLeft = (e) => {

    plantList.scrollLeft = Number(plantList.scrollLeft) + (-turnX / 2);
    
    actual.stop = allCards.length;

    // first image is set also when I click then will set next image
    if (actual.indexDec < pics.length) {
        
        const checkActiveCard = allCards[actual.indexDec].classList.toString().split(" ").indexOf('activeCard');
        
        if (checkActiveCard != -1 && actual.indexDec > 0) {
            // here we dont want delete class activeCard for last card so this is reason for this code allCards.length-1

            allCards[actual.indexDec].classList.remove("activeCard");
        }
        try {
            titleContainer.textContent = allCards[actual.indexDec-1].title;
            allCards[actual.indexDec - 1].classList.add("activeCard");
            plantText.textContent = plantDescriptions[actual.indexDec - 1].text;
            plantPrice.textContent = plantDescriptions[actual.indexDec - 1].price;
        } catch (err) {
            //nothing here
        }
        let source = pics[actual.indexDec].replace('http://localhost:5050/', '../');
        changeStyle('background', source);
    }
    actual.indexDec = -1;
    let source = pics[actual.indexDec].replace('http://localhost:5050/', '../');
    changeStyle('background', source);
}


// events
window.onload = () => {
    titleContainer.textContent = allCards[0].title;
    plantText.textContent = plantDescriptions[0].text;
    plantPrice.textContent = plantDescriptions[0].price;
}

right.addEventListener('click', controllRight);
left.addEventListener('click', controllLeft);

window.addEventListener('keydown', (event) => {
    if (event.key === "ArrowRight") {
        controllRight();
    }
});
window.addEventListener('keydown', (event) => {
    if (event.key === "ArrowLeft") {
        controllLeft();
    }
});

