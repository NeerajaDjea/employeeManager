USE Employee_Database;

-- seeding department table--

INSERT INTO department (department_name) VALUES
    ('IT'),
    ('Sales'),
    ('Marketing'),
    ('HR'),
    ('Accounting');

-- seeding into employee table--

INSERT INTO employee_role (title, salary, department_id) VALUES
    ('Managing Director', 120000, 1),
    ('Marketing Director', 80000, 2),
    ('Accounts Executive', 60000, 3),
    ('HR Manager', 60000, 4,2),
    ('HR Executive',40000,4,3),
    ('Web Developer', 65000, 5,3),
    ('Finance Director', 80000, 3,4),
    ('Marketing Executive',40000,2,5),
    ('Software Engineer', 74000, 5,1),
    ('Tech Support', 45000, 5,1);



INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('Ryan', 'Hanks', 1 ),
    ('Juliana', 'Craig', 2, 3),
    ('Gloria', 'Hanks', 5, 1),
    ('Richard', 'Miller', 4, 1),
    ('Catherine', 'Reynolds', 5, 5),
    ('Goldie', 'Barns', 2, 5),
    ('Ryan', 'Cook', 4, 5),
    ('Kareena', 'Kapoor', 5, 5),
    ('Bradley', 'White', 2),
    ('John', 'Maisel', 3 ),
    ('David ', 'Deigo', 3 ),
    ('Astrid', 'Born', 5 ),
    ('Daisy', 'Goodman', 5, 4),
    ('Farah', 'Richards', 4, 4),
    ('Kelvin', 'Costner', 2, 12),
    ('Paul', 'Conner', 1, 12),
    ('Nadia', 'Williams', 4),
    ('Scarlette', 'Moore', 5);



