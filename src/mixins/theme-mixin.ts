import Vue from 'vue';
import Component from 'vue-class-component';
import {Theme} from '@/components/layout/theme';

@Component
export class ThemeMixin extends Vue {
  protected themeAttributeName = 'theme';

  protected currentTheme = this.theme;

  get osDarkMode(): boolean {
    const darkQuery = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

    return darkQuery.matches;
  }

  get theme(): Theme {
    return (localStorage.getItem(this.themeAttributeName) as Theme) || (this.osDarkMode ? Theme.Dark : Theme.Light);
  }

  set theme(theme: Theme) {
    document.body.setAttribute('data-theme', theme.toString());

    try {
      localStorage.setItem(this.themeAttributeName, theme);
    } catch (err) {}

    this.currentTheme = theme;
  }

  public isDarkTheme(): boolean {
    return this.currentTheme === Theme.Dark;
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
