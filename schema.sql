
DROP DATABASE IF EXISTS Employee_Tracker_DB;

CREATE DATABASE Employee_Tracker_DB;

USE Employee_Tracker_DB;

CREATE TABLE DEPARTMENT (
  id INT PRIMARY KEY
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE ROLES (
  department_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  employee_name VARCHAR(100) NOT NULL,
  salary DECIMAL NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Employee_List (
  id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT NULL;
  PRIMARY KEY (id)
);

