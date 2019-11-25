
export default function init() {
    fetch('http://127.0.0.1:3000')
        .then(response => response.json())
        .then(data => displayPosts(data))
};


function displayPosts(data) {

    data.forEach(post => {
        let item = document.createElement("li");
        let idPara = document.createElement("p");
        let titlePara = document.createElement("p");
        let bodyPara = document.createElement("p");

        idPara.textContent = `User ID: ${post.userId}`;
        idPara.style.fontWeight = "bold";
        titlePara.textContent = `Title: ${post.title}`;
        titlePara.style.fontStyle = "normal";
        bodyPara.textContent = `Post: ${post.body}`;
        bodyPara.style.fontStyle = 'italic';

        item.append(idPara);
        item.append(titlePara);
        item.append(bodyPara);
        document.querySelector("ul").append(item);
    })

}




