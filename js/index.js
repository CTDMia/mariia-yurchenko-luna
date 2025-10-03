// Get today's date
const today = new Date();
// Get the current year
const thisYear = today.getFullYear();

// Add copyright to the footer and style it
const footer = document.querySelector('footer');
footer.classList.add('site-footer');
footer.innerHTML = `&copy; ${new Date().getFullYear()} Mariia Yurchenko`;

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
  event.preventDefault(); // Prevent page refresh
  // Get and trim form values
  const usersName = event.target.usersName.value.trim();
  const usersEmail = event.target.usersEmail.value.trim();
  const usersMessage = event.target.usersMessage.value.trim();
  // Validate required fields
  if (!usersName || !usersEmail || !usersMessage) {
    console.error('All fields are required');
    return;
  }
  // Validate email format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usersEmail)) {
    console.error('Invalid email format');
    return;
  }
  // Log form values (for debugging)
  console.log(usersName, usersEmail, usersMessage);
  // Display message in the list
  const messageSection = document.getElementById('messages');
  const messageList = messageSection.querySelector('ul');
  const newMessage = document.createElement('li');
  newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a>: <span>${usersMessage}</span>`;
  // Add remove button
  const removeButton = document.createElement('button');
  removeButton.innerText = 'remove';
  removeButton.type = 'button';
  removeButton.addEventListener('click', function() {
    const entry = this.parentNode;
    entry.remove();
    toggleMessagesSection(); // Update section visibility
  });
  // Add edit button (pre-fills form for editing)
  const editButton = document.createElement('button');
  editButton.innerText = 'edit';
  editButton.type = 'button';
  editButton.addEventListener('click', function() {
    const entry = this.parentNode;
    const span = entry.querySelector('span');
    const currentMessage = span.innerText;
    // Pre-fill the form for editing
    messageForm.usersMessage.value = currentMessage;
    // Handler for updating the message
    function editHandler(event) {
      event.preventDefault();
      const newMessage = event.target.usersMessage.value.trim();
      if (newMessage) {
        span.innerText = newMessage;
        event.target.reset();
        messageForm.removeEventListener('submit', editHandler);
      }
    }
    // Listen for the next submit to update the message
    messageForm.addEventListener('submit', editHandler, { once: true });
  });
  newMessage.appendChild(editButton);
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  toggleMessagesSection(); // Update section visibility
  event.target.reset(); // Clear form
});

// Hide #messages section if empty
function toggleMessagesSection() {
  const messageSection = document.getElementById('messages');
  const messageList = messageSection.querySelector('ul');
  messageSection.classList.toggle('hidden', messageList.children.length === 0);
}
// Initialize on page load
window.addEventListener('DOMContentLoaded', toggleMessagesSection);
