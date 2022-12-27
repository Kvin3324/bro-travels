<template>
  <div class="trip__content">
    <div class="trip__content-title">
      <h2>{{ userName }}</h2>
    </div>
    <div class="trip__content-description">
      <p>Quoi de mieux que de se préparer quelques vacances avec nos destinations de rêves, souhaitées, envisagées.</p>
      <p>
        Ce que je vous propose, c'est une liste de voyages avec des villes, pays qu'on a déjà évoqués. Bien entendu,
        vous pouvez en proposer d'autres afin qu'on se mette d'accord.
      </p>
      <p>Néanmoins, voici une liste de quelques voyages avec des détails que j'ai prit le soin d'étudier avant tout.</p>
      <p>Ceux-ci sont encore <b>très sommaires</b> mais seront à creuser une fois la destination choisie.</p>
    </div>
    <div class="trips__content-list">
      <h4>Liste des voyages envisagées:</h4>
      <ul v-for="(trip, index) in tripsList" :key="index">
        <li>
          <router-link :to="{ name: 'trip-details', params: { tripName: trip.name } }">
            {{ trip.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="participants">
      <h4 v-text="'Participants:'" />
      <button @click="displayModal">Liste des bg</button>
    </div>
    <Modal v-show="showModal" :participantsArr="participants" @close-modal="displayModal" />
  </div>
</template>

<script>
import Modal from './Modal.vue';

export default {
  name: 'TripPage',
  components: { Modal },

  data() {
    return {
      showModal: false,
      participants: [
        {
          number: 6,
          listNames: [
            'Arthur Wroblewski',
            'Kévin Joya',
            'Mathieu Jaen',
            'Maxime Tabouy',
            'Pierre Lavandier',
            'Quentin De la Barbelais',
          ],
        },
      ],
      tripsList: [
        {
          name: 'Ibiza',
        },
        {
          name: 'New-York',
        },
        {
          name: 'Thaïlande',
        },
      ],
    };
  },

  computed: {
    userName() {
      return `Bienvenue à toi, jeune ${localStorage.getItem('myPseudo')}`;
    },
  },

  methods: {
    displayModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style lang="scss" scoped>
.trips__content {
  &-list {
    ul {
      padding: 0;
    }
  }
}

.participants {
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  button {
    background-color: #28a745;
    border-radius: 5%;
    border-color: #28a745;
    color: white;
    padding: 0.375rem 0.75rem;
  }

  p {
    margin: 0;
    margin-left: 10px;
  }
}
</style>
