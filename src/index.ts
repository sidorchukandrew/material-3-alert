import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to Material3Alert.web.ts
// and on native platforms to Material3Alert.ts
import Material3AlertModule from './Material3AlertModule';
import Material3AlertView from './Material3AlertView';
import { ChangeEventPayload, Material3AlertViewProps } from './Material3Alert.types';

// Get the native constant value.
export const PI = Material3AlertModule.PI;

export function hello(): string {
  return Material3AlertModule.hello();
}

export async function setValueAsync(value: string) {
  return await Material3AlertModule.setValueAsync(value);
}

const emitter = new EventEmitter(Material3AlertModule ?? NativeModulesProxy.Material3Alert);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { Material3AlertView, Material3AlertViewProps, ChangeEventPayload };
