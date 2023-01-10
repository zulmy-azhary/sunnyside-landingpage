<script setup lang="ts">
import { Logo, NavMobile } from ".";
import useMediaQuery from "../hooks/useMediaQuery";
import useClickOutside from "../hooks/useClickOutside";
import { ref, computed } from "vue";

const { width } = useMediaQuery();
const isOpen = ref(false);
const isTablet = computed(() => (width.value >= 768 ? (isOpen.value = false) : isOpen.value));
const container = ref();

const handleClick = () => {
  isOpen.value = !isOpen.value;
};

useClickOutside(container, () => {
  isOpen.value = false;
});
</script>

<template>
  <header class="flex justify-between items-center absolute inset-x-0 px-5 md:px-12 py-8 z-50">
    <nav>
      <Logo />
    </nav>
    <template v-if="width >= 768">
      <ul class="flex justify-center items-center gap-x-10 text-white text-lg font-medium">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>
          <button class="button bg-white text-vDarkDesaturatedBlue hover:text-white">
            Contact
          </button>
        </li>
      </ul>
    </template>
    <template v-else>
      <div ref="container">
        <v-icon
          scale="1.5"
          class="text-white cursor-pointer"
          name="co-hamburger-menu"
          @click="handleClick"
        />
        <template v-if="isOpen && isTablet">
          <NavMobile />
        </template>
        <template v-else />
      </div>
    </template>
  </header>
</template>
