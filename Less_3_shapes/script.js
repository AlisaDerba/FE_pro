

//---------- Right triangle --------------

m = 10;
separator = '*';
space = '';
last = '**';

document.write('*<br />');
for (i = 1; i < m; i++) {
    document.write('*');
    document.write(space);
    document.write('*<br />');
    space += '&nbsp;'

    last+= '*';
}
document.write(last + '</br>');


//----------Equilateral triangle--------------


var w = 15;
var h = (w - (w % 2)) / 2 + (w % 2);
var space = w;

for (i = h; i > 0; i--) {
    var string = '';
    for (j = i; j <= w; j++) {
        if (i === 1) {
            string += '*';
        } else if (j === w || j === space) {
            string += '*';
        } else {
            string += '&nbsp';
        }
    }
    space -= 2;
    document.write(string + '<br/>');
}

//-----------Rhombus------------

n=5;
innerSpace='';
s = '*';
outerSpace = '&nbsp';


for(i = 0, step = ''; i < n; i++){
  step += '&nbsp';
}
document.write(step + s + '</br>');

for(i = 0, interval = n; i < n; i++){
  interval -= 1;

  for(j = 0, outerSpace = ''; j < interval; j++){
    outerSpace += '&nbsp';
  }
    if(i>0){
      innerSpace += '&nbsp&nbsp';
    }else{
      innerSpace = '&nbsp';
    }

  document.write(outerSpace + s + innerSpace + s +'</br>');
}


for(i = 1, interval=n, outerSpace=''; i < n; i++){
  interval -= 1;
   outerSpace += '&nbsp';
   for(j = 1, space = '&nbsp'; j < interval; j++){
     space += '&nbsp&nbsp';
     }

  document.write(outerSpace + s + space + s + '</br>');
}

  document.write(step + s + '</br>');

  //---------- Rectangle --------------

n = 20;
m = 5;

s = '*';
space = '&nbsp;';
fullLine = '';
line = s;

for(i = 1; i <= n; i++){
    fullLine += s;

    if(i <= n-2){
        line += space;
    }
}
fullLine += '<br />';
line += s+'<br />';


document.write(fullLine);
for(i=1; i<= m-2; i++){
    document.write(line);
}
document.write(fullLine + '</br>');