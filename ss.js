$(function() {

// $("#draggable").draggable();

var rows = 10;
var cols = 10;

var a = [ ];
for(var row = 0; row < rows; ++row) {
  a.push('<tr>');
  for(var col = 0; col < cols; ++col) {
    a.push('<td></td>')
  }
  a.push('/<tr>');
}
s = a.join('')
console.log(s);
console.log($('#board'));
$('#board').append(s);

});

