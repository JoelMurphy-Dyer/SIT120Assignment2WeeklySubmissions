const { createApp } = Vue;
const app = createApp({
  data() {
    return {
        title: "My Todo List",
        todoLists:[
            { id: '0', text: "Grocery shopping", checked: true },
            { id: '1', text: "Exercise", checked: true },
            { id: '2', text: "Reading", checked: false },
            { id: '3', text: "Revision", checked: false },
            { id: '4', text: "Study", checked: true }
          ]
        };
      },
    methods: {
        toggleItems(todoItems) {
            todoItems.checked = !todoItems.checked
        }
    }
});
app.mount("#app");




  
