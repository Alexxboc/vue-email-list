/* 
Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/


const app = new Vue ({
    el: '#app',

    data: {

        email: '', // Definisco una proprietà per la singola mail

        emails: [] // Definisco un array vuoto per le mail
    },

    methods: {},

    mounted() {
        
        // Ciclo per generare 10 mail
        for (let index = 0; index < 10; index++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                // console.log(this);
                // console.log(response);
                this.email = response.data.response 
                this.emails.push(this.email) // "Pusho" all'interno dell'array emails le singole mail
            })
            
            // console.log(this.emails);
        }
        
         
     }
            
           
}) 