function gantt() {

    var keyFunction = function(d) {
    return d.startDate + d.taskName + d.endDate;
    };

    var rectTransform = function(d) {
    return "translate(" + x(d.startDate) + "," + y(d.taskName) + ")";
    };

var x = d3.time.scale().domain([ timeDomainStart, timeDomainEnd ]).range([ 0, width ]).clamp(true);
var y = d3.scale.ordinal().domain(tasks.map(function(x){return x.taskName})).rangeRoundBands([ 0, height - margin.top - margin.bottom ], .1);
var xAxis = d3.svg.axis().scale(x).orient("top").tickFormat(d3.time.format("%B")).tickSubdivide(false)
    .tickSize(10).tickPadding(0);
var xAxis2 = d3.svg.axis().scale(x).orient("top").tickFormat(d3.time.format("%W")).tickSubdivide(false)
    .tickSize(8).tickPadding(8).ticks(d3.time.weeks,1);

var yAxis = d3.svg.axis().scale(y).orient("left").tickSize(0);

var svg = d3.select("#container")
.append("svg")
.attr("class", "chart")
.attr("id", "chart")
.attr("viewBox", "0 0 " +  (width + margin.left + margin.right) + " " + (height + margin.top + margin.bottom) )
.attr("preserveAspectRatio", "xMinYMid")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
    .attr("class", "gantt-chart")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

  svg.selectAll(".chart")
 .data(tasks, keyFunction).enter()
 .append("rect")
 .attr("rx", 5)
     .attr("ry", 5)
 .attr("class", function(d){
     if(taskStatus[d.status] == null){ return "bar";}
     return taskStatus[d.status];
     })
 .attr("y", 0)
 .attr("transform", rectTransform)
 .attr("height", function(d) { return y.rangeBand(); })
 .attr("width", function(d) {
    return (x(d.endDate) - x(d.startDate));
  })
 .attr("data-tooltip", function(d) {
    return d3.time.format("%e %b")(d.startDate) + " - " + d3.time.format("%e %b")(d.endDate);
})
  .attr("data-title", function(d) {
     return d.taskName;
 });

 svg.append("g")
 .attr("class", "x axis")
 .attr("transform", "translate(0, " + 0 + ")")
 .transition()
 .call(xAxis);

/*
svg.append("g")
.attr("class", "x2 axis")
.attr("transform", "translate(0, " + 0 + ")")
.transition()
.call(xAxis2);
*/

 svg.append("g").attr("class", "y axis").transition().call(yAxis);

 svg.selectAll('.x text').attr('transform', 'translate(60)');
 svg.selectAll('.x2 text').attr('transform', 'translate(15)');

  svg.selectAll("line.x")
.data(x.ticks(53))
.enter().append("line")
.attr("class", "x")
.attr("x1", x)
.attr("x2", x)
.attr("y1", 0)
.attr("y2", 700)
.style("stroke", "#ccc");

 return gantt;

};
