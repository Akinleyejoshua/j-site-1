const openNav = () => {
    var headerNav = document.querySelector(".nav")
    if (headerNav.style.maxHeight){
        headerNav.style.maxHeight = null
    } else {
        headerNav.style.maxHeight = headerNav.scrollHeight + "px"
    }
}