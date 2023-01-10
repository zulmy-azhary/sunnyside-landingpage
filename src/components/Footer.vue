<script setup lang="ts">
import { Logo } from ".";
</script>

<template>
  <footer
    class="flex flex-col gap-y-20 items-center py-24 bg-darkModerateCyan/70 text-darkDesaturatedCyan"
  >
    <div class="flex flex-col items-center gap-y-10">
      <Logo class="fill-darkDesaturatedCyan" parentClass="scale-125" />
      <ul class="flex gap-x-16 font-bold text-lg">
        <li class="hover:text-white">About</li>
        <li class="hover:text-white">Services</li>
        <li class="hover:text-white">Projects</li>
      </ul>
    </div>
    <ul class="flex gap-x-6">
      <li>
        <v-icon
          class="hover:fill-white"
          scale="1.5"
          name="ri-facebook-box-fill"
          title="Facebook Icon"
        />
      </li>
      <li>
        <v-icon
          class="hover:fill-white"
          scale="1.5"
          name="ri-instagram-line"
          title="Instagram Icon"
        />
      </li>
      <li>
        <v-icon class="hover:fill-white" scale="1.5" name="ri-twitter-fill" title="Twitter Icon" />
      </li>
      <li>
        <v-icon
          class="hover:fill-white"
          scale="1.5"
          name="ri-pinterest-fill"
          title="Pinterest Icon"
        />
      </li>
    </ul>
  </footer>
</template>
