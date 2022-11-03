const input = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const main_grid_title = document.querySelector('.favorites h1');
const main_grid = document.querySelector('.favorites .movies-grid');
const trending_el = document.querySelector('.trending .movies-grid');
const trending_shows_el = document.querySelector('.trending-shows .movies-grid');




//const url = 'https://api.themoviedb.org/3/movie/550?api_key=d7c8812f380f314f2279049c78d11532';
const imageUrl = 'https://image.tmdb.org/t/p/w1280/'
const API_KEY = `d7c8812f380f314f2279049c78d11532`;

	
get_trending_movies("movie");
async function get_trending_movies (type) {
    const resp = await fetch(`https://api.themoviedb.org/3/trending/${type}/day?api_key=${API_KEY}`);
  
    const respData = await resp.json();
      console.log(respData);
    return respData.results;
}

display_trending("movie", trending_el);
async function display_trending (type, container) {
	container.innerHTML = '<div class="loader"></div>';
    const data = await get_trending_movies(type);
    container.innerHTML = data.slice(0, 8).map(e => {
    	let title = release_date = '';
    	if(type == "tv") { 
    		title = e.name; 
    		release_date = e.first_air_date; 
    	} else { 
    		title = e.title ;
    		release_date = e.release_date;
    	}
        return `
            <div class="card" data-id="${e.id}" data-type="${type}">
                <div class="img">
                    <img src="${imageUrl+ e.poster_path}">
                </div>
                <div class="info">
                    <h2>${title}</h2>
                    <div class="single-info">
                        <span>Rate: </span>
                        <span>${e.vote_average} / 10</span>
                    </div>
                    <div class="single-info">
                        <span>Release Date: </span>
                        <span>${release_date}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}