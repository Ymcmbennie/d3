var w = 500;
var h = 200;

var ds;

d3.csv("monthlysales.csv", function(error, data){
    if(error){
        console.log(error);
    } else {
        console.log(data);
        ds=data;
    }

    var linefun = d3.line()
        .x(function(d){ return ((d.month-20190001)/3.25);})
        .y(function (d){ return h-d.sale; })
        .curve(d3.curveLinear);

    var svg = d3.select("body").append("svg").attr("width", w).attr("height", h)

    var viz = svg.append("path")
                .attr("d", linefun(ds))
                .attr("stroke", "purple")
                .attr("stroke-width", 2)
                .attr("fill", "none")

});