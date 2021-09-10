var app = new Vue({
    el: '#form',
    data: {
      name: '',
      password: '',
      email: ''
    },
    methods: {
      processForm: function() {
        console.log({ name: this.name, email: this.email })
        alert("values entered:\n" +
              "name: " + this.name + "\n" +
              "Password: " + this.password + "\n" +
              "email: " + this.email);
      }
    }
  });
