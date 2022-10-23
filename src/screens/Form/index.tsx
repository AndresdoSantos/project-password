import { useCallback, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Box } from "../../components/Typograph/Box";
import { Paragraph } from "../../components/Typograph/Paragraph";

import { DescriptionInput } from "./components/DescriptionInput";
import { LoginInput } from "./components/LoginInput";
import { PasswordInput } from "./components/PasswordInput";
import { ServiceInput } from "./components/ServiceInput";

type NewPassword = {
  service: string;
  login: string;
  password: string;
  description: string;
}

export function Form() {
  const { setItem, getItem } = useAsyncStorage("@keysave");
  const { goBack } = useNavigation();

  const [service, setService] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = useCallback(async () => {
    const oldPasswords = await getItem();

    if (!description || !login || !password || !service) {
      return Alert.alert("Error", "Preencha todos os campos!");
    }

    if (oldPasswords) {
      const oldPasswordsParsed = JSON.parse(oldPasswords);

      const newPassword: NewPassword = {
        description,
        login,
        password,
        service
      }

      try {
        await setItem(JSON.stringify([...oldPasswordsParsed, newPassword]));

        Alert.alert("Success!");

        goBack();
      } catch (error) {
        Alert.alert((error as { message: string }).message);
      }
    } else {
      try {
        const newPassword: NewPassword = {
          description,
          login,
          password,
          service
        }
  
        await setItem(JSON.stringify([newPassword]));
  
        Alert.alert("Success!");
  
        goBack();
      } catch (error) {
        Alert.alert((error as { message: string }).message);
      }
    }
  }, [description, login, password, service]);

  return (
    <Box className="flex-1 items-center px-5 pt-20 pb-10">
      <Paragraph className="font-300 text-3xl text-gray-700">NEW PASSWORD</Paragraph>

      <Box className="mt-10">
        <ServiceInput 
          onChangeText={setService} 
          value={service} 
        />
        <LoginInput 
          onChangeText={setLogin} 
          value={login} 
        />
        <PasswordInput 
          onChangeText={setPassword} 
          value={password} 
        />
        <DescriptionInput 
          onChangeText={setDescription} 
          value={description} 
          onSubmitEditing={handleSave} 
        />
      </Box>
    </Box>
  );
}