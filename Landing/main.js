// Add new field dynamically
function addField(sectionId, placeholder) {
  let section = document.getElementById(sectionId);

  let block = document.createElement("div");
  block.classList.add("block");

  let input = document.createElement("input");
  input.type = "text";
  input.placeholder = placeholder;

  let delBtn = document.createElement("button");
  delBtn.type = "button";
  delBtn.textContent = "Delete";
  delBtn.classList.add("delete-btn");
  delBtn.onclick = function () {
    deleteField(delBtn);
  };

  block.appendChild(input);
  block.appendChild(delBtn);
  section.appendChild(block);
}

// Delete field
function deleteField(btn) {
  btn.parentElement.remove();
}

// Save form data and redirect to template
function goToTemplate() {
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

  // Save in localStorage
  localStorage.setItem("resumeData", JSON.stringify(formData));

  // Redirect to selected template
  let selected = document.getElementById("templateSelect").value;
  if (selected) {
    window.location.href = selected;
  } else {
    alert("Please select a template first!");
  }
}
