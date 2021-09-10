// Registration for a global component 
Vue.component("global-component", {
    template: "<h2>This is how global components work</h2>",  
});

// Global
var globalComponent = new Vue({
     el: '#globalcomponent',
     data: {
        message: "You can see this message because it has worked",
    }
});

// Local
var localComponent = new Vue({
    el: '#localComponent',
    components: {
            "local-component": {
            template: "<h1>If you see this message the local component is working</h1>",
        }
    }
});
