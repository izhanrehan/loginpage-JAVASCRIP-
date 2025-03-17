
function findInputs() {
    let inputs = document.querySelectorAll('#loginForm input');
    let inputArray = Array.from(inputs);
    console.log(inputArray); // Optional: Check the array in console
    return inputArray;
}

function validateInputs() {
    let inputs = findInputs();
    let loginID = document.getElementById('loginID').value;
    let password = document.getElementById('password').value;

    if (loginID === "" || password === "") {
        alert("Please enter Login ID and Password.");
        return false;
    }
    return true;
}
function login() {
    let rememberMeChecked = document.getElementById('rememberMe').checked;
    if (rememberMeChecked) {
        alert("Logged in successfully with Remember Me marked as set.");
    } else {
        alert("Logged in successfully.");
    }
}
function clearInputs() {
    let inputs = findInputs();
    inputs.forEach(input => input.value = "");
}

document.getElementById('okBtn').onclick = function() {
    if (validateInputs()) {
        login();
    }
};
document.getElementById('cancelBtn').onclick = function() {
    clearInputs();
};
