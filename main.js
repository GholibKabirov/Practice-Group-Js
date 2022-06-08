let tbody = document.querySelector(".tbody");

let add=document.getElementById("add")
let name=document.getElementById("name")
let course=document.getElementById("course")
let age=document.getElementById("age")
let js=document.getElementById("js")
let phone=document.getElementById("phone")
let options = document.getElementsByTagName("option") 

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




const AddUser = async () => {
  let user={
    name: name.value,
    age: age.value,
    course: course.options[course.selectedIndex].value,
    phone: phone.value,
  }
  try {
      const response = await fetch(`https://6270fec46a36d4d62c1fd628.mockapi.io/js`,{
        method:"POST",
        headers:{
          Accepted:"application/json",
          "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
      })
      console.log(response)
      const data = await response.json();
      
       modal.style.display = "none";
      alert(data.massage)
      window.location.reload()
    
    } catch (error) {
    console.log(error) 
  }
}

add.onclick = AddUser









const getUsers = async () => {
  try {
    const response = await fetch("https://6270fec46a36d4d62c1fd628.mockapi.io/js");
    const data = await response.json();
 
    data.forEach((elem) => {
     
     let tr=document.createElement("tr");
     let id=document.createElement("td");
     id.innerHTML=elem.id;
     let name=document.createElement("td");
     name.innerHTML=elem.name
     let age=document.createElement("td");
     age.innerHTML=elem.age;
     let course=document.createElement("td");
     course.innerHTML=elem.course
     let phone=document.createElement("td");
     phone.innerHTML=elem.phone
     let edit=document.createElement("button");
     edit.innerHTML="Edit";


     
  

     tr.appendChild(id)
     tr.appendChild(name)
     tr.appendChild(age)
     tr.appendChild(course)
     tr.appendChild(phone)
     tr.appendChild(edit)

     tbody.appendChild(tr)

    });
 
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

getUsers();



