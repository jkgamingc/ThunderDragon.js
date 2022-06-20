title("counter");
var a=1;
html("p", a, "counter");
button("increment", "increment()", "incre");
button("decrement", "decrement()", "decre");
css("decre", "margin:7px;background-color:black;color:white; padding:6px;border-radius:6px;");
css("incre", "background-color:black;color:white; padding:6px;border-radius:6px;");
css("counter", "color:white; background-color:powderblue; padding:20px; border:5px solid black;");
        
function increment(){
    a++;
    htmlSetValue("counter", a);
}

function decrement(){
    a--;
    htmlSetValue("counter", a);
}