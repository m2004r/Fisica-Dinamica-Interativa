const dot = document.getElementById("dot");
const gravity = 9.8; // m/s²
const pixelPerSecond = 100; // conversion rate for visual speed
const timeInterval = 16; // ms (approximately 60 frames per second)
const terminalVelocity = 20; // pixels/ms, limiting falling speed
const pushForce = 9.5; // Arbitrary upward force scaled for realism

let velocity = 0;
let positionY = 0;
let isClicking = false;

function update_position() {
  if (!isClicking) {
    // Apply gravity when not clicking
    // Cap velocity to terminal velocity
    velocity += gravity * (timeInterval / 1000);
    velocity = Math.min(velocity, terminalVelocity);
  } else {
    velocity -= pushForce;
    isClicking = false;
  }

  positionY += velocity * (timeInterval / 1000) * pixelPerSecond;

  if (positionY < 0) { positionY = 0; velocity = 0; }

  if (positionY >= window.innerHeight - 32) {
    positionY = window.innerHeight - 32;
    velocity = 0;
    window.alert("Experiment has ended! The dot hit the bottom.");
    return;
  }
  dot.style.transform = `translateY(${positionY}px)`;
}

function handleMouseClick() { isClicking = true; }
window.addEventListener("click", handleMouseClick); setInterval(update_position, timeInterval);