console.log("Hello world from web script")

function showMenu() {
    var links = [
        ["Home", "/horse-robot-web/index.html"],
        ["Sensors", "/horse-robot-web/sensors.html"],
        ["Circut", "/horse-robot-web/circut.html"],
        ["The process", "/horse-robot-web/process.html"]
    ];
    for (var i = 0; i < links.length; i++) {
        var list = document.createElement("li");                // create list item
        var link = document.createElement("a");                 // create link item
        link.href = links[i][1];                                // add link adress to menuItem links
        link.appendChild(document.createTextNode(links[i][0])); // create textnode inside link starting on place 0
        list.appendChild(link)                                  // add list in link
        document.getElementById("menu").appendChild(list);
    }

function showSensors(){

}
}

