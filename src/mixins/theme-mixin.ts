import Vue from 'vue';
import Component from 'vue-class-component';
import {Theme} from '@/components/layout/theme';

@Component
export class ThemeMixin extends Vue {
  protected currentTheme = this.theme;

  get theme(): Theme {
    return (localStorage.getItem('theme') as Theme) || this.currentTheme;
  }

  set theme(theme: Theme) {
    document.body.setAttribute('data-theme', theme.toString());

    try {
      localStorage.setItem('theme', theme);
    } catch (err) {}

    this.currentTheme = theme;
  }

  // noinspection JSUnusedGlobalSymbols
  protected created() {
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    darkQuery.addEventListener('change', (event: MediaQueryListEvent) => {
      this.theme = event.matches ? Theme.Dark : Theme.Light;
    });

    const theme = this.theme || (darkQuery.matches ? Theme.Dark : Theme.Light);

    this.theme = theme;
  }

  protected onThemeChange(theme: Theme) {
    /* tslint:disable:no-console */
    //console.log('switching themes...', theme);

    this.theme = theme;
  }
}
