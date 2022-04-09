// Write your solution in this file!
const employee = {
    name : "Bob",
    streetAdress : "30 S Clayton St"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employees = {...employee}
    employees[key] = value
    return employees
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
     const newEmployees = {...employee}
     delete newEmployees[key]
    return newEmployees 
}

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key]
    return employee
}