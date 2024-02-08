import { createRouter, createWebHistory } from "vue-router";
import PersonalityTest from "./pages/PersonalityTest.vue";
import WelcomePage from "./pages/WelcomePage.vue";
import ResultPage from "./pages/ResultPage.vue";

const routes = [
  { path: "/PersonalityTest", component: PersonalityTest },
  { path: "/ResultPage", component: ResultPage },
  { path: "/", component: WelcomePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
