function calculateMinCost() {
  //your code here
	let inputElement = document.getElementById("rope-lengths");
	let resultElement = document.getElementById("result");

	let arr = inputElement.value.split(",");
	for(let i=0 ; i<arr.length ; i++){
		arr[i] = parseInt(arr[i]);
	}
	console.log(arr);
	let sum = 0;
	while(arr.length > 1){
		arr.sort((a,b) => b-a);
		let first = arr.pop();
		let second = arr.pop();
		let currSum = first + second;
		sum += currSum;
		arr.push(currSum);
	}
	resultElement.innerText = sum;
}  
