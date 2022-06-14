var alphabet = [
    ["A", "#link-A"], 
    ["B", "#link-B"],  
    ["C", "#link-C"],
    ["D", "#link-D"],
    ["E", "#link-E"],
    ["F", "#link-F"],
    ["G", "#link-G"],
    ["H", "#link-H"],
    ["I", "#link-I"],
    ["J", "#link-J"],
    ["K", "#link-K"],
    ["L", "#link-L"],
    ["M", "#link-M"],
    ["N", "#link-N"],
    ["O", "#link-O"],
    ["P", "#link-P"],
    ["Q", "#link-Q"],
    ["R", "#link-R"],
    ["S", "#link-S"],
    ["T", "#link-T"],
    ["U", "#link-U"],
    ["V", "#link-V"],
    ["W", "#link-W"],
    ["X", "#link-X"],
    ["Y", "#link-Y"],
    ["Z", "#link-Z"]
];

const anime_list =  document.querySelector(".anime-list");

const alphabet_list = anime_list.querySelector(".alphabet-list");

const list = alphabet_list.querySelector(".list-link");


alphabet.map(element => {
    const listClone = list.cloneNode(true)
    listClone.setAttribute("class", "list-link");
    const linkClone = listClone.querySelector(".link")
    linkClone.setAttribute("class", "link");
    linkClone.setAttribute("href", element[1]);
    linkClone.innerHTML = element[0];
    linkClone.addEventListener("click", () => { 
        const actual_active = document.querySelectorAll(".list-link.active");

        actual_active.forEach(element => {
            element.classList.toggle("active");
        })
        
        linkClone.parentNode.classList.toggle("active");
    });

    alphabet_list.appendChild(listClone);
});


const get_list = alphabet_list.querySelector(".list-link");
const get_link = get_list.querySelectorAll("link");

console.log(get_link);

/*get_link.map(

    
    element => { console.log(element);
        element.addEventListener("click", () => {
        
       
        
    });
});*/