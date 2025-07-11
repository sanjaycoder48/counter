let countEl = document.getElementById("count-el")
let savedCountsContainer = document.getElementById("saved-counts")
let saveCount = 0

console.log(countEl)
 
let count = 0

function INCREASE() {
    count = count + 1
    countEl.innerText = count  
}

function save(){
    // saveCount++;
    const savedEntry = document.createElement('p');
    savedEntry.textContent = `${count}`;
    savedCountsContainer.appendChild(savedEntry);
}

function reset(){
    count = 0;
    countEl.innerText = count;
    savedCountsContainer.innerHTML = '';
    saveCount = 0;
}
 