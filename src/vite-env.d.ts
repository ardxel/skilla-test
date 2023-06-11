/// <reference types="vite/client" />

// component type for composition
declare type Component = () => import('react').ReactNode;

declare namespace App {
  type Theme = typeof import('./app/styles/theme.ts');
}

declare module '@emotion/styled' {
  import {CreateStyled} from "@emotion/styled";

  export * from '@emotion/styled/types/index';
  const customStyled: CreateStyled<App.Theme>;
  export default customStyled;
}