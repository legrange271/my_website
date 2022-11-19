// Here we will define the functions and code to work wtih the liquid
const wrapper = document.getElementById("bubble-wrapper");
const animateBubble = x => {
	const bubble = document.createElement("div");

	bubble.className = "bubble";
	bubble.style.left = `${x}px`;
	wrapper.appendChild(bubble);
	setTimeout(() => wrapper.removeChild(bubble), 1750);
}

// Check mouse movements - takes the current position and passes into the function using the clients position
window.onmousemove = e => animateBubble(e.clientX);
