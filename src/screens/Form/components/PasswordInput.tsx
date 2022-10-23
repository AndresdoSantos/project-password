import { Lock } from "phosphor-react-native";
import { useState } from "react";
import { TextInputProps } from "react-native";

import { Input } from "./Input";

type PasswordInputProps = TextInputProps & {}

export function PasswordInput({ ...props }: PasswordInputProps) {
  const [focus, setFocus] = useState(false);

  return (
    <Input.Root focus={focus}>
      <Lock size={16} weight="duotone" color="#E95420" />

      <Input.Box 
        placeholder="Your password" 
        keyboardType="visible-password" 
        autoCapitalize="none" 
        autoComplete="password"
        secureTextEntry
        onFocus={() => setFocus(true)} 
        onBlur={() => setFocus(false)}  
        {...props}
      />
    </Input.Root>
  );
}