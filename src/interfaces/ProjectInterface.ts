import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { CurrentProject, Identity } from '@app/types';

export type ProjectServiceProps = {
  client: ApolloClient<NormalizedCacheObject>;
  project: CurrentProject;
  identity?: Identity;
};
