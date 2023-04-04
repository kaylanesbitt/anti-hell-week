# A project to help professors not kill their students. 

## How the backend works: 

### read_and_load.js: 
This file takes in data from the csv files located in /csv_data and enters them into their corresponding tables in data.db. This is run only once. (There are also test tables that I used to test the functionality of the loading before I actually inserted into the real data tables)

### db_functionality.js: 
This is the main part of the backend! It's just one function that runs one sql query on data.db, and gets all the information we need for a given class view. If cid = 0, it gets all the data (common courses, num students in those courses, exam dates for common courses) we need to create the view for cid = 0. 

### Database schemas:
students(\
&nbsp;   pid INTEGER PRIMARY KEY, \
&nbsp;   fname TEXT, \
&nbsp;   lname TEXT);\

courses(\
&nbsp;    cid INTEGER PRIMARY KEY,\ 
&nbsp;    name TEXT,\ 
&nbsp;    number TEXT,\ 
&nbsp;    department TEXT,\ 
&nbsp;    exam1 TEXT, \
&nbsp;    exam2 TEXT, \
&nbsp;    exam3 TEXT);\

enrolled(\
&nbsp;    pid integer,\ 
&nbsp;    cid integer, \
&nbsp;    foreign key(pid) references students on delete cascade, \
&nbsp;    foreign key(cid) references courses on delete cascade, \
&nbsp;    unique (pid, cid));\
