import { gql } from '@apollo/client';

export const EXAMPLE_MUTATION = gql`
  mutation calculateProject($version: Int!, $projectInput: RBProjectInput!) {
    project(version: $version) {
      ... on UpdateProjectInnerDiff {
        ...ResourceBaseDiffFragment
      }
      ... on ProjectMutation {
        resourceBase {
          calculateProject(projectInput: $projectInput) {
            ... on TableErrors {
              errors {
                code
                message
                row
                tableName
                columnKey
              }
            }
            ... on DetailError {
              code
              details
              message
            }
            ... on CalculationResult {
              resultId
            }
            ... on DistributionDefinitionErrors {
              errors {
                code
                message
                fields
              }
            }
          }
        }
      }
    }
    version
    __typename
  }
`;
