function button(eldata, func, id){
    const butt = document.createElement("button");
    butt.innerText=eldata;
    butt.setAttribute("id",id);
    butt.setAttribute("onclick", func);
    document.body.appendChild(butt);
}

function htmlSetValue(id, value){
    const el=document.getElementById(id);
    el.innerHTML=value;
}

function input(type, id){
    const inp = document.createElement("input");
    inp.setAttribute("id",id);
    inp.setAttribute("type", type);
    document.body.appendChild(inp);
}

function inputGetValue(id){
    const value=document.getElementById(id);
    return value;
}

function inputSetValue(id,val){
    const inp=document.getElementById(id).value=val;
}

function htmlNoAtrribute(elname, id){
    const el=document.createElement(elname);
    el.setAttribute("id", id);
    document.body.appendChild(el);
}
function html(elname, eldata, idname){
    const para = document.createElement(elname);
    para.setAttribute("id",idname);
    para.innerText = eldata;
    document.body.appendChild(para);
}

function centerX(id){
    const b=document.getElementById(id);
    b.style.display="flex";
    b.style.justifyContent="center";
}


function centerY(id){
    const b=document.getElementById(id);
    b.style.display="flex";
    b.style.alignItems="center";
}

function title(title){
    document.title=title;
}

function addChild(elToAdd, contai){
    contai.appendChild(elToAdd);
}

function css(id, css){
    const a=document.getElementById(id);
    a.setAttribute("style", css);
}


