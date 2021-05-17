

function convertFahrToCelsius (temp) {
    const result = ((temp - 32) * (5 / 9));
    const checkTempX = parseFloat(temp);
    const checkTempY = parseInt(temp, 10);
    if (typeof temp === "number") {
        console.log(Number(result.toFixed(4)));
        return Number(result.toFixed(4));
    } else if (typeof temp === "string" && (isNaN(checkTempX) === false || isNaN(checkTempY) === false)) {
        console.log(Number(result.toFixed(4)));
        return Number(result.toFixed(4));
    } else if (Array.isArray(temp)) {
        console.log(JSON.stringify(temp) + " is not a valid number but a/an array.")
    } else {
        console.log(JSON.stringify(temp) + " is not a valid number but a/an "+ typeof temp + ".");
    }
}

//  convertFahrToCelsius();


function checkYuGiOh (n) {
    function myFunction (value) {
        if (value % 2 == 0 && value % 3 == 0 && value % 5 == 0) {
            return value = "yu-gi-oh";
        } else if (value % 2 == 0 && value % 3 == 0) {
            return value = "yu-gi";
        } else if (value % 3 == 0 && value % 5 == 0) {
            return value = "gi-oh";
        } else if (value % 2 == 0 && value % 5 == 0) {
            return value = "yu-oh";
        } else if (value % 2 == 0) {
            return value = "yu";
        }else if (value % 3 == 0) {
            return value = "gi";
        } else if (value % 5 == 0) {
            return value = "oh";
        } else {
            return value;
        }
    }

    const checkNX = parseFloat(n);
    const checkNY = parseInt(n, 10);

    function checkType (n){
        if (typeof n === "number"){
            return true;
        } else if (typeof n === "string" && (isNaN(checkNX) === false || isNaN(checkNY) === false)) {
            return true;
        } else {
            return false;
        }
    }

    if (checkType(n)){
        const arr = Array.from({length: n}, (_, index) => index + 1);
        const arr2 = arr.map(myFunction);
        console.log(arr2);
        return arr2;
    } else {
        console.log("invalid parameter: " + JSON.stringify(n));
    }
}

// checkYuGiOh(100);
