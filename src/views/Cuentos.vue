<template>
    <div class="container">
      <div class="header">
        <div class="title">Historias de los Pueblos Indígenas del Ecuador</div>
        <div class="time">{{ currentTime }}</div>
      </div>
      <div class="lessons">
        <div class="lesson" v-for="(culture, index) in cultures" :key="index">
          <div class="lesson-title">{{ culture.title }}</div>
          <div class="lesson-content">
            <img :src="culture.image" alt="Culture Image" />
            <div class="lesson-description">
              <p><strong>Ubicación:</strong> {{ culture.location }}</p>
              <p><strong>Historia:</strong> {{ culture.history }}</p>
              <p><strong>Cultura:</strong> {{ culture.culture }}</p>
            </div>
          </div>
          <div class="lesson-button">
            <button v-if="culture.locked" class="locked">Acceso</button>
            <button v-else class="unlocked">Acceso</button>
            <div class="arrow"></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentTime: new Date().toLocaleTimeString(),
        cultures: [
          {
            title: "Los Kichwa",
            location: "Región andina y amazónica",
            history: "Descendientes de los antiguos Incas, conservan muchas tradiciones y prácticas culturales.",
            culture: "Cultivan papa, maíz y quinua. Celebran festividades como el Inti Raymi.",
            image: "/path/to/kichwa/image.jpg",
            locked: false,
          },
          {
            title: "Los Shuar",
            location: "Región amazónica, Morona Santiago",
            history: "Resistieron la colonización y han mantenido sus tradiciones guerreras.",
            culture: "Conocidos por la yuca y rituales chamánicos.",
            image: "/path/to/shuar/image.jpg",
            locked: false,
          },
          {
            title: "Los Sápara",
            location: "Región amazónica, Sucumbíos",
            history: "Enfrentan desafíos debido a la explotación de recursos naturales.",
            culture: "Preservan su lengua y cultura con medicina tradicional.",
            image: "/path/to/sapara/image.jpg",
            locked: true,
          },
          {
            title: "Los Huaorani",
            location: "Región amazónica, Orellana",
            history: "Mantienen su independencia y han estado en conflicto con empresas petroleras.",
            culture: "Expertos en la selva y técnicas de caza.",
            image: "/path/to/huaorani/image.jpg",
            locked: true,
          },
          {
            title: "Los Cañari",
            location: "Región andina, Cañar",
            history: "Resistieron la expansión Inca y han mantenido muchas de sus tradiciones.",
            culture: "Agricultura, Fiesta del Yamor y artesanías.",
            image: "/path/to/canari/image.jpg",
            locked: false,
          },
          {
            title: "Los Achuar",
            location: "Región amazónica, Morona Santiago y Perú",
            history: "Contacto limitado con el mundo exterior, preservan sus costumbres.",
            culture: "Autosuficiencia en agricultura y caza, rituales con la selva.",
            image: "/path/to/achuar/image.jpg",
            locked: true,
          },
          {
            title: "Los Tsáchila (Colorados)",
            location: "Región costera, Santo Domingo de los Tsáchilas",
            history: "Mantienen su identidad cultural a pesar de influencias externas.",
            culture: "Curación tradicional, pinturas corporales y vestimenta.",
            image: "/path/to/tsachila/image.jpg",
            locked: false,
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #f0f4f7;
    padding: 20px;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
  }
  
  .time {
    font-size: 16px;
    color: #666;
  }
  
  .lessons {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .lesson {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .lesson-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .lesson-content {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 10px;
  }
  
  .lesson-content img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
  }
  
  .lesson-description {
    font-size: 16px;
    line-height: 1.5;
  }
  
  .lesson-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .locked,
  .unlocked {
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .locked {
    background-color: #f08080;
    color: #fff;
  }
  
  .unlocked {
    background-color: #90ee90;
    color: #fff;
  }
  
  .arrow {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #000;
  }
  </style>
  