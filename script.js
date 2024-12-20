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
    document.getElementById("page-title").innerText = titleText;
    document.getElementById("title-description").innerText = descriptionText;
}

let projectsToShow = [
    {
        title: "Life Forms",
        languages: "React, JavaScript",
        description: "This is a game that creates life forms which go through an evolution. Each type of life form comes in a different size, has a different lifespan, a differnt food source, and each has unique characteristics to survive. The player can place these in a chosen environment and watch them evolve! Will they go on to thrive in their environment, or go extinct?",
        link: "https://github.com/JohnsonHarleyR/life-forms-1.0/tree/main",
        image: "images/projects/life-forms.jpg"
    },
    {
        title: "Sudoku",
        languages: "Java, HTML, CSS",
        description: "This is a classic game of Sudoku written in Java. This game can both generate a new sudoku board based on different levels of difficulty, and also solve an incomplete puzzle using various algorithms.",
        link: "https://github.com/JohnsonHarleyR/sudoku_web/tree/master/src/main/java/JohnsonHarleyR/SudokuWeb/Sudoku",
        image: "images/projects/sdku.jpg"
    },
    {
        title: "Bracelet Pattern Maker",
        languages: "React, JavaScript, HTML, CSS",
        description: "This is a handy tool for anyone interested in creating new patterns in order to make bracelets by hand. The user can change the colors and directions of strands, as well as increase the number of strands in order to see what the bracelet would look like. Once a pattern has been created, the user can print it out in order to make the bracelet in real life.",
        link: "https://github.com/JohnsonHarleyR/bracelet-pattern-maker/tree/main/src/components/Maker",
        image: "images/projects/bracelets.jpg"
    },
    {
        title: "Wordles Solver and API",
        languages: "React, JavaScript, C#",
        description: "For a contest, I created a program that allows a player to both play the game of Wordles and solve a Wordle puzzle. The program uses JavaScript, along with an API, both of which I created, in order to do this. (Only the front-end is included in this link for now, but the C# API exists in a repo as well.)",
        link: "https://github.com/JohnsonHarleyR/wordle-solver-react/tree/main/src",
        image: "images/projects/solve-wordles.jpg"
    },
    {
        title: "Color Blaster",
        languages: "JavaScript, HTML, C#",
        description: "This is an original game that I created in which the player must use color theory in order to solve puzzles and get through levels. This has not been completed, but it is a very cute game that I am quite proud of. The arcade version is finished, but the story mode is not.",
        link: "https://github.com/JohnsonHarleyR/color-blaster/tree/master/color-blaster-mvc",
        image: "images/projects/color-blaster.jpg"
    },
    {
        title: "JavaScript Games",
        languages: "JavaScript, Java, CSS",
        description: "These are a bunch of games I created when I was first learning how to code in JavaScript a few years ago. I had just completed a Java boot camp and decided to teach myself JavaScript. The games include a matching game, Snake, basic Sudoku, Minesweeper, Roadside Bingo, Tic Tac Toe, and an evolving pet game.",
        link: "https://github.com/JohnsonHarleyR/JSGamesAndPractice/tree/master/src/main/resources/static/js",
        image: "images/projects/js-games.jpg"
    },
];

function createProjectCard(data) {
    // {title, languages, description, link, image} = data;

    // create card element
    let card = document.createElement("div");
    card.className = "card";

    // create link element
    let cardLink = document.createElement("a");
    cardLink.href = data.link;
    cardLink.setAttribute('target', '_blank');
    cardLink.setAttribute('rel', 'noopener noreferrer');

    // create image element
    let cardImage = document.createElement("img");
    cardImage.src = data.image;
    cardImage.alt = data.title;
    cardImage.className = "project-image card-img-top";

    // append image to link
    cardLink.appendChild(cardImage);

    // append link to card
    card.appendChild(cardLink);

    // create card body
    let body = document.createElement('div');
    body.className = "card-body";

    // create title for card
    let title = document.createElement('h3');
    title.className = "card-title";
    title.innerText = data.title;

    // append title onto card
    body.appendChild(title);

    // create languages p, put in bold tag followed by languages
    let languages = document.createElement('p');
    languages.className = "card-languages card-text";
    languages.innerHTML = "<b>Languages: </b>" + data.languages;

    // append languages to card body
    body.appendChild(languages);

    // create description for card
    let description = document.createElement('p');
    description.className = "card-description card-text";
    description.innerText = data.description;

    // append description to card body
    body.appendChild(description);

    // create button for bottom
    let button = document.createElement('a');
    button.href = data.link;
    button.setAttribute('target', '_blank');
    button.setAttribute('rel', 'noopener noreferrer');
    button.className = "btn btn-info";
    button.innerText = "See Code";

    // append button to body
    body.appendChild(button);

    // append card body to card
    card.appendChild(body);

    // return card
    return card;
}

function getClassForProjectContainer() {
    let screenWidth = window.innerWidth;
    let colSize = "col-4";
    
    if (screenWidth < 585) {
        colSize = "col-12";
    } else if (screenWidth < 992) {
        colSize = "col-6";
    }

    return "project-container " + colSize;
}

function addProjectsToPage() {
    let projectArea = document.getElementById("all-projects");
    // loop through all projects to display them
    for (let i = 0; i <projectsToShow.length; i++) {
        // create container element for grid
        let container = document.createElement("div");
        container.className = getClassForProjectContainer();

        let newCard = createProjectCard(projectsToShow[i]);
        container.appendChild(newCard);

        projectArea.appendChild(container);
    }
}

// Toggle menu when on mobile
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

function closeNav() {
document.getElementById("myNav").style.width = "0%";
}

// change projects grid upon screen size change
window.addEventListener('resize', function() {
    let documentTitle = document.title;

    if (documentTitle === "Projects") {
        let newProjectContainerClass = getClassForProjectContainer();
        let projectContainers = document.getElementsByClassName("project-container");
        for (let i = 0; i < projectContainers.length; i++) {
            projectContainers[i].className = newProjectContainerClass;
        }
    } else if (documentTitle === "Contact Me") {
        let contactForm = document.getElementById("contact-form");
        let contactInfo = document.getElementById("contact-info");

        let screenWidth = window.innerWidth;
        let colSize = ""; 

        if (screenWidth < 768) {
            let parentElement = contactForm.parentNode;
            parentElement.insertBefore(contactInfo, contactForm);
            colSize = "col-12";
        } else {
            let parentElement = contactInfo.parentNode;
            parentElement.insertBefore(contactForm, contactInfo)
            colSize = "col-6";
        }

        contactForm.className = colSize + " align-items-center contact-area";
        contactInfo.className = colSize + " text-center contact-area";
    }
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                return;
            }
        });
    });
    let allDivs = document.querySelectorAll('div');
    allDivs.forEach((element) => observer.observe(element));
})