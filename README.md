cs171-project02
===============

CS171 Project 2, Team Data Visualization for the Isle of Man TT

Team Members:
Leo Mejia <kolopaisa@gmail.com>
David Killeffer <rayden7@gmail.com>


This is our CS171 Project 2 team submission.


How to Run:

Just load up index.html, and it should load the data for you (in Firefox).  Note that due to issues with the
same-origin policy, you may have trouble opening the CSVs in Google Chrome.  We had intended to publish
everything online on our website, but the Project 2 description expressly forbid this.


Code Architecture:

visualization.js is what drives the entire visualization display.  We load two different CSVs, and then
begin the data display in window.onload.

All code libraries necessary to run the visualization are inclued in the "js" directory (minified D3
library, and minified jQuery library).


Data Files:

We have two datafiles in the CSV direcory (we are NOT using "isle-of-man-tt-race-deaths.csv", but we MAY use it
in Project 3).  The two datafiles that get loaded are:

    races_data.csv - contains all individual race records per rider, per class, per year
    rider-data.csv - contains information in individual riders, pictures, bios, etc.





