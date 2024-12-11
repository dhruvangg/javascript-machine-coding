### 🌐 Building a Simple Routing System in Vanilla JavaScript for SPAs

In the world of Single Page Applications (SPAs), managing routes without a framework can seem daunting. But with Vanilla JavaScript, you can create a simple yet powerful routing system! 🚀

Here’s a quick guide to get you started:

---

### 1️⃣ **Understand the Basics of Routing**

Routing in an SPA involves mapping a URL to a specific view or content. Instead of reloading the page, the app dynamically updates the content based on the URL.

---

### 2️⃣ **Core Concepts**

- **Hash-based Routing**: Uses `window.location.hash` (e.g., `/#/home`). It's simple and doesn't require server configuration.
- **History API**: Leverages `pushState` and `popstate` for cleaner URLs (e.g., `/home`).

---

### 3️⃣ **Steps to Build**

### **Step 1: Set Up Your HTML Structure**

```html
<div id="app">
  <nav>
    <a href="#/">Home</a>
    <a href="#/about">About</a>
    <a href="#/contact">Contact</a>
  </nav>
  <div id="view"></div>
</div>

```

### **Step 2: Create the Router**

```jsx
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

```

---

### 4️⃣ **Enhancements**

- Use the **History API** for cleaner URLs.
- Lazy-load content or templates for better performance.
- Add 404 and fallback routes for improved user experience.

---

### Why Build This Yourself?

- **Deep Understanding**: Learn the mechanics behind routing.
- **Flexibility**: Customize it to your needs without the constraints of a library.
- **Performance**: Avoid the overhead of external dependencies.

---

💡 **Pro Tip**: If you're building a larger app, consider modularizing your code and handling edge cases like query parameters or nested routes.

Implementing routing with Vanilla JS might be simple, but it’s a gateway to understanding more complex frameworks like React Router or Vue Router. 🌟

Have you ever built your own routing system? Share your experience below! 👇

#JavaScript #WebDevelopment #SinglePageApplications #VanillaJS #FrontendDevelopment #LearningByDoing