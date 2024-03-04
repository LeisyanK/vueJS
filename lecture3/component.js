Vue.component('new-component', {
    props: ['title'],
    data() {
        return {
            // title: 'Title',
        }
    },

    template: `
        <div>
            <h3>{{title}}</h3>
            <p>Новый шаблон для vue</p>
        </div>
        `,
});

Vue.component('new-component2', {
    props: ['title', 'counter'],
    data() {
        return {
            // title: 'Title',
        }
    },

    template: `
        <div>
            <h3>{{title}}</h3>
            <p>Новый шаблон для vue</p>
            <p>counter click {{ counter }}</p>
            <button @click="$parent.counter++">+1</button>
        </div>
        `,
});

Vue.component('new-component3', {
    props: ['title'],
    data() {
        return {
            // title: 'Title',
            counter2: 0,
        }
    },

    methods: {
        increase(step) {
            this.counter2 += step;
        }
    },

    template: `
        <div>
            <h3>{{title}}</h3>
            <p>counter click {{ counter2 }}</p>
            <button @click="increase(1)">+1</button>
        </div>
        `,
});

const compItem = {
    name: 'comp-item',
    template: `<p>item info</p>`
}

Vue.component('new-component4', {
    props: ['title'],
    data() {
        return {
            // title: 'Title',
            counter2: 0,
        }
    },

    components: {
        'comp': compItem,
    },

    methods: {
        increase(step) {
            this.counter2 += step;
        }
    },

    template: `
        <div>
            <h3>{{title}}</h3>
            <comp></comp>
            <p>counter click {{ counter2 }}</p>
            <button @click="increase(2)">+2</button>
        </div>
        `,
});

Vue.component('standart-component', {
    data() {
        return { message: 'text message' }
    },
    methods: {
        newInfo() {
            console.log('hello methods');
        }
    },
    computed: {
        newComp() {
            return this.message;
        }
    },
    template: '<h2>Standart template</h2>'
})