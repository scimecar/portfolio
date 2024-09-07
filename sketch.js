//Gets the text before it is overwritten
const headingText = document.querySelector("#heading-text");
const headingTextContent = headingText.innerText;

// The time to start rendering the text from, with a 1-second delay.
const startTime = Date.now() + 200;

// This runs every frame the website is visible:
function frame() {
    // Renders the heading text (responsible for its animation)
    headingText.innerText = headingTextContent.slice(0, Math.max(0, Math.floor((Date.now() - startTime) / 50)));
 
    requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

console.log('hello');


