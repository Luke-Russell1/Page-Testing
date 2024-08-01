const breakDiv = document.createElement("div");
let breakText = "";
breakText = `<div align="center">
				<p> 
				You have completed 1 of 20 trials in this block. Please take a 6 second break.
				</p>
				<p>
				You completed 2 out of 8 tasks in 6 seconds
				</p>
				</div>`;
breakDiv.className = "breakDiv";
breakDiv.style.position = "absolute";
breakDiv.style.top = "0";
breakDiv.style.left = "0";
breakDiv.style.width = "100%";
breakDiv.style.height = "100%";
breakDiv.style.display = "flex";
breakDiv.style.justifyContent = "center"; // Center horizontally
breakDiv.style.alignItems = "center"; // Center vertically
breakDiv.style.backgroundColor = "#808080"; // Semi-transparent black background
breakDiv.innerHTML = breakText;

// Append breakDiv to the document body or another parent element
document.body.appendChild(breakDiv); // Example: Append to body
