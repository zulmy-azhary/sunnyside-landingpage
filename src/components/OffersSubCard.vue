<script setup lang="ts">
interface Props {
  title: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div
    :class="`flex flex-col justify-end items-center py-12 gap-y-8 text-center basis-1/2 md:w-1/2 min-h-[40rem] md:min-h-[28rem] lg:min-h-[32rem] xl:min-h-[40rem] relative bg-cover bg-no-repeat bg-top`"
  >
    <h3 class="font-black text-3xl">
      {{ props.title }}
    </h3>
    <p class="w-4/5 md:w-2/3 xl:w-[48%] text-base font-semibold">
      <slot></slot>
    </p>
  </div>
</template>
