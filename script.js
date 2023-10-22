function calculateMinCost() {
  //your code here
    const input = document.getElementById("rope-lengths").value;
    const lengths = input.split(",").map(item => parseInt(item.trim()));

    const result = document.getElementById("result");
    result.innerHTML = minCost(lengths);
}

function minCost(lengths) {
    if (lengths.length < 2) {
        return 0;
    }

    // Sorting the array initially
    lengths.sort((a, b) => a - b);

    let totalCost = 0;
    let currentCost = 0;

    // Repeatedly connecting the smallest ropes
    while (lengths.length > 1) {
        currentCost = lengths[0] + lengths[1];
        totalCost += currentCost;
        // Removing the two smallest ropes and adding their combined length
        lengths.splice(0, 2, currentCost);
        // Sorting the array again to maintain the order
        lengths.sort((a, b) => a - b);
    }

    return totalCost;
} 
  
}  