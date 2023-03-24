import * as React from 'react';

import { LexicalViewProps } from './Lexical.types';

export default function LexicalView(props: LexicalViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
