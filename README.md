add formal description of project here. 

Database schemas: 
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
    sid integer, 
    cid integer, 
    foreign key(sid) references students on delete cascade, 
    foreign key(cid) references courses on delete cascade, 
    unique (sid, cid));
