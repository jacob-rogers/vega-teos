import { gql } from '@apollo/client';

export const GET_PROJECT_TREE = gql`
  query getProjectTree {
    project {
      teosQueries {
        getProjectTree {
          domainEntities {
            code
            name
          }
          # TODO: Get this prop back when backend changes be actualized
          # domainScenarios {
          #   code,
          #   name
          # }
          domainObjects {
            id
            domainObjectPath {
              code
              value
            }
            geologicalScenarios {
              id
              name
            }
            developmentScenarios {
              id
              name
            }
            thicknessHistograms {
              id
              name
            }
          }
        }
      }
    }
  }
`;
