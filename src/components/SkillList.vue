<template>
  <div class="skill-list">
    <div class="skill" v-for="skill in skills" :key="skill.name">
      <img :src="skill.icon" :alt="skill.name" class="skill-icon" />
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
        { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
        { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Unity 3D', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Vue 3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      ],
    };
  },
};
</script>

<style scoped>
.skill-list {
  display: flex;
  justify-content: center; /* 使技能列表置中 */
  align-items: center;
  flex-wrap: wrap; /* 如果技能圖標過多，則換行 */
  /*左右範圍*/
  margin: 0 15%;
}

.skill {
  display: flex;
  align-items: center;
  margin: 10px 10px; /* 增加左右間距 */
}


.skill-icon {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  object-fit: contain;
}
</style>
