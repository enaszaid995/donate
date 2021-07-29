var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the modal
var modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal.style.display = "none";
  }
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

sum=0;
var sum;

// Create a new list item when clicking on the "Add" button
function newElement() {
 try{
    var li = document.createElement("li");
    var inputValue2 = document.getElementById("myInput2").value;
    var t = document.createTextNode(inputValue2);
  
    var inputValue3 = document.getElementById("myInput3").value;
    
    var tt = document.createTextNode(inputValue3);
    li.appendChild(t);
    if (inputValue2 === '') {
       throw "You must write something!";
    }else if(inputValue3 === ''){
        throw "You must write something!";
    } else {
      document.getElementById("myUL").appendChild(li);
      var span = document.createElement("SPAN");
      sum += parseFloat(inputValue3);
    document.getElementById("amountsum").innerHTML=sum + "$";

    }
     var b =0.025;
     var z = 1;
     var xx=function totalFunction(sum,b,z){
         var summ= sum*b;
         var nettotal= sum-summ;
         return nettotal*z/1;
     }
    document.getElementById("netfunction").innerHTML=xx(sum,b,z);
    
    
    document.getElementById("myInput2").value = "";
    document.getElementById("myInput3").value = "";
    
  
    span.className = "close";
    span.appendChild(tt);
    li.appendChild(span);
    
 }catch(e){
     alert(e);
 }finally{
    alert("THANK YOU FOR YOUR DONATE");
}
}