import Component from 'vue-class-component';

import {ThemeMixin} from '@/mixins/theme-mixin';

@Component
export class AppThemeMixin extends ThemeMixin {
  protected themeAttributeName = 'goochie-pooch-theme';
}
