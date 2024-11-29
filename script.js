
function changeBanner(pageType) {
    let underlinedId = "";
    let titleText = "";
    let descriptionText = "";

    if (pageType === "home") {
        underlinedId = "projects";
        titleText = "Welcome";
        descriptionText = "My name is Harley Johnson.\nI'm a full-stack developer.";
    } else if (pageType === "about") {
        underlinedId = "about";
        titleText = "About Me";
    } else {
        underlinedId = "contact";
        titleText = "Contact Me";
        document.getElementById("page-title").style.fontSize = '120px';
    }

    document.getElementById(underlinedId).style.fontWeight = "bold";
    document.getElementById(underlinedId).style.textDecoration = "underline";
    //document.getElementById(underlinedId).className = "nav-link active";
    document.getElementById("page-title").innerText = titleText;
    document.getElementById("title-description").innerText = descriptionText;
}