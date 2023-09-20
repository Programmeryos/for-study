export const ROUTES = {
  HomeScreen: 'home',
  AnimHeaderScreen: 'anim-header',
} as const

type valueof<T> = T[keyof T]

export type Routes = valueof<typeof ROUTES>
