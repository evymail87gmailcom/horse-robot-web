function menu() {
    var menuItem = [
        ["Home", "https://github.com/Marialoue/horse-robot-web/blob/master/index.html"],
        ["Sensors", "https://github.com/Marialoue/horse-robot-web/blob/master/sensors.html"],
        ["Circut", "https://github.com/Marialoue/horse-robot-web/blob/master/circut.html"],
        ["The process", "https://github.com/Marialoue/horse-robot-web/blob/master/process.html"]
    ];

    for (var i = 0; 1 < menuItem.length; i++)
    {
        var menuItem = document.createElement("li");
        var link = document.createElement("a");
    }
        link.href = links[i][1];
        link.appendChild(document.createTextNode(links[i][0]));
        menuItem.appendChild(link)
        document.getElementById("menu").appendChild(menuItem);
    }
