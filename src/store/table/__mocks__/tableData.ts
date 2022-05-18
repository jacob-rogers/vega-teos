import { ColumnTypes, GridCollection, RowTypes } from '@gpn-prototypes/vega-ui';

export const TABLE_DATA_MOCK: GridCollection = {
  columns: [
    {
      key: '4b4b4bf6-0437-43ab-8854-d3c10510151e',
      name: 'Сценарий',
      type: ColumnTypes.None,
      visible: {
        table: true,
      },
    },
    {
      key: 'MIXTURE_AREA',
      name: 'F, тыс. м²',
      type: ColumnTypes.Number,
      visible: {
        table: true,
      },
    },
    {
      key: 'OIL_POOL_NET_THICKNESS',
      name: 'H эфф.нн, м',
      type: ColumnTypes.Number,
      visible: {
        table: true,
      },
    },
    {
      key: 'OIL_FORMATION_POROSITY_RATIO',
      name: 'Кп, д. ед.',
      type: ColumnTypes.Number,
      visible: {
        table: true,
      },
    },
    {
      key: 'FORMATION_OIL_SATURATION_FACTOR',
      name: 'Кн, д. ед.',
      type: ColumnTypes.Number,
      visible: {
        table: true,
      },
    },
    {
      key: 'DENSITY',
      name: 'Плотность, г/см³',
      type: ColumnTypes.Number,
      visible: {
        table: true,
      },
    },
    {
      key: 'd3e58c1c-c582-4cc9-89fc-f67193dd9e85',
      name: 'Пересч. коэф., д.ед.',
      type: ColumnTypes.None,
      visible: {
        table: true,
      },
    },
    {
      key: '2544f6ae-5950-45f5-b81e-197ae6f1765d',
      name: 'GCos',
      type: ColumnTypes.None,
      visible: {
        table: true,
      },
    },
    {
      key: '99fd19b1-da64-41cb-9fd1-9d8c8311ca22',
      name: 'НГЗ/НГР, тыс.т.',
      type: ColumnTypes.None,
      visible: {
        table: true,
      },
    },
  ],
  rows: [
    {
      '4b4b4bf6-0437-43ab-8854-d3c10510151e': 'Р90',
      'MIXTURE_AREA': 20134.444,
      'OIL_POOL_NET_THICKNESS': 5.543,
      'OIL_FORMATION_POROSITY_RATIO': 0.123,
      'FORMATION_OIL_SATURATION_FACTOR': 0.676,
      'DENSITY': 0.842,
      'd3e58c1c-c582-4cc9-89fc-f67193dd9e85': 0.868,
      '2544f6ae-5950-45f5-b81e-197ae6f1765d': 0.676,
      '99fd19b1-da64-41cb-9fd1-9d8c8311ca22': 0.676,
      'style': 'Even',
      'type': RowTypes.Default,
    },
    {
      '4b4b4bf6-0437-43ab-8854-d3c10510151e': 'Р50',
      'MIXTURE_AREA': 16143.647,
      'OIL_POOL_NET_THICKNESS': 0,
      'OIL_FORMATION_POROSITY_RATIO': 0.11,
      'FORMATION_OIL_SATURATION_FACTOR': 0.65,
      'DENSITY': 0.829,
      'd3e58c1c-c582-4cc9-89fc-f67193dd9e85': 0.865,
      '2544f6ae-5950-45f5-b81e-197ae6f1765d': 0.65,
      '99fd19b1-da64-41cb-9fd1-9d8c8311ca22': 0.65,
      'style': 'Odd',
      'type': RowTypes.Default,
    },
    {
      '4b4b4bf6-0437-43ab-8854-d3c10510151e': 'Р10',
      'MIXTURE_AREA': 12654.33,
      'OIL_POOL_NET_THICKNESS': 3,
      'OIL_FORMATION_POROSITY_RATIO': 0.78,
      'FORMATION_OIL_SATURATION_FACTOR': 0.624,
      'DENSITY': 0.829,
      'd3e58c1c-c582-4cc9-89fc-f67193dd9e85': 0.862,
      '2544f6ae-5950-45f5-b81e-197ae6f1765d': 0.624,
      '99fd19b1-da64-41cb-9fd1-9d8c8311ca22': 0.624,
      'style': 'Even',
      'type': RowTypes.Default,
    },
  ],
  filteredDataKeys: {
    columnsKeys: [
      '4b4b4bf6-0437-43ab-8854-d3c10510151e',
      'MIXTURE_AREA',
      'OIL_POOL_NET_THICKNESS',
      'OIL_FORMATION_POROSITY_RATIO',
      'FORMATION_OIL_SATURATION_FACTOR',
      'DENSITY',
      'd3e58c1c-c582-4cc9-89fc-f67193dd9e85',
      '2544f6ae-5950-45f5-b81e-197ae6f1765d',
      '99fd19b1-da64-41cb-9fd1-9d8c8311ca22',
    ],
    rowsKeys: ['1', '2', '3'],
  },
};
