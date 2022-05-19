import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  DictType: any;
  /**
   * Leverages the internal Python implmeentation of UUID (uuid.UUID) to provide native UUID objects
   * in fields, resolvers and input.
   */
  UUID: any;
};

export type AlternativeDefinitionResult =
  | AlternativeDefinitions
  | CommonErrors
  | DistributionDefinitionErrors;

/** Результаты определения альтернативных способов задания распределения. */
export type AlternativeDefinitions = {
  __typename?: 'AlternativeDefinitions';
  /** Альтернативные способы задания с расчитанными параметрами */
  distributions: Array<Distribution>;
};

export type Attachment = {
  __typename?: 'Attachment';
  category?: Maybe<AttachmentType>;
  code?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  editedAt?: Maybe<Scalars['DateTime']>;
  editedBy?: Maybe<User>;
  extension?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['ID']>;
  size?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['ID']>;
};

export type AttachmentType = {
  __typename?: 'AttachmentType';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  editedAt?: Maybe<Scalars['DateTime']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['ID']>;
};

export type Attendee = {
  __typename?: 'Attendee';
  roles?: Maybe<Array<Maybe<ProjectRole>>>;
  status?: Maybe<AttendeeStatus>;
  user?: Maybe<User>;
};

export enum AttendeeOrderBy {
  FirstName = 'FIRST_NAME',
  LastName = 'LAST_NAME',
  Name = 'NAME',
  Patronym = 'PATRONYM',
  Role = 'ROLE',
}

export enum AttendeeStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export type Attribute = {
  __typename?: 'Attribute';
  /** Кодовое обозначение подсчётного параметра */
  code: Scalars['String'];
  /** Разрядность подсчётного параметра */
  decimalPlace?: Maybe<Scalars['Int']>;
  /** Тип геологического объекта */
  geoObjectFluidType: GeoObjectFluidType;
  /** Имя подсчётного параметра */
  name: Scalars['String'];
  /** Сокращенное имя или обозначение подсчётного параметра */
  shortName: Scalars['String'];
  /** Единицы измерения подсчётного параметра */
  units: Scalars['String'];
};

export type AttributeDecimal = {
  __typename?: 'AttributeDecimal';
  code: Scalars['String'];
  decimalPlace: Scalars['Int'];
};

export type AttributeInput = {
  /** Кодовое обозначение подсчётного параметра */
  code: Scalars['String'];
  /** Разрядность подсчётного параметра */
  decimalPlace?: InputMaybe<Scalars['Int']>;
  /** Тип геологического объекта */
  geoObjectFluidType: GeoObjectFluidType;
  /** Имя подсчётного параметра */
  name: Scalars['String'];
  /** Сокращенное имя или обозначение подсчётного параметра */
  shortName: Scalars['String'];
  /** Единицы измерения подсчётного параметра */
  units: Scalars['String'];
};

/** Список атрибутов геологических объектов. */
export type AttributeList = {
  __typename?: 'AttributeList';
  result?: Maybe<Array<Maybe<Attribute>>>;
};

/** Результат изменения списка атрибутов геологических объектов. */
export type AttributeListOrError = AttributeList | DetailErrors | Error;

/** Мутации атрибутов геологических объектов. */
export type AttributeMutations = {
  __typename?: 'AttributeMutations';
  create?: Maybe<AttributeListOrError>;
  delete?: Maybe<AttributeListOrError>;
  move?: Maybe<AttributeListOrError>;
  update?: Maybe<AttributeListOrError>;
  updateDecimal?: Maybe<NoneOrError>;
};

/** Мутации атрибутов геологических объектов. */
export type AttributeMutationsCreateArgs = {
  name: Scalars['String'];
  place?: InputMaybe<Scalars['Int']>;
  shortName: Scalars['String'];
  units: Scalars['String'];
};

/** Мутации атрибутов геологических объектов. */
export type AttributeMutationsMoveArgs = {
  place?: InputMaybe<Scalars['Int']>;
};

/** Мутации атрибутов геологических объектов. */
export type AttributeMutationsUpdateArgs = {
  name?: InputMaybe<Scalars['String']>;
  shortName?: InputMaybe<Scalars['String']>;
  units?: InputMaybe<Scalars['String']>;
};

/** Мутации атрибутов геологических объектов. */
export type AttributeMutationsUpdateDecimalArgs = {
  code?: InputMaybe<Scalars['String']>;
  decimalPlace?: InputMaybe<Scalars['Int']>;
};

export type AttributeResult = {
  __typename?: 'AttributeResult';
  code: Scalars['String'];
  decimal: Scalars['Int'];
  geoType: Scalars['String'];
  name: Scalars['String'];
  shortName: Scalars['String'];
  units: Scalars['String'];
  viewType: Scalars['String'];
  visible: VisibleResult;
};

export type AttributeValue = {
  __typename?: 'AttributeValue';
  /** Кодовое обозначение подсчётного параметра */
  code: Scalars['String'];
  distribution?: Maybe<Distribution>;
  /** Отображаемый в ячейке процентиль */
  visibleValue: VisibleValueResult;
};

export type AttributeValueVisibleValueArgs = {
  visibleRank?: InputMaybe<Scalars['Int']>;
};

export type AttributeValueInput = {
  /** Кодовое обозначение подсчётного параметра */
  code: Scalars['String'];
  distribution?: InputMaybe<DistributionInput>;
};

export type AttributeValueResult = {
  __typename?: 'AttributeValueResult';
  code: Scalars['String'];
  percentiles: Array<Scalars['Int']>;
  values: Array<Scalars['String']>;
};

export type CalculatedOrError =
  | CalculationResult
  | DetailError
  | DistributionDefinitionErrors
  | TableErrors;

export type CalculationProperties = {
  __typename?: 'CalculationProperties';
  iterationNumber?: Maybe<Scalars['Int']>;
  method?: Maybe<MethodTypeEnum>;
  percentiles?: Maybe<Array<Maybe<DefaultPercentilesEnum>>>;
};

export type CalculationPropertiesInputType = {
  /** Количество итераций */
  iterationNumber: Scalars['Int'];
  /** Метод расчёта */
  method: MethodTypeEnum;
  /** Список процентилей */
  percentiles: Array<InputMaybe<DefaultPercentilesEnum>>;
};

export type CalculationResult = {
  __typename?: 'CalculationResult';
  /** Идентификатор процесса расчёта.             Информацию о прогрессе выполнения можно получить по url             ws://{host}/processes/{project_vid}/{process_id} */
  processId?: Maybe<Scalars['UUID']>;
};

