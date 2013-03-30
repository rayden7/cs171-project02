/*cs171-project02
    ===============

CS171 Project 2, Team Data Visualization for the Isle of Man TT

Team Members:
    Leo Mejia <kolopaisa@gmail.com>
    David Killeffer <rayden7@gmail.com>
   */

/* use this to test out your function */
window.onload = function() {
    // changeColor();
}

/* changeColor takes a path ID and a color (hex value)
 and changes that path's fill color */
function createSVG(id) {
    document.getElementById(id).style.fill = color;

    d3.csv("csv/races_data.csv", function(d) {
        return {
            rider_id : d.rider_ID,
            race: d.race,
            POS: d.POS,
            Num: +d.Num,
            Rider_name: d.rider01,
            machine: d.machine,
            time: d.time,
            speed: +d.speed

        };
    }, function(error, rows) {
        console.log(rows);
    });
    console.info("test");
}