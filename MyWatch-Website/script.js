fetch('anime-data.json')
  .then(response => response.json())
  .then(data => {
      const animeContainer = document.getElementById('anime-list');
      
      data.anime.forEach(series => {
          let seriesDiv = document.createElement('div');
          seriesDiv.classList.add('anime-series');
          
          let title = document.createElement('h2');
          title.textContent = series.title;
          seriesDiv.appendChild(title);
          
          let episodeList = document.createElement('ul');
          series.episodes.forEach(ep => {
              let episodeItem = document.createElement('li');
              let episodeLink = document.createElement('a');
              episodeLink.href = ep.link;
              episodeLink.textContent = `Episode ${ep.episode}`;
              episodeItem.appendChild(episodeLink);
              episodeList.appendChild(episodeItem);
          });
          seriesDiv.appendChild(episodeList);
          
          animeContainer.appendChild(seriesDiv);
      });
  })
  .catch(error => console.error('Error loading anime data:', error));
