<template>
  <div class="modal-overlay">
    <div class="modal" @click.stop>
      <h3>Liste des bg prévus:</h3>
      <ul>
        <li v-for="(participant, index) in participantsArr[0].listNames" :key="index">{{ participant }}</li>
      </ul>
      <button @click="showModalFunction">Fermer</button>
    </div>
    <div class="close" @click="showModalFunction">
      <img class="close-img" src="../../public/assets/close.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',

  props: {
    isModal: {
      type: Boolean,
      default: false,
    },

    participantsArr: {
      type: Array,
    },
  },

  methods: {
    showModalFunction() {
      this.$emit('close-modal');
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  background-color: white;
  border-radius: 20px;
  height: 45%;
  margin-top: 10%;
  padding: 60px 20px;
  position: relative;
  width: 75%;
}
.close {
  cursor: pointer;
  position: absolute;
  right: 65px;
  top: 56px;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #28a745;
  border-radius: 5%;
  border-color: #28a745;
  color: white;
  padding: 0.375rem 0.75rem;
}

li,
ul {
  padding: 0;
}
</style>
