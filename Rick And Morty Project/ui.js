function displayCharacters(data) {
    document.querySelector(".main").innerHTML = "";

    let characters = document.createElement("div");
    characters.style.display = "flex";
    characters.style.justifyContent = "space-between";
    characters.style.flexWrap = "wrap";
    characters.style.width = "100%";

    //create menu
    let menu = document.createElement("div");
    menu.classList.add("menu");

    //create left arrow
    let left = document.createElement("div");
    left.style.width = "10%";
    left.style.display = "inlineBlock";
    left.style.backgroundColor = "#343a40";
    left.classList.add("left");
    left.textContent = "<";
    menu.append(left);

    //create pages selector
    let pagesStart = sessionStorage.pagesStart;
    let pagesEnd=parseInt(pagesStart)+5;
    let page=sessionStorage.page;
    let pagesDiv = [];

    for (let j=1,i = pagesStart; i < pagesEnd, j<6;j++, i++) {
        pagesDiv[i] = document.createElement("div");
        pagesDiv[i].style.width = "16%";
        pagesDiv[i].setAttribute("data-id", i);
        pagesDiv[i].classList.add(`page${j}`);
        pagesDiv[i].textContent = i;
        menu.append(pagesDiv[i]);
    };
    if ((page>=pagesStart)&&(page<pagesEnd)) {
    pagesDiv[page].classList.add("selected")
    };

    //create right arrow
    let right = document.createElement("div");
    right.style.width = "10%";
    right.style.display = "inlineBlock";
    right.style.backgroundColor = "#343a40";
    right.classList.add("right");
    right.textContent = ">";
    menu.append(right);

    document.querySelector(".main").append(menu);

    for (let i = 0; i < data.results.length; i++) {

        let characterContainer = document.createElement("div");
        characterContainer.classList.add("characterContainer");

        let nameContainer = document.createElement("div");
        nameContainer.classList.add("nameContainer");

        let flipBoxDiv = document.createElement("div");
        flipBoxDiv.classList.add("flip-box");

        let flipInnerDiv = document.createElement("div")
        flipInnerDiv.classList.add("flip-box-inner");

        let frontDiv = document.createElement("div");
        frontDiv.classList.add("flip-box-front");

        let infoDiv = document.createElement("div")
        infoDiv.classList.add("flip-box-back");

        let infoHTML = `<p> Status: ${data.results[i].status}</p>
                        <p> Species: ${data.results[i].species}</p>
                        <p> Type: ${data.results[i].type}</p>
                        <p> Gender: ${data.results[i].gender}</p>
                        <p> Origin: ${data.results[i].origin.name}</p>
                        <p> Location: ${data.results[i].location.name}</p>
                        <p> Created: ${data.results[i].created}</p>`;
        infoDiv.innerHTML = infoHTML;

        let image = document.createElement("img");
        image.setAttribute("src", data.results[i].image);
        image.setAttribute("display", "block");

        let name = document.createElement("p");
        name.textContent = data.results[i].name;

        let buttonLike = document.createElement("button");
        buttonLike.innerHTML = '<img src="./images/greentu.jpg" width="8px"> Like';
        buttonLike.classList.add("likeButton");
        buttonLike.classList.add("likeButton");
        buttonLike.setAttribute("value",data.results[i].id)
        if (localStorage.likeButtons.indexOf(data.results[i].id)!==-1){
                        buttonLike.style.backgroundColor="green";
            buttonLike.style.color="white";
        }

        frontDiv.append(image);

        flipInnerDiv.append(frontDiv);
        flipInnerDiv.append(infoDiv);

        flipBoxDiv.append(flipInnerDiv);

        nameContainer.append(name);
        nameContainer.append(buttonLike);



        characterContainer.append(flipBoxDiv);
        characterContainer.append(nameContainer);
        characters.append(characterContainer);
    }

    document.querySelector(".main").append(characters);
    return document.querySelectorAll(".flip-box-inner")
};

function getLikeButtons() {
    return $(".likeButton");
}

function getMenuLeft() {
    return document.querySelector(".left");
}

function getMenuRight() {
    return document.querySelector(".right");
}

function getMenuPages() {
    let first = document.querySelector(".page1")
    let second = document.querySelector(".page2")
    let third = document.querySelector(".page3")
    let fourth = document.querySelector(".page4")
    let fifth = document.querySelector(".page5")
    return {
        first,
        second,
        third,
        fourth,
        fifth
    }
};

export {
    displayCharacters,
    getMenuPages,
    getMenuLeft,
    getMenuRight,
    getLikeButtons
}