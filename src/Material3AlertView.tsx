import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { Material3AlertViewProps } from './Material3Alert.types';

const NativeView: React.ComponentType<Material3AlertViewProps> =
  requireNativeViewManager('Material3Alert');

export default function Material3AlertView(props: Material3AlertViewProps) {
  return <NativeView {...props} />;
}
