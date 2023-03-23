import {StackScreenProps} from '@react-navigation/stack';
import {Button} from 'react-native';
export default function LoginScreen({
  navigation,
  route,
}: StackScreenProps<any>) {
  return (
    <>
      <Button
        title="회원가입"
        onPress={() => {
          navigation.navigate('Age verification');
        }}
      />
    </>
  );
}
