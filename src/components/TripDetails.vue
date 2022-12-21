<template>
  <div class="trip">
    <div class="trip__banner">
      <img :src="trip.banner" alt="" />
    </div>
    <div class="trip__title">
      <h1>Go to {{ trip.name }}</h1>
    </div>
    <div class="trip__content">
      <h3 class="trip__content-title" v-text="'Description'" />
      <p>{{ trip.content }}</p>
    </div>
    <div class="trip__flights">
      <div class="trip__flights-from">
        <img :src="trip.flight.from.airportIcon" alt="" />
        <h4 v-text="'Départ:'" />
        <p v-text="trip.flight.from.airportName" />
      </div>
      <div class="trip__flights-from">
        <img :src="trip.flight.from.airportIcon" alt="" />
        <h4 v-text="'Arrivée:'" />
        <p v-text="trip.flight.to.airportName" />
      </div>
    </div>
    <div class="trip__details">
      <h3 v-text="'Quelques détails en plus:'" />
      <img :src="trip.detailsImg?.price" alt="" />
      <img :src="trip.detailsImg?.flights" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TripDetails',

  data() {
    return {
      tripDetail: [
        {
          name: 'New-York',
          banner: '../../public/assets/ny.jpg',
          content: "C'est l'heure de s'envoler pour New York, je sais que vous en rêviez donc voici quelques infos !",
          flight: {
            from: {
              airportName: 'Bordeaux',
              airportIcon: '../../public/assets/plane_departure.svg',
            },
            to: {
              airportName: 'New York (JFK)',
              airportIcon: '../../public/assets/plane_arrival.svg',
            },
          },
          detailsImg: {
            price: '../../public/assets/trip_ny_price.png',
            flights: '../../public/assets/trip_ny_flights.png',
          },
        },
        {
          name: 'Ibiza',
          banner: '../../public/assets/ibiza.jpg',
          content: "C'est l'heure de s'envoler pour Ibiza, je sais que vous en rêviez donc voici quelques infos !",
          flight: {
            from: {
              airportName: 'Bordeaux',
              airportIcon: '../../public/assets/plane_departure.svg',
            },
            to: {
              airportName: 'Ibiza',
              airportIcon: '../../public/assets/plane_arrival.svg',
            },
          },
          detailsImg: {
            price: '../../public/assets/ibiza_price.png',
            flights: '../../public/assets/ibiza_flights.png',
          },
        },
      ],
    };
  },

  computed: {
    trip() {
      for (const trip of this.tripDetail) {
        if (this.$route.params.tripName === trip.name) {
          return trip;
        }
      }
      return '';
    },
  },
};
</script>

<style lang="scss" scoped>
.trip {
  &__title {
    display: flex;
    justify-content: center;
  }

  &__content {
    h3,
    p {
      margin: 0;
    }
  }

  &__flights {
    display: flex;
    flex-direction: column;

    &-from,
    &-to {
      align-items: center;
      display: flex;
    }

    h4 {
      padding: 0 10px;
    }
    img {
      width: 24px;
    }
  }
}
</style>
