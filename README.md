# A project to help professors not kill their students. 

## How the backend works: 

### read_and_load.js: 
This file takes in data from the csv files located in /csv_data and enters them into their corresponding tables in data.db. This is run only once. (There are also test tables that I used to test the functionality of the loading before I actually inserted into the real data tables)

### db_functionality.js: 
This is the main part of the backend! It's just one function that runs one sql query on data.db, and gets all the information we need for a given class view. If cid = 0, it gets all the data (common courses, num students in those courses, exam dates for common courses) we need to create the view for cid = 0. 

### Database schemas:
students(
    pid INTEGER PRIMARY KEY, 
    fname TEXT, 
    lname TEXT);
courses(
    cid INTEGER PRIMARY KEY, 
    name TEXT, 
    number TEXT, 
    department TEXT, 
    exam1 TEXT, 
    exam2 TEXT, 
    exam3 TEXT);
enrolled(
    pid integer, 
    cid integer, 
    foreign key(pid) references students on delete cascade, 
    foreign key(cid) references courses on delete cascade, 
    unique (pid, cid));
