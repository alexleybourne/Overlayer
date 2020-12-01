
console.log('LOADED THIS SHIz')
console.log(window.location.toString())

const currentUrl = window.location.toString()

chrome.storage.local.get(/* String or Array */["sites"], function(items){
    console.log(items)
    console.log(items.sites)
    console.log(items.sites.length)
    for(let i = 0; i < items.sites.length; i++){ 
        console.log(items.sites[i]);
        if (items.sites[i].url === currentUrl){
            console.log('THIS SITE IS LISTED');
            addBanner(items.sites[i].title)
        }
    }
})


const addBanner = (title) => {
    const banner = `<div class="banner showBanner">
                    <h1>${title}</h1>
                </div>`;
    document.body.innerHTML += banner
    document.body.classList += " pageHasBanner"
}