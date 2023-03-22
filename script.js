function button(tagname,attrname,attrvalue,content){
    var button = document.createElement(tagname);
    button.setAttribute(attrname,attrvalue);
    button.innerHTML = content;
   return button;

}

var container = document.createElement("div");
container.setAttribute("class","container");

var row1 = document.createElement("div");
row1.setAttribute("class","row");

var div= document.createElement("div");
row1.append(div);
var titleh1 = document.createElement("h1");
titleh1.setAttribute("id","title");
titleh1.innerHTML="DOM Calculator";

var descp = document.createElement("p");
descp.setAttribute("id","description");
descp.innerHTML="Create a calculator using DOM.";
div.append(titleh1,descp);

var row = document.createElement("div");
row.setAttribute("class","row");

var gridcontainer = document.createElement("div");
gridcontainer.setAttribute("class","grid-container");
var items = [7,8,9,"+",4,5,6,"-",1,2,3,"*","c",0,"=","/"];
var griditem1 = document.createElement("div");
griditem1.className="grid-item1";
gridcontainer.append(griditem1);
var input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","result");
input.setAttribute("name","display");
griditem1.append(input);


for(var i=0;i<items.length;i++){
    var griditem = document.createElement("div");
    griditem.setAttribute("class","grid-item");    
    gridcontainer.append(griditem);
    var buttoninput = button("button","type","button",items[i]);
    griditem.append(buttoninput);
}
function button(tagname,attrname,attrvalue,content){    
    var button = document.createElement(tagname);
    button.setAttribute(attrname,attrvalue);
    if(content=="+" || content=="-" || content=="*" || content=="/"){
        if(content=="+"){
            button.setAttribute("id","add");
        } else if(content=="-"){
            button.setAttribute("id","subtract");
        }
        button.setAttribute("class","btn btn-warning btn-circle btn-md");
    }else if(content=="c"){
        button.setAttribute("class","btn btn-danger btn-circle btn-md");
        button.setAttribute("id","clear");
    }else if(content=="="){
        button.setAttribute("class","btn btn-success btn-circle btn-md");
        button.setAttribute("id","equal");
        button.setAttribute("onclick","solve()");
    }else{
        button.setAttribute("class","btn btn-dark btn-circle btn-md");
        button.setAttribute("id",content);
    }
    if(content=="c"){
        button.setAttribute("onclick","clearScreen()");
    } else if(content=="="){
        button.setAttribute("onclick","solve()");
    } else {
        button.setAttribute("onclick","val(this.value)");
    }   
    button.setAttribute("value",content);
    button.innerHTML = content;    
   return button;

}
function clearScreen(){
    document.getElementById('result').value = "";
}
function solve(){
    let x = document.getElementById('result').value;
    let y = eval(x);
    document.getElementById('result').value = y;
    
}
function val(val){
    document.getElementById("result").value += val;
}

container.append(row1,row);
row.append(gridcontainer);
document.body.append(container);