let list = [{url: "https://www.google.com/", title: "Google"}, {url: "https://github.com/alexleybourne", title: "Alex Leybourne"}, {url: "google*", title: "Google"}]

chrome.storage.local.set({ "sites": list }, function(){});

let sites = ""

for(let i = 0; i < list.length; i++){ 
    console.log(list[i]);
    sites += `<div class="item" >
                <p class="title" >${list[i].title}</p> 
                <p class="url" >${list[i].url.replace('https://','')}</p>
              </div>`
}

window.onload = function WindowLoad(event) {
    document.getElementById('list-content').innerHTML += sites
}

const test = () => {
    console.log(TEST);
}


