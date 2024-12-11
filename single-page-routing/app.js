class Router {
    constructor(routes) {
        this.routes = routes;
        this.init();
    }

    init() {
        window.addEventListener("hashchange", () => this.handleRouteChange());
        this.handleRouteChange();
    }

    handleRouteChange() {
        const currentPath = window.location.hash.slice(1);
        const route = this.routes[currentPath];
        if (route) {
            route();
        } else {
            this.routes["/404"]();
        }
    }
}

// Usage
const router = new Router({
    "/": () => (document.getElementById("root").innerHTML = "Home Page"),
    "/about": () => (document.getElementById("root").innerHTML = "About Page"),
    "/404": () => (document.getElementById("root").innerHTML = "404 Page"),
});
