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
        var newButton = document.createElement('button');
        olE.appendChild(newButton);
        newButton.setAttribute('class','but');
        newButton.setAttribute('id',i);
        newButton.textContent = 'X';
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

var thebut = document.querySelectorAll('.but');
// console.log(thebut);

// for(var j =0 ; thebut.length;j++){
    // if(thebut){
olE.addEventListener('click', removeFromList)
        

function removeFromList(event){

    var theTarget = event.target.id;
    for(var j =0 ; j<thebut.length;j++){
        if(theTarget == j){
        
            objArr.splice(j,1);
            render();
            setList();
        }



    }
    
}




