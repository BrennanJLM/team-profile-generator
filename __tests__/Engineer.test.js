const Engineer = require('../lib/Employee.js');

test('creates an employee object', () => {
    const engineer = new Engineer('Dave', 900000, 'efwbkeb@gmail.com');

    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));


});