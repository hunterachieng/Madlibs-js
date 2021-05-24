const btn = document.getElementById("libbutton");

btn.addEventListener("click", function (){
    var story = document.getElementById("story");
    var noun = document.getElementById("noun").value;
    var adjective = document.getElementById("adjective").value;
    var name = document.getElementById("name").value;
   
    story.innerHTML = `Hellooo ${name} I thought it would be a good idea to tell you that you are ${adjective}!!.You are a nice ${noun}`
})