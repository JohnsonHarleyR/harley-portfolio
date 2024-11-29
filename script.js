
function changeBanner(pageType) {
    let underlinedId = "";
    let titleText = "";
    let descriptionText = "";

    if (pageType === "home") {
        underlinedId = "projects";
        titleText = "Welcome";
        descriptionText = "Brief description here";
    } else if (pageType === "about") {
        underlinedId = "about";
        titleText = "About Me";
    } else {
        underlinedId = "contact";
        titleText = "Contact Me";
    }

    document.getElementById(underlinedId).style.fontWeight = "bold";
    document.getElementById(underlinedId).style.textDecoration = "underline";
    //document.getElementById(underlinedId).className = "nav-link active";
    document.getElementById("page-title").innerText = titleText;
    document.getElementById("title-description").innerText = descriptionText;
}