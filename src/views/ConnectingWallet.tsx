import React from 'react';
import { Button, Text, View } from 'react-native';
function ConnectingWallet({onPrev, onNext}: any) {
  const handleSubmit = () => {
    onNext({wallet: '0xaaa'});
  };
  return (
    <View>
      <Text>지갑 주소: 0xaaa</Text>
      {!!onPrev && <Button title="이전" onPress={onPrev} />}
      {!!onNext && <Button title="다음" onPress={handleSubmit} />}
    </View>
  );
}
export default ConnectingWallet;
