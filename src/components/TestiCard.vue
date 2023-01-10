<script setup lang="ts">
interface Props {
  name: string;
  userImg: string;
  position: string;
}

const { name, userImg, position } = defineProps<Props>();
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-y-5 md:gap-y-16 text-center flex-1">
    <img :src="userImg" alt="User Image" class="rounded-full w-20 h-20 object-contain" />
    <p class="text-lg leading-8 font-semibold text-vDarkGrayishBlue"><slot></slot></p>
    <div class="">
      <h5 class="font-black text-lg text-vDarkDesaturatedBlue leading-10">{{ name }}</h5>
      <span class="text-grayishBlue font-medium text-sm">{{ position }}</span>
    </div>
  </div>
</template>
