<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useLayout } from '@/layout/composables/layout';
import { useRouter } from 'vue-router';

const { layoutConfig, onMenuToggle } = useLayout();
const router = useRouter();

/* ---------------------------
   STATES
----------------------------*/
const outsideClickListener = ref(null);
const profileDropdownActive = ref(false);

/* ---------------------------
   LOGO
----------------------------*/
// const logoUrl = computed(() => {
//      return `layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.png`;   
// });

const logoUrl = computed(() => {
    return 'layout/images/Logo pro introOutro template - Made with PosterMyWall.mp4';
});

/* ---------------------------
   PROFILE DROPDOWN TOGGLE
----------------------------*/
const toggleProfileDropdown = () => {
    profileDropdownActive.value = !profileDropdownActive.value;
};

/* ---------------------------
   LOGOUT FUNCTION
----------------------------*/
const logout = () => {
    profileDropdownActive.value = false;
    // Add your logout logic here
    router.push('/login');
};

/* ---------------------------
   OUTSIDE CLICK HANDLING
----------------------------*/
onMounted(() => {
    bindOutsideClickListener();
});

onBeforeUnmount(() => {
    unbindOutsideClickListener();
});

const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                profileDropdownActive.value = false;
            }
        };
        document.addEventListener('click', outsideClickListener.value);
    }
};

const unbindOutsideClickListener = () => {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener.value);
        outsideClickListener.value = null;
    }
};

const isOutsideClicked = (event) => {
    if (!profileDropdownActive.value) return false;

    const dropdownEl = document.querySelector('.profile-wrapper');
    return dropdownEl && !dropdownEl.contains(event.target);
};
</script>

<template>
    <div class="layout-topbar">
        <!-- Logo -->
        <router-link to="/" class="layout-topbar-logo">
            <!-- <img :src="logoUrl" alt="logo" /> -->
          <video 
        :src="logoUrl" 
        autoplay 
        muted 
        loop 
        playsinline 
        class="logo-video"
    ></video>
            <span>Port~Folio</span>
        </router-link>

        <!-- Sidebar Toggle -->
        <button
            class="p-link layout-menu-button layout-topbar-button"
            @click="onMenuToggle()"
        >
            <i class="pi pi-bars"></i>
        </button>

        <!-- Right Side -->
        <div class="layout-topbar-menu">

            <!-- Profile Dropdown -->
            <div class="profile-wrapper">
                <button
                    class="p-link layout-topbar-button"
                    @click.stop="toggleProfileDropdown"
                >
                    <i class="pi pi-user"></i>
                    <span>Profile</span>
                </button>

                <div
                    v-if="profileDropdownActive"
                    class="profile-dropdown"
                >
                    <router-link
                        to="/profile"
                        class="dropdown-item"
                        @click="profileDropdownActive = false"
                    >
                        My Profile
                    </router-link>

                    <router-link
                        to="/settings"
                        class="dropdown-item"
                        @click="profileDropdownActive = false"
                    >
                        Settings
                    </router-link>

                    <button
                        class="dropdown-item logout"
                        @click="logout"
                    >
                        Logout
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>

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

.layout-topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.layout-topbar-menu {
    display: flex;
    align-items: center;
}

.profile-wrapper {
    position: relative;
}

.profile-dropdown {
    position: absolute;
    right: 0;
    top: 100%;
    margin-top: 8px;
    background: white;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    padding: 10px 0;
    min-width: 160px;
    display: flex;
    flex-direction: column;
    z-index: 1000;
}

.dropdown-item {
    padding: 10px 15px;
    text-decoration: none;
    color: #333;
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    width: 100%;
}

.dropdown-item:hover {
    background: #f5f5f5;
}

.logout {
    color: #d9534f;
}

.logout:hover {
    background: #f5f5f5;
}
</style>