-- * **department**:

--   * **id** - INT PRIMARY KEY
--   * **name** - VARCHAR(30) to hold department name

-- * **role**:

--   * **id** - INT PRIMARY KEY
--   * **title** -  VARCHAR(30) to hold role title
--   * **salary** -  DECIMAL to hold role salary
--   * **department_id** -  INT to hold reference to department role belongs to

-- * **employee**:

--   * **id** - INT PRIMARY KEY
--   * **first_name** - VARCHAR(30) to hold employee first name
--   * **last_name** - VARCHAR(30) to hold employee last name
--   * **role_id** - INT to hold reference to role employee has
--   * **manager_id** - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager

create DATABASE tracker;
use tracker;

CREATE TABLE department(
    `id` INT PRIMARY KEY,
    `name` VARCHAR(30)
);

CREATE TABLE employee_role(
    `id` INT PRIMARY KEY,
    `title` VARCHAR(30),
    `salary` DECIMAL,
    `department_id` INT
);

CREATE TABLE employee(
    `id` INT PRIMARY KEY,
    `first_name` VARCHAR(30),
    `last_name` VARCHAR(30),
    `role_id` INT,
    `manager_id` INT
);
