import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ROUTES } from './routes'

export type RootStackParamList = {
  [ROUTES.HomeScreen]: undefined
  [ROUTES.AnimHeaderScreen]: undefined
  [ROUTES.AcardeonScreen]: undefined
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>

export type HomeTabParamList = {
  Popular: undefined
  Latest: undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
