function run() {
    new Vue({
      el: '#update',
      data: {
        id: '',
        message: '',
          contrgogg: {}
      },
      created: function () {

        let uri = window.location.search.substring(1);
        let params = new URLSearchParams(uri);
        this.id = params.get("id");

        axios.get('http://localhost:3000/contrgoggs/'+this.id).then(
            (response) => {
                this.contrgogg = response.data;
            }
        );
      },
      methods: {
        update: function(){
            console.dir(this.contrgogg);

            return axios.post('http://localhost:3000/contrgoggs', this.contrgogg).then(
                (response) => {
                    this.message = response.data; // saved
                }
            );


        }
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    run();
  });
  