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
    <div class="travels__suggestions">
      <div class="travels__suggestions--title">
        <h3 v-text="'Proposition(s) de destination(s):'"></h3>
        <p>
          Faites moi vos propositions que je puisse regarder et trouver quelques infos rapides sur les destinations. Une
          fois que vous aurez cliqué sur le bouton "Envoyer", je recevrais un mail avec vos destinations.
        </p>
      </div>
      <div class="travels__suggestions--content">
        <label for="destination">Destination:</label>
        <input name="destination" placeholder="Amsterdam" type="text" />
        <button>
          <a :href="`mailto:${emailTo}`"> Envoyer </a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TripPage',

  data() {
    return {
      emailTo: 'kevin.joya@outlook.com',
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

.travels__suggestions {
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
  }

  &--content {
    margin-top: 25%;

    button {
      background-color: #28a745;
      border-radius: 5%;
      border-color: #28a745;
      margin-bottom: 10%;
      padding: 0.375rem 0.75rem;
      a {
        color: white;
      }
    }

    input {
      margin-bottom: 5%;
      margin-top: 5%;
      margin-right: 10%;
      padding: 10px;
      width: 70%;
    }
  }
}
</style>
