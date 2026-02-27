<template>
  <div class="card">
    <h2>My Skills</h2>
    <p>I have expertise in the following technologies:</p>

    <div class="skills-grid">
      <div v-for="(skill, index) in skills" :key="index" class="skill-card">
        <img :src="skill.icon" :alt="skill.name" />
        <div class="skill-info">
          <strong>{{ skill.name }}</strong>
          <span>{{ skill.level }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SkillService from '../../../service/ProfileServices/SkillService.js';

const skills = ref([]);
const skillService = new SkillService();

onMounted(async () => {
    skills.value = await skillService.getSkills();
});
</script>

<style scoped>
.card {
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(0,0,0,0.1);
  max-width: 900px;
  margin: 2rem auto;
}

h2 {
  margin-bottom: 1rem;
  color: #333;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}

.skill-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: #f9f9f9;
  border-radius: 6px;
  width: 250px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

.skill-card img {
  width: 50px;
  height: 50px;
  border-radius: 4px;
}

.skill-info {
  display: flex;
  flex-direction: column;
}
.skill-info span {
  font-size: 0.875rem;
  color: #666;
}
</style>