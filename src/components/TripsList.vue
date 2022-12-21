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
      <p>
        Néanmoins, voici quelques voyages dont il y a quelques détails, détails que j'ai prit le soin d'étudier avant
        tout. Ceux-ci sont encore très sommaires mais seront à creuse une fois la destination choisie.
      </p>
    </div>
    <div class="trips__content-list">
      <ul v-for="(trip, index) in tripsList" :key="index">
        <li>
          <router-link :to="{ name: 'trip-details', params: { tripName: trip.name } }">
            {{ trip.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="participants">
      <h4 v-text="'Nombre de participants:'" />
      <p v-text="'6'"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TripPage',

  data() {
    return {
      tripsList: [
        {
          name: 'New-York',
        },
        {
          name: 'Ibiza',
        },
      ],
    };
  },

  computed: {
    userName() {
      return `Bienvenue à toi, jeune ${localStorage.getItem('myPseudo')}`;
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
  align-items: center;
  display: flex;

  p {
    margin: 0;
    margin-left: 10px;
  }
}
</style>
