function loadjson(file){
    return new Promise((resolve,reject)=>{
        return fetch(file).then(response=>{
            if(response.ok){
                resolve(response.json());
            }else{
                reject(new Error('error'));
            }
        })
    })
}
var newfile=loadjson("project4.json");
newfile.then(project4=>{
    console.log(project4);
    basic1(project4.details1);
    basic2(project4.details2);
    
})
var child1=document.querySelector('.child1');

function basic1(det){
var img1=document.createElement("img");
img1.src=det.image1;
child1.appendChild(img1);

var name=document.createElement("h3");
name.textContent=det.Name;
child1.appendChild(name);

var email=document.createElement("a");
email.href="mailto:buddanasubhakar@gmail.com";
email.textContent=det.email;
child1.appendChild(email);

var number=document.createElement("h6");
number.textContent=det.phoneNumber;
child1.appendChild(number);
    
var prof=document.createElement("h6");
prof.textContent=det.Profession;
child1.appendChild(prof);

var address=document.createElement("h6");
address.textContent=det.address;
child1.appendChild(address);

child1.appendChild(document.createElement("hr"));
    
var pagelink=document.createElement("button");
pagelink.textContent=det.resume;
pagelink.setAttribute("class","btn");
pagelink.classList.add("class","btn-info");
pagelink.addEventListener("click",resume);
child1.appendChild(pagelink);
function resume() {
window.location='project2.html';
    }
    


}



var child2=document.querySelector('.child2');

function basic2(det){
var img1=document.createElement("img");
img1.src=det.image2;
child2.appendChild(img1);

var name=document.createElement("h4");
name.textContent=det.Name;
child2.appendChild(name);

var email=document.createElement("a");
email.href="mailto:buddanasubhakar@gmail.com";
email.textContent=det.email;
child2.appendChild(email);
function myFunction() {
  document.getElementById("email").size = "50";
}

var number=document.createElement("h6");
number.textContent=det.phoneNumber;
child2.appendChild(number);
    
var prof=document.createElement("h6");
prof.textContent=det.Profession;
child2.appendChild(prof);

var address=document.createElement("h6");
address.textContent=det.address;
child2.appendChild(address);

child2.appendChild(document.createElement("hr"));
    
var pagelink=document.createElement("button");
pagelink.textContent=det.resume;
pagelink.setAttribute("class","btn");
pagelink.classList.add("class","btn-info");
pagelink.addEventListener("click",resume);
child2.appendChild(pagelink);
function resume() {
window.location='project3.html';
    }
    

}


