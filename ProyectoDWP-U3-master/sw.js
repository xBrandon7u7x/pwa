const STATIC_CACHE = "static";

const APP_SHELL =[
    "/",
    "./index.html",
    "./components/header/header.css",
    "./components/header/Header.jsx",
    "./components/post/post.css",
    "./components/post/Post.jsx",
    "./components/posts/posts.css",
    "./components/posts/Posts.jsx",
    "./components/sidebar/sidebar.css",
    "./components/sidebar/Sidebar.jsx",
    "./components/singlePost/singlePost.css",
    "./components/singlePost/singlePost.jsx",
    "./components/topbar/topbar.css",
    "./components/topbar/Topbar.jsx",
    "./node_modules",
    "./context/Actions.js",
    "./context/Context.js",
    "./context/Reducer.js",
    "./pages/category/category.css",
    "./pages/category/Category.jsx",
    "./pages/home/home.css",
    "./pages/home/Home.jsx",
    "./pages/login/login.css",
    "./pages/login/Login.jsx",
    "./pages/profile/profile.css",
    "./pages/profile/Profile.jsx",
    "./pages/register/register.css",
    "./pages/register/Register.jsx",
    "./pages/settings/settings.css",
    "./pages/settings/Settings.jsx",
    "./pages/single/single.css",
    "./pages/single/Single.jsx",
    "./pages/write/write.css",
    "./pages/write/Write.jsx",
    "./App.js",
    "./main.js",
    "./index.js",
    "./yarn.lock"
];

self.addEventListener("install", (e) =>{
    console.log("entrando a instalar");
    const cacheStatic = caches
        .open(STATIC_CACHE)
        .then((cache) => cache.addAll(APP_SHELL));

    e.waitUntil(cacheStatic);
});
self.addEventListener("fetch", (e) => {
    console.log("fetch! ", e.request);

    e.respondWith(
        caches
            .match(e.request)
            .then(res => res || fetch(e.request))
            .catch(console.log)
    );
});

serviceWorker.register();