let list = [{url: "https://www.google.com/", title: "Google"}, {url: "https://github.com/alexleybourne", title: "Alex Leybourne"}]

chrome.storage.local.set({ "sites": list }, function(){});

let sites = ""

for(let i = 0; i < list.length; i++){ 
    console.log(list[i]);
    sites += `<div class="item">
                <p>Title: ${list[i].title}</p> 
                <p>URL: ${list[i].url.replace('https://','')}</p>
            </div>`
}

window.onload = function WindowLoad(event) {
    document.getElementById('content').innerHTML += sites
}

const test = () => {
    console.log(TEST);
}


