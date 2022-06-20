htmlNoAtrribute("ul","list");
        input("text", "inp");
        button("add todo", "add()", "add");
        css("add", "margin:4px");
        function add(){
        const li=document.createElement("li");
        li.innerHTML=inp.value;
        list.appendChild(li);
        inputSetValue("inp", "");
        }