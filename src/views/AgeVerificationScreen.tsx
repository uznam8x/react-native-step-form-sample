import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';
function AgeVerificationScreen({onPrev, onNext}: any) {
  const [field, setField] = useState({name: ''});
  const handleInput = (name: string, text: string) => {
    setField(state => ({...state, [name]: text}));
  };
  const handleSubmit = () => {
    onNext(field);
  };

  return (
    <View>
      <TextInput
        placeholder="name"
        onChangeText={handleInput.bind(null, 'name')}
        style={{backgroundColor: 'white', margin: 16, padding: 16}}
      />
      {!!onPrev && <Button title="이전" onPress={onPrev} />}
      {!!onNext && <Button title="다음" onPress={handleSubmit} />}
    </View>
  );
}
export default AgeVerificationScreen;
