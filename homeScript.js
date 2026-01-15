
function afterPageLoad() {
    let path = window.location.pathname.slice(0,-10)
    console.log(path)
    fetch('https://raw.githubusercontent.com/Matt-deve/home/main/homeData.json')
    .then(response => {
        if (!response.ok) {
            throw new console.error('http error status: ${resonse.status}')
        }
        return response.json(); 
        })
    .then(data => {
        //console.log(data);
        data.projects.forEach(element => {
            $(projectsContainer).append($("<div></div>")
            
            .append($("<div></div>")
                .attr("class", "gallery")
                //Add container
                .append($("<div></div")
                    .attr("class", "gallery-item")
                    .append($("<a></a>")
                        .attr("href", element.href)
                        .attr("target","_blank")
                        .attr("rel", "noopener noreferrer")
                        .append($("<img>")
                            .attr("src", path + "public/images/" + element.images)
                            .attr("alt","Alt text here")
                        )
                    )
                    //Add title
                    .append($("<h2></h2>")
                        .text(element.title)
                            
                    )
                    //Add description
                    .append($("<p></p>")
                        .text(element.description)     
                    )     
                )
                
                
            )
            .append($("<br>")),
            console.log(element.images)
        )
        });
    });
}




