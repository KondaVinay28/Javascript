import { describe, it, expect } from 'vitest';

describe('Part 5: Objects & Object Oriented Programming', () => {
  describe('Object Literals', () => {
    it('should create and access object properties (dot and bracket notation)', () => {
      const student = {
        name: 'John Doe',
        age: 20,
        city: 'New York'
      };

      // Dot notation
      expect(student.name).toBe('John Doe');
      // Bracket notation
      expect(student['age']).toBe(20);

      // Modifying and adding properties
      student.age = 21;
      student.gender = 'male';
      expect(student.age).toBe(21);
      expect(student.gender).toBe('male');

      // Deleting properties
      delete student.city;
      expect(student.city).toBeUndefined();
    });
  });

  describe('Nested Objects', () => {
    it('should query nested object structures (like NestedObjects.js)', () => {
      const classInfo = {
        name: 'Web Dev 101',
        instructor: {
          name: 'Jane Smith',
          experience: 5
        }
      };

      expect(classInfo.instructor.name).toBe('Jane Smith');
      expect(classInfo.instructor['experience']).toBe(5);
    });
  });

  describe('Array of Objects', () => {
    it('should store and retrieve objects within arrays (like ArrayObjects.js)', () => {
      const posts = [
        { id: 1, title: 'Post A', likes: 10 },
        { id: 2, title: 'Post B', likes: 20 }
      ];

      expect(posts.length).toBe(2);
      expect(posts[0].title).toBe('Post A');
      expect(posts[1].likes).toBe(20);
    });
  });

  describe('OOP Concepts & prototypes (like oops.js)', () => {
    it('should bind methods to objects and access properties via this', () => {
      const user = {
        username: 'kumarkov',
        email: 'kumarkov@amazon.com',
        getInfo() {
          return `LoggedIn with ${this.email}`;
        }
      };

      expect(user.getInfo()).toBe('LoggedIn with kumarkov@amazon.com');
    });

    it('should support prototype inheritance', () => {
      const animalProto = {
        speak() {
          return `${this.name} makes a noise.`;
        }
      };

      // Create object with animalProto as prototype
      const dog = Object.create(animalProto);
      dog.name = 'Rex';
      expect(dog.speak()).toBe('Rex makes a noise.');
      expect(Object.getPrototypeOf(dog)).toBe(animalProto);
    });

    it('should define and instantiate classes', () => {
      class Person {
        constructor(name, role) {
          this.name = name;
          this.role = role;
        }

        getGreeting() {
          return `Hello, I am ${this.name}, working as ${this.role}.`;
        }
      }

      const p = new Person('Alice', 'Developer');
      expect(p.name).toBe('Alice');
      expect(p.getGreeting()).toBe('Hello, I am Alice, working as Developer.');
    });
  });
});
