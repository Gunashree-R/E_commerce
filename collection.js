var productcont = document.getElementById("n");
var search = document.getElementById("search");
var productlist = productcont.querySelectorAll("div");
search.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase();
    for(i=0;i<productlist.length;i=i+1)
    {
        var productname = productlist[i].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[i].style.display="none"
        }
        else{
            productlist[i].style.display="block"
        }
    }
})
function myfunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
