import { ReactNode } from "react";
import { TextInput, TextInputProps } from "react-native";
import { clsx} from "clsx";

import { Box } from "../../../components/Typograph/Box";

import { tw } from "../../../lib/tailwindcss";

type InputRootProps = {
  children: ReactNode
  focus: boolean
}

function InputRoot({ children, focus }: InputRootProps) {
  return (
    <Box 
      className={clsx("flex-row items-center bg-gray-50 w-full h-10 rounded-md border px-2 mt-2", {
        "border-orange-ubuntu": focus,
        "border-gray-300": !focus
      })}
    >
      {children}
    </Box>
  );
}

type InputBoxProps = TextInputProps & {}

function InputBox({ ...props }: InputBoxProps) {
  return (
    <TextInput
      style={tw`flex-1 ml-2 font-400`} 
      {...props}
    />
  )
}

export const Input = {
  Root: InputRoot,
  Box: InputBox,
}