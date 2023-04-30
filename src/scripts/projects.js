
$.getJSON('src/data/projects.json', function(data) {
    const cardsHtml = data.map(item => `
      <div class="card mb-4 text-bg-dark">
        <div class="card-header">
          ${item.technology}
        </div>
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.description}</p>
          <a href="#" class="btn btn-outline-primary px-5">More</a>
        </div>
      </div>
    `).join('');
  
    $('#projectsContainer').html(cardsHtml);
  })
  .fail(function(error) {
    console.error(error);
  });
  