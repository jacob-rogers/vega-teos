import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import store from '@app/store/InitStore';
import { ShellToolkit } from '@app/types';

import { ProjectProvider } from './ProjectProvider';

export const Providers: React.FC<
  ShellToolkit & { children: React.ReactNode }
> = (props) => {
  const { graphqlClient, identity, currentProject, history, children } = props;

  return (
    <Provider store={store}>
      <ApolloProvider client={graphqlClient}>
        <BrowserRouter>
          <ProjectProvider
            currentProject={currentProject}
            identity={identity}
            history={history}
          >
            {children}
          </ProjectProvider>
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  );
};
