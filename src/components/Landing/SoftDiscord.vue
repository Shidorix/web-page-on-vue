<template>
  <div class="discord-card row justify-center items-center q-px-xl">
    <img src="../../assets/image/discord.svg" alt="" />

    <div class="discord-card__text q-px-xl">
      <h3 class="text-h3">Join our Discord server!</h3>

      <p class="text-subtitle5 q-pt-md">
        Join our server to get help or talk to other people about smth idk what
        to write here so fuck off pls
      </p>

      <div class="row justify-center">
        <button class="text-subtitle3">Join Discord</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.discord-card {
  padding-top: 280px;
}
.discord-card__text {
  width: 50%;
  padding-left: 243px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.discord-card__text p {
  text-align: center;
}

button {
  border-radius: 64px;
  border: none;
  background: #6c9aa99a;
  width: 180px;
  height: 52px;
  flex-shrink: 0;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  transition: transform 0.3s;
}

button:hover {
  transform: scale(1.1);
}

@media only screen and (max-width: 1200px) {
  .discord-card__text {
    width: 85%;
    padding-left: 0px;
    padding-top: 55px;
    padding-right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>
