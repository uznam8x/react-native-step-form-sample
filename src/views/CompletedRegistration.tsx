import React from 'react';
import {Text, View} from 'react-native';
function CompletedRegistration({data = {}, onSubmit = (form: any) => {}}) {
  return (
    <View>
      <Text>회원가입이 완료 되었습니다.</Text>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
}
export default CompletedRegistration;
