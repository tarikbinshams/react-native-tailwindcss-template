import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className="flex-1 items-center justify-center bg-gray-100"	
    >
      <Text className="text-orange-600 text-[24px] font-medium">Nativewind</Text>
      <Text className="text-orange-600 text-[20px] font-medium mt-2">A Tailwind CSS template for React Native!</Text>
    </View>
  );
}
