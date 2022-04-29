/* 
Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/


const app = new Vue ({
    el: '#app',

    data: {

        email: '',

        emails: []
    },

    methods: {},

    mounted() {
        
        for (let index = 0; index < 10; index++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                // console.log(this);
                // console.log(response);
                this.email = response.data.response
                this.emails.push(this.email)
            })
            
            // console.log(this.emails);
        }
        
         
     }
            
           
}) 