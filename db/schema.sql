-- DROP DATABASE
DROP DATABASE IF EXISTS employee_tracker;

-- CREATE DATABASE
CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE deparment(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    department_id INT,
    foreign key (department_id) references department(id)
);

CREATE TABLE employee(

id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT,
foreign key (role_id) references role(id),
foreign key (manager_id) references employee(id)
);

