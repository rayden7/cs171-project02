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
    d3.csv("csv/races_data.csv", function(d) {
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

/* changeColor takes a path ID and a color (hex value)
 and changes that path's fill color */
function createSVG(id) {


}