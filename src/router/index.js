import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import Portfolios from '@/components/portfolios/Index.vue';
import Blogs from '@/components/blogs/Index.vue';
import Portfolio from '@/components/portfolios/Show.vue';
import Blog from '@/components/blogs/Show.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/portfolios',
    component: Portfolios
  },
  {
    path: '/blogs',
    component: Blogs
  },
  {
    name: 'portfolioShow',
    path: '/portfolio/:id',
    component: Portfolio
  },
  {
    name: 'blogShow',
    path: '/blog/:id',
    component: Blog
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/error',
    component: () => import('@/views/Error.vue')
  },
  {
    path: '/not_found',
    component: () => import('@/views/NotFound.vue')
  },
  {
    // catch all 404 - define at the very end
    path: '*',
    component: () => import('@/views/NotFound.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
