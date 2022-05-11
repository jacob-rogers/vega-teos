import React, { useRef, useState } from 'react';
import { SplitPanes, useSidebar } from '@gpn-prototypes/vega-ui';

import { ImportComponent } from '../../components/Import/ImportComponent';
import { TeosTableComponent } from '../../components/TeosTable/TeosTableComponent';
import { TeosTreeComponent } from '../../components/TeosTree/TeosTreeComponent';

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
      <ImportComponent handleOpen={handleOpen} />

      <SplitPanes split="vertical" onResize={handleResize}>
        <SplitPanes.Pane
          aria-label="tree"
          initialSize="224px"
          min="24px"
          max="300px"
        >
          {isShownTree && <TeosTreeComponent />}
        </SplitPanes.Pane>
        <SplitPanes.Pane aria-label="table">
          <TeosTableComponent />
        </SplitPanes.Pane>
      </SplitPanes>
    </>
  );
};

export default MainPage;
