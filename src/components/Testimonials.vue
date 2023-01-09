<script setup lang="ts">
import { TestiCard } from ".";
</script>

<template>
  <section class="flex flex-col justify-center items-center py-16 md:py-36 gap-y-16 md:gap-y-20">
    <h4 class="text-grayishBlue font-extrabold uppercase text-base md:text-xl tracking-[5px]">
      Client Testimonials
    </h4>
    <div class="flex flex-col md:flex-row flex-wrap gap-x-10 gap-y-20 px-6 xl:w-4/5">
      <TestiCard name="Emily R." position="Marketing Director" userImg="/images/image-emily.jpg">
        We put our trust in Sunnyside and they delivered, making sure our needs were met and
        deadlines were always hit.
      </TestiCard>
      <TestiCard
        name="Thomas S."
        position="Chief Operating Officer"
        userImg="/images/image-thomas.jpg"
      >
        Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a
        satisfying and enjoyable experience.
      </TestiCard>
      <TestiCard name="Jennie F." position="Business Owner" userImg="/images/image-jennie.jpg">
        Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly
        recommended!
      </TestiCard>
    </div>
  </section>
</template>
