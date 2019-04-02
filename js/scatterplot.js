var h = 350;
var w = 800;

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

var svg = d3.select("body").append("svg")
    .attr("width", w)
    .attr("height", h);

//add dots
svg.append("text")
    .text("Benson")
    .attr("text-anchor", "start")
    .attr("font-size", 120)
    .attr("font-family", "Roboto")
    .attr("fill", "grey")
    .attr("x", 110)
    .attr("y", 120)