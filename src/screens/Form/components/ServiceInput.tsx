import { Buildings, ChatTeardrop } from "phosphor-react-native";
import { useState } from "react";
import { TextInputProps } from "react-native";

import { Input } from "./Input";

type ServiceInputProps = TextInputProps & {}

export function ServiceInput({ ...props }: ServiceInputProps) {
  const [focus, setFocus] = useState(false);

  return (
    <Input.Root focus={focus}>
      <Buildings size={16} weight="duotone" color="#E95420" />

      <Input.Box 
        placeholder="Provider of this service" 
        onFocus={() => setFocus(true)} 
        onBlur={() => setFocus(false)}  
        {...props}
      />
    </Input.Root>
  );
}