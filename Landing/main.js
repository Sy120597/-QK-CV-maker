document.querySelector(".tempuBtn").addEventListener("click", function () {
  // Collect form data
  const formData = {
    name: document.getElementById("name").value,
    contact: document.getElementById("contact").value,
    gmail: document.getElementById("gmail").value,
    portfolio: document.getElementById("portfolio").value,
    linkedin: document.getElementById("linkedin").value,
    github: document.getElementById("github").value,
    about: document.getElementById("about").value,
    education: Array.from(document.querySelectorAll(".education")).map(e => e.value),
    experience: Array.from(document.querySelectorAll(".experience")).map(e => e.value),
    project: Array.from(document.querySelectorAll(".project")).map(e => e.value),
    certification: Array.from(document.querySelectorAll(".certification")).map(e => e.value),
    activity: Array.from(document.querySelectorAll(".activity")).map(e => e.value),
  };

  // Save data in localStorage
  localStorage.setItem("resumeData", JSON.stringify(formData));

  // Redirect to template page
  window.location.href = "temp1.html";
  window.location.href = "temp2.html";
});
