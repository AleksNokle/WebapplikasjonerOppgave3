import { users } from "./util.js";

document.getElementById("name").addEventListener("input", nameSearch)
document.getElementById("filter").addEventListener("click", nameSearch)


function nameSearch() {
    var userInput = document.getElementById("name").value
    var parent = document.getElementById("users")
    var filterInput = document.getElementById("age")
    
    var minAge;

    //Default minimum age for search results is 0 (none)
    if (filterInput == ""){
        minAge = 0
    }
    else{
        minAge = filterInput.value
    }

    //Clear results inbetween every input
    parent.innerHTML = null

    
    //Adds a result to the ul if:
    // 1. Current user name in the 'users' array begins similarly to the user input
    // 2. User input is not empty
    // 3. Current user age in the 'users' array is greater than the minimum age
    for (var i = 0; i < users.length; i++){
        if ((users[i].name).startsWith(userInput) && userInput != "" && users[i].age > minAge){
            parent.innerHTML += "<li>" + users[i].name + ", " + users[i].age + "</li>"
        }
    }

}