<script setup>
import AppMenu from './AppMenu.vue';
</script>

<template>
    <app-menu></app-menu>
</template>

<style lang="scss" scoped>
.layout-menu {

    li {
        margin-bottom: 6px;
    }

    a {
        display: flex;
        align-items: center;
        padding: 10px 14px;
        border-radius: 8px;
        transition: all 0.3s ease;
    }

    a:hover {
        background: rgba(56, 189, 248, 0.15);
    }

    .layout-menuitem-text {
        color: #e2e8f0;
        font-weight: 500;
    }

    .layout-menuitem-icon {
        color: #38bdf8;
        margin-right: 10px;
    }

}
</style>
