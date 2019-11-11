import { RouteConfig } from 'vue-router';

/* tslint:disable:variable-name */

const SiteUI = () => import(/* webpackChunkName: "site-ui" */
    '@/components/SiteUI.vue');

const HomePage = () => import(/* webpackChunkName: "home-page" */
    '@/views/HomePage.vue');

const AboutUsPage = () => import(/* webpackChunkName: "about-us-page" */
    '@/views/AboutUsPage.vue');

const ServicesPage = () => import(/* webpackChunkName: "services-page" */
    '@/views/ServicesPage.vue');

const GroomingTipsPage = () => import(/* webpackChunkName: "grooming-tips-page" */
    '@/views/GroomingTipsPage.vue');

const BarkingSpacePage = () => import(/* webpackChunkName: "barking-space-page" */
    '@/views/BarkingSpacePage.vue');

const PooringCornerPage = () => import(/* webpackChunkName: "pooring-corner-page" */
    '@/views/PooringCornerPage.vue');

const LinksPage = () => import(/* webpackChunkName: "links-page" */
    '@/views/LinksPage.vue');

const PrintCouponPage = () => import(/* webpackChunkName: "print-coupon-page" */
  '@/views/PrintCouponPage.vue');

const NotFoundView = () =>
  import(
    /* webpackChunkName: "not-found-view" */
    '@/views/NotFoundView.vue'
  );

/* tslint:enable:variable-name */

const routes: RouteConfig[] = [
  {
    path: '/',
    component: SiteUI,
    meta: {
      title: 'Goochie Pooch & Cats Too -=* Grooming Salon *=-'
    },

    children: [
      {
        path: '', name: 'home', component: HomePage,
        meta: {
          title: 'Home'
        }
      },
      {
        path: 'about-us', name: 'aboutUs', component: AboutUsPage,
        meta: {
          title: 'About Us'
        }
      },
      {
        path: 'services', name: 'services', component: ServicesPage,
        meta: {
          title: 'Services'
        }
      },
      {
        path: 'grooming-tips', name: 'grooming-tips', component: GroomingTipsPage,
        meta: {
          title: 'Grooming Tips'
        }
      },
      {
        path: 'barking-space', name: 'barking-space', component: BarkingSpacePage,
        meta: {
          title: 'Barking Space'
        }
      },
      {
        path: 'pooring-corner', name: 'pooring-corner', component: PooringCornerPage,
        meta: {
          title: 'Pooring Corner'
        }
      },
      {
        path: 'links', name: 'links', component: LinksPage
      },
      {
        path: 'print-coupon', name: 'print-coupon', component: PrintCouponPage,
        meta: {
          title: 'Print Coupon'
        }
      },
    ]
  },
  { path: '*', component: NotFoundView }
];

export default routes;
