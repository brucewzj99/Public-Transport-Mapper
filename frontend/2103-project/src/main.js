import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import  { reactive } from 'vue'

import { BootstrapVue3 } from 'bootstrap-vue-3'

// // Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// // Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)

export const store = reactive({

    query: String,
    busServices: [],
    busRoutes: [],
    operators: [
        {
            name: "SBST"
        },
        {
            name: "TTS"
        },
        {
            name: "SMRT"
        },
        {
            name: "GAS"
        }
    ],
    category: [
        {
            name: "TRUNK"
        },
        {
            name: "EXPRESS"
        },
        {
            name: "FEEDER"
        },
        {
            name: "INDUSTRIAL"
        },
        {
            name: "CITY_LINK"
        }
    ],
    day: [
        {
            name: "Weekday"
        },
        {
            name: "Saturday"
        },
        {
            name: "Sunday"
        },
    ],
    BACKEND_API_URL: "http://localhost:3000/api/",
})

const app = createApp(App)
app.use(router)
app.use(BootstrapVue3)

app.mount('#app')
