// Get today's date
const today = new Date();
// Get the current year
const thisYear = today.getFullYear();
// Select the footer element
const footer = document.querySelector('footer');
// Create a new paragraph element
const copyright = document.createElement('p');
// Set the inner HTML to display your name and the current year
copyright.innerHTML = `&copy; ${thisYear} Mariia Yurchenko. All rights reserved.`;
// Append the copyright element to the footer
footer.appendChild(copyright);

// List of technical skills
const skills = ["JavaScript", "HTML", "CSS", "GitHub", "VS Code", "Responsive Design"];
// Select the skills section by id
const skillsSection = document.getElementById('Skills');
// Select the <ul> inside the skills section
const skillsList = skillsSection.querySelector('ul');
// Loop through the skills array and add each skill as a list item
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement('li');
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
