console.log(window.location.toString())

const currentUrl = window.location.toString()


chrome.storage.local.get(/* String or Array */["sites"], function(items){
    console.log(items)
    console.log(items.sites)
    console.log(items.sites.length)
    for(let i = 0; i < items.sites.length; i++){ 
        console.log(items.sites[i]);
        if (items.sites[i].url.includes('*') && currentUrl.includes(items.sites[i].url.replace('*',''))) {
            addBanner(items.sites[i].title)
        }
        else if (items.sites[i].url === currentUrl){
            addBanner(items.sites[i].title)
            // chrome.runtime.sendMessage({icon1: true})
        }
    }
})


const addBanner = (title) => {
    const banner = `<div class="overlayer-banner">
                    <h1>${title}</h1>
                </div>`;
    document.body.innerHTML += banner
    document.body.classList += " page-has-overlayer-banner"
}