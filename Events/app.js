const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
      // fullname: '',
      lastName: ''
    };
  },

  // Use with data binding, use for data that depends on other data
  computed: {
    fullname() {
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      else {
        return this.name + ' ' + this.lastName;
      }
    }
  },

  // Not used directly in template, allows to run any code in reaction to some changed data(e.g. send HTTP REQUEST ETC.).
  watch: {
    counter(value) {
      if(value > 50) {
        const that = this
        setTimeout(function () {
          that.counter = 0;
        }, 2000)
      }
    }
    // name(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   }
    //   else{
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // },

    // lastName(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   }
    //   else{
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  },

  // Use with event binding or data binding
  methods: {
    outputFullname() {
      if (this.name === '') {
        return '';
      }
      else {
        return this.name + ' ' + 'Lucas';
      }
    },

    setName(event) {
      this.name = event.target.value;
    },

    add(num) {
      this.counter = this.counter + num;
    },

    reduce(num) {
      this.counter = this.counter - num;
    },

    submitForm() {
      alert('Submitted!');
    },

    confirmInput() {
      this.confirmedName = this.name
    },

    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
