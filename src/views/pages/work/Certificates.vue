<template>
  <div class="card">
    <h2>Certificates</h2>

    <div class="certificates-grid">
      <div v-for="(cert, index) in certificateList" :key="index" class="certificate-item">
        <img :src="cert.logo" :alt="cert.title" class="certificate-logo" />
        <div class="certificate-info">
          <h4>{{ cert.title }}</h4>
          <p><strong>Issuer:</strong> {{ cert.issuer }}</p>
          <p><strong>Year:</strong> {{ cert.year }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CertificateService from '../../../service/WorkServices/CertificateService.js';

const certificateList = ref([]);
const certificateService = new CertificateService();

onMounted(async () => {
  certificateList.value = await certificateService.getCertificates();
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

.certificates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.certificate-item {
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  padding: 1rem;
  background: #fafafa;
  transition: transform 0.2s;
}

.certificate-item:hover {
  transform: translateY(-5px);
}

.certificate-logo {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 1rem;
  border-radius: 4px;
}

.certificate-info h4 {
  margin: 0 0 0.3rem 0;
  color: #444;
}

.certificate-info p {
  margin: 0.2rem 0;
}
</style>