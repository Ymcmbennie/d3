var w=500;
var h=200;
var padding= 2;
var dataset = [5, 20, 16, 23,5, 20, 16, 23,5, 20, 16, 23];
var svg = d3.select("body").append("svg")
            .attr("width", w)
            .attr("height", h);
svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
.attr("x", function(d, i){
    return i*(w/dataset.length);
})
.attr("y", function(d){
    return h - (d*4);
})
    .attr("width", w/dataset.length-padding)
    .attr("height", function(d){
        return d*4;
    })
    .attr("fill", function(d){
        return "rgb(" + (d*10) + ",0,256)";
    });

svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d){return d;})
.attr("x", function(d, i){
    return i*(w/dataset.length)+(w/dataset.length-padding)/2;
})
.attr("y", function(d){
    return h - (d*4)+14;
})
.attr("text-anchor", "middle")
.attr("fill","#ffffff")