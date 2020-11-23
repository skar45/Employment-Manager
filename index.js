const inquirer = require('inquirer')
const db = require('./connection')
const table = require('console.table')

async function main(){
    const answer = await inquirer.prompt({name: "init", type:"list", message:"choose one", choices:['Add','View','Update employee roles']})
    if(answer.init == 'Add'){
        const add = await inquirer.prompt({name: "add", type:"list", message: "Which one would you like to add?", 
            choices: ['departments','roles','employees']
        })
        if (add.add == "departments"){
            const id = await inquirer.prompt({name:"id", type:"input", message: "What is the id?"})
            const name = await inquirer.prompt({name:"name", type:"input", message: "What is the name?"})
            db.query("INSERT INTO department (id, name) VALUES (?,?)",[id.id, name.name])
        } else if (add.add == 'roles') {
            const id = await inquirer.prompt({name:"id", type:"input", message: "What is the id?"})
            const title = await inquirer.prompt({name:"title", type:"input", message: "What is the title?"})
            const salary = await inquirer.prompt({name:"salary", type:"input", message: "What is the salary?"})
            const department = await inquirer.prompt({name:"department", type:"input", message: "What is the deparment id?"})
            db.query("INSERT INTO employee_role (id, title, salary, department_id) VALUES (?,?,?,?)",[id.id, title.title,salary.salary, department.department])
        } else {
            const id = await inquirer.prompt({name:"id", type:"input", message: "What is the id?"})
            const first_name = await inquirer.prompt({name:"firstname", type:"input", message: "What is the first name?"})
            const last_name = await inquirer.prompt({name:"lastname", type:"input", message: "What is the last name?"})
            const role_id = await inquirer.prompt({name:"id", type:"input", message: "What is the role id?"})
            const manager_id = await inquirer.prompt({name:"id", type:"input", message: "What is the manager id?"})
            db.query("INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (?,?,?,?,?)",[id.id,first_name.firstname,last_name.lastname, role_id.id, manager_id.id])
        }
    } else if (answer.init == 'View'){
        const view =  await inquirer.prompt({name: "view", type:"list", message: "Which one would you like to view?", 
            choices: ['departments','roles','employees']
        })
        if (view.view == 'departments'){
            const result = await db.query('SELECT * FROM department')
            const list = result.map(el=>{name: el})
            console.table(result)
        } else if (view.view == 'roles'){
            const result = await db.query('SELECT * FROM employee_role')
            console.table(result)
        } else {
            const result = await db.query('SELECT * FROM employee')
            console.table(result)
        }
    } else if (answer.init == 'Update'){
        const answer = await inquirer.prompt({name: "id", type:"input", message: "Which id would you like to update?"})
        const title = await inquirer.prompt({name: "title", type:"input", message: "Title?"})
        const salary = await inquirer.prompt({name: "salary", type:"input", message: "Salary?"})
        const dept = await inquirer.prompt({name: "dept", type:"input", message: "Department ID?"})
        db.query(`UPDATE employee_role SET title = ? SET salary = ? SET department_id = ? WHERE id = ?`[title.title,salary.salary,dept.dept,answer.id])
    }
    main()
}

main()