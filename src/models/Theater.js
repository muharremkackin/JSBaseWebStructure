class Theater {

    constructor() {
        this.theaters = window.ApiService.getTheaters();
    }

    initIndexPage() {
        let container = `<div data-list="Theaters">`;


        let cards = this.theaters.map(function(element, index) {
            return `<div data-type="Card">
                <h1>${element.theaterName}</h1>

            </div>`
        });

        container += cards.join('');

        container += `</div>`


        document.querySelector('[data-page]').innerHTML = container;
    }


    initDetailPage(id) {
        let theater = window.ApiService.getTheater(id)
    }

}