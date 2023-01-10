import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/home'
// import Authentic from '../components/authentic'
import Daas from '../components/daas'
import DaasCooperate from '../components/daas_cooperate'
import ShuleProject from '../components/the_shule_project.vue'
import AWS from '../components/aws-managed-services.vue'
import AboutUs from "../components/about_us.vue"
import Contactus from "../components/contact_us.vue"
import Faq from "../components/faq.vue"


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  // {
  //   path: "/authentic-anti-counterfeit-solutions",
  //   name: "authentic",
  //   component: Authentic,
  // },
  {
    path: "/aws-managed-services",
    name: "aws",
    component: AWS,
  },
  {
    path: "/device-as-a-service-cooperate",
    name: "daas_cooperate",
    component: DaasCooperate,
  },
  {
    path: "/the-shule-project",
    name: "theShuleProject",
    component: ShuleProject,
  },

  {
    path: "/device-as-a-service-solutions",
    name: "daas",
    component: Daas,
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: Contactus,
  },
  {
    path: "/about-us",
    name: "about-us",
    component: AboutUs,
  },
  {
    path: "/faq",
    name: "faq",
    component: Faq,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});

export default router
