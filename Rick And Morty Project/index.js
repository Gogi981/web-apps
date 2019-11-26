import * as data from "./data.js";
import * as ui from "././ui.js";

function flip() {
  this.classList.toggle("flip");
};

function init() {
  sessionStorage.setItem("pagesStart", "1");
  sessionStorage.setItem("page", "1");
  localStorage.likeButtons=[];
  displayCharacters()
};

function displayCharacters(page = 1) {
  data.fetchAllCharacters(page)
    .then(result => ui.displayCharacters(result))
    .then(result => {
      for (let i = 0; i < result.length; i++) {
        result[i].addEventListener("click", flip);
      }
    })
    .then(setPageSelectionEventListeners)
    .then(setLikeButtonListener);
};

function setLikeButtonListener() {
  $(ui.getLikeButtons()).on("click", (e) => {
      let val = e.target.value;
      let activeButtons = localStorage.likeButtons;
      let activeArray = activeButtons.split(',');
      let index = activeArray.indexOf(val);
      if (index === -1) {
        activeArray.push(val);
      } else {
        activeArray.splice(index,1);
      }
      localStorage.likeButtons = activeArray;
      let page = sessionStorage.page;
      displayCharacters(page);
    })
  }

function setPageSelectionEventListeners() {
  ui.getMenuPages().first.addEventListener("click", selectPage);
  ui.getMenuPages().second.addEventListener("click", selectPage);
  ui.getMenuPages().third.addEventListener("click", selectPage);
  ui.getMenuPages().fourth.addEventListener("click", selectPage);
  ui.getMenuPages().fifth.addEventListener("click", selectPage);
  ui.getMenuLeft().addEventListener("click", moveLeft);
  ui.getMenuRight().addEventListener("click", moveRight);
};

function selectPage() {
  let page = this.getAttribute("data-id");
  sessionStorage.page = page;
  displayCharacters(page);
}

function moveLeft() {
  let start = sessionStorage.pagesStart;
  start = parseInt(start);
  if (start > 1) {
    start = start - 5;
    console.log(start);
    sessionStorage.pagesStart = start + "";
  };

  let page = sessionStorage.page;
  displayCharacters(page);
};

function moveRight() {
  let start = sessionStorage.pagesStart;
  start = parseInt(start);

  if (start < 30) {
    start = start + 5;
    console.log(start);
    sessionStorage.pagesStart = start + "";
  };

  let page = sessionStorage.page;
  displayCharacters(page);
};

export {
  init
};