const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

const maxPaletteBoxes = 32;

const generatePalette = () => {
    container.innerHTML = ""; //clearing the container
    for (let i = 0; i < maxPaletteBoxes; i++) {
        //generating a random color code
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;

        //creating a new 'li' element 
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                            <span class="hex-value">${randomHex}</span>`;
 
        //copy the colorS
        color.addEventListener("click", () => copyColor(color, randomHex));
        container.appendChild(color);
    }
}

generatePalette();

//Copying the hex value
const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerText = "Copied";
        setTimeout(() => colorElement.innerText = hexVal, 1000);
    }).catch(() => alert("Failed to copy the color!")); //show any mistake
}

refreshBtn.addEventListener("click", generatePalette)