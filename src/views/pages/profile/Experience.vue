<template>
  <div class="card">
    <h2>Work Experience</h2>

    <div v-for="(exp, index) in experiences" :key="index" class="experience-item">
      <div class="experience-header">
        <img :src="exp.logo" alt="company logo" class="company-logo" />
        <div>
          <h4>{{ exp.role }}</h4>
          <p><strong>Company:</strong> {{ exp.company }}</p>
          <p><strong>Duration:</strong> {{ exp.duration }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ExperienceService from '../../../service/ProfileServices/ExperienceService.js';

const experiences = ref([]);
const experienceService = new ExperienceService();

onMounted(async () => {
  experiences.value = await experienceService.getExperience();
});
</script>

<style scoped>
.card {
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(0,0,0,0.1);
  max-width: 800px;
  margin: 2rem auto;
}

h2 {
  color: #333;
  margin-bottom: 1rem;
}

.experience-item {
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.experience-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.company-logo {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

.experience-header h4 {
  margin: 0;
  color: #444;
}

.experience-header p {
  margin: 0.2rem 0;
}
</style>