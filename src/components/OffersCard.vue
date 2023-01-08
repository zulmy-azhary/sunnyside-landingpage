<script setup lang="ts">
import { useAttrs } from "vue";

interface Props {
  title: string;
  imageUrl: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="flex justify-between flex-col-reverse md:flex-row">
    <div class="flex flex-col justify-center gap-y-10 xl:px-36 basis-1/2">
      <h2 class="tracking-tight font-black text-5xl">{{ props.title }}</h2>
      <p class="text-lg font-semibold text-darkGrayishBlue tracking-tight"><slot></slot></p>
      <button
        class="self-start font-fraunces text-md font-black uppercase relative after:absolute after:h-2 after:opacity-50 after:-inset-x-2 after:bottom-0 after:-z-10 after:rounded-md hover:after:opacity-100 after:transition-opacity after:duration-100"
        v-bind="$attrs"
      >
        learn more
      </button>
    </div>
    <img
      :src="`src/assets/images/${props.imageUrl}.jpg`"
      alt="Image Banner"
      class="basis-1/2 md:w-1/2 min-h-[24rem] max-h-[24rem] md:min-h-[28rem] lg:min-h-[32rem] xl:min-h-[40rem] object-cover"
    />
  </div>
</template>
