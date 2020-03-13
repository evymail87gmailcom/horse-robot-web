console.log("Hello world from web script")

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

    // add function for scalable sensor picture with sensor data

    // paragraph with text
    var leftDiv = document.createElement("div");
    leftDiv.className = "left-div";
    var leftText = document.createTextNode("This is the circut for horse robot Cloudia. As you can see there are several parts needed, but not very advanced stuff.");
    leftDiv.appendChild(leftText);
    main.appendChild(leftDiv);

    // div with picture
    var rightDiv = document.createElement("div"); 
    var rightImage = document.createElement("img");
    rightImage.src = "https://www.google.com/search?q=horses&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiLseHY05XoAhV0AxAIHVtMA1kQ_AUoAXoECBkQAw#imgrc=qlMNMTKnuvouPM:";
    rightImage.width = "250";
    rightDiv.className = "right-div";
    rightDiv.appendChild(rightImage);
    main.appendChild(rightDiv); 

}

function addFooter(){
    var footer = document.createElement("div");
    footer.className = "footer"; // assign name for css file
    var text = document.createTextNode("© 2020 EM PROJECTS");
    footer.appendChild(text);
    document.body.appendChild(footer); // add div to body
}


addHeader(); 
addMenu();
addMain();
addFooter();
