var tasks = [
{"taskName":"Bat aide cdmt 1", "startDate": new Date(2014, 0, 13), "endDate": new Date(2014, 0, 31), "status":"yellow"},
{"taskName":"Bat expl 1", "startDate": new Date(2014, 8, 15), "endDate": new Date(2014, 9, 3), "status":"yellow"},
{"taskName":"Pz Bat 12", "startDate": new Date(2014, 4, 19), "endDate": new Date(2014, 4, 31), "status":"yellow"},
{"taskName":"Bat chars 17", "startDate": new Date(2014, 3, 14), "endDate": new Date(2014, 4, 2), "status":"yellow"},
{"taskName":"Bat chars 18", "startDate": new Date(2014, 8, 15), "endDate": new Date(2014, 9, 3), "status":"yellow"},
{"taskName":"Inf Bat 16", "startDate": new Date(2014, 0, 13), "endDate": new Date(2014, 0, 31), "status":"green"},
{"taskName":"Gr art 1", "startDate": new Date(2014, 3, 21), "endDate": new Date(2014, 4, 9), "status":"red"},
{"taskName":"Bat G 2", "startDate": new Date(2014, 7, 4), "endDate": new Date(2014, 7, 22), "status":"gray"}
];

var taskStatus = {
    "yellow" : "bar-killed xxx",
    "green" : "bar-running xxx",
    "red" : "bar-failed xxx",
    "gray" : "bar xxx"
};

var timeDomainStart = new Date(2014,0,1);
var timeDomainEnd = new Date(2015,0,0);



var margin = {
top : 20,
right : 40,
bottom : 20,
left : 150
};

var height = document.body.clientHeight - margin.top - margin.bottom-5;
var width = document.body.clientWidth - margin.right - margin.left-5;




var gantt = gantt();


var chart = $("#chart"),
    aspect = chart.width() / chart.height(),
    container = chart.parent();
$(window).on("resize", function() {
    var targetWidth = container.width();
    chart.attr("width", targetWidth);
    chart.attr("height", Math.round(targetWidth / aspect));
}).trigger("resize");
