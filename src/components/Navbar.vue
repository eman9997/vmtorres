<template>
  <nav>
    <div class="left-nav">
      <img src="../../public/logo.png" alt="SVG Image">
      <p>Professional Party Design</p>
    </div>
    <ul class="right-nav">
      <li v-for="link in links" :key="link.name">
        <router-link :to="link.path">{{ link.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const links = ref<Array<{ name: string; path: string }>>([
  { name: 'Home', path: '/' },
  { name: 'Top Bundles', path: '/top-bundles' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about-us' }
]);
</script>

<style scoped lang="scss">
nav {
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: .5rem 2rem;
  color: #000;

  img {
    width: 3.5rem;
  }

  img, li {
    cursor: pointer;
  }

  .left-nav {
    display: flex;
    align-items: center;

    p {
      margin-left: 1rem;
    }
  }

  ul.right-nav {
  list-style-type: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;

  li {
    display: inline-block;
  }
}

router-link {
  text-decoration: none;
  // color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    color: #fff;
    background-color: $secondary;
  }
}
}
</style>
