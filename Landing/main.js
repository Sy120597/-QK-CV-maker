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

//   // Add new field dynamically
// function addField(sectionId, placeholder) {
//   let section = document.getElementById(sectionId);

//   // Create wrapper div
//   let block = document.createElement("div");
//   block.classList.add("block");

//   // Create input
//   let input = document.createElement("input");
//   input.type = "text";
//   input.placeholder = placeholder;

//   // Create delete button
//   let delBtn = document.createElement("button");
//   delBtn.type = "button";
//   delBtn.textContent = "Delete";
//   delBtn.classList.add("delete-btn");
//   delBtn.onclick = function () {
//     deleteField(delBtn);
//   };

//   // Append input and delete button
//   block.appendChild(input);
//   block.appendChild(delBtn);

//   // Add new block to section
//   section.appendChild(block);
// }

// // Delete field
// function deleteField(btn) {
//   btn.parentElement.remove();  // remove the block div
// }


  // Save data in localStorage
  localStorage.setItem("resumeData", JSON.stringify(formData));

  // Redirect to template page
  window.location.href = "temp1.html";
  window.location.href = "temp2.html";
});
