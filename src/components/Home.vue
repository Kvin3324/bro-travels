<template>
  <div class="home__container">
    <div class="home__container-title">
      <h1 v-text="'Voyage entre frérots'" />
    </div>
    <div class="home__container-content">
      <label for="pseudo"> Rentre moi ton blaze, pseudo, PSN, gamerTag : </label>
      <div class="about">
        <input id="pseudo" v-model="nickname" placeholder="Enter your name" type="text" />
        <button @click="storePseudo(nickname)">Let's gooo</button>
        <p v-if="inputNameError" class="input-error">Non, dis-moi qui tu es avant, sinon ce n'est pas drôle...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      inputNameError: false,
      nickname: null,
    };
  },

  created() {
    console.log(this.$router);
  },

  methods: {
    storePseudo(value) {
      if (value) {
        localStorage.setItem('myPseudo', value);
        this.$router.push('/trips-list');
      }

      if (!value) {
        this.inputNameError = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home__container {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &-content {
    .about {
      input {
        border: none;
        border-bottom: 1px solid black;
        margin-top: 5%;
        margin-right: 10%;
        padding: 10px;
        width: 40%;

        &:active,
        &:focus,
        &:focus-visible {
          border: 1px solid #28a745;
        }
      }

      button {
        background-color: #28a745;
        border-radius: 5%;
        border-color: #28a745;
        color: white;
        padding: 0.375rem 0.75rem;
      }

      .input-error {
        color: red;
        font-size: 0.8em;
      }
    }
  }
}
</style>
