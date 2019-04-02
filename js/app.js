const canvas = d3.select(".canva");

var dataArray = [4,6,4,6,7,9];

const svg = canvas.append("svg")
            .attr("width", 600)
            .attr("height", 600);

const rect = svg.append("rect");

rect.attr("width", 50)
    .data(dataArray)
    .attr("height", 300)
    .attr("fill", "grey")
    .attr("x", function(d,i){ return i*20;})
    .attr("y", function(d,i){ return d*10;})