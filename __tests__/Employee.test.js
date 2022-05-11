const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Dave', 900000, 'efwbkeb@gmail.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));


});