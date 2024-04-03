import * as React from 'react';

import { Material3AlertViewProps } from './Material3Alert.types';

export default function Material3AlertView(props: Material3AlertViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
