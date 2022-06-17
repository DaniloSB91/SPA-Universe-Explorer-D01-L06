export class Router{

    routes = {}

    

    add(nameRoute, page){
        this.routes[nameRoute] = page
        
    }

    route(event){
        event = event || window.event
        event.preventDefault()
        window.history.pushState({},"", event.target.href)
        console.log(event)
        this.handle()
    }

    handle(){
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]
     
        fetch(route)
        .then(data => data.text())
        .then(html => document.querySelector('#content').innerHTML = html)
    }

    change_background(){
        const { pathname } = window.location
        switch( pathname ){
            case "/": document.body.style.backgroundImage = "var(--wallpaper1)";
            break; 
            case "/exploration": document.body.style.backgroundImage = "var(--wallpaper2)";;
            break ;
            case "/universe": document.body.style.backgroundImage = "var(--wallpaper3)";;
            break ;
            default: console.log("404");

        }
        console.log(pathname)

    }


}