const API_URL = 'http://localhost:3000';



localStorage.setItem('API_URL', API_URL);


window.ApiService = new ApiService(API_URL);

const navigation = new Navigation();

Navigation.init();