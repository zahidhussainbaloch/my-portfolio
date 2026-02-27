<script setup>
import { ref } from 'vue';

const darkMode = ref(false);
</script>

<template>
    <div class="card">
        <h2>Settings</h2>

        <div class="field">
            <label>
                <input type="checkbox" v-model="darkMode" />
                Enable Dark Mode
            </label>
        </div>
    </div>
</template>