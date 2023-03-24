import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to Lexical.web.ts
// and on native platforms to Lexical.ts
import LexicalModule from './LexicalModule';
import LexicalView from './LexicalView';
import { ChangeEventPayload, LexicalViewProps } from './Lexical.types';

// Get the native constant value.
export const PI = LexicalModule.PI;

export function hello(): string {
  return LexicalModule.hello();
}

export async function setValueAsync(value: string) {
  return await LexicalModule.setValueAsync(value);
}

const emitter = new EventEmitter(LexicalModule ?? NativeModulesProxy.Lexical);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { LexicalView, LexicalViewProps, ChangeEventPayload };
