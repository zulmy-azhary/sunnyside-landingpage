<script setup lang="ts">
import { OffersCard } from ".";
import useMediaQuery from "../hooks/useMediaQuery";
import { computed } from "vue";
const { width } = useMediaQuery();

const imagePath = computed(() => (width.value >= 768 ? "desktop" : "mobile"));
</script>

<template>
  <section class="min-h-screen md:[&>*:nth-child(even)]:flex-row-reverse">
    <OffersCard
      title="Transform your brand"
      :imageUrl="`${imagePath}/image-transform`"
      class="after:bg-yellow"
    >
      We are a full-service creative agency specializing in helping brands grow fast. Engage your
      clients through competing visuals that do most of the marketing for you.
    </OffersCard>
    <OffersCard
      title="Stand out to the night audience"
      :imageUrl="`${imagePath}/image-stand-out`"
      class="after:bg-softRed"
    >
      Using a collaborative formula of designers, researchers, photographers, videographers, and
      copywriters, we'll build and extend your brand in digital places.
    </OffersCard>
    <div class="flex justify-between flex-col-reverse md:flex-row">
      <div
        class="basis-1/2 md:w-1/2 min-h-[24rem] max-h-[24rem] md:min-h-[28rem] lg:min-h-[40rem] object-cover"
      >
        <img src="src/assets/images/desktop/image-graphic-design.jpg" alt="Image Banner" />
      </div>
      <div
        class="basis-1/2 md:w-1/2 min-h-[24rem] max-h-[24rem] md:min-h-[28rem] lg:min-h-[40rem] object-cover"
      >
        <img src="src/assets/images/desktop/image-photography.jpg" alt="Image Banner" />
      </div>
    </div>
  </section>
</template>
