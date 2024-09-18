<template>
  <div class="home">
    <div class="content">
      <h2>Comienza tu aventura en el mundo del quichua</h2>
      <p>Descubre juegos, canciones y muchas sorpresas mientras aprendes.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import backgroundImage from '@/assets/logo.png'; // Importa la imagen

export default defineComponent({
  name: 'Home',
  data() {
    return {
      backgroundImage, // Añade la imagen a los datos del componente
    };
  },
});
</script>

<style scoped>
/* Fondo con imagen */
.home {
  background-image: url('@/assets/logo.png');
  background-size: cover; /* Asegura que la imagen cubra todo el contenedor */
  background-position: center;
  height: 100vh; /* Hace que la altura sea del 100% de la pantalla */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  color: #fff; /* Asegura que el texto sea visible en fondo oscuro */
}

.content {
  background-color: rgba(0, 0, 0, 0.5); /* Añade un fondo semi-transparente al texto */
  padding: 20px;
  border-radius: 10px;
}

h2 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

p {
  font-size: 1.2em;
}

/* Responsive para pantallas pequeñas */
@media (max-width: 600px) {
  h2 {
    font-size: 2em;
  }

  p {
    font-size: 1em;
  }
}

/* Responsive para pantallas medianas */
@media (min-width: 601px) and (max-width: 1024px) {
  h2 {
    font-size: 2.2em;
  }

  p {
    font-size: 1.1em;
  }
}
</style>
