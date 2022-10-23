import { PersonSimple } from "phosphor-react-native";
import { useState } from "react";
import { TextInputProps } from "react-native";

import { Input } from "./Input";

type LoginInputProps = TextInputProps & {}

export function LoginInput({ ...props }: LoginInputProps) {
  const [focus, setFocus] = useState(false);

  return (
    <Input.Root focus={focus}>
      <PersonSimple size={16} weight="duotone" color="#E95420" />

      <Input.Box 
        keyboardType="email-address" 
        autoCapitalize="none" 
        autoComplete="email" 
        placeholder="Your login" 
        onFocus={() => setFocus(true)} 
        onBlur={() => setFocus(false)}  
        {...props}
      />
    </Input.Root>
  );
}