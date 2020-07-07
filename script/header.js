var html = [
    '<div id="myHeader" class="navHeader">',
    '<ul class="navbar">',
    '<li id = "meny"><a href="meny.html">MENY</a></li>',
    '<li id = "booking"><a href="form.html">BOOKING</a></li>',
    '<li id = "events"><a href="events.html">EVENTS</a></li>',
    '<li id = "om_oss"><a href="omoss3.html">OM OSS</a></li>',
    '</ul>',
    '<div id="logo"><a href="forside.html"> <img src="img/logo.jpg" id="logopicture"></a></div>',
    '<div id="newlogo"><a href="forside.html"> <img src="img/logo.jpg" id="newlogopicture"></a></div>', //remove if neccessary.
    '</div>',
    
    
].join('');

var div = document.createElement('div');
    div.innerHTML = html;
document.getElementById('navbar').appendChild(div);



 /* Shrinking the logo when scrolling further than 80px */
window.onscroll = function() {shrinkLogo()
                             };


function shrinkLogo() {
    if (window.innerWidth > 800) { // Logo will shrink when windows are bigger than width 800px.
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) { // starts shrinking the logo when user has scrolled more than 80px from the top of the document.
            document.getElementById("logopicture").style.height = "60px";
            document.getElementById("logopicture").style.padding = "0px 0px 0px 50px";
        } else {
            document.getElementById("logo").style.height = "150px";
            document.getElementById("logopicture").style.height = "150px";
            document.getElementById("logopicture").style.padding = "0px 10px 0px 0px";
        }
    } 
}





