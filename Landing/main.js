// Add new field dynamically
function addField(sectionId, placeholder) {
  let section = document.getElementById(sectionId);

  let block = document.createElement("div");
  block.classList.add("block");

  let input = document.createElement("input");
  input.type = "text";

  // Set class based on section
  if(sectionId.includes("education")) input.className = "education";
  if(sectionId.includes("experience")) input.className = "experience";
  if(sectionId.includes("project")) input.className = "project";
  if(sectionId.includes("certification")) input.className = "certification";
  if(sectionId.includes("activity")) input.className = "activity";

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

  // Show delete button for all except first
  let blocks = section.querySelectorAll(".block");
  blocks.forEach((b, index) => {
    let btn = b.querySelector(".delete-btn");
    if (btn) btn.classList.toggle("hidden", index === 0);
  });
}

// Delete field
function deleteField(btn) {
  let block = btn.parentElement;
  let section = block.parentElement;
  block.remove();

  // Keep first block's delete hidden
  let blocks = section.querySelectorAll(".block");
  if (blocks.length > 0) {
    let firstBtn = blocks[0].querySelector(".delete-btn");
    if (firstBtn) firstBtn.classList.add("hidden");
  }
}

// Handle template selection from image click
function selectTemplate(template, imgElement) {
  document.getElementById("templateSelect").value = template;

  // Remove highlight from all images
  let images = document.querySelectorAll(".template-img");
  images.forEach(img => img.classList.remove("selected-template"));

  // Highlight clicked image
  imgElement.classList.add("selected-template");
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

// Open template in new tab when image is clicked
function selectTemplate(template) {
    // Open the template in a new tab
    window.open(template, "_blank");
    
    // Optionally, also select it in the dropdown
    document.getElementById("templateSelect").value = template;
}


document.getElementById("downloadPDF").addEventListener("click", () => {
  const element = document.querySelector(".container"); // Capture your container div
  html2canvas(element, { scale: 2 }).then(canvas => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jspdf.jsPDF('p', 'pt', 'a4');

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  });
});


// Add click event for template images dynamically
window.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".template-img");
  images.forEach(img => {
    img.addEventListener("click", () => selectTemplate(img.dataset.template, img));
  });
});

