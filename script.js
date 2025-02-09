document.addEventListener('DOMContentLoaded', function() {
    // Selecting menu links and forms
    const pathologistLink = document.getElementById('pathologistLink');
    const patientLink = document.getElementById('patientLink');
    const testLink = document.getElementById('testLink');
    const doctorLink = document.getElementById('doctorLink');
  
    const pathologistForm = document.getElementById('pathologistForm');
    const patientForm = document.getElementById('patientForm');
    const testForm = document.getElementById('testForm');
    const doctorForm = document.getElementById('doctorForm');
  
    // Event listeners for menu links
    pathologistLink.addEventListener('click', function(event) {
      event.preventDefault();
      showForm(pathologistForm);
    });
  
    patientLink.addEventListener('click', function(event) {
      event.preventDefault();
      showForm(patientForm);
    });
  
    testLink.addEventListener('click', function(event) {
      event.preventDefault();
      showForm(testForm);
    });
  
    doctorLink.addEventListener('click', function(event) {
      event.preventDefault();
      showForm(doctorForm);
    });
  
    // Function to show a form and hide others
    function showForm(form) {
      const allForms = [pathologistForm, patientForm, testForm, doctorForm];
      allForms.forEach(f => f.classList.add('hidden'));
      form.classList.remove('hidden');
    }
  
    // Event listeners for form submissions
    pathologistForm.addEventListener('submit', function(event) {
      event.preventDefault();
      submitForm(pathologistForm, '/pathologist');
    });
  
    patientForm.addEventListener('submit', function(event) {
      event.preventDefault();
      submitForm(patientForm, '/patient');
    });
  
    testForm.addEventListener('submit', function(event) {
      event.preventDefault();
      submitForm(testForm, '/test');
    });
  
    doctorForm.addEventListener('submit', function(event) {
      event.preventDefault();
      submitForm(doctorForm, '/doctor');
    });
  
    // Function to handle form submissions
    function submitForm(form, endpoint) {
      // Show success message immediately after the button is clicked
      alert('Data successfully saved');
  
      const formData = new FormData(form);
      fetch(endpoint, {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Response:', data);
        if (data.error) {
          throw new Error(data.error);
        }
        console.log('Form submitted successfully');
        form.reset();
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error submitting form. Please try again.'); // Display an error message
      });
    }
  });