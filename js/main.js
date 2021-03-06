var app = new Vue({
    el: '#root',
    data: {
        selectedContact: 0,
        myMessage: (""),
        search: (""),
        menuOpen: false,
        contacts: [{
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'No madre, lo ucciderò. Così è deciso.',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Beh... Se preferisci il cibo a me allora fuck, non ti chiederò mai più di uscire. Cordiali saluti.',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Luisa/o',
                avatar: '_4',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:52:00',
                        text: 'Okay scusa se esisto',
                        status: 'sent'
                    },
                ],
            },
        ]
    },
    created: function() {

    },
    methods: {
        findContact(search) {
            this.contacts.forEach((contact) => {
                if (contact.name.toLowerCase().includes(search.toLowerCase())) {
                    contact.visible = true;
                } else {
                    contact.visible = false;
                }
            });
        },
        clickContact(index) {
            this.selectedContact = index;
        },
        addMessage() {
            if (this.myMessage != "") {
                var mex = {
                    date: dayjs().format('DD MM YYYY H:mm'),
                    text: this.myMessage,
                    status: 'sent'
                };
                this.contacts[this.selectedContact].messages.push(mex);
                this.myMessage = ("");
                this.rispostaSimulata();
            }
        },
        rispostaSimulata() {
            setTimeout(() => {
                this.CPUreply();
            }, 1000)
        },
        CPUreply() {
            var CPUmex = {
                date: dayjs().format('DD MM YYYY H:mm'),
                text: 'Ok',
                status: 'received',
            };
            this.contacts[this.selectedContact].messages.push(CPUmex);
        },
        /* deleteMex() {

        } */
    }
});
Vue.config.devtools = true;