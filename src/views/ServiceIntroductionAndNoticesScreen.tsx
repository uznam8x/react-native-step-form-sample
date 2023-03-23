import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';
function ServiceIntroductionAndNoticesScreen({onPrev, onNext}: any) {
  const [field, setField] = useState({age: ''});
  const handleInput = (name: string, text: string) => {
    setField(state => ({...state, [name]: text}));
  };
  const handleSubmit = () => {
    onNext(field);
  };
  return (
    <View>
      <TextInput
        placeholder="age"
        onChangeText={handleInput.bind(null, 'age')}
        style={{backgroundColor: 'white', margin: 16, padding: 16}}
      />
      {!!onPrev && <Button title="이전" onPress={onPrev} />}
      {!!onNext && <Button title="다음" onPress={handleSubmit} />}
    </View>
  );
}

export default ServiceIntroductionAndNoticesScreen;
