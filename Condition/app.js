const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue: '',
      goals: [] 
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      // console.log(this.goals)
    },

    removeGoal(idx) {
      this.goals.splice(idx, 1);
    }
  }
});

app.mount('#user-goals');
