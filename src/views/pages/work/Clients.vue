<template>
  <div class="card">
    <h2>Clients</h2>

    <div class="clients-grid">
      <div v-for="(client, index) in clientList" :key="index" class="client-item">
        <img :src="client.logo" :alt="client.name" class="client-logo" />
        <div class="client-info">
          <h4>{{ client.name }}</h4>
          <p><strong>Industry:</strong> {{ client.industry }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ClientService from '../../../service/WorkServices/ClientService.js';

const clientList = ref([]);
const clientService = new ClientService();

onMounted(async () => {
  clientList.value = await clientService.getClients();
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

.clients-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.client-item {
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  padding: 1rem;
  background: #fafafa;
  transition: transform 0.2s;
}

.client-item:hover {
  transform: translateY(-5px);
}

.client-logo {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 1rem;
  border-radius: 4px;
}

.client-info h4 {
  margin: 0 0 0.3rem 0;
  color: #444;
}

.client-info p {
  margin: 0.2rem 0;
}
</style>