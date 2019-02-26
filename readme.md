# First Puzzle, General Programming

Write a web page that parses the attached JSON data and displays three address books; one for patients, one for nurses, and one for doctors. The names should be sorted by surname and grouped by Ward where available.
Example output:

Patients
[Ward 1 - 02 4229 1775]
 Cheryl Adams
 Christina Adams
 George Adams
 Helen Adams
...
 
Nurses
[Ward 1 - 02 4229 1775]
 Nicole Campbell
 Roy Hunt
 Jesse Johnson: 04 4824 3929
 Robin Kelley
...
 
Doctors
Beverly Allen: 04 1376 1307
Paul Andrews: 04 5929 1934
Tammy Bailey: 04 1369 3934

This is not expected to be production code, but if you take any deliberate shortcuts please include a comment. The solution should be a single HTML page with JavaScript and CSS included. You may choose to embed the contents of the provided JSON file as a string or provide a way for the user to upload the file. Please also include any sketches if relevant.

# Second Puzzle, UI Design

Assuming the following constraints:
	•  Multiple Nurses work on a given Ward and work in shifts: 00:00 - 08:30, 08:00 - 16:30, 16:00 - 00:30
	•  Multiple patients are admitted to a given ward on any particular day
	•  One or more Nurses are assigned to each patient for every shift

Design a screen or a number of screens for a touch-interface that allows Nurses to be assigned to Patients for each shift for a given day. Document any assumptions that you make. Create mock-ups using whatever tools you like (hand-drawn, HTML, etc).
