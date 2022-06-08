let add=document.getElementById("add")
let name=document.getElementById("name")
let surname=document.getElementById("surname")
let age=document.getElementById("age")
let tbody=document.getElementById("tbody")

console.log(add)


const AddUser = async () => {
    let user={
      name: name.value,
      surname: surname.value,
      age: age.value,
    }
    console.log(1)
    try {
        const response = await fetch(`https://629313c4089f87a57ab93ab8.mockapi.io/mark`,{
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
  
  
  
  function delet(id){
      try {
        const response = await fetch(`https://629313c4089f87a57ab93ab8.mockapi.io/mark`,{
            method:"DELETE",
            body:JSON.stringify(mark)
          })
          console.log(response)
          const data = await response.json();
          window.location.reload()
             
      } catch (error) {
          
      }
  }
  
  
  
  const getUsers = async () => {
    try {
      const response = await fetch("https://629313c4089f87a57ab93ab8.mockapi.io/mark");
      const data = await response.json();
   
      data.forEach((elem) => {
       
       let tr=document.createElement("tr");
       let id=document.createElement("td");
       id.innerHTML=elem.id;
       let name=document.createElement("td");
       name.innerHTML=elem.name
       let surname=document.createElement("td");
       surname.innerHTML=elem.surname;
       let age=document.createElement("td");
       age.innerHTML=elem.age
       let delet=document.createElement("button")
       delet.innerHTML="Delet"
       let edit=document.createElement("button");
       edit.innerHTML="Edit";
       
    delet.onclick(elem.id)
  
       
    
  
       tr.appendChild(id)
       tr.appendChild(name)
       tr.appendChild(surname)
       tr.appendChild(age)
       tr.appendChild(edit)
       tr.appendChild(delet)
       
       tbody.appendChild(tr)
  
      });
   
      
    } catch (error) {
      console.error(error);
    }
  };
  
  getUsers();
  
  
  
  