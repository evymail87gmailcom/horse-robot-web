console.log("Hello world from web script")

function addPage(){
    var page = document.createElement("div");
    page.className = "page"; 
    document.body.appendChild(page); // place page div in body div
    console.log("hello from page");
}

function addHeader(){
    var header = document.createElement("div");
    header.className = "header"; // assign name for css file
    var text = document.createTextNode("Welcome");
    header.appendChild(text);
    document.body.appendChild(header); // add header to body
}
 
function addMenu() {
    var menu = document.createElement("div");
    menu.className = "menu";
    document.body.appendChild(menu);

    //create menu button
    var menubutton = document.createElement("button");
    menubutton.className = "menubutton";
    menu.appendChild(menubutton);

    //div with links
    var linkContent = document.createElement("div");
    linkContent.className = "linkContent";
    menubutton.appendChild(linkContent);

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
        linkContent.appendChild(list);
    }
}

function addMain(){
    var main = document.createElement("div");
    main.className = "main"; // assign name for css file
    document.body.appendChild(main); // add div to body

    // div with text
    var leftDiv = document.createElement("div");
    leftDiv.className = "left-div";
    var leftText = document.createTextNode("Welcome. We've been expecting you.");
    var horseSpeak = document.createTextNode("HELLO. I'M CLOUDIA.");

    var valueText = document.createElement("p"); // paragraph with sensor sensorValue
    valueText.id = "sensorValue";

    leftDiv.appendChild(leftText);
    leftDiv.appendChild(horseSpeak); 
    leftDiv.appendChild(valueText);
    main.appendChild(leftDiv);

    // div with picture
    var rightDiv = document.createElement("div"); 
    rightDiv.className = "right-div";
    main.appendChild(rightDiv);

}

function getDataFromNodeText(tests){
    document.getElementById("sensorValue").innerHTML = tests;
}

function addFooter(){
    var footer = document.createElement("div");
    footer.className = "footer"; // assign name for css file
    var footerText = document.createTextNode("© 2020 EM PROJECTS");
    footer.appendChild(footerText);
    document.body.appendChild(footer); // add div to body
}

addPage();
addHeader(); 
addMenu();
addMain();
addFooter();
