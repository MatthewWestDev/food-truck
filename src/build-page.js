console.log("page build start");


export function buildPage ( img, title, text ) {
    
    const main = document.querySelector("main");

    const pageImg = document.createElement("img");
    pageImg.classList.add("full-width-img");
    pageImg.src = img;
    main.appendChild(pageImg);

    const pageTitle = document.createElement("h2");
    pageTitle.textContent = title;
    main.appendChild(pageTitle);

    const pageText = document.createElement("article");
    pageText.innerHTML = text;
    main.appendChild(pageText);

    console.log("page buid end");
};