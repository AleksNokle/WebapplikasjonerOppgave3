document.getElementById("remove-btn").addEventListener("click", deleteText)
document.getElementById("change-btn").addEventListener("click", changeText)
document.getElementById("input").addEventListener("input", inputText)
document.getElementById("write-list").addEventListener("click", writeList)
document.getElementById("create").addEventListener("click", makeElement)
document.getElementById("remove-li").addEventListener("click", removeList)
document.getElementById("name").addEventListener("input", disableBtn)
document.getElementById("color").addEventListener("click", changeColor)

//Oppgave 1
function deleteText(){
    document.getElementById("remove").innerHTML = null
}

//Oppgave 2
function changeText(){
    const text = "What the darn-diddily-doodily did you just say about me, you little witcharooney? I’ll have you know I graduated top of my class at Springfield Bible College, and I’ve been involved in numerous secret mission trips in Capital City, and I have over 300 confirmed baptisms. I am trained in the Old Testament and I’m the top converter in the entire church mission group. You are nothing to me but just another heathen. I will cast your sins out with precision the likes of which has never been seen before in Heaven, mark my diddily-iddilly words. You think you can get away with saying that blasphemy to me over the Internet? Think again, friendarino. As we speak I am contacting my secret network of evangelists across Springfield and your IP is being traced by God right now so you better prepare for the storm, maggorino. The storm that wipes out the diddily little thing you call your life of sin. You’re going to Church, kiddily-widdily. Jesus can be anywhere, anytime, and he can turn you to the Gospel in over infinity ways, and that’s just with his bare hands. Not only am I extensively trained in preaching to nonbelievers, but I have access to the entire dang- diddily Bible collection of the Springfield Bible College and I will use it to its full extent to wipe your sins away off the face of the continent, you diddily-doo satan-worshipper. If only you could have known what holy retribution your little “clever” comment was about to bring down upon you from the Heavens, maybe you would have held your darn-diddily-fundgearoo tongue. But you couldn’t, you didn’t, and now you’re clean of all your sins, you widdillo-skiddily neighborino. I will sing hymns of praise all over you and you will drown in the love of Christ. You’re farn-foodily- flank-fiddily reborn, kiddo-diddily."
    document.getElementById("change").innerHTML = text
}

//Oppgave 3
function inputText(){
    var text = document.getElementById("input").value
    document.getElementById("input-text").innerHTML = text
}

//Oppgave 4
function writeList(){
    const myList = ['item one', 'item two', 'item three'];
    
    for (i = 0; i < myList.length; i++){
        document.getElementById("ul").innerHTML += "<li>" + myList[i] + "</li>"
    }
}

//Oppgave 5
function makeElement(){
    var dropdownValue = document.getElementById("select").value
    var userText = document.getElementById("text").value

    document.getElementById("placeholder").innerHTML += `<${dropdownValue}>` + userText + `</${dropdownValue}>`
}

//Oppgave 6
function removeList(){
    var list = document.getElementById("list");
    list.removeChild(list.lastElementChild);
}

//Oppgave 7
function disableBtn(){
    var input = document.getElementById("name").value
    var button = document.getElementById("order")

    if (input.length > 4){
        button.disabled = true
    }
    else{
        button.disabled = false
    }
}

//Oppgave 8
function changeColor(){
    var list = document.querySelector('.children')
    var children = list.children


    for(i = 0; i < children.length; i++){
        if (i % 2 === 0){
            children[i].style.cssText = "border: 2px solid pink";
        }
        else{
            children[i].style.cssText = "border: 2px solid green";
        }
    }  
}