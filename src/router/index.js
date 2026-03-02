import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/my-portfolio',
            component: AppLayout,
            children: [
                // --- Dashboard
                {
                    path: '/my-portfolio',
                    name: 'portfolio',
                    component: () => import('@/views/Dashboard.vue')
                },

                // --- Profile Pages
                {
                    path: '/my-portfolio/about',
                    name: 'about',
                    component: () => import('@/views/pages/profile/About.vue')
                },
                {
                    path: '/my-portfolio/skills',
                    name: 'skills',
                    component: () => import('@/views/pages/profile/Skills.vue')
                },
                {
                    path: '/my-portfolio/experience',
                    name: 'experience',
                    component: () => import('@/views/pages/profile/Experience.vue')
                },
                {
                    path: '/my-portfolio/education',
                    name: 'education',
                    component: () => import('@/views/pages/profile/Education.vue')
                },

                // --- Work Pages
                {
                    path: '/my-portfolio/projects',
                    name: 'projects',
                    component: () => import('@/views/pages/work/Projects.vue')
                },
                {
                    path: '/my-portfolio/certificates',
                    name: 'certificates',
                    component: () => import('@/views/pages/work/Certificates.vue')
                },
                {
                    path: '/my-portfolio/clients',
                    name: 'clients',
                    component: () => import('@/views/pages/work/Clients.vue')
                },

                // --- Contact Pages
                {
                    path: '/my-portfolio/contact',
                    name: 'contact',
                    component: () => import('@/views/pages/contact/Contact.vue')
                },
                {
                    path: '/my-portfolio/social',
                    name: 'social',
                    component: () => import('@/views/pages/contact/Social.vue')
                },
                {
                    path: '/my-portfolio/profile',
                    name: 'profile',
                    component: () => import('@/views/pages/profile/CompleteProfile.vue')
                },

                // --- Settings
                {
                    path: '/settings',
                    name: 'settings',
                    component: () => import('@/views/pages/contact/Settings.vue')
                }
            ]
        },

        // --- Landing & Auth
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue')
        },
        {
            path: '/pages/notfound',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        },
        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        },
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('@/views/pages/auth/Access.vue')
        },
        {
            path: '/auth/error',
            name: 'error',
            component: () => import('@/views/pages/auth/Error.vue')
        }
    ]
});

export default router;
