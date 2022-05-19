import { gql } from '@apollo/client';

export const DEFAULT_QUERY = gql`
  query GetTableResultRb {
    project {
      resourceBase {
        result {
          resultTable {
            template {
              domainEntities {
                code
                name
                visible {
                  calc
                  table
                  tree
                }
              }
              attributes {
                code
                name
                shortName
                units
                geoType
                decimal
                visible {
                  calc
                  table
                  tree
                }
                viewType
              }
              domainObjects {
                geoFluidTypes
                parents {
                  code
                  name
                  isTotal
                }
                attributeValues {
                  code
                  percentiles
                  values
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PROJECT_NAME = gql`
  query ProjectName($vid: UUID) {
    project(vid: $vid) {
      __typename
      ... on Project {
        vid
        version
        name
      }
      ... on Error {
        code
      }
    }
  }
`;

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