export type CdfPoint = {
  __typename?: 'CdfPoint';
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type Cell = {
  __typename?: 'Cell';
  code: Scalars['String'];
  value: Scalars['String'];
};

export type CellAddress = {
  __typename?: 'CellAddress';
  /** код аттрибута (столбца) */
  attribute: Scalars['String'];
  /** id доменного объекта (строка) */
  vid: Scalars['UUID'];
};

export type CellAddressInput = {
  /** код аттрибута (столбца) */
  attribute: Scalars['String'];
  /** id доменного объекта (строка) */
  vid: Scalars['UUID'];
};

export type CellL = {
  __typename?: 'CellL';
  code: Scalars['String'];
  value: Scalars['String'];
};

/** Результаты хи квадрат теста восстановленного распределения и выборки. */
export type ChiSquareDistributionBySample = {
  __typename?: 'ChiSquareDistributionBySample';
  /** Тип распределения */
  type: DistributionTypes;
  /** Статистика хи квадрат теста */
  value?: Maybe<Scalars['Float']>;
};

export type Child = {
  __typename?: 'Child';
  code?: Maybe<Scalars['String']>;
  decimal: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};

export type ChildL = {
  __typename?: 'ChildL';
  code: Scalars['String'];
  decimal: Scalars['Int'];
  name: Scalars['String'];
};

/** Общая ошибка. */
export type CommonError = RbErrorInterface & {
  __typename?: 'CommonError';
  /** Код ошибки, соответствующий человекочитаемому сообщению об ошибке */
  code: RbErrorCodes;
  /** Индекс концепции, к которой относится ошибка */
  conceptionIdx?: Maybe<Scalars['Int']>;
  /** Сообщение об ошибке. Отображается в случае отсутствия соответствующего коду человекочитаемого сообщения на клиенте */
  message: Scalars['String'];
};

/** Список ошибок. */
export type CommonErrors = {
  __typename?: 'CommonErrors';
  errors: Array<CommonError>;
};

export type CommonRisk = {
  __typename?: 'CommonRisk';
  /** Наименование группы риска */
  group: Scalars['String'];
  /** Значение общего риска */
  value: Scalars['Float'];
};

export type CommonRiskInput = {
  /** Наименование группы риска */
  group: Scalars['String'];
  /** Значение общего риска */
  value: Scalars['Float'];
};

/** Мутации общих рисков. */
export type CommonRiskMutations = {
  __typename?: 'CommonRiskMutations';
  delete?: Maybe<NoneOrError>;
  set?: Maybe<CommonRiskOrError>;
};

/** Мутации общих рисков. */
export type CommonRiskMutationsSetArgs = {
  objects: Array<InputMaybe<Scalars['String']>>;
  riskType: Scalars['String'];
  value: Scalars['Float'];
};

/** Результат создания/обновления группы общего риска. */
export type CommonRiskOrError =
  | CommonRisk
  | DetailErrors
  | Error
  | ValidationError;

export type Conception = {
  __typename?: 'Conception';
  /** Описание концепции */
  description: Scalars['String'];
  /** Наименование концепции */
  name: Scalars['String'];
  /** Вероятность концепции */
  probability?: Maybe<Scalars['Float']>;
  structure: ProjectStructure;
};

export type ConceptionFilter = {
  __typename?: 'ConceptionFilter';
  columnCode: Scalars['String'];
  numberFilter?: Maybe<ConceptionNumFilter>;
  stringFilter?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ConceptionFilterIn = {
  columnCode: Scalars['String'];
  numberFilter?: InputMaybe<ConceptionNumFilterIn>;
  stringFilter?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ConceptionInput = {
  /** Описание концепции */
  description: Scalars['String'];
  /** Наименование концепции */
  name: Scalars['String'];
  /** Вероятность концепции */
  probability?: InputMaybe<Scalars['Float']>;
  structure: ProjectStructureInput;
};

export type ConceptionInputType = {
  conceptionIdx?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  probability?: InputMaybe<Scalars['Float']>;
  vid?: InputMaybe<Scalars['UUID']>;
};

export type ConceptionList = {
  __typename?: 'ConceptionList';
  conceptions?: Maybe<Array<Maybe<Conception>>>;
};

/** Мутации концепций. */
export type ConceptionMutations = {
  __typename?: 'ConceptionMutations';
  attribute?: Maybe<AttributeMutations>;
  commonRisk?: Maybe<CommonRiskMutations>;
  correlationElement?: Maybe<CorrelationMutations>;
  create?: Maybe<ConceptionOrError>;
  delete?: Maybe<NoneOrError>;
  domainEntity?: Maybe<DomainEntityMutations>;
  domainObject?: Maybe<RbDomainObjectMutations>;
  risk?: Maybe<RiskMutations>;
  saveStructure?: Maybe<SavedOrError>;
  setConceptionFilter?: Maybe<NoneOrError>;
  update?: Maybe<ConceptionOrError>;
  updateAll?: Maybe<ConceptionsOrError>;
};

/** Мутации концепций. */
export type ConceptionMutationsAttributeArgs = {
  code?: InputMaybe<Scalars['String']>;
};

/** Мутации концепций. */
export type ConceptionMutationsCommonRiskArgs = {
  group?: InputMaybe<Scalars['String']>;
};

/** Мутации концепций. */
export type ConceptionMutationsCorrelationElementArgs = {
  cells: Array<CellAddressInput>;
};

/** Мутации концепций. */
export type ConceptionMutationsCreateArgs = {
  description?: InputMaybe<Scalars['String']>;
  existConceptionIdx?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  probability: Scalars['Float'];
};

/** Мутации концепций. */
export type ConceptionMutationsDomainEntityArgs = {
  code?: InputMaybe<Scalars['String']>;
};

/** Мутации концепций. */
export type ConceptionMutationsDomainObjectArgs = {
  vid?: InputMaybe<Scalars['UUID']>;
};

/** Мутации концепций. */
export type ConceptionMutationsRiskArgs = {
  code?: InputMaybe<Scalars['String']>;
};

/** Мутации концепций. */
export type ConceptionMutationsSaveStructureArgs = {
  conceptionStructure: ProjectStructureInput;
};

/** Мутации концепций. */
export type ConceptionMutationsSetConceptionFilterArgs = {
  conFilter?: InputMaybe<ConceptionFilterIn>;
};

/** Мутации концепций. */
export type ConceptionMutationsUpdateArgs = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  probability?: InputMaybe<Scalars['Float']>;
};

/** Мутации концепций. */
export type ConceptionMutationsUpdateAllArgs = {
  conceptions?: InputMaybe<Array<InputMaybe<ConceptionInputType>>>;
};

/** Inner Filter Schema for CollectionFilters. */
export type ConceptionNumFilter = {
  __typename?: 'ConceptionNumFilter';
  end?: Maybe<Scalars['Float']>;
  start?: Maybe<Scalars['Float']>;
};

/** Inner Filter Schema for CollectionFilters. */
export type ConceptionNumFilterIn = {
  end?: InputMaybe<Scalars['Float']>;
  start?: InputMaybe<Scalars['Float']>;
};

/** Результат создания или изменения концепции. */
export type ConceptionOrError = Conception | DetailErrors | Error;

export type ConceptionQueries = {
  __typename?: 'ConceptionQueries';
  conceptionFilter?: Maybe<ConceptionFilter>;
};

/** Результат изменения набора концепций концепции. */
export type ConceptionsOrError = ConceptionList | DetailErrors | Error;

export type CorrelationElement = {
  __typename?: 'CorrelationElement';
  /** Пара ячеек таблицы */
  cells?: Maybe<Array<Maybe<CellAddress>>>;
  /** Значение корреляции между ячейками */
  value: Scalars['Float'];
};

export type CorrelationElementInput = {
  /** Пара ячеек таблицы */
  cells: Array<CellAddressInput>;
  /** Значение корреляции между ячейками */
  value: Scalars['Float'];
};

/** Результат изменения корреляции элементов. */
export type CorrelationElementOrError =
  | CorrelationElement
  | DetailErrors
  | Error;

/** Мутации корреляций. */
export type CorrelationMutations = {
  __typename?: 'CorrelationMutations';
  set?: Maybe<CorrelationElementOrError>;
};

/** Мутации корреляций. */
export type CorrelationMutationsSetArgs = {
  value?: InputMaybe<Scalars['Float']>;
};

export type Country = {
  __typename?: 'Country';
  code?: Maybe<Scalars['String']>;
  coordinateSystems?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  editedAt?: Maybe<Scalars['DateTime']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['ID']>;
};

export type CreateDomainGroupResult = {
  __typename?: 'CreateDomainGroupResult';
  formula?: Maybe<Scalars['String']>;
  ok?: Maybe<Scalars['Boolean']>;
  vid?: Maybe<Scalars['UUID']>;
  vids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
};

/** An enumeration. */
export enum DefaultPercentilesEnum {
  P10 = 'P10',
  P50 = 'P50',
  P90 = 'P90',
}

export type DeleteDomainGroupResult = {
  __typename?: 'DeleteDomainGroupResult';
  ok?: Maybe<Scalars['Boolean']>;
};

export type DeleteDomainObjectMutation = {
  __typename?: 'DeleteDomainObjectMutation';
  ok?: Maybe<Scalars['Boolean']>;
};

/** Ошибка с дополнительной информацией. */
export type DetailError = RbErrorInterface & {
  __typename?: 'DetailError';
  /** Код ошибки, соответствующий человекочитаемому сообщению об ошибке */
  code: RbErrorCodes;
  /** Индекс концепции, к которой относится ошибка */
  conceptionIdx?: Maybe<Scalars['Int']>;
  /** Детальная информация об ошибке */
  details?: Maybe<Scalars['String']>;
  /** Сообщение об ошибке. Отображается в случае отсутствия соответствующего коду человекочитаемого сообщения на клиенте */
  message: Scalars['String'];
};

export type DetailErrors = {
  __typename?: 'DetailErrors';
  errors: Array<DetailError>;
};

export type DevelopmentScenarioL = {
  __typename?: 'DevelopmentScenarioL';
  declineRate: Array<Maybe<RowL>>;
  economics: Array<Maybe<CellL>>;
  id: Scalars['UUID'];
  name: Scalars['String'];
};

export type DevelopmentScenarioVariantL = {
  __typename?: 'DevelopmentScenarioVariantL';
  declineRateHeaders: Array<Maybe<HeaderL>>;
  economicsHeaders: Array<Maybe<HeaderL>>;
  id: Scalars['UUID'];
  name: Scalars['String'];
  scenarios: Array<Maybe<DevelopmentScenarioL>>;
};

/** Результаты вычисления заданного дискретного распределения. */
export type DiscreteDistributionChart = {
  __typename?: 'DiscreteDistributionChart';
  /** Правая область значения распределения */
  domainMaxBound?: Maybe<Scalars['Float']>;
  /** Левая область значения распределения */
  domainMinBound?: Maybe<Scalars['Float']>;
  /** Правая граница распределения */
  maxBound?: Maybe<Scalars['Float']>;
  /** Левая граница распределения */
  minBound?: Maybe<Scalars['Float']>;
  /** Точки процентилей */
  percentiles: Array<Percentile>;
  /** График функции вероятности распределения */
  pmf: Array<Point>;
  /** Функция надежности (1 - cdf) */
  sf: Array<Point>;
  /** Отображаемый в ячейке процентиль */
  visiblePercentile: Percentile;
};

/** Параметры распределения. */
export type Distribution = {
  __typename?: 'Distribution';
  /** Способ задания распределения */
  definition: DistributionDefinitionTypes;
  /** Верхняя граница усечения */
  maxBound?: Maybe<Scalars['Float']>;
  /** Нижняя граница усечения */
  minBound?: Maybe<Scalars['Float']>;
  /** Параметры распределения */
  parameters: Array<Maybe<DistributionParameter>>;
  /** Выборка случайной величины */
  sample?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** ID файла-источника */
  sourceVid?: Maybe<Scalars['UUID']>;
  /** Тип распределения */
  type: DistributionTypes;
};

/** Таблица статистики по перцентилям восстановленного распределения и выборки. */
export type DistributionBySampleStatistics = {
  __typename?: 'DistributionBySampleStatistics';
  headers: Array<Header>;
  rows: Array<Row>;
};

/** Результаты вычисления заданного непрерывного распределения. */
export type DistributionChart = {
  __typename?: 'DistributionChart';
  /** Правая область значения распределения */
  domainMaxBound?: Maybe<Scalars['Float']>;
  /** Левая область значения распределения */
  domainMinBound?: Maybe<Scalars['Float']>;
  /** Правая граница распределения */
  maxBound?: Maybe<Scalars['Float']>;
  /** Левая граница распределения */
  minBound?: Maybe<Scalars['Float']>;
  /** График функции плотности распределения */
  pdf: Array<Point>;
  /** Точки процентилей */
  percentiles: Array<Percentile>;
  /** Функция надежности (1 - cdf) */
  sf: Array<Point>;
  /** Отображаемый в ячейке процентиль */
  visiblePercentile: Percentile;
};

export type DistributionChartResult =
  | CommonErrors
  | DiscreteDistributionChart
  | DistributionChart
  | DistributionDefinitionErrors;

/** Данные для построение графиков или диаграмм распределения. */
export type DistributionChartUnion =
  | DiscreteDistributionChart
  | DistributionChart;

/** Пространство имен для работы с подбром распределения по данным. */
export type DistributionCustomDataSelection = {
  __typename?: 'DistributionCustomDataSelection';
  /** Хи квадрат между распределеним и исходными данными */
  chisquareTable?: Maybe<Array<ChiSquareDistributionBySample>>;
  /** Оценка заданных параметров и распределения по данным */
  estimateParameters?: Maybe<Array<DistributionParameter>>;
  /** Гистограмма распределения и исходных данных */
  plotHistogram?: Maybe<PlotObject>;
  /** Перцентили распределения и исходных данных */
  statisticsTable?: Maybe<DistributionBySampleStatistics>;
};

/** Пространство имен для работы с подбром распределения по данным. */
export type DistributionCustomDataSelectionChisquareTableArgs = {
  attributeCode?: InputMaybe<Scalars['String']>;
  conception?: InputMaybe<Scalars['String']>;
  domainObjectId?: InputMaybe<Scalars['String']>;
};

/** Пространство имен для работы с подбром распределения по данным. */
export type DistributionCustomDataSelectionEstimateParametersArgs = {
  attributeCode?: InputMaybe<Scalars['String']>;
  conception?: InputMaybe<Scalars['String']>;
  definition?: InputMaybe<Scalars['String']>;
  distributionType?: InputMaybe<Scalars['String']>;
  domainObjectId?: InputMaybe<Scalars['String']>;
};

/** Пространство имен для работы с подбром распределения по данным. */
export type DistributionCustomDataSelectionPlotHistogramArgs = {
  attributeCode?: InputMaybe<Scalars['String']>;
  conception?: InputMaybe<Scalars['String']>;
  distributionType?: InputMaybe<Scalars['String']>;
  domainObjectId?: InputMaybe<Scalars['String']>;
  hideDistribution?: InputMaybe<Scalars['Boolean']>;
};

/** Пространство имен для работы с подбром распределения по данным. */
export type DistributionCustomDataSelectionStatisticsTableArgs = {
  attributeCode?: InputMaybe<Scalars['String']>;
  conception?: InputMaybe<Scalars['String']>;
  distributionType?: InputMaybe<Scalars['String']>;
  domainObjectId?: InputMaybe<Scalars['String']>;
};

/** Ошибка задания распределения. */
export type DistributionDefinitionError = RbErrorInterface & {
  __typename?: 'DistributionDefinitionError';
  /** Код ошибки, соответствующий человекочитаемому сообщению об ошибке */
  code: RbErrorCodes;
  /** Индекс концепции, к которой относится ошибка */
  conceptionIdx?: Maybe<Scalars['Int']>;
  /** Список параметров задания распределения, к которым относится ошибка */
  fields: Array<Scalars['String']>;
  /** Сообщение об ошибке. Отображается в случае отсутствия соответствующего коду человекочитаемого сообщения на клиенте */
  message: Scalars['String'];
};

/** Список ошибок задания распределения. */
export type DistributionDefinitionErrors = {
  __typename?: 'DistributionDefinitionErrors';
  errors: Array<DistributionDefinitionError>;
};

/** Способы задания распределений. */
export enum DistributionDefinitionTypes {
  /** Через альфа, бета, минимум и максимум */
  AlphaBetaMinMax = 'ALPHA_BETA_MIN_MAX',
  /** Через логарифмическое среднее и два процентиля */
  ArmeanTwoPercentiles = 'ARMEAN_TWO_PERCENTILES',
  /** Через логарифмическое среднее и два процентиля (P90 и P10) */
  ArmeanTwoPercentilesP90P10 = 'ARMEAN_TWO_PERCENTILES_P90_P10',
  /** Константа */
  Constant = 'CONSTANT',
  /** Через четыре процентиля */
  FourPercentiles = 'FOUR_PERCENTILES',
  /** Через четыре процентиля (P90, P75, P25 и P10) */
  FourPercentilesP90P75P25P10 = 'FOUR_PERCENTILES_P90_P75_P25_P10',
  /** Через четыре процентиля (P95, P90, P10 и P5) */
  FourPercentilesP95P90P10P5 = 'FOUR_PERCENTILES_P95_P90_P10_P5',
  /** Через расположение, арифметическое среднее и арифметическое стандартное отклонение */
  LocationArmeanArsd = 'LOCATION_ARMEAN_ARSD',
  /** Через расположение, арифметическое среднее и один процентиль */
  LocationArmeanOnePercentile = 'LOCATION_ARMEAN_ONE_PERCENTILE',
  /** Через расположение, арифметическое среднее и один процентиль P10 */
  LocationArmeanOnePercentileP10 = 'LOCATION_ARMEAN_ONE_PERCENTILE_P10',
  /** Через расположение, арифметическое среднее и один процентиль P90 */
  LocationArmeanOnePercentileP90 = 'LOCATION_ARMEAN_ONE_PERCENTILE_P90',
  /** Через расположение, геометрическое среднее и геометрическое стандартное отклонение */
  LocationGeommeanGeomsd = 'LOCATION_GEOMMEAN_GEOMSD',
  /** Через расположение, логарифмическое среднее и логарифмическое стандартное отклонение */
  LocationLogmeanLogsd = 'LOCATION_LOGMEAN_LOGSD',
  /** Через расположение, логарифмическое среднее и один процентиль */
  LocationLogmeanOnePercentile = 'LOCATION_LOGMEAN_ONE_PERCENTILE',
  /** Через расположение, логарифмическое среднее и один процентиль P10 */
  LocationLogmeanOnePercentileP10 = 'LOCATION_LOGMEAN_ONE_PERCENTILE_P10',
  /** Через расположение, логарифмическое среднее и один процентиль P90 */
  LocationLogmeanOnePercentileP90 = 'LOCATION_LOGMEAN_ONE_PERCENTILE_P90',
  /** Через количество вариантов и сдвиг */
  LocationNumber = 'LOCATION_NUMBER',
  /** Через расположение и два процентиля */
  LocationTwoPercentiles = 'LOCATION_TWO_PERCENTILES',
  /** Через расположение и два процентиля (P50 и P10) */
  LocationTwoPercentilesP50P10 = 'LOCATION_TWO_PERCENTILES_P50_P10',
  /** Через расположение и два процентиля (P90 и P10) */
  LocationTwoPercentilesP90P10 = 'LOCATION_TWO_PERCENTILES_P90_P10',
  /** Через расположение и два процентиля (P90 и P50) */
  LocationTwoPercentilesP90P50 = 'LOCATION_TWO_PERCENTILES_P90_P50',
  /** Через логарифмическое среднее и два процентиля */
  LogmeanTwoPercentiles = 'LOGMEAN_TWO_PERCENTILES',
  /** Через логарифмическое среднее и два процентиля (P90 и P10) */
  LogmeanTwoPercentilesP90P10 = 'LOGMEAN_TWO_PERCENTILES_P90_P10',
  /** Через среднее (дискретное) и один процентиль */
  MeanDiscreteOnePercentile = 'MEAN_DISCRETE_ONE_PERCENTILE',
  /** Через среднее (дискретное) и один процентиль P90 */
  MeanDiscreteOnePercentileP90 = 'MEAN_DISCRETE_ONE_PERCENTILE_P90',
  /** Через среднее (дискретное) и один процентиль P95 */
  MeanDiscreteOnePercentileP95 = 'MEAN_DISCRETE_ONE_PERCENTILE_P95',
  /** Через среднее и один процентиль */
  MeanOnePercentile = 'MEAN_ONE_PERCENTILE',
  /** Через среднее и один процентиль P10 */
  MeanOnePercentileP10 = 'MEAN_ONE_PERCENTILE_P10',
  /** Через среднее и один процентиль P90 */
  MeanOnePercentileP90 = 'MEAN_ONE_PERCENTILE_P90',
  /** Через среднее и стандартное отклонение */
  MeanSd = 'MEAN_SD',
  /** Через среднее и стандартное отклонение (дискретные распределения) */
  MeanSdDiscrete = 'MEAN_SD_DISCRETE',
  /** Через минимум и максимум */
  MinMax = 'MIN_MAX',
  /** Через минимум и максимум (дискретное) */
  MinMaxInt = 'MIN_MAX_INT',
  /** Через минимум, максимум и два процентиля */
  MinMaxTwoPercentiles = 'MIN_MAX_TWO_PERCENTILES',
  /** Через минимум, максимум и два процентиля (P75 и P25) */
  MinMaxTwoPercentilesP75P25 = 'MIN_MAX_TWO_PERCENTILES_P75_P25',
  /** Через минимум, максимум и два процентиля (P90 и P10) */
  MinMaxTwoPercentilesP90P10 = 'MIN_MAX_TWO_PERCENTILES_P90_P10',
  /** Через наиболее вероятное, минимум и максимум */
  ModeMinMax = 'MODE_MIN_MAX',
  /** Через наиболее вероятное и два процентиля */
  ModeTwoPercentiles = 'MODE_TWO_PERCENTILES',
  /** Через наиболее вероятное и два процентиля (P90 и P10) */
  ModeTwoPercentilesP90P10 = 'MODE_TWO_PERCENTILES_P90_P10',
  /** Вероятность успеха */
  Probability = 'PROBABILITY',
  /** Через количество испытаний и вероятность */
  ProbabilityTrial = 'PROBABILITY_TRIAL',
  /** Через выборку */
  Sample = 'SAMPLE',
  /** Через три процентиля */
  ThreePercentiles = 'THREE_PERCENTILES',
  /** Через три процентиля (P90, P50 и P10) */
  ThreePercentilesP90P50P10 = 'THREE_PERCENTILES_P90_P50_P10',
  /** Через два процентиля */
  TwoPercentiles = 'TWO_PERCENTILES',
  /** Через два процентиля (P90 и P10) */
  TwoPercentilesP90P10 = 'TWO_PERCENTILES_P90_P10',
  /** Через два процентиля (P95 и P5) */
  TwoPercentilesP95P5 = 'TWO_PERCENTILES_P95_P5',
  /** Через два процентиля (P99 и P1) */
  TwoPercentilesP99P1 = 'TWO_PERCENTILES_P99_P1',
}

/** Параметры распределения. */
export type DistributionInput = {
  /** Способ задания распределения */
  definition: DistributionDefinitionTypes;
  /** Верхняя граница усечения */
  maxBound?: InputMaybe<Scalars['Float']>;
  /** Нижняя граница усечения */
  minBound?: InputMaybe<Scalars['Float']>;
  /** Параметры распределения */
  parameters: Array<InputMaybe<DistributionParameterInput>>;
  /** Выборка случайной величины */
  sample?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** ID файла-источника */
  sourceVid?: InputMaybe<Scalars['UUID']>;
  /** Тип распределения */
  type: DistributionTypes;
};

export type DistributionOrError = DetailError | Distribution;

/** Параметр способа задания распределения. */
export type DistributionParameter = {
  __typename?: 'DistributionParameter';
  /** Тип параметра распределения */
  type: DistributionParameterTypes;
  value: Scalars['Float'];
};

/** Параметр способа задания распределения. */
export type DistributionParameterInput = {
  /** Тип параметра распределения */
  type: DistributionParameterTypes;
  value: Scalars['Float'];
};

/** Тип параметра задания распределения. */
export enum DistributionParameterTypes {
  /** Параметр расположения Альфа */
  Alpha = 'ALPHA',
  /** Арифметическое среднее */
  Armean = 'ARMEAN',
  /** Арифметическое стандартное отклонение */
  Arsd = 'ARSD',
  /** Параметр расположения Бэта */
  Beta = 'BETA',
  /** Константа */
  Constant = 'CONSTANT',
  /** Геометрическое среднее */
  Geommean = 'GEOMMEAN',
  /** Геометрическое стандартное отклонение */
  Geomsd = 'GEOMSD',
  /** Расположение */
  Location = 'LOCATION',
  /** Расположение (целое) */
  LocationInt = 'LOCATION_INT',
  /** Логарифмическое среднее */
  Logmean = 'LOGMEAN',
  /** Логарифмическое стандартное отклонение */
  Logsd = 'LOGSD',
  /** Максимум */
  Max = 'MAX',
  /** Максимум (целое) */
  MaxInt = 'MAX_INT',
  /** Среднее */
  Mean = 'MEAN',
  /** Среднее (кратное 0.5) */
  MeanDiscrete = 'MEAN_DISCRETE',
  /** Минимум */
  Min = 'MIN',
  /** Минимум (целое) */
  MinInt = 'MIN_INT',
  /** Наиболее вероятное */
  Mode = 'MODE',
  /** Количество вариантов */
  Number = 'NUMBER',
  /** Вероятность */
  Probability = 'PROBABILITY',
  /** Первый квантильный ранг */
  Q1Rank = 'Q1_RANK',
  /** Значение первого квантиля */
  Q1Value = 'Q1_VALUE',
  /** Второй квантильный ранг */
  Q2Rank = 'Q2_RANK',
  /** Значение второго квантиля */
  Q2Value = 'Q2_VALUE',
  /** Третий квантильный ранг */
  Q3Rank = 'Q3_RANK',
  /** Значение третьего квантиля */
  Q3Value = 'Q3_VALUE',
  /** Четвертый квантильный ранг */
  Q4Rank = 'Q4_RANK',
  /** Значение четвертого квантиля */
  Q4Value = 'Q4_VALUE',
  /** Стандартное отклонение */
  Sd = 'SD',
  /** Испытания */
  Trial = 'TRIAL',
}

/** Пространство имен для работы с распределениями. */
export type DistributionQueries = {
  __typename?: 'DistributionQueries';
  /** Результат поиска альтернативных способов задания распределения */
  alternativeDefinitions?: Maybe<AlternativeDefinitionResult>;
  /** Результат вычисления значения распределения */
  distributionChart?: Maybe<DistributionChartResult>;
};

/** Пространство имен для работы с распределениями. */
export type DistributionQueriesAlternativeDefinitionsArgs = {
  code?: InputMaybe<Scalars['String']>;
  distribution: DistributionInput;
};

/** Пространство имен для работы с распределениями. */
export type DistributionQueriesDistributionChartArgs = {
  code?: InputMaybe<Scalars['String']>;
  distribution: DistributionInput;
  visibleRank?: InputMaybe<Scalars['Int']>;
};

export type DistributionSetResult = {
  __typename?: 'DistributionSetResult';
  /** Альтернативные способы задания */
  alternatives?: Maybe<Array<Maybe<Distribution>>>;
  chart?: Maybe<DistributionChartUnion>;
  /** Отображаемое значение */
  visibleValue?: Maybe<Scalars['Float']>;
};

/** Результат задания параметра. */
export type DistributionSetResultOrError =
  | CommonErrors
  | DetailErrors
  | DistributionDefinitionErrors
  | DistributionSetResult
  | Error;

/** Типы распределений. */
export enum DistributionTypes {
  /** Распределение Бернулли */
  Bernoulli = 'BERNOULLI',
  /** Бета распределение */
  Beta = 'BETA',
  /** Биномиальное распределение */
  Binomial = 'BINOMIAL',
  /** Константа */
  Constant = 'CONSTANT',
  /** Подбор распределение по выборке */
  CustomDataSelection = 'CUSTOM_DATA_SELECTION',
  /** Пользовательское распределение по выборке */
  CustomSample = 'CUSTOM_SAMPLE',
  /** Логнормальное распределение */
  Lognormal = 'LOGNORMAL',
  /** Нормальное распределение */
  Normal = 'NORMAL',
  /** ПЕРТ распределение */
  Pert = 'PERT',
  /** Треугольное распределение */
  Triangular = 'TRIANGULAR',
  /** Равномерное распределение */
  Uniform = 'UNIFORM',
  /** Дискретное равномерное распределение */
  UniformDiscrete = 'UNIFORM_DISCRETE',
}

export type DomainEntity = {
  __typename?: 'DomainEntity';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  editedAt?: Maybe<Scalars['DateTime']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['ID']>;
};

export type DomainEntityImage = {
  __typename?: 'DomainEntityImage';
  attributes?: Maybe<Array<Maybe<PropertyMeta>>>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  entity?: Maybe<DomainEntity>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['ID']>;
};

export type DomainEntityL = {
  __typename?: 'DomainEntityL';
  code: Scalars['String'];
  name: Scalars['String'];
};

/** Мутации доменных сущностей. */
export type DomainEntityMutations = {
  __typename?: 'DomainEntityMutations';
  create?: Maybe<RbDomainEntityListOrError>;
  delete?: Maybe<RbDomainEntityListOrError>;
  move?: Maybe<RbDomainEntityListOrError>;
  update?: Maybe<RbDomainEntityListOrError>;
};

/** Мутации доменных сущностей. */
export type DomainEntityMutationsCreateArgs = {
  calcVisible: Scalars['Boolean'];
  icon: RbDomainEntityIcons;
  name: Scalars['String'];
  place?: InputMaybe<Scalars['Int']>;
  tableVisible: Scalars['Boolean'];
  treeVisible: Scalars['Boolean'];
};

/** Мутации доменных сущностей. */
export type DomainEntityMutationsMoveArgs = {
  place?: InputMaybe<Scalars['Int']>;
};

/** Мутации доменных сущностей. */
export type DomainEntityMutationsUpdateArgs = {
  calcVisible?: InputMaybe<Scalars['Boolean']>;
  icon?: InputMaybe<RbDomainEntityIcons>;
  name?: InputMaybe<Scalars['String']>;
  tableVisible?: InputMaybe<Scalars['Boolean']>;
  treeVisible?: InputMaybe<Scalars['Boolean']>;
};

export type DomainEntityResult = {
  __typename?: 'DomainEntityResult';
  code: Scalars['String'];
  name: Scalars['String'];
  visible: VisibleResult;
};

export type DomainMutations = {
  __typename?: 'DomainMutations';
  object?: Maybe<DomainObjectMutations>;
  objectGroup?: Maybe<DomainObjectGroupMutations>;
};

export type DomainObject = {
  __typename?: 'DomainObject';
  /** Значение GCoS геологического объекта */
  GCoS?: Maybe<Scalars['Float']>;
  /** Список значений атрибутов геологического объекта */
  attributeValues: Array<Maybe<AttributeValue>>;
  /** Иерархия геологического объекта в структуре проекта */
  domainObjectPath: Array<Maybe<DomainObjectPathLevel>>;
  /** Категория геологического объекта */
  geoObjectCategory: GeoObjectCategories;
  /** Тип геологического объекта */
  geoObjectFluidType: GeoObjectFluidType;
  /** Список рисков геологического объекта */
  risksValues: Array<Maybe<RiskValue>>;
  /** Список вероятностей насыщения */
  saturationProbabilities: Array<SaturationProbabilities>;
  /** id строки */
  vid: Scalars['UUID'];
  /** Отображения/Скрытие объекта в таблице */
  visible: Scalars['Boolean'];
};

export type DomainObjectGroupMutations = {
  __typename?: 'DomainObjectGroupMutations';
  create?: Maybe<CreateDomainGroupResult>;
  delete?: Maybe<DeleteDomainGroupResult>;
  update?: Maybe<UpdateDomainGroupResult>;
};

export type DomainObjectGroupMutationsCreateArgs = {
  formula?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  vids?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
};

export type DomainObjectGroupMutationsDeleteArgs = {
  vid: Scalars['UUID'];
};

export type DomainObjectGroupMutationsUpdateArgs = {
  formula?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  vid: Scalars['UUID'];
  vids?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
};

export type DomainObjectGroupType = {
  __typename?: 'DomainObjectGroupType';
  formula?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  objects?: Maybe<Array<Maybe<DomainObjectInterface>>>;
  vid?: Maybe<Scalars['UUID']>;
};

export type DomainObjectInput = {
  /** Список значений атрибутов геологического объекта */
  attributeValues: Array<AttributeValueInput>;
  /** Иерархия геологического объекта в структуре проекта */
  domainObjectPath: Array<DomainObjectPathLevelInput>;
  /** Категория геологического объекта */
  geoObjectCategory: GeoObjectCategories;
  /** Тип геологического объекта */
  geoObjectFluidType: GeoObjectFluidType;
  /** Список рисков геологического объекта */
  risksValues: Array<RiskValueInput>;
  /** Список вероятностей насыщения */
  saturationProbabilities: Array<InputMaybe<SaturationProbabilitiesInput>>;
  /** id строки */
  vid: Scalars['UUID'];
  /** Отображения/Скрытие объекта в таблице */
  visible: Scalars['Boolean'];
};

/** Интерфейс доменного объекта. */
export type DomainObjectInterface = {
  name?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['UUID']>;
};

export type DomainObjectL = {
  __typename?: 'DomainObjectL';
  developmentScenarios: Array<Maybe<DevelopmentScenarioVariantL>>;
  domainObjectPath: Array<Maybe<DomainObjectPathL>>;
  geologicalScenarios: Array<Maybe<GeoLogicalScenarioVariantL>>;
  id: Scalars['UUID'];
  thicknessHistograms: Array<Maybe<ThicknessHistogramVariantL>>;
};

export type DomainObjectMutations = {
  __typename?: 'DomainObjectMutations';
  delete?: Maybe<DeleteDomainObjectMutation>;
};

export type DomainObjectMutationsDeleteArgs = {
  vid?: InputMaybe<Scalars['UUID']>;
};

/** Результат создания/перемещения доменного объекта. */
export type DomainObjectOrError =
  | DetailErrors
  | DomainObjectWithPosition
  | Error
  | ValidationError;

export type DomainObjectPathL = {
  __typename?: 'DomainObjectPathL';
  code: Scalars['String'];
  value: Scalars['String'];
};

export type DomainObjectPathLevel = {
  __typename?: 'DomainObjectPathLevel';
  /** Кодовое обозначение уровня иерархии геологического объекта */
  code: Scalars['String'];
  /** Название уровня иерархии геологического объекта */
  value?: Maybe<Scalars['String']>;
};

export type DomainObjectPathLevelInput = {
  /** Кодовое обозначение уровня иерархии геологического объекта */
  code: Scalars['String'];
  /** Название уровня иерархии геологического объекта */
  value?: InputMaybe<Scalars['String']>;
};

export type DomainObjectQuery = {
  __typename?: 'DomainObjectQuery';
  domainObject?: Maybe<DomainObjectInterface>;
  objectGroup?: Maybe<DomainObjectGroupType>;
  objectGroupList?: Maybe<Array<Maybe<DomainObjectGroupType>>>;
};

export type DomainObjectQueryDomainObjectArgs = {
  name?: InputMaybe<Scalars['String']>;
  vid?: InputMaybe<Scalars['UUID']>;
};

export type DomainObjectQueryObjectGroupArgs = {
  name?: InputMaybe<Scalars['String']>;
  vid?: InputMaybe<Scalars['UUID']>;
};

export type DomainObjectResult = {
  __typename?: 'DomainObjectResult';
  attributeValues: Array<AttributeValueResult>;
  geoFluidTypes: Array<Maybe<Scalars['String']>>;
  parents: Array<Parent>;
};

/** Доменный объект с индексом положения в таблице. */
export type DomainObjectWithPosition = {
  __typename?: 'DomainObjectWithPosition';
  object: DomainObject;
  position?: Maybe<Scalars['Int']>;
};

/** Should contain all codes from DOMAIN_SCENARIOS. */
export enum DomainScenarioEnum {
  DevScenarios = 'DEV_SCENARIOS',
  GeoScenarios = 'GEO_SCENARIOS',
  ThicknessHist = 'THICKNESS_HIST',
}

export type DomainScenarioL = {
  __typename?: 'DomainScenarioL';
  code: Scalars['String'];
  name: Scalars['String'];
};

export type DomainSchema = {
  __typename?: 'DomainSchema';
  entityImages?: Maybe<Array<Maybe<DomainEntityImage>>>;
  version?: Maybe<Scalars['String']>;
};

/** Common error-object class. */
export type Error = ErrorInterface & {
  __typename?: 'Error';
  /** Код ошибки, соответствующий человекочитаемому сообщению об ошибке */
  code: ErrorCodesEnum;
  details?: Maybe<Scalars['String']>;
  /** Сообщение об ошибке. Отображается в случае отсутствия соответствующего коду человекочитаемого сообщения на клиенте */
  message: Scalars['String'];
  payload?: Maybe<Scalars['DictType']>;
};

/** Error codes list. */
export enum ErrorCodesEnum {
  /** Проект нельзя возвращать в статус заготовки. */
  CannotBringBlankBack = 'CANNOT_BRING_BLANK_BACK',
  /** Отсутствует роль */
  EmptyAttendeeRole = 'EMPTY_ATTENDEE_ROLE',
  /** Ошибка */
  Error = 'ERROR',
  /** Некорректная версия проекта */
  IncorrectProjectVersion = 'INCORRECT_PROJECT_VERSION',
  /** Некорректный формат UUID */
  IncorrectUuid = 'INCORRECT_UUID',
  /** Неверная структура импортируемого файла */
  InvalidImportFileStructure = 'INVALID_IMPORT_FILE_STRUCTURE',
  /** Неверный номер страницы */
  InvalidPageNumber = 'INVALID_PAGE_NUMBER',
  /** Неверный размер страницы */
  InvalidPageSize = 'INVALID_PAGE_SIZE',
  /** Имя уже используется в концепциях */
  NonUniqueName = 'NON_UNIQUE_NAME',
  /** Удаляемый участник не найден в проекте  */
  NoAttendeeToRemove = 'NO_ATTENDEE_TO_REMOVE',
  /** Пользователь не обладает правами для совершения операции */
  NoRights = 'NO_RIGHTS',
  /** Объект не найден */
  ObjectNotFound = 'OBJECT_NOT_FOUND',
  /** Участник проекта уже обладет данной ролью */
  ProjectAttendeeAlreadyHasRole = 'PROJECT_ATTENDEE_ALREADY_HAS_ROLE',
  /** Участник проекта не найден */
  ProjectAttendeeNotFound = 'PROJECT_ATTENDEE_NOT_FOUND',
  /** Рольу участника проекта не найдена */
  ProjectAttendeeUserRoleNotFound = 'PROJECT_ATTENDEE_USER_ROLE_NOT_FOUND',
  /** Невозможно добавить участника с дублирующимися ролями. */
  ProjectAttendeeUserWithDuplicateRoles = 'PROJECT_ATTENDEE_USER_WITH_DUPLICATE_ROLES',
  /** Невозможно сохранить проект - не найден менеджер проекта */
  ProjectManagerNotFound = 'PROJECT_MANAGER_NOT_FOUND',
  /** Проект с таким именем уже существует */
  ProjectNameAlreadyExists = 'PROJECT_NAME_ALREADY_EXISTS',
  /** Проект не найден */
  ProjectNotFound = 'PROJECT_NOT_FOUND',
  /** Проект был обновлён */
  ProjectUpdatedError = 'PROJECT_UPDATED_ERROR',
  /** Ошибка при обновлении проекта */
  ProjectUpdateError = 'PROJECT_UPDATE_ERROR',
  /** Расхождение версий проекта */
  ProjectVersionDiffError = 'PROJECT_VERSION_DIFF_ERROR',
  /** Объект справочника не найден */
  ReferenceItemNotFound = 'REFERENCE_ITEM_NOT_FOUND',
  /** Неправильно сформированный запрос */
  RequestError = 'REQUEST_ERROR',
  /** Ошибка валидации */
  Validation = 'VALIDATION',
  /** Неверное расширение файла */
  WrongFileExtension = 'WRONG_FILE_EXTENSION',
}

/** Интерфейс ошибок, отображаемых пользователю. */
export type ErrorInterface = {
  /** Код ошибки, соответствующий человекочитаемому сообщению об ошибке */
  code: ErrorCodesEnum;
  details?: Maybe<Scalars['String']>;
  /** Сообщение об ошибке. Отображается в случае отсутствия соответствующего коду человекочитаемого сообщения на клиенте */
  message: Scalars['String'];
  payload?: Maybe<Scalars['DictType']>;
};

export type GCoSCalculationResult = {
  __typename?: 'GCoSCalculationResult';
  /** Список значений GCoS геологических объектов */
  GCoSValues?: Maybe<Array<Maybe<Scalars['Float']>>>;
  errors?: Maybe<Array<TableError>>;
};

export type GeoLogicalScenarioVariantL = {
  __typename?: 'GeoLogicalScenarioVariantL';
  headers: Array<Maybe<HeaderL>>;
  id: Scalars['UUID'];
  name: Scalars['String'];
  scenarios: Array<Maybe<GeologicalScenarioL>>;
};

/** Список категорий геологического объекта. */
export enum GeoObjectCategories {
  Reserves = 'RESERVES',
  Resources = 'RESOURCES',
}

/** Список типов геологических объектов(флюидов). */
export enum GeoObjectFluidType {
  Gas = 'GAS',
  Mixture = 'MIXTURE',
  Oil = 'OIL',
}

export type GeologicalScenarioL = {
  __typename?: 'GeologicalScenarioL';
  cells: Array<Maybe<CellL>>;
  id: Scalars['UUID'];
  name: Scalars['String'];
};

export type Header = {
  __typename?: 'Header';
  children: Array<Maybe<Child>>;
  code: Scalars['String'];
  decimal: Scalars['Int'];
  name: Scalars['String'];
};

export type HeaderL = {
  __typename?: 'HeaderL';
  children: Array<Maybe<ChildL>>;
  code: Scalars['String'];
  decimal: Scalars['Int'];
  name: Scalars['String'];
};

export type HistogramReservesStatistics = {
  __typename?: 'HistogramReservesStatistics';
  decimal: Scalars['Int'];
  mathStats: Array<MathStat>;
  percentiles: Array<PercentileOutput>;
  title: Scalars['String'];
};

export type HistogramResult = {
  __typename?: 'HistogramResult';
  cdf: Array<CdfPoint>;
  numberOfIterationBin: Array<Scalars['Float']>;
  percentiles: Array<PercentilePoint>;
  sample: Array<Scalars['Float']>;
  subtitle: Scalars['String'];
  title: Scalars['String'];
};

export type HistogramResultQuery = {
  __typename?: 'HistogramResultQuery';
  getHistogramReservesStatistics?: Maybe<HistogramsReservesStatistics>;
  getHistograms?: Maybe<HistogramsResult>;
  getSensitivityAnalysis?: Maybe<Array<Maybe<SensitivityAnalysis>>>;
  getSensitivityAnalysisStatistics?: Maybe<
    Array<Maybe<SensitivityAnalysisStatistics>>
  >;
};

export type HistogramResultQueryGetHistogramReservesStatisticsArgs = {
  bins?: InputMaybe<Scalars['Int']>;
  domainEntityNames?: InputMaybe<Array<Scalars['String']>>;
};

export type HistogramResultQueryGetHistogramsArgs = {
  bins?: InputMaybe<Scalars['Int']>;
  domainEntityNames?: InputMaybe<Array<Scalars['String']>>;
};

export type HistogramResultQueryGetSensitivityAnalysisArgs = {
  domainEntityNames?: InputMaybe<Array<Scalars['String']>>;
};

export type HistogramResultQueryGetSensitivityAnalysisStatisticsArgs = {
  domainEntityNames?: InputMaybe<Array<Scalars['String']>>;
};

export type HistogramsReservesStatistics = {
  __typename?: 'HistogramsReservesStatistics';
  statistics: Array<HistogramReservesStatistics>;
};

export type HistogramsResult = {
  __typename?: 'HistogramsResult';
  histograms?: Maybe<Array<HistogramResult>>;
};

export type MathStat = {
  __typename?: 'MathStat';
  name: Scalars['String'];
  value: Scalars['String'];
};

/** An enumeration. */
export enum MethodTypeEnum {
  Deterministic = 'DETERMINISTIC',
  LatinHypercube = 'LATIN_HYPERCUBE',
  MonteCarlo = 'MONTE_CARLO',
}

export type Mutation = {
  __typename?: 'Mutation';
  project?: Maybe<ProjectMutationOrError>;
  /** Актуальная версия текущего проекта */
  version?: Maybe<Scalars['Int']>;
};

export type MutationProjectArgs = {
  version: Scalars['Int'];
};

export type NoDomainObjectWithSuchIdError = {
  __typename?: 'NoDomainObjectWithSuchIdError';
  errorMessage: Scalars['String'];
};

export type NoTeosObjectError = {
  __typename?: 'NoTeosObjectError';
  errorMessage: Scalars['String'];
};

export type NoVariantWithSuchVid = {
  __typename?: 'NoVariantWithSuchVid';
  errorMessage: Scalars['String'];
};

/** Результат мутации без возвращаемого значения. */
export type NoneOrError = DetailErrors | Error;

export type Organization = {
  __typename?: 'Organization';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  editedAt?: Maybe<Scalars['DateTime']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['ID']>;
};

export type OrganizationUnit = {
  __typename?: 'OrganizationUnit';
  adId?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  editedAt?: Maybe<Scalars['DateTime']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  parentOu?: Maybe<OrganizationUnit>;
  vid?: Maybe<Scalars['ID']>;
};

export type Parent = {
  __typename?: 'Parent';
  code: Scalars['String'];
  isTotal: Scalars['Boolean'];
  name: Scalars['String'];
};

/** Процентиль распределения. */
export type Percentile = {
  __typename?: 'Percentile';
  point: Point;
  /** Процентильный ранг (1-99) */
  rank: Scalars['Int'];
};

export type PercentileOutput = {
  __typename?: 'PercentileOutput';
  name: Scalars['String'];
  value: Scalars['String'];
};

export type PercentilePoint = {
  __typename?: 'PercentilePoint';
  title: Scalars['Float'];
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type PlotObject = {
  __typename?: 'PlotObject';
  pngBase64?: Maybe<Scalars['String']>;
};

/** Точка на графике. */
export type Point = {
  __typename?: 'Point';
  x: Scalars['Float'];
  y: Scalars['Float'];
};

/** Идентификатор процесса генерации файлов результатов расчета. */
export type ProcessId = {
  __typename?: 'ProcessId';
  processId?: Maybe<Scalars['UUID']>;
};

/** Результат запуска генерации файлов результатов расчета. */
export type ProcessIdOrError = CommonError | Error | ProcessId;

/** An enumeration. */
export enum ProcessStatusEnum {
  Complete = 'COMPLETE',
  Error = 'ERROR',
  InProgress = 'IN_PROGRESS',
  Start = 'START',
}

export type ProcessType = {
  __typename?: 'ProcessType';
  /** Сообщение, характеризующее стадию исполнения процеса */
  message?: Maybe<Scalars['String']>;
  /** Разная дополнительная информация от процесса */
  payload?: Maybe<Scalars['String']>;
  /** Тип процесса */
  processType: ProcessTypeEnum;
  /** Прогресс выполнения процесса от 0 до 100 */
  progress?: Maybe<Scalars['Int']>;
  /** Статус процесса */
  statusCode: ProcessStatusEnum;
  /** Идентификатор процесса */
  vid: Scalars['UUID'];
};

/** An enumeration. */
export enum ProcessTypeEnum {
  Calculation = 'CALCULATION',
  CalculationResultArchive = 'CALCULATION_RESULT_ARCHIVE',
}

/** Проектные данные. */
export type ProjectInner = {
  __typename?: 'ProjectInner';
  adId?: Maybe<Scalars['String']>;
  attendees?: Maybe<Array<Maybe<Attendee>>>;
  attendeesTotal?: Maybe<Scalars['Int']>;
  authorOu?: Maybe<OrganizationUnit>;
  code?: Maybe<Scalars['String']>;
  coordinateSystem?: Maybe<Scalars['String']>;
  coordinates?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  domain?: Maybe<DomainObjectQuery>;
  domainSchema?: Maybe<DomainSchema>;
  editedAt?: Maybe<Scalars['DateTime']>;
  editedBy?: Maybe<User>;
  files?: Maybe<Array<Maybe<Attachment>>>;
  filesTotal?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  isFavorite?: Maybe<Scalars['Boolean']>;
  myRoles?: Maybe<Array<Maybe<ProjectRole>>>;
  name?: Maybe<Scalars['String']>;
  /** Данные процесса, запущенного относительно проекта */
  process?: Maybe<ProcessType>;
  /** Список процессов, запущенный относительно проекта */
  processesList?: Maybe<Array<Maybe<ProcessType>>>;
  recentlyEdited: Scalars['Boolean'];
  region?: Maybe<Region>;
  /** Запросы к данным ресурсной базы. */
  resourceBase?: Maybe<ResourceBaseQueries>;
  resourceId?: Maybe<Scalars['String']>;
  rootEntity?: Maybe<Scalars['String']>;
  status?: Maybe<ProjectStatusEnum>;
  /** All queries related to teos are here. */
  teosQueries?: Maybe<TeosQueries>;
  type?: Maybe<ProjectTypeEnum>;
  version?: Maybe<Scalars['Int']>;
  versions: Array<Maybe<Scalars['Int']>>;
  vid?: Maybe<Scalars['ID']>;
};

/** Проектные данные. */
export type ProjectInnerAttendeesArgs = {
  orderBy?: InputMaybe<Array<InputMaybe<AttendeeOrderBy>>>;
  sortBy?: InputMaybe<SortType>;
};

/** Проектные данные. */
export type ProjectInnerProcessArgs = {
  vid: Scalars['UUID'];
};

export type ProjectListSortingSetting = {
  __typename?: 'ProjectListSortingSetting';
  orderBy?: Maybe<ProjectOrderByEnum>;
  sortBy?: Maybe<SortTypeEnum>;
};

export type ProjectMutation = {
  __typename?: 'ProjectMutation';
  domain?: Maybe<DomainMutations>;
  /** Мутации данных ресурсной базы. */
  resourceBase?: Maybe<ResourceBaseMutations>;
  /** All mutations related to teos. */
  teosMutations?: Maybe<TeosMutations>;
};

export type ProjectMutationOrError =
  | Error
  | ProjectMutation
  | UpdateProjectInnerDiff;

/** An enumeration. */
export enum ProjectOrderByEnum {
  CreatedAt = 'CREATED_AT',
  CreatedBy = 'CREATED_BY',
  Description = 'DESCRIPTION',
  EditedAt = 'EDITED_AT',
  EditedBy = 'EDITED_BY',
  IsFavorite = 'IS_FAVORITE',
  Name = 'NAME',
  Region = 'REGION',
}

/** Пространство имен для работы с проектом. */
export type ProjectQueries = {
  __typename?: 'ProjectQueries';
  /** Настройки расчёта */
  calculationProperties?: Maybe<CalculationProperties>;
  /** Данные проекта */
  loadFromDatabase?: Maybe<RbProject>;
  /** Шаблон структуры проекта */
  template?: Maybe<RbProject>;
  /** Валидация структуры проекта перед импортом/экспортом */
  validateBeforeLoad?: Maybe<Array<DetailError>>;
};

/** Пространство имен для работы с проектом. */
export type ProjectQueriesValidateBeforeLoadArgs = {
  project: RbProjectInput;
};

export type ProjectRole = {
  __typename?: 'ProjectRole';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  defaultAttachmentType?: Maybe<AttachmentType>;
  editedAt?: Maybe<Scalars['DateTime']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['ID']>;
};

/** An enumeration. */
export enum ProjectStatusEnum {
  Blank = 'BLANK',
  Unpublished = 'UNPUBLISHED',
}

export type ProjectStructure = {
  __typename?: 'ProjectStructure';
  /** Список атрибутов структуры проекта */
  attributes: Array<Attribute>;
  commonRisks: Array<Maybe<CommonRisk>>;
  /** Список скоррелированных пар */
  correlations: Array<Maybe<CorrelationElement>>;
  /** Список доменных сущностей структуры проекта */
  domainEntities: Array<RbDomainEntity>;
  /** Список геологических объектов структуры проекта */
  domainObjects: Array<DomainObject>;
  /** Список рисков структуры проекта */
  risks: Array<Risk>;
};

export type ProjectStructureInput = {
  /** Список атрибутов структуры проекта */
  attributes: Array<AttributeInput>;
  /** Общие риски */
  commonRisks?: InputMaybe<Array<CommonRiskInput>>;
  /** Список скоррелированных пар */
  correlations?: InputMaybe<Array<CorrelationElementInput>>;
  /** Список доменных сущностей структуры проекта */
  domainEntities: Array<RbDomainEntityInput>;
  /** Список геологических объектов структуры проекта */
  domainObjects: Array<DomainObjectInput>;
  /** Список рисков структуры проекта */
  risks: Array<RiskInput>;
};

export type ProjectStructureResult = {
  __typename?: 'ProjectStructureResult';
  attributes: Array<AttributeResult>;
  domainEntities: Array<DomainEntityResult>;
  domainObjects: Array<DomainObjectResult>;
};

/** An enumeration. */
export enum ProjectTypeEnum {
  Geo = 'GEO',
}

/**
 * Model to description object attributes.
 *
 *     Model attributes:
 *         title - civil attribute name by user native language
 *         name - technical attribute name
 *         attr_type - attributes data type, must be mapped to marshmellow types,
 *                     example: Str, Int, RefLink('Model')
 *         unit - Attributes unit, example: km^2, m^3
 *         validation_rules - Rules for validation object attribute value
 *
 */
export type PropertyMeta = {
  __typename?: 'PropertyMeta';
  attrType?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  entity?: Maybe<DomainEntity>;
  name?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  validationRules?: Maybe<ValidationRules>;
};

export type Query = {
  __typename?: 'Query';
  project?: Maybe<ProjectInner>;
  /** Актуальная версия текущего проекта */
  version?: Maybe<Scalars['Int']>;
};

export type RbDomainEntity = {
  __typename?: 'RBDomainEntity';
  /** Кодовое обозначение доменной сущности геологического объекта */
  code: Scalars['String'];
  /** Иконка доменной сущности геологического объекта */
  icon: RbDomainEntityIcons;
  /** Имя доменной сущности геологического объекта */
  name: Scalars['String'];
  visible: Visible;
};

/** Список иконок доменной сущности геологического объекта. */
export enum RbDomainEntityIcons {
  FieldIcon = 'FIELD_ICON',
  FormationIcon = 'FORMATION_ICON',
  LicensingRoundIcon = 'LICENSING_ROUND_ICON',
  OilPoolIcon = 'OIL_POOL_ICON',
  WellIcon = 'WELL_ICON',
}

export type RbDomainEntityInput = {
  /** Кодовое обозначение доменной сущности геологического объекта */
  code: Scalars['String'];
  /** Иконка доменной сущности геологического объекта */
  icon: RbDomainEntityIcons;
  /** Имя доменной сущности геологического объекта */
  name: Scalars['String'];
  visible: VisibleInput;
};

/** Список доменных сущностей. */
export type RbDomainEntityList = {
  __typename?: 'RBDomainEntityList';
  result?: Maybe<Array<Maybe<RbDomainEntity>>>;
};

/** Результат изменения списка доменных сущностей. */
export type RbDomainEntityListOrError =
  | DetailErrors
  | Error
  | RbDomainEntityList;

/** Мутации доменных объектов. */
export type RbDomainObjectMutations = {
  __typename?: 'RBDomainObjectMutations';
  create?: Maybe<DomainObjectOrError>;
  delete?: Maybe<NoneOrError>;
  move?: Maybe<DomainObjectOrError>;
  set?: Maybe<SavedOrError>;
  setAttribute?: Maybe<DistributionSetResultOrError>;
  setCategory?: Maybe<DomainObjectOrError>;
  setFluid?: Maybe<DomainObjectOrError>;
  setHierarchyLevel?: Maybe<DomainObjectOrError>;
  setRiskValue?: Maybe<DomainObjectOrError>;
  setSaturationProbability?: Maybe<DomainObjectOrError>;
};

/** Мутации доменных объектов. */
export type RbDomainObjectMutationsCreateArgs = {
  fluid: GeoObjectFluidType;
  place?: InputMaybe<Scalars['Int']>;
};

/** Мутации доменных объектов. */
export type RbDomainObjectMutationsMoveArgs = {
  place?: InputMaybe<Scalars['Int']>;
};

/** Мутации доменных объектов. */
export type RbDomainObjectMutationsSetArgs = {
  domainObject: DomainObjectInput;
};

/** Мутации доменных объектов. */
export type RbDomainObjectMutationsSetAttributeArgs = {
  code: Scalars['String'];
  distribution?: InputMaybe<DistributionInput>;
};

/** Мутации доменных объектов. */
export type RbDomainObjectMutationsSetCategoryArgs = {
  category: GeoObjectCategories;
};

/** Мутации доменных объектов. */
export type RbDomainObjectMutationsSetFluidArgs = {
  fluid: GeoObjectFluidType;
};

/** Мутации доменных объектов. */
export type RbDomainObjectMutationsSetHierarchyLevelArgs = {
  code: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

/** Мутации доменных объектов. */
export type RbDomainObjectMutationsSetRiskValueArgs = {
  code: Scalars['String'];
  value?: InputMaybe<Scalars['Float']>;
};

/** Мутации доменных объектов. */
export type RbDomainObjectMutationsSetSaturationProbabilityArgs = {
  fluid: GeoObjectFluidType;
  value?: InputMaybe<Scalars['Float']>;
};

/** Список кодов ошибок приложения. */
export enum RbErrorCodes {
  /** Не удалось обработать файл вложения */
  AttachmentError = 'ATTACHMENT_ERROR',
  /** Атрибут не найден */
  AttributeNotFound = 'ATTRIBUTE_NOT_FOUND',
  /** Значение границы усечения отрицательно */
  BoundValueIsNegative = 'BOUND_VALUE_IS_NEGATIVE',
  /** У проекта отсутствуют результаты вычислений */
  CalculationResultNotFound = 'CALCULATION_RESULT_NOT_FOUND',
  /** Для старта расчётов заполните ячейку таблицы */
  CellValueIsNull = 'CELL_VALUE_IS_NULL',
  /** Имя общего риска должно быть уникальным */
  CommonRiskNameMustBeUnique = 'COMMON_RISK_NAME_MUST_BE_UNIQUE',
  /** Концепция в проекте не найдена */
  ConceptionNotFound = 'CONCEPTION_NOT_FOUND',
  /** В концепции отсутствует поле "вероятность" */
  ConceptionProbabilityIsNone = 'CONCEPTION_PROBABILITY_IS_NONE',
  /** Значения доверительного интервала отрицательны */
  ConfidenceIntervalIsNegative = 'CONFIDENCE_INTERVAL_IS_NEGATIVE',
  /** Значения доверительного интервала не определены */
  ConfidenceIntervalIsNotDefined = 'CONFIDENCE_INTERVAL_IS_NOT_DEFINED',
  /** Интервал не попадает в распределение */
  ConfidenceIntervalOutOfDistributionDomain = 'CONFIDENCE_INTERVAL_OUT_OF_DISTRIBUTION_DOMAIN',
  /** Матрица корреляций не является валидной */
  CorrelationMatrixInvalid = 'CORRELATION_MATRIX_INVALID',
  /** Подбор по данным невозможен, число значений в данных должно быть 15 или выше */
  CustomSamplesCountError = 'CUSTOM_SAMPLES_COUNT_ERROR',
  /** Подбор по данным невозможен, число положительных значений в данных должно быть 15 или выше */
  CustomSamplesFewPositiveValuesError = 'CUSTOM_SAMPLES_FEW_POSITIVE_VALUES_ERROR',
  /** Временно отключенная функциональность */
  DisabledFeature = 'DISABLED_FEATURE',
  /** Распределение не может быть восстановлено */
  DistributionCannotBeRestored = 'DISTRIBUTION_CANNOT_BE_RESTORED',
  /** Некорректная зависимость параметров распределения */
  DistributionParametersIncorrectRelation = 'DISTRIBUTION_PARAMETERS_INCORRECT_RELATION',
  /** Параметр распределения выходит за границы допустимых значений */
  DistributionParameterOutOfRange = 'DISTRIBUTION_PARAMETER_OUT_OF_RANGE',
  /** Доменный объект не найден */
  DomainObjectNotFound = 'DOMAIN_OBJECT_NOT_FOUND',
  /** Дублируются имена колонок */
  DuplicatingColumns = 'DUPLICATING_COLUMNS',
  /** Найдены концепции с не уникальными наименованиями */
  DuplicatingConceptionsNames = 'DUPLICATING_CONCEPTIONS_NAMES',
  /** В проекте отсутствуют доменные сущности */
  EmptyDomainEntities = 'EMPTY_DOMAIN_ENTITIES',
  /** В проекте отсутствуют доменные объекты */
  EmptyDomainObjects = 'EMPTY_DOMAIN_OBJECTS',
  /** Границы интервала не соответствуют области допустимых значений параметра */
  ForbiddenParameterValues = 'FORBIDDEN_PARAMETER_VALUES',
  /** В таблице структуры не может быть одинаковых строк */
  IdenticalRowInTableData = 'IDENTICAL_ROW_IN_TABLE_DATA',
  /** Недостаточно элементов в группе общего риска */
  IncompleteCommonRiskGroup = 'INCOMPLETE_COMMON_RISK_GROUP',
  /** Версия импортируемого файла не соответствует версии шаблона структуры */
  IncorrectFileVersion = 'INCORRECT_FILE_VERSION',
  /** Некорректный порядок рангов процентилей */
  IncorrectOrderOfPercentileRanks = 'INCORRECT_ORDER_OF_PERCENTILE_RANKS',
  /** Некорректный порядок значений процентилей */
  IncorrectOrderOfPercentileValues = 'INCORRECT_ORDER_OF_PERCENTILE_VALUES',
  /** Некорректное значение параметра для этого способа задания */
  IncorrectParameterValueForDefinition = 'INCORRECT_PARAMETER_VALUE_FOR_DEFINITION',
  /** Ошибка в загружаемой структуре */
  IncorrectProjectStructure = 'INCORRECT_PROJECT_STRUCTURE',
  /** Общий риск может иметь значение в пределах 0.0 < r <= 1.0 */
  InvalidCommonRiskValue = 'INVALID_COMMON_RISK_VALUE',
  /** Сумма вероятностей всех концепций не равна 1 */
  InvalidConceptionsProbabilitiesSum = 'INVALID_CONCEPTIONS_PROBABILITIES_SUM',
  /** Значение корреляции может находиться в интервале -1.0 <= p <= 1.0 */
  InvalidCorrelationValue = 'INVALID_CORRELATION_VALUE',
  /** Вероятность может иметь значение в пределах 0.0 < p <= 1.0 */
  InvalidProbabilityValue = 'INVALID_PROBABILITY_VALUE',
  /** Значение риска не может превышать значение группы риска */
  InvalidProbabilityValueByCommonRisk = 'INVALID_PROBABILITY_VALUE_BY_COMMON_RISK',
  /** В строке таблицы структуры должна быть заполнена хотя бы одна ячейка */
  MustBeAtLeastOneCell = 'MUST_BE_AT_LEAST_ONE_CELL',
  /** Квантиль должен быть больше расположения */
  QuantileMustBeMoreThanLocation = 'QUANTILE_MUST_BE_MORE_THAN_LOCATION',
  /** Значение случайной величины отрицательное. */
  RandomVariableValueIsNegative = 'RANDOM_VARIABLE_VALUE_IS_NEGATIVE',
  /** Для категории 'Запасы' риски не должны быть указаны */
  RisksNotApplicableToReserves = 'RISKS_NOT_APPLICABLE_TO_RESERVES',
  /** Зависимые ячейки должны быть разными */
  SameCellsInCorrelationPair = 'SAME_CELLS_IN_CORRELATION_PAIR',
  /** Вероятности целевого насыщения не должны дублироваться */
  SaturationProbabilitiesCategoryHaveDuplicate = 'SATURATION_PROBABILITIES_CATEGORY_HAVE_DUPLICATE',
  /** Сумма вероятностей целевого насыщения должна быть равно 1 */
  SaturationProbabilitiesSumIsInvalide = 'SATURATION_PROBABILITIES_SUM_IS_INVALIDE',
  /** Значение вероятности целевого насыщения не у смешанного кейса должно быть 1 */
  SaturationProbabilitieValueInvalideFluid = 'SATURATION_PROBABILITIE_VALUE_INVALIDE_FLUID',
  /** Значение вероятности целевого насыщения должно быть в [0, 1] */
  SaturationProbabilitieValueIsInvalide = 'SATURATION_PROBABILITIE_VALUE_IS_INVALIDE',
  /** Параметр version не найден. */
  VersionParamNotFound = 'VERSION_PARAM_NOT_FOUND',
  /** Неверный аргумент операции */
  WrongArgument = 'WRONG_ARGUMENT',
  /** Некорректный код подсчетного параметра */
  WrongAttribute = 'WRONG_ATTRIBUTE',
  /** Некорректный код группы общего риска */
  WrongCommonRisk = 'WRONG_COMMON_RISK',
  /** Некорректное имя концепции */
  WrongConception = 'WRONG_CONCEPTION',
  /** Некорректный идентификатор объекта */
  WrongObjectVid = 'WRONG_OBJECT_VID',
  /** Некорректный код риска */
  WrongRisk = 'WRONG_RISK',
}

/** Интерфейс ошибок, отображаемых пользователю. */
export type RbErrorInterface = {
  /** Код ошибки, соответствующий человекочитаемому сообщению об ошибке */
  code: RbErrorCodes;
  /** Индекс концепции, к которой относится ошибка */
  conceptionIdx?: Maybe<Scalars['Int']>;
  /** Сообщение об ошибке. Отображается в случае отсутствия соответствующего коду человекочитаемого сообщения на клиенте */
  message: Scalars['String'];
};

export type RbProject = {
  __typename?: 'RBProject';
  /** Список концепций проекта */
  conceptions: Array<Conception>;
  /** Версия шаблона структуры проекта */
  version: Scalars['String'];
};

export type RbProjectInput = {
  /** Список концепций проекта */
  conceptions: Array<ConceptionInput>;
  /** Версия шаблона структуры проекта */
  version: Scalars['String'];
};

export type Region = {
  __typename?: 'Region';
  code?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  createdAt?: Maybe<Scalars['DateTime']>;
  editedAt?: Maybe<Scalars['DateTime']>;
  fullName?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['ID']>;
};

export type ResourceBaseDecimal = {
  __typename?: 'ResourceBaseDecimal';
  projectDecimals?: Maybe<Array<AttributeDecimal>>;
};

/** Мутации данных ресурсной базы. */
export type ResourceBaseMutations = {
  __typename?: 'ResourceBaseMutations';
  calculateProject?: Maybe<CalculatedOrError>;
  conception?: Maybe<ConceptionMutations>;
  /** Запуск генерации архива с результатами расчёта. */
  generateCalculationResultArchive?: Maybe<ProcessIdOrError>;
  loadSampledAttributeValue?: Maybe<DistributionOrError>;
  loadSampledAttributeValueWithSelection?: Maybe<DistributionOrError>;
  saveCalculationProperties?: Maybe<SaveCalculationPropertiesMutation>;
  saveProject?: Maybe<SavedOrError>;
  updateRiskValue?: Maybe<UpdateRiskValueResult>;
};

/** Мутации данных ресурсной базы. */
export type ResourceBaseMutationsCalculateProjectArgs = {
  projectInput?: InputMaybe<RbProjectInput>;
};

/** Мутации данных ресурсной базы. */
export type ResourceBaseMutationsConceptionArgs = {
  idx?: InputMaybe<Scalars['Int']>;
};

/** Мутации данных ресурсной базы. */
export type ResourceBaseMutationsGenerateCalculationResultArchiveArgs = {
  plots?: InputMaybe<Scalars['Boolean']>;
  samples?: InputMaybe<Scalars['Boolean']>;
  statistics?: InputMaybe<Scalars['Boolean']>;
};

/** Мутации данных ресурсной базы. */
export type ResourceBaseMutationsLoadSampledAttributeValueArgs = {
  attribute: Scalars['String'];
  conception: Scalars['String'];
  objectVid: Scalars['UUID'];
  sourceVid: Scalars['UUID'];
};

/** Мутации данных ресурсной базы. */
export type ResourceBaseMutationsLoadSampledAttributeValueWithSelectionArgs = {
  attribute: Scalars['String'];
  conception: Scalars['String'];
  objectVid: Scalars['UUID'];
  sourceVid: Scalars['UUID'];
};

/** Мутации данных ресурсной базы. */
export type ResourceBaseMutationsSaveCalculationPropertiesArgs = {
  data?: InputMaybe<CalculationPropertiesInputType>;
};

/** Мутации данных ресурсной базы. */
export type ResourceBaseMutationsSaveProjectArgs = {
  projectInput: RbProjectInput;
};

/** Мутации данных ресурсной базы. */
export type ResourceBaseMutationsUpdateRiskValueArgs = {
  projectStructure: ProjectStructureInput;
};

/** Запросы к данным ресурсной базы. */
export type ResourceBaseQueries = {
  __typename?: 'ResourceBaseQueries';
  conception?: Maybe<ConceptionQueries>;
  /** Пространство имен для работы с подбром распределения по данным. */
  customDataSelection?: Maybe<DistributionCustomDataSelection>;
  decimals?: Maybe<ResourceBaseDecimal>;
  /** Пространство имен для работы с распределениями. */
  distribution?: Maybe<DistributionQueries>;
  /** Пространство имен для работы с проектом. */
  project?: Maybe<ProjectQueries>;
  result: ResultQuery;
};

/** Запросы к данным ресурсной базы. */
export type ResourceBaseQueriesConceptionArgs = {
  idx: Scalars['Int'];
};

export type ResultQuery = {
  __typename?: 'ResultQuery';
  histograms: HistogramResultQuery;
  resultTable: ResultTableQuery;
};

export type ResultTableQuery = {
  __typename?: 'ResultTableQuery';
  template?: Maybe<ProjectStructureResult>;
};

export type Risk = {
  __typename?: 'Risk';
  /** Кодовое обозначение риска */
  code: Scalars['String'];
  /** Наименование риска */
  name: Scalars['String'];
};

export type RiskInput = {
  /** Кодовое обозначение риска */
  code: Scalars['String'];
  /** Наименование риска */
  name: Scalars['String'];
};

/** Список рисков. */
export type RiskList = {
  __typename?: 'RiskList';
  result?: Maybe<Array<Maybe<Attribute>>>;
};

/** Результат изменения списка рисков. */
export type RiskListOrError = DetailErrors | Error | RiskList;

/** Мутации атрибутов геологических объектов. */
export type RiskMutations = {
  __typename?: 'RiskMutations';
  create?: Maybe<RiskListOrError>;
  delete?: Maybe<RiskListOrError>;
  move?: Maybe<RiskListOrError>;
  update?: Maybe<RiskListOrError>;
};

/** Мутации атрибутов геологических объектов. */
export type RiskMutationsCreateArgs = {
  name: Scalars['String'];
  place?: InputMaybe<Scalars['Int']>;
};

/** Мутации атрибутов геологических объектов. */
export type RiskMutationsMoveArgs = {
  place?: InputMaybe<Scalars['Int']>;
};

/** Мутации атрибутов геологических объектов. */
export type RiskMutationsUpdateArgs = {
  name?: InputMaybe<Scalars['String']>;
};

export type RiskValue = {
  __typename?: 'RiskValue';
  /** Кодовое обозначение риска */
  code: Scalars['String'];
  /** Группа риска */
  group?: Maybe<Scalars['String']>;
  /** Значение риска */
  value?: Maybe<Scalars['Float']>;
};

export type RiskValueInput = {
  /** Кодовое обозначение риска */
  code: Scalars['String'];
  /** Группа риска */
  group?: InputMaybe<Scalars['String']>;
  /** Значение риска */
  value?: InputMaybe<Scalars['Float']>;
};

export type Row = {
  __typename?: 'Row';
  cells: Array<Cell>;
};

export type RowL = {
  __typename?: 'RowL';
  cells: Array<Maybe<CellL>>;
  id: Scalars['UUID'];
};

export type SaturationProbabilities = {
  __typename?: 'SaturationProbabilities';
  /** Вероятность насыщения */
  category: GeoObjectFluidType;
  /** значение вероятности насыщения */
  value: Scalars['Float'];
};

export type SaturationProbabilitiesInput = {
  /** Вероятность насыщения */
  category: GeoObjectFluidType;
  /** значение вероятности насыщения */
  value: Scalars['Float'];
};

export type SaveCalculationPropertiesMutation = {
  __typename?: 'SaveCalculationPropertiesMutation';
  result?: Maybe<SavedPropertiesOrError>;
};

/** Результат сохранения проекта. */
export type SavedOrError =
  | DetailErrors
  | DistributionDefinitionErrors
  | Error
  | TableErrors
  | ValidationError;

/** Результат сохранения настроек расчёта проекта. */
export type SavedPropertiesOrError = Error | ValidationError;

export type SensitivityAnalysis = {
  __typename?: 'SensitivityAnalysis';
  names: Array<Scalars['String']>;
  percentiles: Array<Array<Scalars['Float']>>;
  resultMinMax: Array<Array<Scalars['Float']>>;
  title: Scalars['String'];
  zeroPoint: Scalars['Float'];
};

export type SensitivityAnalysisStatistics = {
  __typename?: 'SensitivityAnalysisStatistics';
  fluid?: Maybe<Scalars['String']>;
  headers: Array<Header>;
  rows: Array<Row>;
};

export enum SortType {
  Asc = 'ASC',
  Desc = 'DESC',
}

/** An enumeration. */
export enum SortTypeEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

/** Synchronize teos object with project object in resource_base. */
export type SyncTeos = {
  __typename?: 'SyncTeos';
  projectTree?: Maybe<TeosStructureL>;
  successful?: Maybe<Scalars['Boolean']>;
};

/** Ошибка данных таблицы с информацией о расположении строк или ячеек повлекших ошибку. */
export type TableError = RbErrorInterface & {
  __typename?: 'TableError';
  /** Код ошибки, соответствующий человекочитаемому сообщению об ошибке */
  code: RbErrorCodes;
  /** Идентификатор сущности в колонке. */
  columnKey?: Maybe<Scalars['String']>;
  /** Индекс концепции, к которой относится ошибка */
  conceptionIdx?: Maybe<Scalars['Int']>;
  /** Сообщение об ошибке. Отображается в случае отсутствия соответствующего коду человекочитаемого сообщения на клиенте */
  message: Scalars['String'];
  /** Индекс строки таблицы, повлекшей ошибку */
  row?: Maybe<Scalars['Int']>;
  /** Имя таблицы, содержащей строки или ячейки, повлекшие ошибку */
  tableName: TableNames;
};

export type TableErrors = {
  __typename?: 'TableErrors';
  errors: Array<TableError>;
};

/** Имена таблиц в структуре проекта. */
export enum TableNames {
  Attributes = 'ATTRIBUTES',
  Conceptions = 'CONCEPTIONS',
  Correlations = 'CORRELATIONS',
  DomainEntities = 'DOMAIN_ENTITIES',
  Risks = 'RISKS',
  Saturation = 'SATURATION',
}

/** All mutations related to teos. */
export type TeosMutations = {
  __typename?: 'TeosMutations';
  /** Synchronize teos object with project object in resource_base. */
  syncTeos?: Maybe<SyncTeos>;
  teosVariantItemMutations?: Maybe<TeosVariantItemMutations>;
};

/** All queries related to teos are here. */
export type TeosQueries = {
  __typename?: 'TeosQueries';
  getProjectTree?: Maybe<TeosStructureL>;
};

export type TeosStructureL = {
  __typename?: 'TeosStructureL';
  domainEntities: Array<Maybe<DomainEntityL>>;
  domainObjects: Array<Maybe<DomainObjectL>>;
  domainScenarios: Array<Maybe<DomainScenarioL>>;
};

export type TeosVariantItem = {
  code: DomainScenarioEnum;
  name: Scalars['String'];
  parentVid: Scalars['UUID'];
  vid?: InputMaybe<Scalars['UUID']>;
};

/** Mutations related to teos inner items objects. */
export type TeosVariantItemMutations = {
  __typename?: 'TeosVariantItemMutations';
  /** Adds Variants to teos Domain Objects. */
  addTeosVariantItem?: Maybe<VariantOperationResultOrError>;
  /** Removes Variants from teos Domain Object. */
  delTeosVariantItem?: Maybe<VariantOperationResultOrError>;
  /** Updates Variants in teos Domain Objects. */
  updateTeosVariantItem?: Maybe<VariantOperationResultOrError>;
};

/** Mutations related to teos inner items objects. */
export type TeosVariantItemMutationsAddTeosVariantItemArgs = {
  variantItem?: InputMaybe<TeosVariantItem>;
};

/** Mutations related to teos inner items objects. */
export type TeosVariantItemMutationsDelTeosVariantItemArgs = {
  variantItem?: InputMaybe<TeosVariantItem>;
};

/** Mutations related to teos inner items objects. */
export type TeosVariantItemMutationsUpdateTeosVariantItemArgs = {
  variantItem?: InputMaybe<TeosVariantItem>;
};

export type ThicknessHistogramVariantL = {
  __typename?: 'ThicknessHistogramVariantL';
  headers: Array<Maybe<HeaderL>>;
  id: Scalars['UUID'];
  name: Scalars['String'];
  rows: Array<Maybe<RowL>>;
};

export type UnexpectedVariantTypeError = {
  __typename?: 'UnexpectedVariantTypeError';
  errorMessage: Scalars['String'];
};

export type UpdateDomainGroupResult = {
  __typename?: 'UpdateDomainGroupResult';
  formula?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ok?: Maybe<Scalars['Boolean']>;
  vids?: Maybe<Array<Maybe<Scalars['UUID']>>>;
};

/** Contains remote and local versions of  project if versions are not equal. */
export type UpdateProjectInnerDiff = {
  __typename?: 'UpdateProjectInnerDiff';
  message?: Maybe<Scalars['String']>;
  remoteProject?: Maybe<ProjectInner>;
};

export type UpdateRiskValueResult = DetailError | GCoSCalculationResult;

export type User = {
  __typename?: 'User';
  adId?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customSettings?: Maybe<UserCustomSettings>;
  editedAt?: Maybe<Scalars['DateTime']>;
  favoriteProjects?: Maybe<Array<Maybe<Scalars['ID']>>>;
  firstName?: Maybe<Scalars['String']>;
  groups?: Maybe<Array<Maybe<UserGroup>>>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  mail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  organizationUnits?: Maybe<Array<Maybe<OrganizationUnit>>>;
  patronym?: Maybe<Scalars['String']>;
  principalName?: Maybe<Scalars['String']>;
  vid?: Maybe<Scalars['ID']>;
};

export type UserCustomSettings = {
  __typename?: 'UserCustomSettings';
  projectList?: Maybe<ProjectListSortingSetting>;
};

export type UserGroup = {
  __typename?: 'UserGroup';
  adId?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  editedAt?: Maybe<Scalars['DateTime']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['ID']>;
  vid?: Maybe<Scalars['ID']>;
};

export type ValidationError = ErrorInterface & {
  __typename?: 'ValidationError';
  /** Код ошибки, соответствующий человекочитаемому сообщению об ошибке */
  code: ErrorCodesEnum;
  details?: Maybe<Scalars['String']>;
  /** Массив ошибок валидации для отправленных полей мутации */
  items?: Maybe<Array<Maybe<ValidationErrorItemType>>>;
  /** Сообщение об ошибке. Отображается в случае отсутствия соответствующего коду человекочитаемого сообщения на клиенте */
  message: Scalars['String'];
  payload?: Maybe<Scalars['DictType']>;
};

/** Validation error codes list. */
export enum ValidationErrorCode {
  /** ARRAY_IS_EMPTY */
  ArrayIsEmpty = 'ARRAY_IS_EMPTY',
  /** ARRAY_TOO_LONG */
  ArrayTooLong = 'ARRAY_TOO_LONG',
  /** ARRAY_TOO_SHORT */
  ArrayTooShort = 'ARRAY_TOO_SHORT',
  /** METHOD_IS_NOT_APPLICABLE */
  MethodIsNotApplicable = 'METHOD_IS_NOT_APPLICABLE',
  /** NOT_UNIQUE */
  NotUnique = 'NOT_UNIQUE',
  /** NUMBER_IS_NEGATIVE */
  NumberIsNegative = 'NUMBER_IS_NEGATIVE',
  /** NUMBER_TOO_LARGE */
  NumberTooLarge = 'NUMBER_TOO_LARGE',
  /** NUMBER_TOO_LOW */
  NumberTooLow = 'NUMBER_TOO_LOW',
  /** OBJECT_KEY_NOT_FOUND */
  ObjectKeyNotFound = 'OBJECT_KEY_NOT_FOUND',
  /** STRING_DOES_NOT_MATCH_PATTERN */
  StringDoesNotMatchPattern = 'STRING_DOES_NOT_MATCH_PATTERN',
  /** STRING_TOO_LONG */
  StringTooLong = 'STRING_TOO_LONG',
  /** STRING_TOO_SHORT */
  StringTooShort = 'STRING_TOO_SHORT',
  /** VALUE_HAS_WRONG_TYPE */
  ValueHasWrongType = 'VALUE_HAS_WRONG_TYPE',
  /** VALUE_IS_EMPTY */
  ValueIsEmpty = 'VALUE_IS_EMPTY',
  /** VALUE_IS_INCORRECT */
  ValueIsIncorrect = 'VALUE_IS_INCORRECT',
}

export type ValidationErrorItemType = {
  __typename?: 'ValidationErrorItemType';
  /** Код ошибки, соответствующий человекочитаемому сообщению об ошибке */
  code: ValidationErrorCode;
  /** Сообщение об ошибке валидации. Отображается в случае отсутствия соответствующего коду человекочитаемого сообщения на клиенте */
  message: Scalars['String'];
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/**
 * Validation Rules.
 *
 *     Todo:
 *     1. Develop valudation rule syntax
 *     2. Realize validate value by valudation rules
 *
 */
export type ValidationRules = {
  __typename?: 'ValidationRules';
  rules?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type VariantOperationResult = {
  __typename?: 'VariantOperationResult';
  vid: Scalars['UUID'];
};

export type VariantOperationResultOrError =
  | NoDomainObjectWithSuchIdError
  | NoTeosObjectError
  | NoVariantWithSuchVid
  | UnexpectedVariantTypeError
  | VariantOperationResult;

export type Visible = {
  __typename?: 'Visible';
  /** Отображения/Скрытие уровня иерархии в расчетах */
  calc: Scalars['Boolean'];
  /** Отображения/Скрытие уровня иерархии в таблице */
  table: Scalars['Boolean'];
  /** Отображения/Скрытие уровня иерархии в дереве */
  tree: Scalars['Boolean'];
};

export type VisibleInput = {
  /** Отображения/Скрытие уровня иерархии в расчетах */
  calc: Scalars['Boolean'];
  /** Отображения/Скрытие уровня иерархии в таблице */
  table: Scalars['Boolean'];
  /** Отображения/Скрытие уровня иерархии в дереве */
  tree: Scalars['Boolean'];
};

export type VisibleResult = {
  __typename?: 'VisibleResult';
  calc: Scalars['Boolean'];
  table: Scalars['Boolean'];
  tree: Scalars['Boolean'];
};

export type VisibleValue = {
  __typename?: 'VisibleValue';
  /** Ранг процентиля */
  rank?: Maybe<Scalars['Float']>;
  /** Процентиль */
  value?: Maybe<Scalars['Float']>;
};

export type VisibleValueResult =
  | CommonErrors
  | DistributionDefinitionErrors
  | VisibleValue;

export type GetProjectTreeQueryVariables = Exact<{ [key: string]: never }>;

export type GetProjectTreeQuery = {
  __typename?: 'Query';
  project?: {
    __typename?: 'ProjectInner';
    teosQueries?: {
      __typename?: 'TeosQueries';
      getProjectTree?: {
        __typename?: 'TeosStructureL';
        domainEntities: Array<{
          __typename?: 'DomainEntityL';
          code: string;
          name: string;
        } | null>;
        domainObjects: Array<{
          __typename?: 'DomainObjectL';
          id: any;
          domainObjectPath: Array<{
            __typename?: 'DomainObjectPathL';
            code: string;
            value: string;
          } | null>;
          geologicalScenarios: Array<{
            __typename?: 'GeoLogicalScenarioVariantL';
            id: any;
            name: string;
          } | null>;
          developmentScenarios: Array<{
            __typename?: 'DevelopmentScenarioVariantL';
            id: any;
            name: string;
          } | null>;
          thicknessHistograms: Array<{
            __typename?: 'ThicknessHistogramVariantL';
            id: any;
            name: string;
          } | null>;
        } | null>;
      } | null;
    } | null;
  } | null;
};

export const GetProjectTreeDocument = gql`
  query getProjectTree {
    project {
      teosQueries {
        getProjectTree {
          domainEntities {
            code
            name
          }
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

/**
 * __useGetProjectTreeQuery__
 *
 * To run a query within a React component, call `useGetProjectTreeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectTreeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectTreeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProjectTreeQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProjectTreeQuery,
    GetProjectTreeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProjectTreeQuery, GetProjectTreeQueryVariables>(
    GetProjectTreeDocument,
    options,
  );
}
export function useGetProjectTreeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProjectTreeQuery,
    GetProjectTreeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProjectTreeQuery, GetProjectTreeQueryVariables>(
    GetProjectTreeDocument,
    options,
  );
}
export type GetProjectTreeQueryHookResult = ReturnType<
  typeof useGetProjectTreeQuery
>;
export type GetProjectTreeLazyQueryHookResult = ReturnType<
  typeof useGetProjectTreeLazyQuery
>;
export type GetProjectTreeQueryResult = Apollo.QueryResult<
  GetProjectTreeQuery,
  GetProjectTreeQueryVariables
>;
