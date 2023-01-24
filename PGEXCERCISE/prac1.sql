-- How can you produce a list of all facilities with the word 'Tennis' in their name?

SELECT * FROM cd.facilities
WHERE name like '%Tennis%';

-- How can you retrieve the details of facilities with ID 1 and 5? Try to do it without using the OR operator.

SELECT * FROM cd.facilities 
WHERE facid in (1, 5);

/*
How can you produce a list of facilities,
 with each labelled as 'cheap' or 'expensive' depending on if their monthly maintenance cost is more than $100?
 Return the name and monthly maintenance of the facilities in question. 
*/

SELECT name,
  CASE WHEN (monthlymaintenance > 100) THEN
    'expensive'	
  ELSE
	'cheap'
  END AS cost
FROM cd.facilities;        

/*
How can you produce a list of members who joined after the start of September 2012? Return the memid, surname, firstname, and joindate of the members in question.

*/
-- POSTGRESQL has it's own unit called timestamp.
SELECT memid, surname, firstname, joindate
		FROM cd.members
		where joindate >= '2012-09-01';