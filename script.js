var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
const msg=document.getElementById("msg");
function opentab(_tabname) {
    for (let tablink of tablinks) {

        tablink.classList.remove("active");
    }
    for (let tabcontent of tabcontents) {

        tabcontent.classList.remove("active-contents");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(_tabname).classList.add("active-contents");


}
var sidemenu= document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}

