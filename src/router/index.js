import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Question from "../views/Question.vue";

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            { path: '/banjarnese-quiz/', component: Home },
            { path: '/banjarnese-quiz/questionary/', component: Question }
        ] 
    }
)

export default router