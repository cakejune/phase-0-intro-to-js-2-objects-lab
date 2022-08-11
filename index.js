// Write your solution in this file!

const employee = {
    name: "Bob",
    streetAddress: "123 Boo Street",
};

function updateEmployeeWithKeyAndValue(employee, key, value)
{
    //return {
   // ...employee,[key]: value,
  //  };
    
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const editedEmployee = {...employee};
    delete editedEmployee["name"];
    return editedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee["name"];
    return employee;
}



