var h = 100;
var w = 200;

monthlySales = [
    {"month":10, "sales":17},
    {"month":20, "sales":10},
    {"month":30, "sales":20},
    {"month":40, "sales":15},
    {"month":50, "sales":21},
    {"month":60, "sales":25},
    {"month":70, "sales":19},
    {"month":80, "sales":8},
    {"month":90, "sales":13},
    {"month":100, "sales":20},
    {"month":110, "sales":9},
    {"month":120, "sales":15},
    {"month":130, "sales":20},
];

var lineFun = d3.svg.line()
    .x(function(d){return d.month*2;})
    .y(function(d){return d.sales;})
    .interpolate("linear");

var svg = 
d3.select("body").append("svg").attr("width", w).attr("height", h);

var viz = svg.append("path")
.attr(d, lineFun(monthlySales))
.attr("stroke", "purple")
.attr("stroke-width", 2);1