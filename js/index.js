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

// Handle message form submission
const messageForm = document.forms['leave_message'];
messageForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;
  console.log(usersName, usersEmail, usersMessage);
  // Display message in the list
  const messageSection = document.getElementById('messages');
  const messageList = messageSection.querySelector('ul');
  const newMessage = document.createElement('li');
  newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a>: <span>${usersMessage}</span>`;
  const removeButton = document.createElement('button');
  removeButton.innerText = 'remove';
  removeButton.type = 'button';
  removeButton.addEventListener('click', function() {
    const entry = this.parentNode;
    entry.remove();
    toggleMessagesSection();
  });

  // Create an edit button for each message
  const editButton = document.createElement('button');
  editButton.innerText = 'edit';
  editButton.type = 'button';
  editButton.addEventListener('click', function() {
    const entry = this.parentNode;
    const span = entry.querySelector('span');
    const currentMessage = span.innerText;
    const newMessage = prompt('Edit your message:', currentMessage);
    if (newMessage !== null && newMessage.trim() !== '') {
      span.innerText = newMessage;
    }
  });

  newMessage.appendChild(editButton);
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  toggleMessagesSection();
  // Clear the form after submission
  event.target.reset();
});

// Hide #messages section if the list is empty
function toggleMessagesSection() {
  const messageSection = document.getElementById('messages');
  const messageList = messageSection.querySelector('ul');
  if (messageList.children.length === 0) {
    messageSection.style.display = 'none';
  } else {
    messageSection.style.display = '';
  }
}
// Call on page load
window.addEventListener('DOMContentLoaded', toggleMessagesSection);
