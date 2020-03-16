'use strict';
var theForm = document.getElementById('form');
var theCont = document.getElementById('theList');
var olE = document.getElementById('order');

 var objArr = [];
function TheList(whateTodo,theDate){
    this.whatToDo = whateTodo;
    this.theDate = theDate;
    // this.render();
    objArr.push(this);
    setList();

}
function render(){
    olE.innerHTML = '';
    for (var i = 0 ; i<objArr.length;i++){
        console.log(objArr[i]);
        var dateInList = document.createElement('p');
        dateInList.textContent = objArr[i].theDate
        var newList = document.createElement('li');
        newList.textContent = objArr[i].whatToDo;
        olE.appendChild(newList);
        newList.appendChild(dateInList);
    }
    

}



theForm.addEventListener('submit',theValue);
function theValue(event){
    event.preventDefault();
    var theTarget = event.target;
    var whatToDo = theTarget.want.value;
    var theDate = theTarget.date.value;
    new TheList(whatToDo,theDate);
    render();
    
    
}
function setList(){
    var setting = JSON.stringify(objArr);
    localStorage.setItem('lists',setting);
}
function getList(){
    var getting = localStorage.getItem('lists');
    if (getting){
        objArr = JSON.parse(getting);
    }
}
getList();
render();
