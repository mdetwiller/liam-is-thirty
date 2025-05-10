/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/
const btn = document.querySelector("button"); // Get the button from the page
if (btn) { // Detect clicks on the button
  btn.onclick = function () {
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
  };
}

// Function to update ASCII wave length
function updateWaveLength() {
    const wavePattern = "``'-.,_,.-'``'-.,_,.='``'-.,_,.-'``'-.,_,.='```'-.,_,.-'``'-.,_,.='``'-.,_,.-'``'-.,_,.='``";
    const waveContents = document.querySelectorAll('.wave-content');
    const containerWidth = document.querySelector('.ocean').offsetWidth;
    const charWidth = 8; // Approximate width of a monospace character in pixels
    
    // Calculate how many times we need to repeat the pattern
    const patternWidth = wavePattern.length * charWidth;
    const repeatsNeeded = Math.ceil(containerWidth / patternWidth) + 2;
    
    // Create offset pattern: 0,1,2,3,3,2,1,0,0,1,2,3,3,2,1,0,0,1
    const offsetPattern = [0,1,2,3,3,2,1,0,0,1,2,3,3,2,1,0,0,1];
    
    // Track the current position in the wave pattern
    let currentPatternPosition = 0;
    
    // Update each wave content with the repeated pattern and different offsets
    waveContents.forEach((content, index) => {
        const offsetCount = offsetPattern[index % offsetPattern.length];
        // Calculate how many characters we need to offset
        const offsetChars = offsetCount * 4;
        
        // Get the appropriate part of the wave pattern for the offset
        // Start from the current position and wrap around if needed
        let offset = '';
        let tempPosition = currentPatternPosition;
        
        for (let i = 0; i < offsetChars; i++) {
            offset += wavePattern[tempPosition % wavePattern.length];
            tempPosition++;
        }
        
        // Update the current position for the next row
        currentPatternPosition = (currentPatternPosition + offsetChars) % wavePattern.length;
        
        // Create the full pattern starting from the current position
        let fullPattern = '';
        tempPosition = currentPatternPosition;
        
        // Calculate where to insert the number (about 1/3 of the way through the first pattern)
        const numberInsertPosition = Math.floor(wavePattern.length / 3);
        let numberInserted = false;
        
        for (let i = 0; i < wavePattern.length * repeatsNeeded; i++) {
            // Insert the number at the appropriate position
            if (!numberInserted && i === numberInsertPosition) {
                const number = 30 - index;
                fullPattern += number.toString().padStart(2, '0');
                numberInserted = true;
                // Skip the next character to maintain pattern length
                tempPosition++;
            }
            fullPattern += wavePattern[tempPosition % wavePattern.length];
            tempPosition++;
        }
        
        content.textContent = offset + fullPattern;
    });
}

// Update on load and window resize
window.addEventListener('load', updateWaveLength);
window.addEventListener('resize', updateWaveLength);
