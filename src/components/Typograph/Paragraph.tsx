import { Text } from 'react-native'
import type { TextProps } from 'react-native'

import { tw } from '../../lib/tailwindcss'


type ParagraphProps = TextProps & {
  className: string | number
}

export function Paragraph({
  children = undefined,
  className,
  ...props
}: ParagraphProps) {
  return (
    <Text style={tw`${className}`} {...props}>
      {children}
    </Text>
  )
}