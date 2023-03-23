import {StackScreenProps} from '@react-navigation/stack';
import {
  lazy,
  useEffect,
  useState,
  useLayoutEffect,
  Suspense,
  LazyExoticComponent,
} from 'react';
import {Button, Text, View} from 'react-native';
import {filter, skip} from 'rxjs/operators';
import {service, state$} from '../machines/register';

const STEP = [
  {
    key: 'Age verification',
    value: lazy(() => import('./AgeVerificationScreen')),
  },
  {
    key: 'Service introduction and notices',
    value: lazy(() => import('./ServiceIntroductionAndNoticesScreen')),
  },
  {key: 'Connecting a wallet', value: lazy(() => import('./ConnectingWallet'))},
  {
    key: 'Completed registration',
    value: lazy(() => import('./CompletedRegistration')),
  },
] as const;

function RegisterScreen({
  navigation,
  route,
  canPrev,
  canNext,
}: StackScreenProps<any> & {canNext: boolean; canPrev: boolean}) {
  const [state, setState] = useState({value: '', data: {}});
  const handleSubmit = (form: any) => {
    if (canNext) {
      service.send('NEXT', form);

      const index = STEP.findIndex(v => v.key === route.name);
      navigation.navigate(STEP[index + 1].key);
    }
  };

  const init = () => {
    const subscription = state$
      .pipe(filter(v => v.value === route.name))
      .subscribe($ => {
        setState(() => ({value: $.value as string, data: $.context}));
      });

    return () => {
      subscription.unsubscribe();
    };
  };
  useEffect(init, []);

  if (!state.value.length) return null;

  const handler = Object.assign(
    {},
    canPrev && {
      onPrev: () => {
        service.send('PREVIOUS');
        navigation.goBack();
      },
    },
    canNext && {onNext: handleSubmit},
  );
  const Container: LazyExoticComponent<any> = STEP.find(
    v => v.key === state.value,
  )!.value;
  return (
    <View>
      <Container {...handler} data={state.data} />
    </View>
  );
}

export default function RegisterForm({
  navigation,
  route,
}: StackScreenProps<any>) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleClose = () => {
    service.send('CLOSE');
    navigation.navigate('Login');
  };

  const index = STEP.findIndex(v => v.key === route.name);
  const canPrev = index > 0;
  const canNext = index < STEP.length - 1;
  return (
    <View>
      <View style={{marginTop: 60}} />
      <Button title="닫기" onPress={handleClose} />
      <Text>{route.name}</Text>
      <RegisterScreen {...{navigation, route, canPrev, canNext}} />
    </View>
  );
}
