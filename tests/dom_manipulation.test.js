// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';

describe('DOM Manipulation & BOM Concepts', () => {
  describe('DOM Traversing (like TraversingElements.js)', () => {
    beforeEach(() => {
      // Set up a mock DOM layout matching index.html
      document.body.innerHTML = `
        <div class="main">
          <p class="note">This is a noted</p>
        </div>
        <ul id="menu">
          <li class="first">Home</li>
          <li>products</li>
          <li class="current">Customer Support</li>
          <li>Careers</li>
          <li>Investors</li>
          <li>News</li>
          <li id="last">About Us</li>
        </ul>
      `;
    });

    it('should query elements correctly', () => {
      const note = document.querySelector('.note');
      expect(note).not.toBeNull();
      expect(note.textContent).toBe('This is a noted');

      const menu = document.getElementById('menu');
      expect(menu).not.toBeNull();
      expect(menu.children.length).toBe(7);
    });

    it('should get the parent element (like TraversingElements.js line 2-3)', () => {
      const note = document.querySelector('.note');
      const parent = note.parentNode;

      expect(parent.className).toBe('main');
    });

    it('should traverse child elements (like TraversingElements.js line 5-8)', () => {
      const parentElement = document.querySelector('#menu');
      
      // firstChild in real DOM is often a text node (whitespace)
      const firstChildNode = parentElement.firstChild;
      expect(firstChildNode.nodeName).toBe('#text');

      // firstElementChild gets the actual element node
      const firstElementChild = parentElement.firstElementChild;
      expect(firstElementChild.nodeName).toBe('LI');
      expect(firstElementChild.className).toBe('first');
    });

    it('should traverse siblings', () => {
      const current = document.querySelector('.current');
      const nextSibling = current.nextElementSibling;
      const prevSibling = current.previousElementSibling;

      expect(nextSibling.textContent).toBe('Careers');
      expect(prevSibling.textContent).toBe('products');
    });
  });

  describe('Local Storage (like localStorage.js)', () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it('should set, retrieve, and parse JSON data in localStorage', () => {
      const user = {
        name: 'Vinay',
        age: 24,
      };

      // Set user object as JSON string
      localStorage.setItem('userData', JSON.stringify(user));

      // Retrieve
      const storedUserData = localStorage.getItem('userData');
      expect(storedUserData).not.toBeNull();

      // Parse
      const parsedUser = JSON.parse(storedUserData);
      expect(parsedUser.name).toBe('Vinay');
      expect(parsedUser.age).toBe(24);
      expect(parsedUser).toEqual(user);
    });

    it('should handle non-existent keys gracefully', () => {
      const data = localStorage.getItem('nonexistent');
      expect(data).toBeNull();
    });
  });
});
