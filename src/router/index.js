import Vue from 'vue'
import VueRouter from 'vue-router'
import BurdahScreenComponent from "@/components/screen/BurdahScreenComponent.vue";
import HomeScreen from "@/components/screen/HomeScreen.vue";
import YasinFadhilahScreenComponent from "@/components/screen/YasinFadhilahScreenComponent.vue";
import QasidahMuhammadiyahScreenComponent from "@/components/screen/QasidahMuhammadiyahScreenComponent.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: HomeScreen
  },
  {
    path: '/burdah',
    name: 'burdah',
    component: BurdahScreenComponent
  },
  {
    path: '/yasin-fadhilah',
    name: 'yasinFadhilah',
    component: YasinFadhilahScreenComponent
  },
  {
    path: '/qasidah-muhammadiyah',
    name: 'qasidahMuhammadiyah',
    component: QasidahMuhammadiyahScreenComponent
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: 'burdah-fe',
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
