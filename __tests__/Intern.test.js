const Intern = require('../lib/Employee.js');

test('creates an employee object', () => {
    const intern = new Intern('Dave', 900000, 'efwbkeb@gmail.com');

    expect(intern.name).toBe('Dave');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));


});