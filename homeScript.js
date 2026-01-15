var projectList = [
    { title: "NX-Autolearn", href: "https://matt-deve.github.io/NX-autolearn/", 
    description: "Project to simulate a computer generated opponent who 'learns' to play noughts and crosses."},
    { title: "Crosswords", href: "", 
    description: "Crossword puzzle maker tool and user interaction pages."}
]

fetch('https://raw.githubusercontent.com/Matt-deve/home/main/homeData.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

function afterPageLoad() {
    json.forEach(element => {
        $(projectsContainer).append($("<div></div>")
            .append($("<a></a>")
                .text(element.title)
                .attr("href",element.href)
            )
            .append($("<br>"))
            .append($("<p></p>")
                .text(element.description))
        )
    });  

}




