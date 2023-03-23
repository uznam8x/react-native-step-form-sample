import {interpret} from 'xstate';
import {from} from 'rxjs';
import machine from './machine';

export const service = interpret(machine).start();
export const state$ = from(service);
