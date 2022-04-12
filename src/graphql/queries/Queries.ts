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
