const form = document.getElementById('voteForm');
const resultsList = document.getElementById('results');
const message = document.getElementById('message');

function fetchResults() {
  fetch('/results')
    .then(res => res.json())
    .then(data => {
      resultsList.innerHTML = '';
      for (const [party, votes] of Object.entries(data)) {
        if (party !== 'voters') {
          const li = document.createElement('li');
          li.textContent = `${party}: ${votes} votes`;
          resultsList.appendChild(li);
        }
      }
    })
    .catch(() => {
      resultsList.innerHTML = '<li>Error loading results</li>';
    });
}

// Fetch results every 5 seconds
setInterval(fetchResults, 5000);
fetchResults();

form.addEventListener('submit', e => {
  e.preventDefault();
  message.textContent = '';
  
  const formData = new FormData(form);
  const selectedParty = formData.get('party');

  fetch('/vote', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ party: selectedParty }),
  })
    .then(res => res.json())
    .then(data => {
      if(data.success){
        message.style.color = 'lightgreen';
        message.textContent = 'Vote submitted successfully!';
        fetchResults();
      } else {
        message.style.color = 'red';
        message.textContent = data.message || 'You have already voted.';
      }
    })
    .catch(() => {
      message.style.color = 'red';
      message.textContent = 'Error submitting vote.';
    });
});
