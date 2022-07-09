let button = document.getElementById("generateButton");
button.addEventListener('click',myfunc);
var i=1;
var oldValue=0;

function myfunc(){
    let n=document.getElementById("textBox").value;
    n=parseInt(oldValue)+parseInt(n);

    for(i=1;i<=n;i++){
    var box = document.createElement('div');
        box.classList.add('myDiv')
        document.getElementById('box').appendChild(box);
        box.innerHTML+= i;
        oldValue=document.getElementById('box').lastElementChild.innerHTML;
    }
}