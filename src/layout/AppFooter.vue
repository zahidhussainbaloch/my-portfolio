<script setup>
import { useLayout } from '@/layout/composables/layout';
import { computed } from 'vue';

const { layoutConfig } = useLayout();

// const logoUrl = computed(() => {
//     // return `layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
//     return `layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.png`;
// });
const logoUrl = computed(() => {
    return 'layout/images/Logo pro introOutro template - Made with PosterMyWall.mp4';
});

</script>

<template>
    <div class="layout-footer">
        <div class="footer-left">
            <video 
                :src="logoUrl" 
                autoplay 
                muted 
                loop 
                playsinline 
                class="logo-video"
            ></video>

            <span class="footer-text">
                Portfolio by 
                <strong>Zahid Hussain</strong>
            </span>
        </div>

        <div class="footer-right">
            © {{ new Date().getFullYear() }} All Rights Reserved
        </div>
    </div>
</template>
<style lang="scss" scoped>




.layout-topbar-logo {
    display: flex;
    align-items: center;
    gap: 8px;
}

.logo-video {
    height: 50px;      /* Adjust size here */
    width: 50px;       /* Must be same as height */
    border-radius: 50%;
    object-fit: cover; /* Important for circle */
    overflow: hidden;
}
</style>
