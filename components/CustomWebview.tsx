import { View, Text } from "react-native"
import { WebView } from 'react-native-webview';

interface CustomWebviewProps {
  height: number
}

export const CustomWebview = ({
  height
}: CustomWebviewProps) => {
  return (
    <View style={{backgroundColor: "dodgerblue", height }}>
      <Text>START WEBVIEW</Text>
        <WebView nestedScrollEnabled={true} source={{ uri: 'https://leopoldhuber.com/' }} style={{ flex: 1 }} />
      <Text>END WEBVIEW</Text>
    </View>
  )
}