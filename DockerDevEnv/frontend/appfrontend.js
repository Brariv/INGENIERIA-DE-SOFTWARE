import { createApp } from 'vue';

// Import Vue and createApp from Vue

// Define a simple Vue component
const App = {
    data() {
        return {
            message: 'Hello, Vue.js!'
        };
    },
    template: `
        <div id="app">
            <h1>{{ message }}</h1>
            <input v-model="message" placeholder="Edit me">
        </div>
    `
};

// Create and mount the Vue app
createApp(App).mount('#app');