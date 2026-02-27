<template>
  <div class="card">
    <h2>Social Links</h2>
    <p>Connect with me on the following platforms:</p>

    <div class="social-links">
      <a
        v-for="(social, i) in socials"
        :key="i"
        :href="social.url"
        target="_blank"
        :class="'platform-' + social.platform.toLowerCase()"
      >
        <img :src="social.icon" :alt="social.platform" />
        <span>{{ social.platform }}</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SocialService from '../../../service/ContactServices/SocialService.js';

const socials = ref([]);
const socialService = new SocialService();

onMounted(async () => {
  socials.value = await socialService.getSocialLinks();
});
</script>

<style scoped>
.card {
  padding: 2rem;
  max-width: 900px;
  margin: 2rem auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  text-align: center;
}

.social-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem; /* space between links */
  margin-top: 1.5rem;
}

.social-links a {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  padding: 0.6rem 1.2rem;
  border-radius: 12px;
  font-weight: 500;
  color: #fff;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

/* Assign brand colors by platform using class */
.social-links a.platform-linkedin { background: #0077b5; }
.social-links a.platform-github { background: #171515; }
.social-links a.platform-twitter { background: #1da1f2; }
.social-links a.platform-facebook { background: #1877f2; }
.social-links a.platform-instagram { background: #e4405f; }

.social-links a:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

/* Icon style */
.social-links img {
  width: 36px;
  height: 36px;
  object-fit: contain;
  filter: invert(1);
}

/* Platform name text */
.social-links span {
  font-weight: bold;
  color: #fff;
}
</style>