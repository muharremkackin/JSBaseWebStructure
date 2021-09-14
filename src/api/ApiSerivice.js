class ApiService {

    constructor() {
        this.api_url = localStorage.getItem('API_URL');
    }

    getTheaters() {
        let data = fetch(this.api_url+'/theaters').then(response => response.json()).then(data => data);
        return data;
    }

    getMovies() {
        let data = fetch(this.api_url+'/movies').then(response => response.json()).then(data => data);
        return data;
    }

    getMovie(id) {
        let data = fetch(this.api_url+'/movies/' + id).then(response => response.json()).then(data => data);
        return data;
    }

    getTheater(id) {
        let data = fetch(this.api_url+'/theaters/' + id).then(response => response.json()).then(data => data);
        return data;
    }

    getMyTickets() {
        let data = fetch(this.api_url+'/tickets/').then(response => response.json()).then(data => data);
        return data;
    }

}