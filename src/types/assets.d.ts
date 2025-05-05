declare module '*.svg' {
  const content: string; // Теперь это строка (путь к файлу)
  export default content;
}
  declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';