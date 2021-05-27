function run() {
  let indexComponent = new Vue({
    el: '#app',
    data: {
      contrgoggs: [],
      usersService: null,
      message: ''
    },
    created: function () {
      this.usersService = users();
      this.usersService.get().then(response => (this.contrgoggs = response.data));
    },
    methods: {
      removeContrgogg: function(id) {
        console.log('HTTP DELETE spre backend, controller or goggles: '+id);
        this.usersService.remove(id).then(response => {
          this.usersService.get().then(response => (this.contrgoggs = response.data));
        });
      },
    }
  });

  indexComponent.use(VueMaterial);

}

document.addEventListener('DOMContentLoaded', () => {
  run();
});
