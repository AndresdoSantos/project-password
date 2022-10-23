import { TouchableOpacity } from 'react-native'
import type { TouchableOpacityProps } from 'react-native'

import { tw } from '../../lib/tailwindcss'

type TTouchableProps = TouchableOpacityProps & {
  className: string
}

export function Touchable({
  children = undefined,
  className,
  ...props
}: TTouchableProps) {
  return (
    <TouchableOpacity style={tw`${className}`} activeOpacity={0.8} {...props}>
      {children}
    </TouchableOpacity>
  )
}