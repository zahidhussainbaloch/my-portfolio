<script setup>
import { ref } from 'vue';
import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        items: [
            { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/my-portfolio' }
        ]
    },
    {
        label: 'Profile',
        items: [
            { label: 'About Me', icon: 'pi pi-fw pi-user', to: '/my-portfolio/about' },
            { label: 'Skills', icon: 'pi pi-fw pi-code', to: '/my-portfolio/skills' },
            { label: 'Experience', icon: 'pi pi-fw pi-briefcase', to: '/my-portfolio/experience' },
            { label: 'Education', icon: 'pi pi-fw pi-book', to: '/my-portfolio/education' }
        ]
    },
    {
        label: 'Work',
        items: [
            { label: 'Projects', icon: 'pi pi-fw pi-folder', to: '/my-portfolio/projects' },
            { label: 'Certificates', icon: 'pi pi-fw pi-verified', to: '/my-portfolio/certificates' },
            { label: 'Clients', icon: 'pi pi-fw pi-users', to: '/my-portfolio/clients' }
        ]
    },
    {
        label: 'Contact',
        items: [
            { label: 'Contact Info', icon: 'pi pi-fw pi-envelope', to: '/my-portfolio/contact' },
            { label: 'Social Links', icon: 'pi pi-fw pi-share-alt', to: '/my-portfolio/social' }
        ]
    },
    {
        separator: true
    },
    {
        items: [
            // { label: 'Settings', icon: 'pi pi-fw pi-cog', to: '/settings' }
        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="i">
            <app-menu-item v-if="!item.separator" :item="item" :index="i" />
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

