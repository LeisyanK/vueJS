const tasks = {
            data() {
                return {
                    tasks: [],
                    title: '',
                }
            },
            methods: {
                addTask() {
                    this.tasks.push({
                        id: Date.now(),
                        title: this.title,
                    });
                    this.title = '';
                },
                removeTask(id) {
                    this.tasks = this.tasks.filter( elem => elem.id !== id);
                },
            },

            template: `
                <input type="text" v-model="title">
                <button @click="addTask">Добавить</button>
                <ul>
                    <li v-for="task in tasks" :key="task.id">{{ task.title }}
                        <button @click="removeTask(task.id)">Удалить</button>
                    </li>                    
                </ul>
            `
            
        }