import { View } from 'react-native'
import type { ViewProps } from 'react-native'

import { tw } from '../../lib/tailwindcss'


type BoxProps = ViewProps & {
  className: string
}

export function Box({
  children = undefined,
  className,
  ...props
}: BoxProps) {
  return (
    <View style={tw`${className}`} {...props}>
      {children}
    </View>
  )
}