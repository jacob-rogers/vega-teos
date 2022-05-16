import { useState } from 'react';
import { TreeItem } from '@gpn-prototypes/vega-ui';

import { getNewTree } from '../helpers/TreeHelper';

type TreeApi = {
  sourceTree: TreeItem[];
  handlers: {
    handlePaste: (transferring: string[], receiving: string) => void;
  };
};

export const useTreeApi = (tree: TreeItem[]): TreeApi => {
  const [state, setState] = useState(tree);

  const handlePaste = (transferring: string[], receiving: string): void => {
    const newTree = getNewTree(state, transferring, receiving);

    setState(newTree);
  };

  const handlers = {
    handlePaste,
  };

  return { sourceTree: state, handlers };
};
