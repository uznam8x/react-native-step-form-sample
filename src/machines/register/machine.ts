import {assign, createMachine} from 'xstate';

export default createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QCcxQJawC5mQOnQDt0t0BDAG3QC8wBiAbQAYBdRUABwHtYT0vC7EAA9EARgBsADjwAmAOxSArEqlSFEgMxTJAGhABPRAFoxTGUyUSlmsSrEBOW7IAsAXzf7UGbLjwBBGAACADdcdAAzdABjMlIBOgA5AFEADQAVZjYkEG5eeMEc0QRJFzwmB1lNTXMneU0bfSMEWSY8MQVNLTsHBysu+Q8vNEwcfECwUPCo2IK6AGEAGQB5AGVkrKE8vgEhYs0HPBcHeqZbKykK2T6mkzNDqyYXVqkXF1UJMU0hkG9Rv1WuBCMUmRCwyC4EAArtECkEyIQIEFCFxSNE4HQAAoAJWSADUAJLLACqq02OW2BT2iBcmlk5VpdIcrwkLks8iUtwQzzwlQkDi+11aT2OPz+vnwgOQwPRQTBEOhsP4hHhiORqJBsCSaUyrC2PB2hVAxVK5Uq1VqmnqNlkXMcYnaEn5dPeTCYHQ5YpGErwUploMI4MhMLhCKRKLRGKWaw2eopBqpRTuEjw9WkYik1nkpX5Li5tjwn2UTFkUkU0je308v29Yzw8wEhDASsIUHhQQA7pQKGAsFjcYSSWS45wE8rqdy6QzqtcWWylByubIvrynS4xC56vJ19clF6fHWG4Qmy222RO93e9qMuTR-lx0mSqyzVUalI6g1XPmdHglK51FYEgcgcTASPu-z4EeJ6kK27ZdhQPZ9tG6y3rkY67I+xjSHgdLmBUSgOKBliWEuK4OGuoHLuu65WOBPoNgAthwiGQEE4rgnEyr9viRKkqhlIPsaNJTk8M7Mi4rKWFIXK0g6GaWMcSjHIom50YeXBMSxSLscgnEJMhsbZHehoTqYCg4ccy4VCcXyWTJBbyUpfTKXOHjViiEBwEI7G4Pq94YUJCCmByFmVPcNmaHZhgmDUhzkRIoEqK0y5OmB1Y+fgRB8JQNBgH5JmPl8mh4K8xzvBJbz9La0VBbIdVHJmaj8pmrI1GIal+BMUzIJEMR6UaaH+QNJrXO0YgZvIvQSLI6a0lyxgHHI7oLtuSiWNc2h7ultYAkCIJyoGCohsqqrhhq6LwPGQ0Tq87SlfI-J9DY5p2tU7SgUBagbrS8iyB1kGNs2MFnheCG9vliaBWY8ipmcC5slodK-fm7olVUih2MW1zuNtB5+IxzG9qxOn9RDgkiOI41HMcFQitUBGcjVa30tYSliA9Sh2KBqluUAA */
    predictableActionArguments: true,
    id: 'register',
    initial: 'initialize',
    context: {
      name: '',
      age: 0,
    },
    states: {
      initialize: {
        entry: () => ({}),
        always: 'Age verification',
      },

      'Age verification': {
        on: {
          NEXT: {
            target: 'Service introduction and notices',
            actions: 'update',
          },
          CLOSE: 'initialize',
        },
      },

      'Service introduction and notices': {
        on: {
          PREVIOUS: 'Age verification',
          NEXT: {
            target: 'Connecting a wallet',
            actions: 'update',
          },
          CLOSE: 'initialize',
        },
      },

      'Connecting a wallet': {
        on: {
          PREVIOUS: 'Service introduction and notices',
          NEXT: {
            target: 'Completed registration',
            actions: 'update',
          },
          CLOSE: 'initialize',
        },
      },

      'Completed registration': {
        on: {
          PREVIOUS: 'Connecting a wallet',
          CLOSE: 'initialize',
        },
      },
    },
  },
  {
    actions: {
      update: assign((context, event) => {
        const {type, ...data} = event;
        return data;
      }),
    },
  },
);
