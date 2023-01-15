USE employee_tracker;

INSERT INTO deparment (name)
VALUES 
       ("Sales"),
       ("Accounting"),
       ("IT"),
       ("HR"),
       ("Legal");

INSERT INTO role (title, salary, deparment_id) 
VALUES 
        ("Sales manager", 20934.01, 1),
        ("Sales person", 12345.10, 1),
        ("accountant", 200000, 2),
        ("IT manager", 200000, 3),
        ("IT person", 100000, 3),
        ("HR manager", 140000, 4),  
        ("HR person", 90000, 4),
        ("Legal", 240000, 5);
        
  
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES
       ("Johh", "Doe", 1, Null),
       ("Brett", "Heart", 2, 1),
       ("Aplle", "Bananan", 3, Null),
       ("person", "AB", 4, Null),
       ("Bah", "Humbug", 5, 4),
       ("Dwight", "Schrute", 6, Null),
       ("Micheal", "Scott", 7, 6),
       ("Pam", "Beasley", 8, Null);
