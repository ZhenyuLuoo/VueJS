const app = Vue.createApp({
    data() {
        return {
            detailsAreVisible: false,

            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '980 298 4876',
                    email: 'luoz@appstate.edu',

                },

                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '9802984876',
                    email: 'zhenyuluo0803@gmail.com',
                }
            ],
        }
    },

    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ friend.phone }}</li>
            <li><strong>Email:</strong>{{ friend.email }}</li>
        </ul>
    </li>
    `,
    data() {
        return { 
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '980 298 4876',
                email: 'luoz@appstate.edu',

            }
        };
    },

    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible
        }
    }
});

app.mount('#app');

