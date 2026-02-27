<script setup>
import { ref, reactive, watch } from 'vue';
import { useLayout } from '@/layout/composables/layout';

const { isDarkTheme } = useLayout();

/* ===============================
   PROFILE DATA
================================*/
const profile = {
    name: "Zahid Hussain",
    role: "Full Stack Developer",
    experience: "3+ Years",
    email: "zahid@email.com"
};

/* ===============================
   STATS CARDS
================================*/
const stats = [
    { title: "Projects Completed", value: 24, icon: "pi pi-check-circle", color: "blue" },
    { title: "Technologies", value: 12, icon: "pi pi-code", color: "green" },
    { title: "Experience", value: "3+ Years", icon: "pi pi-briefcase", color: "orange" },
    { title: "Happy Clients", value: 8, icon: "pi pi-users", color: "purple" }
];

/* ===============================
   RECENT PROJECTS
================================*/
const projects = ref([
    { name: "Laravel ERP System", tech: "Laravel, MySQL", status: "Completed" },
    { name: "Vue Admin Panel", tech: "Vue 3, PrimeVue", status: "Completed" },
    { name: "Survey App Backend", tech: "Node.js, Sequelize", status: "In Progress" }
]);

/* ===============================
   SKILL CHART
================================*/
const chartData = reactive({
    labels: ['Laravel', 'Vue', 'Node.js', 'MySQL', 'JavaScript'],
    datasets: [
        {
            label: 'Skill Level',
            data: [90, 85, 75, 88, 92],
            backgroundColor: [
                '#42A5F5',
                '#66BB6A',
                '#FFA726',
                '#AB47BC',
                '#26C6DA'
            ]
        }
    ]
});

const chartOptions = ref(null);

const applyLightTheme = () => {
    chartOptions.value = {
        plugins: {
            legend: {
                labels: { color: '#495057' }
            }
        }
    };
};

const applyDarkTheme = () => {
    chartOptions.value = {
        plugins: {
            legend: {
                labels: { color: '#ebedef' }
            }
        }
    };
};

watch(isDarkTheme, (val) => {
    val ? applyDarkTheme() : applyLightTheme();
}, { immediate: true });
</script>

<template>
<div class="grid">

    <!-- PROFILE CARD -->
    <div class="col-12">
        <div class="card flex align-items-center gap-4">
            <img src="https://i.pravatar.cc/100" class="border-circle" />
            <div>
                <h3 class="mb-1">{{ profile.name }}</h3>
                <p class="text-600 mb-1">{{ profile.role }}</p>
                <small>{{ profile.email }}</small>
            </div>
        </div>
    </div>

    <!-- STATS -->
    <div 
        v-for="item in stats" 
        :key="item.title" 
        class="col-12 md:col-6 lg:col-3"
    >
        <div class="card">
            <div class="flex justify-content-between align-items-center">
                <div>
                    <span class="block text-500 mb-3">{{ item.title }}</span>
                    <div class="text-900 text-2xl font-bold">
                        {{ item.value }}
                    </div>
                </div>
                <div 
                    class="flex align-items-center justify-content-center border-round"
                    :class="'bg-' + item.color + '-100'"
                    style="width:3rem;height:3rem"
                >
                    <i 
                        :class="item.icon" 
                        :style="{ color: 'var(--' + item.color + '-500)' }"
                        class="text-xl"
                    ></i>
                </div>
            </div>
        </div>
    </div>

    <!-- RECENT PROJECTS -->
    <div class="col-12 lg:col-6">
        <div class="card">
            <h5>Recent Projects</h5>
            <DataTable :value="projects" responsiveLayout="scroll">
                <Column field="name" header="Project"></Column>
                <Column field="tech" header="Technology"></Column>
                <Column field="status" header="Status">
                    <template #body="slotProps">
                        <Tag 
                            :value="slotProps.data.status" 
                            :severity="slotProps.data.status === 'Completed' ? 'success' : 'warning'"
                        />
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>

    <!-- SKILL CHART -->
    <div class="col-12 lg:col-6">
        <div class="card">
            <h5>Technical Skills</h5>
            <Chart type="bar" :data="chartData" :options="chartOptions" />
        </div>
    </div>

</div>
</template>