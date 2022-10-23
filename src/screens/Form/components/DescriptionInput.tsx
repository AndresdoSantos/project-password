import { ChatTeardrop } from "phosphor-react-native";
import { useState } from "react";
import { TextInputProps } from "react-native";

import { Input } from "./Input";

type DescriptionInputProps = TextInputProps & {}

export function DescriptionInput({ ...props }: DescriptionInputProps) {
  const [focus, setFocus] = useState(false);

  return (
    <Input.Root focus={focus}>
      <ChatTeardrop size={16} weight="duotone" color="#E95420" />

      <Input.Box 
        placeholder="Some description" 
        onFocus={() => setFocus(true)} 
        onBlur={() => setFocus(false)}  
        {...props}
      />
    </Input.Root>
  );
}