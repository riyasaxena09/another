var form=document.querySelector('form');
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    var i;
let arr;
let a=[];
    console.log("local storage");
    for (i = 0; i < localStorage.length; i++)   {
arr=localStorage.getItem(localStorage.key(i));
        console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
a.push(JSON.parse(arr));

    }
  console.log(a)
for(let j=0;j<a.length;j++){
    var ele=document.createElement('div');
    ele.id='li';
    var text=document.createTextNode(`Id:${a[j].id} - Name:${a[j].name} - category:${a[j].cat} - Amount:${a[j].num}`)
    var delbtn=document.createElement('button');
    delbtn.className='delbtn';
   delbtn.innerText="Delete";
   
ele.appendChild(text);
ele.appendChild(delbtn);
ele.addEventListener("click",show);
function show(e){
    if(e.target.classList.contains('delbtn')){
       var item=e.target.parentElement;
      var main=document.getElementById('list')
      main.removeChild(item);
   let sub=e.target.parentElement.innerText;
   console.log(typeof(sub))
   let c=0;
   for(let k=0;k<sub.length;k++){
    if(sub[k]==' '){
        break;
    }
    c++;
   }


   let s=sub.slice(3,c);
   localStorage.removeItem(s)
    }
   
}
document.getElementById('list').appendChild(ele)
}
  });

  
form.addEventListener('submit',onSubmit)
function display(obj){
    console.log(obj);
    var ele=document.createElement('div');
    ele.id='li';
    var text=document.createTextNode(` Id:${obj.id} - Name:${obj.name} - category:${obj.cat} - Amount:${obj.num}`)
    var delbtn=document.createElement('button');
    delbtn.className='delbtn';
   delbtn.innerText="Delete";
   
ele.appendChild(text);
ele.appendChild(delbtn);
ele.addEventListener("click",show);
function show(e){
    if(e.target.classList.contains('delbtn')){
       var item=e.target.parentElement;
      var main=document.getElementById('list')
      main.removeChild(item);
    }
}
document.getElementById('list').appendChild(ele)

}
function onSubmit(e){
e.preventDefault();
    console.log("s")
    var name=document.getElementById('name').value;
    var num=document.getElementById('amount').value;
    var cat=document.getElementById('cat').value;
    var id=document.getElementById('number').value;
    console.log(name);
    console.log(cat);
    console.log(num)
    const obj={
        id:id,
        name:name,
        cat:cat,
        num:num
    }
const sobj=JSON.stringify(obj);
localStorage.setItem(obj.id,sobj);
    display(obj);
}