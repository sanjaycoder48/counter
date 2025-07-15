let countEl = document.getElementById("count-el");
let savedCountsContainer = document.getElementById("saved-counts");
let saveCount = 0;

function INCREASE() {
  count = count + 1;
  countEl.innerText = count;
  // Add a subtle scale animation
  countEl.style.transform = "scale(1.1)";
  setTimeout(() => {
    countEl.style.transform = "scale(1)";
  }, 100);
}

function save() {
  const savedEntry = document.createElement("p");
  savedEntry.textContent = `${count}`;
  savedEntry.style.opacity = "0";
  savedEntry.style.transform = "translateY(20px)";
  savedCountsContainer.appendChild(savedEntry);

  // Trigger animation
  setTimeout(() => {
    savedEntry.style.transition = "all 0.3s ease";
    savedEntry.style.opacity = "1";
    savedEntry.style.transform = "translateY(0)";
  }, 50);
}

function reset() {
  count = 0;
  countEl.innerText = count;

  // Animate removal of saved counts
  const savedEntries = savedCountsContainer.querySelectorAll("p");
  savedEntries.forEach((entry, index) => {
    setTimeout(() => {
      entry.style.opacity = "0";
      entry.style.transform = "translateY(20px)";
    }, index * 50);
  });

  // Clear container after animations
  setTimeout(() => {
    savedCountsContainer.innerHTML = "";
  }, savedEntries.length * 50 + 300);

  saveCount = 0;
}

let count = 0;
