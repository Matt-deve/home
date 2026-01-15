
function afterPageLoad() {
    fetch('https://raw.githubusercontent.com/Matt-deve/home/main/homeData.json')
    .then(response => {
        if (!response.ok) {
            throw new console.error('http error status: ${resonse.status}')
        }
        return response.json(); 
        })
    .then(data => {
        console.log(data);
        data.projects.forEach(element => {
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
    });
}




