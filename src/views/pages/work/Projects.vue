<template>
  <div class="card">
    <h2>Projects</h2>
    
    <div class="projects-grid">
      <div v-for="(project, index) in projectList" :key="index" class="project-item">
        <img :src="project.image" :alt="project.title" class="project-image" />
        <div class="project-info">
          <h4>{{ project.title }}</h4>
          <p><strong>Duration:</strong> {{ project.duration }}</p>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProjectService from '../../../service/WorkServices/ProjectService.js';

const projectList = ref([]);
const projectService = new ProjectService();

onMounted(async () => {
  projectList.value = await projectService.getProjects();
});
</script>

<style scoped>
.card {
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(0,0,0,0.1);
  max-width: 1000px;
  margin: 2rem auto;
}

h2 {
  color: #333;
  margin-bottom: 1rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.project-item {
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  background: #fafafa;
  transition: transform 0.2s;
}

.project-item:hover {
  transform: translateY(-5px);
}

.project-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.project-info {
  padding: 1rem;
}

.project-info h4 {
  margin: 0 0 0.5rem 0;
  color: #444;
}

.project-info p {
  margin: 0.2rem 0;
}
</style>