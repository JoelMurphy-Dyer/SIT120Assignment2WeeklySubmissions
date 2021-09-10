var props = new Vue({
    el: '#props',
    data: {
        message: "What games do you like?",
    },
    components: {
        "games": {
            props: ["message"],
            data: function () {
                return { name: "Joel"};
            },
            template: "<div>{{ message }}, {{ name }}</div>",
        }
    }
});
