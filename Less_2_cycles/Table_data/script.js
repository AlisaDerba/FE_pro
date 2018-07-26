var table = '';
var rows = 100;
var cols = 1;

var step = 2;

for (var r = step; r <= rows; r+=step)
{
    table += '<tr>';
        for (var c = 1; c <= cols; c++)
            {
                table += '<td>' + r + '</td>';
            }
    table += '</tr>';
}

document.write('<table border=1>' + table +'</table>');


