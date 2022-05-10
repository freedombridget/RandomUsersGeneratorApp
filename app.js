const app = vue.createApp({
    //template: '<h1>Hello {{firstname}} </h1>',
    data(){
        return{
            firstname:'John',
            lastname: 'James',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },

    methods: {
        getUser(){
            console.log(this.firstname)
        }
    }
})

app.mount('#app')



