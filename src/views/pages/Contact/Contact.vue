<template>
  <div class="card contact-card ">
    <h2>Contact Info</h2>

    <div class="contact-details">
      <div class="contact-item">
        <i class="fas fa-map-marker-alt"></i>
        <span>{{ contact.address }}</span>
      </div>
      <div class="contact-item">
        <i class="fas fa-phone-alt"></i>
        <span>{{ contact.phone }}</span>
      </div>
      <div class="contact-item">
        <i class="fas fa-envelope"></i>
        <span>{{ contact.email }}</span>
      </div>
      <div class="contact-item">
        <i class="fas fa-globe"></i>
        <a :href="contact.website" target="_blank">{{ contact.website }}</a>
      </div>
    </div>

    <div class="map-container" v-if="contact.mapEmbed">
      <iframe
        :src="contact.mapEmbed"
        width="100%"
        height="350"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ContactService from '../../../service/ContactServices/ContactService.js';

const contact = ref({});
const contactService = new ContactService();

onMounted(async () => {
  contact.value = await contactService.getContactInfo();
});
</script>

<style scoped>

.card.contact-card {
  padding: 3rem;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
  max-width: 900px;
  margin: 2rem auto;
}

h2 {
  margin-bottom: 1.5rem;
  color: #1e88e5;
  text-align: center;
  font-size: 1.8rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0.8rem 1rem;
  border-radius: 12px;
  background: #f5f5f5;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.contact-item i {
  color: #1e88e5;
  font-size: 1.2rem;
  min-width: 25px;
  text-align: center;
}

.contact-item:hover {
  background: #e3f2fd;
  transform: translateX(3px);
  box-shadow: 0 6px 15px rgba(0,0,0,0.08);
}

.contact-item a {
  color: #1e88e5;
  text-decoration: none;
  font-weight: 500;
}

.contact-item a:hover {
  text-decoration: underline;
}

.map-container {
  margin-top: 2rem;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

</style>