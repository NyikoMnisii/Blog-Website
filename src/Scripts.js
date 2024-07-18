document.querySelector('.search-bar').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      const query = event.target.value;
      window.location.href = `/search?q=${query}`;
    }
  });
  