/*cs171-project02
    ===============

CS171 Project 2, Team Data Visualization for the Isle of Man TT

Team Members:
    David Killeffer <rayden7@gmail.com>
    Leo Mejia <kolopaisa@gmail.com>

   */

/* use this to test out your function */
window.onload = function() {
    // changeColor();

    createSVG();
}

/* changeColor takes a path ID and a color (hex value)
 and changes that path's fill color */
function createSVG() {

    var margin = {top: 20, right: 80, bottom: 30, left: 50},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var parseDate = d3.time.format("%Y%m%d").parse;

    var x = d3.time.scale()
        .range([0, width]);

    var y = d3.scale.linear()
        .range([height, 0]);

    var color = d3.scale.category10();

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

   var RacesData = d3.csv("csv/races_data.csv", function(d) {
        return {
            RiderID: d.RiderID,
            RaceName: d.RaceName,
            Year: d.Year,
            Position: d.Position,
            Number: +d.Number,
            Rider1_name: d.Rider1,
            Rider2_Name: d.Rider2,
            Machine: d.Machine,
            Time: d.Time,
            Speed: +d.Speed
        };
    }, function(error, rows) {
        console.log(rows);
    });


}