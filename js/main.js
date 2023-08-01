var bookarray=[];
var bookname=document.getElementById('bookname');
var siteurl=document.getElementById('siteurl')
if(localStorage.getItem("books")!=null){
    bookarray=JSON.parse(localStorage.getItem('books'));
    displaybooks();
}
function submiturl(){
    var bookobject={
        name:bookname.value,
        websiteurl:siteurl.value,
    }
    // if(checkdata(siteurl.value)==true){
    //     bookarray.push(bookobject);
    //     localStorage.setItem("books",JSON.stringify(bookarray));
    //     displaybooks();
    //     clear();
    // }
    // else{
    //     Window.alert("please,Eneter valid URL");
    // }
    bookarray.push(bookobject);
        localStorage.setItem("books",JSON.stringify(bookarray));
        displaybooks();
        clear();
}
function displaybooks(){
    var book=``;
    for(var i=0;i<bookarray.length;i++){
        book+=`
        <tr>
        <td>${i+1}</td>
        <td>${bookarray[i].websiteurl}</td>
        <td><button onclick="visiteurl()" class="btn btn-success"><i class="fa-solid fa-eye me-2"></i>Viste</button></td>
        <td><button onclick="Deletebook(${i})"class="btn btn-danger"><i class="fa-solid fa-trash me-2"></i>Delete</button></td>
    </tr>
        `
    }
    document.getElementById('demo').innerHTML=book;
}
function clear(){
    document.getElementById('bookname').value="";
    document.getElementById('siteurl').value="";
}
function Deletebook(index){
    bookarray.splice(index,1)
    localStorage.setItem("books",JSON.stringify(bookarray));
    displaybooks();
}
function visiteurl(){
    for(var i=0;i<bookarray.length;i++){
        window.open(bookarray[i].websiteurl)
    }   
}
function checkdata(input){
    var name=/^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?$/
    return rexhttp.test(input)
}
