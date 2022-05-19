import React, { useRef, useState } from 'react';
import { SplitPanes, useSidebar } from '@gpn-prototypes/vega-ui';

import { ImportButton } from '../../components/ImportButton/ImportButton';
import { TeosTable } from '../../components/TeosTable/TeosTable';
import Tree from '../../components/Tree/Tree';

const MainPage: React.FC = () => {
  /** State */
  const [isShownTree, setIsShownTree] = useState(true);

  /** Ref */
  const treeEditorRef = useRef<HTMLDivElement>(null);

  /** Methods */
  const handleResize = (): void => {
    if (treeEditorRef?.current?.clientWidth) {
      setIsShownTree(Number(treeEditorRef?.current?.clientWidth) > 120);
    }
  };

  const { open: handleOpen } = useSidebar({
    isOpen: false,
    isMinimized: false,
  });

  return (
    <>
      <ImportButton handleOpen={handleOpen} />

      <SplitPanes split="vertical" onResize={handleResize}>
        <SplitPanes.Pane
          aria-label="tree"
          initialSize="224px"
          min="24px"
          max="360px"
        >
          <Tree isOpen={isShownTree} ref={treeEditorRef} />
        </SplitPanes.Pane>
        <SplitPanes.Pane aria-label="table">
          <TeosTable />
        </SplitPanes.Pane>
      </SplitPanes>
    </>
  );
};

export default MainPage;
