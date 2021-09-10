 const UserName = {
    props: {
      firstName: String,
      lastName: String,
      email: String,
      enterGame: String,
    },
    template: `
      <input 
        type="text"
        :value="firstName"
        @input="$emit('update:firstName', $event.target.value)">
  
      <input
        type="text"
        :value="lastName"
        @input="$emit('update:lastName', $event.target.value)">

        <input
        type="text"
        :value="email"
        @input="$emit('update:email', $event.target.value)">

        <input
        type="text"
        :value="enterGame"
        @input="$emit('update:enterGame', $event.target.value)">
    `
  };
  
  const HelloVueApp = {
    components: {
      UserName,
    },
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        enterGame: '',
      };
    },
  };
  Vue.createApp(HelloVueApp).mount('#customevents')
