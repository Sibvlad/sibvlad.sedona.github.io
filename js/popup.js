var link = document.querySelector(".research-top"); 
var popup = document.querySelector (".research-form");
var form = popup.querySelector("form"); 
var arrival = popup.querySelector("[name=arrival]"); 
var departure = popup.querySelector("[name=departure]"); 
var adulte = popup.querySelector("[name=adulte]"); 
var child= popup.querySelector("[name=child]");
var storage = localStorage.getItem("adulte");
var storage = localStorage.getItem("child");


link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("research-form-show");
})

form.addEventListener("submit", function(event) {
    if(!arrival.value || !departure.value || !adulte.value || !child.value)   {
     event.preventDefault();
     console.log("Нужно ввести поля");
    } else {
     localStorage.setItem("adulte", adulte.value);
     localStorage.setItem("child", child.value);    
    }
});

    