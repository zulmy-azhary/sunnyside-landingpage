<script setup lang="ts">
import useMediaQuery from "../hooks/useMediaQuery";

const { width } = useMediaQuery();
</script>

<template>
  <header class="flex justify-between absolute inset-x-0 px-5 py-6">
    <nav>
      <img src="../assets/images/logo.svg" alt="Logo Icon" />
    </nav>
    <template v-if="width >= 768">
      <ul class="flex justify-center items-center gap-x-7 text-white">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </template>
    <template v-else />
  </header>
</template>
