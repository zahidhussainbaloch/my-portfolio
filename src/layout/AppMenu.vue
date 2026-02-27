<script setup>
import { ref } from 'vue';
import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        items: [
            { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }
        ]
    },
    {
        label: 'Profile',
        items: [
            { label: 'About Me', icon: 'pi pi-fw pi-user', to: '/about' },
            { label: 'Skills', icon: 'pi pi-fw pi-code', to: '/skills' },
            { label: 'Experience', icon: 'pi pi-fw pi-briefcase', to: '/experience' },
            { label: 'Education', icon: 'pi pi-fw pi-book', to: '/education' }
        ]
    },
    {
        label: 'Work',
        items: [
            { label: 'Projects', icon: 'pi pi-fw pi-folder', to: '/projects' },
            { label: 'Certificates', icon: 'pi pi-fw pi-verified', to: '/certificates' },
            { label: 'Clients', icon: 'pi pi-fw pi-users', to: '/clients' }
        ]
    },
    {
        label: 'Contact',
        items: [
            { label: 'Contact Info', icon: 'pi pi-fw pi-envelope', to: '/contact' },
            { label: 'Social Links', icon: 'pi pi-fw pi-share-alt', to: '/social' }
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

