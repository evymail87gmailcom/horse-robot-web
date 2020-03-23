console.log("Hello world from web script")


function addHeader() {
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

function addMain() {
    var main = document.createElement("div");
    main.className = "main"; // assign name for css file
    document.body.appendChild(main); // add div to body

    // div with text
    var leftDiv = document.createElement("div");
    leftDiv.className = "left-div";
    var textParagraph = document.createElement("p"); // test two - paragraph to put all sensor values into
    var leftText = document.createTextNode("Welcome. We've been expecting you. The people behind this work of art is studying System Development - Internet of Things at Stockholm Institute of Technology and this site is a result of the course Embedded systems. We wanted to make a functioning horse robot, lets see how we did (our horse is named Cloudia since she is connected in a fog computing network). Here are the latest sensor values from Cloudia: ");
    textParagraph.appendChild(leftText);


    // test variables
    var dateTime = document.createElement("p");
    dateTime.id = "dateTime";
    var distance = document.createElement("p");
    distance.id = "distance";
    var steps = document.createElement("p");
    steps.id = "steps";
    var sound = document.createElement("p");
    sound.id = "sound";
    var horsepower = document.createElement("p");
    horsepower.id = "horsepower";
    var gas = document.createElement("p");
    gas.id = "gas";

    // test with textNodes - works
    // var sensorTextNode = document.createTextNode(dateTime + ", "); // test one - works but takes a lot of space
    // var sensorTextNode2 = document.createTextNode(distance + ", ");  // test one
    // textParagraph.appendChild(sensorTextNode);
    // textParagraph.appendChild(sensorTextNode2);

    // test with lists
    var sensorList = [
        ["Date: " + dateTime],
        ["Distance: " + distance],
        ["Steps: " + steps],
        ["Sound: " + sound],
        ["Horsepower: " + horsepower],
        ["Gas: " + gas]
    ];

    for (var i = 0; i < sensorList.length; i++) {
        var sensorListItem = document.createElement("li");
        sensorListItem.className = "sensorListItem";
        var sensorValue = document.createElement("p");
        sensorValue.className = "sensorValue";
        sensorValue.appendChild(document.createTextNode(sensorList[i][0]));
        sensorListItem.appendChild(sensorValue);
        textParagraph.appendChild(sensorListItem);
    }

    leftDiv.appendChild(textParagraph);

    /*  leftDiv.appendChild(sensorTextNode); // test one
        leftDiv.appendChild(sensorTextNode2); // test one
    */
    main.appendChild(leftDiv);

    // div with picture
    var rightDiv = document.createElement("div");
    rightDiv.className = "right-div";

    var rightImage = document.createElement("img");
    rightImage.src = "https://marialoue.github.io/horse-robot-web/images/index_img.png";
    rightImage.width = 500;

    rightDiv.appendChild(rightImage);
    main.appendChild(rightDiv);


}

function getDataFromNode(dateTime, distance, steps, sound, horsepower, gas) {
    document.getElementById("dateTime").innerHTML = dateTime;
    document.getElementById("distance").innerHTML = distance;
    document.getElementById("steps").innerHTML = steps;
    document.getElementById("sound").innerHTML = sound;
    document.getElementById("horsepower").innerHTML = horsepower;
    document.getElementById("gas").innerHTML = gas;
}

function addFooter() {
    var footer = document.createElement("div");
    footer.className = "footer"; // assign name for css file
    var footerText = document.createTextNode("© 2020 EM PROJECTS");
    footer.appendChild(footerText);
    document.body.appendChild(footer); // add div to body
}

addHeader();
addMenu();
addMain();
addFooter();
