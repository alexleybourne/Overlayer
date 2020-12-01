
console.log('LOADED THIS SHIz')
console.log(window.location.toString())

const currentUrl = window.location.toString()

chrome.storage.local.get(/* String or Array */["sites"], function(items){
    console.log(items)
    if (Object.values(items).indexOf(currentUrl) > -1) {
        console.log('THIS SITE IS LISTED');
        addBanner()
    } else {
        console.log('THIS SITE IS NOT');
    }
});

const banner = `<div class="banner showBanner">
                    <h1>TEST</h1>
                </div>`;

const addBanner = () => {
    document.body.innerHTML += banner
    document.body.classList += " pageHasBanner"
}