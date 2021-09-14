class Navigation {
    constructor() {
        this.pages = [
            {
                title: 'Theaters',
                url: 'theaters'
            }, 
            {
                title: 'Movies',
                url: 'movies',
            },
            {
                title: 'My Tickets',
                url: 'tickets'
            }
        ]
    }
    
    init() {
        this.renderMenuLinks();
        this.createMenuEvents();
    }

    initTheaterPage() {
        let theater = new Theater();

        let data = theater.initIndexPage();

        this.renderTheaterPage(data);
    }

    renderTheaterPage(data) {
        let page = document.querySelector('data-page="Theaters"');


        page.innerHTML = data;
    }

    renderMenuLinks() {
        let container = `<div>`;
        let self = this;
        let data = this.pages.map(function (element, index) {
            return self.renderMenuLink(element.url, element.title)
        });

        container += data.join('');

        container += '</div>'
        let menu =  document.querySelector('[data-type="Menu"]');

        menu.innerHTML();

    }

    renderMenuLink(url, title,) {
        return `<a href="javascript:;" data-url="${url}">${title}</a>`
    }

    createMenuEvents() {
        let self = this;
        let links = document.querySelectorAll('[data-url]').forEach(function(element, index) {
           element.addEventListener('click', function() {
                self.closeActivePage();
                switch(this.dataset.url) {
                    case 'theaters':
                        let page = new Theater();
                        page.initIndexPage();
                    break;
                    case 'movies':
                        let page = new Movies();
                        page.initIndexPage();
                    break;
                    case 'tickets':
                        let page = new Tickets();
                        page.initIndexPage();
                    break;
                }
           });
        });
    }

    closeActivePage() {
         document.querySelector('[data-page]').innerHTML = '';
    }
}