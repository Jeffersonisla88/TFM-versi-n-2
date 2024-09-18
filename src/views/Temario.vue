<template>
  <div class="Temas">
    <h1>Temas </h1>
  </div>
</template>
<template>
  <div class="container">
    <div class="header">
      <div class="title">INICIO</div>
      <div class="time">10:42</div>
    </div>
    <div class="lessons">
      <div class="lesson" v-for="(lesson, index) in lessons" :key="index">
        <div class="lesson-title">{{ lesson.title }}</div>
        <div class="lesson-content">
          <img :src="lesson.image" alt="Lesson Image" />
          <div class="lesson-description">{{ lesson.description }}</div>
        </div>
        <div class="lesson-button">
          <button v-if="lesson.locked" class="locked">Acceso</button>
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
      lessons: [
        {
          title: "Lección 1",
          image: "/path/to/lesson1/image.jpg",
          description: "Abecedario",
          locked: false,
        },
        {
          title: "Lección 2",
          image: "assets/Logo.jpg",
          description: "Presente",
          locked: true,
        },
        {
          title: "Lección 3",
          image: "/path/to/lesson3/image.jpg",
          description: "Colores",
          locked: true,
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
  background-color: #d1c4e9;
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