$(document).ready(function() {
    $.ajax({
      url: 'movies.json',
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        data.forEach(function(movie) {
          var card = `
            <div class="col-md-4 mb-4">
              <div class="card">
                <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
                <div class="card-body">
                  <h5 class="card-title">${movie.title}</h5>
                  <p class="card-text">${movie.plot}</p>
                  <p class="card-text"><small class="text-muted">Director: ${movie.director}</small></p>
                </div>
              </div>
            </div>
          `;
          $('#movies-container').append(card);
        });
      }
    });
  });
  