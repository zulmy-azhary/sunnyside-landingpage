<script setup lang="ts">
import useMediaQuery from "../hooks/useMediaQuery";

const { width } = useMediaQuery();
</script>

<template>
  <header class="flex justify-between items-center absolute inset-x-0 px-12 py-8 z-50">
    <nav>
      <img src="/images/logo.svg" alt="Logo Icon" />
    </nav>
    <template v-if="width >= 768">
      <ul class="flex justify-center items-center gap-x-10 text-white text-lg font-medium">
        <li class="cursor-pointer">About</li>
        <li class="cursor-pointer">Services</li>
        <li class="cursor-pointer">Projects</li>
        <li>
          <button
            class="transition-all bg-white hover:bg-opacity-25 text-vDarkDesaturatedBlue hover:text-white uppercase text-base font-bold px-8 py-4 rounded-full"
          >
            Contact
          </button>
        </li>
      </ul>
    </template>
    <template v-else />
  </header>
</template>
