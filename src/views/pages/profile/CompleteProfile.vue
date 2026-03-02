<template>
  <div class="profile-wrapper" v-if="profile">

    <div class="profile-card">
      <h1>{{ profile.name }}</h1>
      <h3>{{ profile.title }}</h3>

      <div class="contact">
        <p><strong>Email:</strong> {{ profile.email }}</p>
        <p><strong>Phone:</strong> {{ profile.phone }}</p>
        <p><strong>Location:</strong> {{ profile.location }}</p>
        <!-- <p><strong>CV File:</strong> {{ profile.cvFile }}</p> -->
      </div>

      <p class="summary">
        {{ profile.summary }}
      </p>

      <h2>Skills</h2>
      <div class="skills">
        <span v-for="(skill, index) in profile.skills" :key="index">
          {{ skill }}
        </span>
      </div>

      <!-- CV Section -->
      <h2>My Complete CV</h2>

      <div class="cv-section">
        <iframe
          v-if="profile.cvFile"
          :src="cvUrl"
          width="100%"
          height="600px"
        ></iframe>

        <a
          v-if="profile.cvFile"
          :href="cvUrl"
          download
          class="download-btn"
        >
          Download CV
        </a>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import CompleteProfileService from '@/service/ProfileServices/CompleteProfileService.js';

const profile = ref(null);
const service = new CompleteProfileService();

onMounted(async () => {
  const data = await service.getCompleteProfile();
  if (data) profile.value = data;
});

const cvUrl = computed(() => {
  if (!profile.value?.cvFile) return '';
  return `${import.meta.env.BASE_URL}${profile.value.cvFile}`;
});
</script>

<style scoped>
.profile-wrapper {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.profile-card {
  max-width: 900px;
  width: 100%;
  background: #ffffff;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

h1 {
  color: #1e88e5;
  margin-bottom: 0;
}

h3 {
  margin-top: 5px;
  color: #555;
}

.contact p {
  margin: 5px 0;
}

.summary {
  margin: 1.5rem 0;
  line-height: 1.8;
  color: #444;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 2rem;
}

.skills span {
  background: #1e88e5;
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
}

.cv-section {
  margin-top: 1.5rem;
}

.download-btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 12px 24px;
  background: #1e88e5;
  color: white;
  border-radius: 10px;
  text-decoration: none;
  transition: 0.3s;
}

.download-btn:hover {
  background: #1565c0;
}
</style>