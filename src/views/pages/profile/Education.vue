<template>
  <div class="card">
    <h2>Education</h2>

    <div v-for="(edu, index) in educationList" :key="index" class="education-item">
      <div class="education-header">
        <img :src="edu.logo" alt="institute logo" class="institute-logo" />
        <div>
          <h4>{{ edu.degree }}</h4>
          <p><strong>Institute:</strong> {{ edu.institute }}</p>
          <p><strong>Year:</strong> {{ edu.year }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import EducationService from '../../../service/ProfileServices/EducationService.js';

const educationList = ref([]);
const educationService = new EducationService();

onMounted(async () => {
  educationList.value = await educationService.getEducation();
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

.education-item {
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.education-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.institute-logo {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

.education-header h4 {
  margin: 0;
  color: #444;
}

.education-header p {
  margin: 0.2rem 0;
}
</style>