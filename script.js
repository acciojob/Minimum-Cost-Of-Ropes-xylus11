function calculateMinCost() {
    //your code here
    let arr = document.getElementById("rope-lengths").value.split(",");
    
    let totalCost = 0;
    arr.sort((a,b) => a-b);
    while(arr.length > 1){

        let first = arr.shift();
        let second = arr.shift();

        let cost = (parseInt(first) + parseInt(second));
        totalCost += cost;
        arr.push(cost);

        arr.sort((a,b) => a-b);
    }

    // console.log(totalCost);
	document.getElementById("result").textContent = totalCost;
  }  
  