const {Person} = require('../Person')

describe('Person Test', () => {

    it('Should create an instance of Person', () => {
        let person1 = new Person("Alice", "Bronx")

        expect(person1).toBeInstanceOf(Person)
    })

    it('Should create person with proper name', () => {
        let person1 = new Person("Brynner", "Florida")

        expect(person1.name).toBe("Brynner")
    })

    test('should update location property using setter', () => {
        const person = new Person('Alice', 'Wonderland');
        expect(person.location).toBe('Wonderland')
        person.location = 'Paris';
        expect(person.location).toBe('Paris');
    });

    // Test for throwing error in changeLocation method
    test('should throw an error when trying to set an empty location', () => {
        const person = new Person('Alice', 'Wonderland');
        expect(() => person.changeLocation('')).toThrow('Location cannot be empty.');
    });

    // Test that changeLocation
    test('changeLocation should change the location', () => {
        const person = new Person('Alice', 'Wonderland')
        expect(person.location).toBe('Wonderland')
        person.changeLocation("Disney")
        expect(person.location).toEqual("Disney")
    })

})
