import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Eye, EyeClosed, Key } from "phosphor-react-native";
import { useCallback, useState } from "react";
import { FlatList } from "react-native";

import { Box } from "../components/Typograph/Box";
import { Paragraph } from "../components/Typograph/Paragraph";
import { Touchable } from "../components/Typograph/Touchable";

type Password = {
  service: string;
  login: string;
  password: string;
  description: string;
}

export function Home() {
  const { navigate } = useNavigation();
  const { setItem, getItem } = useAsyncStorage("@keysave");

  const [passwords, setPasswords] = useState<Password[]>([]);

  const loadPasswords = useCallback(() => {
    async function loadStorageInformations() {
      const oldPasswords = await getItem();

      if (oldPasswords) {
        setPasswords(JSON.parse(oldPasswords));
      }
    }

    loadStorageInformations();
  }, []);

  useFocusEffect(loadPasswords);

  const [showPassword, setShowPassword] = useState<string | undefined>(undefined);
  const [showAll, setShowAll] = useState(false);

  return (
    <Box className="flex-1 items-center px-5 pt-20">
      <Paragraph className="font-300 text-3xl text-gray-700">YOUR PASSWORDS</Paragraph>

      <Box className="flex-row items-center mt-10">
        <Touchable 
          className="flex-row items-center justify-center border border-orange-ubuntu bg-orange-50 h-10 px-4 rounded-full mr-1"
          onPress={() => navigate('form')}
        >
          <Key size={16} color="#E95420" weight="duotone" />
          <Paragraph className="font-500 text-xs text-orange-ubuntu ml-2">NEW PASSWORD</Paragraph>
        </Touchable>

        <Touchable 
          className="flex-row items-center justify-center border border-orange-ubuntu bg-orange-50 h-10 px-4 rounded-full ml-1"
          onPress={() => {
            setShowAll((old) => !old);

            setShowPassword(undefined);
          }}
        >
          {showAll ? <Eye size={16} color="#E95420" weight="duotone" /> : <EyeClosed size={16} color="#E95420" weight="duotone" />}
          <Paragraph className="font-500 text-xs text-orange-ubuntu ml-2">{showAll ? "CLOSE ALL" : "SHOW ALL"}</Paragraph>
        </Touchable>
      </Box>

      <Box className="mt-10 items-start justify-start w-full">
        <FlatList 
          data={passwords}
          renderItem={({ item }) => (
            <Touchable className="mb-5" onPress={() => setShowPassword((old) => typeof old === "undefined" ? item.password : undefined)}>
              <Paragraph className="text-lg font-300">{item.service}</Paragraph>
              <Paragraph className="text-xs font-400 text-gray-500">{item.description}</Paragraph>
              <Paragraph className="text-xs font-400 text-orange-ubuntu">{item.login}</Paragraph>
              <Paragraph className="text-xs font-400 text-gray-700">{showAll ? item.password : showPassword === item.password ? item.password : new Array(item.password.length).fill('*')}</Paragraph>
            </Touchable>
          )}
        />
      </Box>
    </Box>
  )
}