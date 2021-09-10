Vue.component('child-component', {
    template: '#child-component',
    data() {
        return {
          childTitle: 'title from child component',
          childSubtitle: 'subtitle from child component'
        }
    },
    props:{
      subtitle: {
        type: String,
        required: true
      }
    }
  })
  
  new Vue ({
    el: '#namedslots',
    data() {
        return {
          title: 'Welcome to Disney Foods',
          subtitle: 'Have a magical experience'
      }
    }
  });
