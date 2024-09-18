<template>
    <div class="completa-frase">
      <h2>Completa la Frase</h2>
      <p>{{ fraseConEspacio }}</p>
      <div class="opciones">
        <button v-for="(opcion, index) in opciones" :key="index" @click="verificarRespuesta(opcion)">
          {{ opcion }}
        </button>
      </div>
      <p v-if="resultado !== null">{{ resultado }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        frase: "El cielo es muy [espacio] durante el día.",
        palabraCorrecta: "azul",
        opciones: ["rojo", "verde", "azul", "amarillo"],
        resultado: null
      };
    },
    computed: {
      fraseConEspacio() {
        return this.frase.replace("[espacio]", "_____");
      }
    },
    methods: {
      verificarRespuesta(opcion) {
        if (opcion === this.palabraCorrecta) {
          this.resultado = "¡Correcto!";
        } else {
          this.resultado = "Incorrecto, inténtalo de nuevo.";
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .completa-frase {
    text-align: center;
    padding: 20px;
  }
  
  .opciones button {
    margin: 5px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #90ee90;
    color: #fff;
    cursor: pointer;
  }
  
  .opciones button:hover {
    background-color: #76c7c0;
  }
  
  @media (max-width: 768px) {
    .opciones button {
      font-size: 14px;
    }
  }
  </style>
  