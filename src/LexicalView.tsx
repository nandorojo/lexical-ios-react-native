import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { LexicalViewProps } from './Lexical.types';

const NativeView: React.ComponentType<LexicalViewProps> =
  requireNativeViewManager('Lexical');

export default function LexicalView(props: LexicalViewProps) {
  return <NativeView {...props} />;
}
