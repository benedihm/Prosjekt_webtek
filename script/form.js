var modal = document.querySelector(".modal");
var button = document.querySelector("button");
var close = document.querySelector(".close");
var UserInput = document.getElementsByClassName("svar");


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function ShowModal() {
    modal.classList.toggle("show-modal");
    event.preventDefault(); 
}

close.addEventListener("click", ShowModal);

function FormVadilityCheck() {
    elementValidity = [];

    for(var i = 0; i< UserInput.length; i++){
        elementValidity.push(UserInput[i].checkValidity());
    }
    console.log(elementValidity);


for (var i= 0; i < UserInput.length; i++) {
    if (UserInput[i] == false ){
        return false;
    }   
}
    ShowModal();
    return false;
}