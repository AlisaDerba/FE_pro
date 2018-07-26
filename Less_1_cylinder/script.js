
var radius = prompt('Put radius value', '');

if(radius > 0){
    alert ('Accepted!');
}else{
    alert('Wrong value.');
}

var height = prompt('Put height value', '');
if(height > 0){
    alert ('Accepted!');
}else{
    alert('Wrong value.');
}

s=Math.PI*(radius*radius);
v=s*height;

document.write('**************', '<br/>', 
'Обьем цилиндра с площадью основы *S* ', (s), ' радиусом *R* ', (radius), ' и высотой *H* ', (height), ' равен: ', (v), '<br/>',
'--------------------', '<br/>', 'V = ', (v), '<br/>',
'-------------------', '<br/>', 'end.');


