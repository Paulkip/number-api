var num = document.getElementById('num')
var div = document.getElementById('div')
num.addEventListener('input', getnum)
function getnum(){
    var xhl = new XMLHttpRequest()
    xhl.open('GET','http://numbersapi.com/'+num.value)
    xhl.onload=function(){
        if(this.status==200 && num.value!=""){
            div.innerHTML=this.responseText
        }
    }
    xhl.send()
}