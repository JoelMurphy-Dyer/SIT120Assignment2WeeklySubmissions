// Local component 
var localComponent = new Vue({
    el: '#localcomponent',
    components: {
            "local-component": {
            template: "<h1>Welcome to Disney foods, I hope you enjoy the food and have an amazing time.</h1>",
        }
    }
});

Vue.component('child',{
    props: {
      text: {
        type: String,
        required: true
      }
    },
    template: `<div>{{ text }}</div>`
  });

// Props for description
  new Vue({
    el: '#app',
    data() {
      return {
        message: 'Disney foods is here to provide joy for everyone and all ages, we hope you enjoy this disney themed website and our amazing food from your favourite disney movies.'
      }
    }
  })

// The java for the contact us form

// Assigning data/values 
function validation(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;

// error message padding
    error_message.style.padding = "10px";

// name.length cannot be shorter than 1 character
    if(name.length <1){
        text = "Please Enter Valid Name"; // Error message displayed if name is shorter than 1 character
        error_message.innerHTML = text;
        return false;
    }

// subject.length has to be more than two characters
    if(subject.length <2){
        text = "Please Enter Correct Subject"; // This message will pop up when it is shorter than 2 characters
        error_message.innerHTML = text;
        return false;
    }

// phone.length has to be 10 numbers
    if(isNaN(phone) || phone.length != 10){
        text = "Please Enter a Valid Phone Number"; // if number is less than 10 numbers it will give this error
        error_message.innerHTML = text;
        return false;
    }

// email has to contain an @ and it has to be longer than 6 characters 
    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter a Valid Email"; // If it doesn't contain any one of these it will give this error
        error_message.innerHTML = text;
        return false;
    }

// message.length has to be 10 characters 
    if(message.length <= 10){
        text = "Please Enter More Than 10 Characters"; // if it isn't then this message will pop up
        error_message.innerHTML = text;
        return false;
    }
    
// Submission prompt
    alert("Submitted Successfully!") // Message pop up of when the form is submitted correctly
    return true;
}
