let count = -1;
let total = -999;
let entry;

while (entry != 999) {
    entry = parseInt(prompt("Enter test score\nOr enter 999 to end entries"));
    count++;
    total += entry;
}

alert("Average score is " + total/count);
