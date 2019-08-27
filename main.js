var removefont='<i class="fa fa-trash-o" aria-hidden="true"></i>';
var completefont='<i class="fa fa-check" aria-hidden="true"></i>';



document.getElementById('add').addEventListener('click',function()
{
    var value=document.getElementById('item').value;
    if(value)
    {
      if(value) 
      {
        additemtodo(value);
        document.getElementById('item').value='';
      }
    }
});

function removeitem(e)
{
  var item=this.parentNode.parentNode;
  var parent=item.parentNode;

  parent.removeChild(item);
}
function completeitem()
{
  var item=this.parentNode.parentNode;
  var parent=item.parentNode;
  var id=parent.id;
  
  
  var target=(id === 'todo')?document.getElementById('completed'):document.getElementById('todo');

  parent.removeChild(item);

  target.insertBefore(item,target.childNodes[0]);
}
function additemtodo(text)
{
    var list=document.getElementById('todo');
   var item=document.createElement('li');
   item.innerText=text;

   var buttons=document.createElement('div');
   buttons.classList.add('buttons');

   var remove=document.createElement('button');
   remove.classList.add('remove');
   remove.innerHTML=removefont;

   remove.addEventListener('click',removeitem)

   var complete=document.createElement('button');
   complete.classList.add('complete');
   complete.innerHTML=completefont;
  

   complete.addEventListener('click',completeitem)

   buttons.appendChild(remove);
   buttons.appendChild(complete);
   item.appendChild(buttons);
   
    list.insertBefore(item, list.childNodes[0]);
}