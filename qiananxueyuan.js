/**
 * Created by user on 16-11-16.
 */
window.onload=function () {
    var ul=document.getElementById("ul");
    var li=ul.getElementsByTagName("li");
    var div=document.getElementsByClassName("pic");
    for(var i=0;i<li.length;i++){
        li[i].index=i;
        li[i].onmouseover=function () {
//                    alert(this.index);
            for(var i=0;i<li.length;i++){
                div[i].style.display="none";
                li[i].className="";
            }
            li[this.index].className="active";
            div[this.index].style.display="block";



        }
        li[i].onmouseout=function () {
//                    alert(this.index);
            for(var i=0;i<li.length;i++)
                li[i].className="";
            div[this.index].style.display="none";

        }

    }
}