<template>
  <div class="container py-20 h-screen w-full bg-blue grid justify-center">
    <div class="p-6 space-y-[20px] bg-white rounded-3xl border">
      <div class="text-center">
        <h1 class="text-[36px] font-bold">ผลลัพธ์ของคุณคือ</h1>
      </div>

      <img
        v-if="store.totalPoints >= 131 && store.totalPoints <= 180"
        src="/TheGradualLearner131-180.png"
        class="imageStyle"
      />
      <img
        v-else-if="store.totalPoints >= 91 && store.totalPoints <= 130"
        src="/TheEnthusiastic91-130.png"
        class="imageStyle"
      />
      <img
        v-else-if="store.totalPoints >= 60 && store.totalPoints <= 90"
        src="/TheHobbyist:60-90.png"
        class="imageStyle"
      />

      <div class="text-center text-[20px] font-bold">
        <h1>คุณรู้จัก Globish ผ่าน</h1>
        <h1>
          {{ store.resultList[store.resultList.length - 1].value.toString() }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { store } from "../store.ts";
</script>
<style scoped>
.imageStyle {
  width: 368px;
  height: 350px;
}
</style>
