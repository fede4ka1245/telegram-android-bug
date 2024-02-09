// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
  <div class="scroll-container">
    ${Array.from({ length: 1000 }).reduce((prev, _, index) => {
      return prev + `
        <div class="scroll-element">
          ${index + 1} Element
        </div>
      `
    }, '')}
  </div>
`;