<script setup lang="ts">
import { OffersCard, OffersSubCard } from ".";
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
    <div class="flex justify-between flex-col md:flex-row">
      <OffersSubCard
        title="Graphic Design"
        class="text-darkDesaturatedCyan bg-offers-graphic-mobile md:bg-offers-graphic-desktop"
      >
        Great design makes you memorable. We deliver artwork that underscores your brand message and
        captures potential clients' attention.
      </OffersSubCard>
      <OffersSubCard
        title="Photography"
        class="text-darkBlue bg-offers-photography-mobile md:bg-offers-photography-desktop"
      >
        Increase your credibility by getting the most stunning, high-quality photos that improve
        your business image.
      </OffersSubCard>
    </div>
  </section>
</template>
