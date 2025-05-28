import { DbData } from './types'; // Укажите правильный путь к вашему types.ts
declare module '*.json' {
  const value: any; // Или более конкретный тип, если вы его определили, например, DbData
  export default value;
}