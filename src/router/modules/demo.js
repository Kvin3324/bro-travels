export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/Home.vue'),
  },
  {
    path: '/trips-list',
    name: 'trips-list',
    component: () => import('@/components/TripsList.vue'),
  },
  {
    path: '/trip-details/:tripName',
    name: 'trip-details',
    component: () => import('@/components/TripDetails.vue'),
  },
];
