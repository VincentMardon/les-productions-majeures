declare module '*.css.ts' {
  const classes: { [key: string]: string }
  export default classes
}

declare module '*.css' {
  const classes: { [key: string]: string }
  export const lightTheme: string
  export const darkTheme: string
}
