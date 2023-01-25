/*
This category deals primarily with a foundational concept in relational database systems: joining.
Joining allows you to combine related information from multiple tables to answer a question. 
This isn't just beneficial for ease of querying: a lack of join capability encourages denormalisation of data, 
which increases the complexity of keeping your data internally consistent.

This topic covers inner, outer, and self joins, as well as spending a little time on subqueries (queries within queries).
If you struggle with these questions, I strongly recommend Learning SQL, by Alan Beaulieu, as a concise and well-written book on the subject.

*/

-- How can you produce a list of the start times for bookings by members named 'David Farrell'?

SELECT bks.starttime
	FROM
		cd.bookings bks
		INNER JOIN cd.members mems
				ON mems.memid = bks.memid
	WHERE
			    mems.firstname = 'David'
			    AND mems.surname = 'Farrell';

-- How can you produce a list of the start times for bookings for tennis courts,
--  for the date '2012-09-21'? Return a list of start time and facility name pairings, ordered by the time. 

SELECT bks.starttime AS start, fac.name AS name 
		FROM
				cd.facilities fac
				INNER JOIN cd.bookings bks
						ON fac.facid = bks.facid
		WHERE
			  fac.name in ('Tennis Court 1', 'Tennis Court 2') AND
			  bks.starttime >= '2012-09-21' AND
			  bks.starttime < '2012-09-22'
ORDER BY bks.starttime;

-- How can you output a list of all members who have recommended another member?
-- Ensure that there are no duplicates in the list, and that results are ordered by (surname, firstname). 

SELECT DISTINCT recs.firstname AS firstname, recs.surname AS surname
		FROM
					cd.members mems
					INNER JOIN cd.members recs
							ON 	recs.memid = mems.recommendedby

ORDER BY surname, firstname;

-- How can you output a list of all members, including the individual who recommended them (if any)? 
-- Ensure that results are ordered by (surname, firstname). 

SELECT mems.firstname AS memfname, mems.surname AS memsname, recs.firstname AS recfname, recs.surname AS recsname
		FROM
					cd.members mems
					LEFT JOIN cd.members recs
							ON 	recs.memid = mems.recommendedby

ORDER BY memsname, memfname;

-- How can you produce a list of all members who have used a tennis court? 
-- Include in your output the name of the court, and the name of the member formatted as a single column. 
-- Ensure no duplicate data, and order by the member name followed by the facility name.
 

SELECT DISTINCT mems.firstname||' '||mems.surname AS member, facs.name as facility
		FROM
				cd.members  mems
				INNER JOIN cd.bookings bks
						ON mems.memid = bks.memid
				INNER JOIN cd.facilities facs
						ON bks.facid = facs.facid
		WHERE
				bks.memid = mems.memid AND
				bks.facid = facs.facid AND
				facs.name IN ('Tennis Court 1', 'Tennis Court 2')
				
ORDER BY member, facility;

