import React, { useState } from 'react';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { Providers } from '@app/components/Providers/Providers';
import MainPage from '@app/pages/main/Main';
import projectService from '@app/services/ProjectService';
import { CurrentProject, Identity, ShellToolkit } from '@app/types';
import { presetGpnDark, Theme } from '@consta/uikit/Theme';
import { useMount } from '@gpn-prototypes/vega-ui';
import { block } from 'bem-cn';
import type { History } from 'history';

import './App.css';

export const cn = block('App');

const getInitProps = async ({
  currentProject,
  graphqlClient,
  identity,
  history,
}: Partial<ShellToolkit>): Promise<Required<ShellToolkit>> =>
  new Promise<ShellToolkit>((resolve) => {
    if (currentProject && graphqlClient && identity && history)
      resolve({ currentProject, identity, graphqlClient, history });
  });

const App: React.FC<Partial<ShellToolkit>> = (props) => {
  const { graphqlClient, identity, currentProject, history } = props;
  const [isLoading, setIsLoading] = useState(true);

  useMount(() => {
    const init = async () => {
      try {
        const initProps = await getInitProps(props);

        projectService.init({
          client: initProps.graphqlClient,
          project: initProps.currentProject,
          identity: initProps.identity,
        });
      } catch (e) {
        throw Error('Service has been thrown error at initialized step');
      }
    };

    init().finally(() => setIsLoading(false));
  });

  return (
    <React.StrictMode>
      <Theme preset={presetGpnDark}>
        <div className={cn('Wrapper')}>
          <Providers
            currentProject={currentProject as CurrentProject}
            graphqlClient={graphqlClient as ApolloClient<NormalizedCacheObject>}
            identity={identity as Identity}
            history={history as History}
          >
            <div className={cn()}>{!isLoading && <MainPage />}</div>
          </Providers>
        </div>
      </Theme>
    </React.StrictMode>
  );
};

export default App;
