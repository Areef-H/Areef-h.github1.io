function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_tesw75n";
  const templateID = "template_3krnx29";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));
}

function handleClick() {
window.location.href="front.html";
}
function handle1Click() {
window.location.href="About.html";
}
function handle2Click() {
window.location.href="project.html";
}
function handle3Click() {
window.location.href="contact.html";
}
