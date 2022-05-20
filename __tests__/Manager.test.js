const Manager = require('../lib/Employee.js');

test('creates an employee object', () => {
    const manager = new Manager('Dave', 900000, 'efwbkeb@gmail.com');

    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));


});