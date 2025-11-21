// console.log("1. The script file has started running."); // for debugging

// Select all elements with the class "accordion"
var acc = document.getElementsByClassName("accordion");

// console.log("2. I found " + acc.length + " buttons with the class 'accordion'.");

var i;

for (i = 0; i < acc.length; i++){
    acc[i].addEventListener("click", function(){
        // console.log("3. A button was clicked!");
        
        this.classList.toggle("active-accordion");
        var panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        }
        else {
            panel.style.display = "block"
        }
    });
}