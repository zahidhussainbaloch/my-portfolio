<template>
  <div class="card about-card">
    <!-- Header with profile image and name -->
    <div class="about-header">
      <img :src="about.profileImage || ''" :alt="about.name || ''" class="profile-img" />
      <div class="header-text">
        <h2>{{ about.name || 'Your Name' }}</h2>
        <h4>{{ about.title || 'Your Title' }}</h4>
      </div>
    </div>

    <!-- Description -->
    <p class="about-description">{{ about.description || 'Your description goes here...' }}</p>

    <!-- Expertise -->
    <h3>Expertise</h3>
    <div class="expertise-grid">
      <div
        v-for="(item, index) in about.expertise || []"
        :key="index"
        class="expertise-item"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AboutService from '../../../service/ProfileServices/AboutService.js';

const about = ref({
  name: '',
  title: '',
  description: '',
  expertise: [],
  profileImage: ''
});

const aboutService = new AboutService();

onMounted(async () => {
  const data = await aboutService.getAbout();
  if (data) about.value = data; // safely update
});
</script>

<style scoped>
.card.about-card {
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #f0f4f8 100%);
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 2rem auto;
  transition: transform 0.3s;
}

.card.about-card:hover {
  transform: translateY(-5px);
}

/* Header layout */
.about-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.profile-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #1e88e5;
  transition: transform 0.3s;
}

.profile-img:hover {
  transform: scale(1.05);
}

.header-text h2 {
  margin: 0;
  font-size: 1.8rem;
  color: #1e88e5;
}

.header-text h4 {
  margin: 0;
  color: #555;
  font-weight: 500;
}

/* Description */
.about-description {
  font-size: 1rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 1.5rem;
}

/* Expertise grid */
.expertise-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.expertise-item {
  background: #1e88e5;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-weight: 500;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s, background 0.3s;
  cursor: default;
}

.expertise-item:hover {
  transform: translateY(-3px);
  background: #1565c0;
}
</style>