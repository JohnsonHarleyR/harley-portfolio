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
        description: "This is a classic game of sudoku written in Java. This game can both generate a new sudoku board based on different levels of difficulty, and also solve an incomplete puzzle using various algorithms.",
        link: "https://github.com/JohnsonHarleyR/sudoku_web/tree/master/src/main/java/JohnsonHarleyR/SudokuWeb/Sudoku",
        image: "images/projects/sdku.jpg"
    },
    {
        title: "Bracelet Pattern Maker",
        languages: "React, JavaScript, HTML, CSS",
        description: "This is a handy tool for anyone interested in creating new patterns in order to make bracelets by hand. The user can the user change colors and directions of strands, as well as increase the number of strands in order to see what the bracelet would look like. Once a pattern has been created, the user can print it out in order to make the bracelet in real life.",
        link: "https://github.com/JohnsonHarleyR/bracelet-pattern-maker/tree/main/src/components/Maker",
        image: "images/projects/bracelets.jpg"
    },
    {
        title: "Wordles Solver and API",
        languages: "React, JavaScript, C#",
        description: "For a contest, I created a program that allows a player to both play the game of wordles and solve a wordle. The program uses JavaScript along with an API, both of which I created, in order to do this. (Only the front-end is included in this link for now, but the C# API exists in a repo as well.)",
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
        description: "These are a bunch of games I created when I was first learning how to code in JavaScript a few years ago. I had just completed a Java boot campt and decided to teach myself JavaScript. The games include a matching game, snake, basic sudoku, minesweeper, roadside bingo, tic tac toe, and an evolving pet game.",
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

    // apend link to card
    card.appendChild(cardLink);

    // create title for card

    // append title onto card

    // create languages to put on card

    // append languages to card

    // create description for card

    // append description to card

    // append card to container
    // container.appendChild(card);

    // return container as card
    return card;
}

function addProjectsToPage() {
    let projectArea = document.getElementById("all-projects");
    // loop through all projects to display them
    for (let i = 0; i <projectsToShow.length; i++) {
        // create container element for grid
        let container = document.createElement("div");
        container.className = "project-container col-4";

        let newCard = createProjectCard(projectsToShow[i]);
        container.appendChild(newCard);

        projectArea.appendChild(container);
    }
}