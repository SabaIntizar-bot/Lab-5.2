Reflection Questions

1. How did event.preventDefault() help in handling form submission?
It stopped the form from refreshing the page and allowed me to check if all inputs were valid first.

2. What is the difference between HTML5 validation and JavaScript validation?
HTML5 validation is built into the browser (like required, type). JavaScript allows custom rules and messages. Using both gives better control and user experience.

3. How did you use localStorage?
I saved the username using `localStorage.setItem()` after successful registration and used `getItem()` to load it when the page loads.

4. Challenge in real-time validation?
It was tricky to make sure error messages show only when needed. I fixed it by checking `input.validity` and using helpful functions.

5. How did you make error messages user-friendly?
I wrote clear, short messages and showed them right next to the input fields when something was wrong.
