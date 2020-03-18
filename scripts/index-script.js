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
    var horseSpeak = document.createTextNode(" HELLO. I'M CLOUDIA. HERE IS MY STATUS:");
    leftDiv.appendChild(leftText);
    leftDiv.appendChild(horseSpeak); 


    // test varables
    var dateTime = "2020-03-16";
    var distance = 23;
    var steps = 40;
    var sound = 1;
    var horsepower = 30;
    var gas = 170;

    // test with textNodes - works
    var sensorTextNode = document.createTextNode(dateTime + ", "); // test one - works but takes a lot of space
    var sensorTextNode2 = document.createTextNode(distance + ", ");  // test one

    // datetime, distance, steps, sounds, horsepower, gas
    var sensorParagraph = document.createElement("p"); // test two - works
    sensorParagraph.id = "sensorParagraph";
    sensorParagraph.appendChild(sensorTextNode);
    sensorParagraph.appendChild(sensorTextNode2);
    leftDiv.appendChild(sensorParagraph);


    // test with lists
    var sensorList = [
        ["Date: " + dateTime],
        ["Distance: " + distance],
        ["Steps: " + steps],
        ["Sound: " + sound],
        ["Horsepower: " + horsepower],
        ["Gas: " + gas]
    ];

    for (var i = 0; i < sensorList.length; i++)
    {
        var sensorListItem = document.createElement("li");
        sensorListItem.className = "sensorListItem";
        var sensorValue = document.createElement("p");
        sensorValue.appendChild(document.createTextNode(sensorList[i][0]));
        sensorListItem.appendChild(sensorValue);
        leftDiv.appendChild(sensorListItem);
    }
    


/*  leftDiv.appendChild(sensorTextNode); // test one
    leftDiv.appendChild(sensorTextNode2); // test one
*/
    main.appendChild(leftDiv);

    // div with picture
    var rightDiv = document.createElement("div"); 
    var rightImage = document.createElement("img");
    rightImage.src = "https://marialoue.github.io/horse-robot-web/images/index_img.png";
    rightImage.width = 400;
    rightDiv.className = "right-div";
    rightDiv.appendChild(rightImage);
    main.appendChild(rightDiv);
 
/*     <script>
        function changeImage(width) {
            var image = document.getElementById("bilden");
            image.setAttribute("width", width);
        }
    </script>
</head>

<body>

    <h2>Ändra bildstorlek</h2>
    <input type="range" min="1" max="1300" value="300" oninput="changeImage(this.value)" /><br>
    <img src="bil.jpg" id="bilden" width="300">
</body> */

}

function getDataFromNode(dateTime,distance,steps,sound,horsePower,gas) {
    document.getElementById("dateTime").innerHTML = dateTime;
    document.getElementById("distance").innerHTML = distance;
    document.getElementById("steps").innerHTML = steps;
    document.getElementById("sound").innerHTML = sound;
    document.getElementById("horsepower").innerHTML = horsePower;
    document.getElementById("gas").innerHTML = gas;
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
