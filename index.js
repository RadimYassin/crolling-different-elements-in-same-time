var s1 = document.getElementById('select1');
var s2 = document.getElementById('select2');

function select_scroll_1(e) { s2.scrollTop = s1.scrollTop; }
function select_scroll_2(e) { s1.scrollTop = s2.scrollTop; }

s1.addEventListener('scroll', select_scroll_1, false);
s2.addEventListener('scroll', select_scroll_2, false);