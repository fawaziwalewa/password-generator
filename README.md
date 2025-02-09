# Frontend Mentor - Password Generator App Solution

This is a solution to the [Password Generator App challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)

## Overview

### The Challenge

Users should be able to:

- Generate a password based on the selected inclusion options
- Copy the generated password to the computer's clipboard
- See a strength rating for their generated password
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Password Generator Screenshot](/public/images/preview.png)

### Links

- Solution URL: [GitHub Repository](https://github.com/fawaziwalewa/password-generator)
- Live Site URL: [Live Demo](https://password-generator-app-pi-two.vercel.app)

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [TailwindCSS](https://tailwindcss.com/) - For styling

### What I Learned

This project helped me refine my understanding of state management in React and handling clipboard actions efficiently. Below is a snippet demonstrating how I copied the generated password to the clipboard:

```js
const copyToClipboard = () => {
  navigator.clipboard.writeText(password).then(() => {
    alert('Password copied to clipboard!');
  });
};
```

### Continued Development

I plan to enhance this project by:

- Adding more customization options for password generation.
- Implementing a better UI/UX experience.
- Exploring additional accessibility features.

### Useful Resources

- [MDN Web Docs - Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API) - Helped me understand how to use the clipboard API effectively.
- [TailwindCSS Documentation](https://tailwindcss.com/docs/) - Great resource for styling components efficiently.

## Author

- Website - [Fawaz Iwalewa](https://iwaola.me)
- Frontend Mentor - [@fawaziwalewa](https://www.frontendmentor.io/profile/fawaziwalewa)
- Twitter - [@IwalewaFawaz](https://twitter.com/IwalewaFawaz)
- GitHub - [fawaziwalewa](https://github.com/fawaziwalewa)
