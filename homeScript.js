var projectList = [
    { title: "NX-Autolearn", href: "https://matt-deve.github.io/NX-autolearn/", 
    description: "Project to simulate a computer generated opponent who 'learns' to play noughts and crosses."},
    { title: "Crosswords", href: "", 
    description: "Crossword puzzle maker tool and user interaction pages."}
]

var projects = JSON.decode(/homeData.json)
console.log(projects)
function afterPageLoad() {
    projects.forEach(element => {
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


