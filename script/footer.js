var html =[
    '<div class="Mid">',
    '<ul class="SoMe">',
    '<li id="Fb"> <a href="https://www.facebook.com"><img src="img/facebook.png"></a></li>',
    '<li id="instagram"><a href="https://instagram.com"><img src="img/instagram.png"></a></li>',
    '<li id="twitter"><a href="https://twitter.com"><img src="img/twitter.png"></a></li>',
    '</ul></div>',
 
 
].join('');

var div = document.createElement('div');
div.innerHTML = html;
document.getElementById('footer').appendChild(div);
