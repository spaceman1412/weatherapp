import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { Text, Button } from "app/components"
import { isRTL } from "../i18n"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { useAppDispatch, useAppSelector } from "app/store/store"
import { decrement, increment } from "app/store/counterSlice"

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = () => {
  const $containerInsets = useSafeAreaInsetsStyle(["top", "bottom"])
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  return (
    <View style={[$containerInsets, $container]}>
      <Button text="Increment" onPress={() => dispatch(increment())} />
      <Button text="Decrement" onPress={() => dispatch(decrement())} />
      <Text text={`Count: ${count}`} />
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}
