import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  JSON: { input: any; output: any }
}

export type Animation = {
  __typename?: 'Animation'
  delay?: Maybe<Scalars['Int']['output']>
  duration: Scalars['Int']['output']
  from: Scalars['Float']['output']
  property: Scalars['String']['output']
  repeat?: Maybe<Scalars['Int']['output']>
  to: Scalars['Float']['output']
}

export type Camera = {
  __typename?: 'Camera'
  far?: Maybe<Scalars['Float']['output']>
  fov?: Maybe<Scalars['Float']['output']>
  near?: Maybe<Scalars['Float']['output']>
  type: CameraType
  zoom?: Maybe<Scalars['Float']['output']>
}

export enum CameraType {
  Orthographic = 'ORTHOGRAPHIC',
  Perspective = 'PERSPECTIVE',
}

export type Geometry = {
  __typename?: 'Geometry'
  colors?: Maybe<Array<Scalars['Float']['output']>>
  indices?: Maybe<Array<Scalars['Int']['output']>>
  normals?: Maybe<Array<Scalars['Float']['output']>>
  params?: Maybe<Array<Scalars['Float']['output']>>
  type: GeometryType
  uvs?: Maybe<Array<Scalars['Float']['output']>>
  vertices?: Maybe<Array<Scalars['Float']['output']>>
}

export enum GeometryType {
  Box = 'BOX',
  Cone = 'CONE',
  Custom = 'CUSTOM',
  Cylinder = 'CYLINDER',
  Sphere = 'SPHERE',
}

export type Light = {
  __typename?: 'Light'
  angle?: Maybe<Scalars['Float']['output']>
  color?: Maybe<Scalars['String']['output']>
  distance?: Maybe<Scalars['Float']['output']>
  intensity?: Maybe<Scalars['Float']['output']>
  position?: Maybe<Vector3>
  target?: Maybe<Vector3>
  type: LightType
}

export enum LightType {
  Ambient = 'AMBIENT',
  Directional = 'DIRECTIONAL',
  Point = 'POINT',
  Spot = 'SPOT',
}

export type Material = {
  __typename?: 'Material'
  color?: Maybe<Scalars['String']['output']>
  metalness?: Maybe<Scalars['Float']['output']>
  opacity?: Maybe<Scalars['Float']['output']>
  roughness?: Maybe<Scalars['Float']['output']>
  transparent?: Maybe<Scalars['Boolean']['output']>
  type: MaterialType
}

export enum MaterialType {
  Basic = 'BASIC',
  Physical = 'PHYSICAL',
  Standard = 'STANDARD',
}

export type Mutation = {
  __typename?: 'Mutation'
  generateScene: Scene
  generateSceneObject: SceneObject
}

export type MutationGenerateSceneArgs = {
  input: SceneInput
}

export type MutationGenerateSceneObjectArgs = {
  input: SceneObjectInput
}

export type Query = {
  __typename?: 'Query'
  getScene?: Maybe<Scene>
}

export type QueryGetSceneArgs = {
  id: Scalars['ID']['input']
}

export type Scene = {
  __typename?: 'Scene'
  background?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  objects: Array<SceneObject>
}

export type SceneInput = {
  prompt: Scalars['String']['input']
}

export type SceneObject = {
  __typename?: 'SceneObject'
  animations?: Maybe<Array<Animation>>
  camera?: Maybe<Camera>
  children?: Maybe<Array<SceneObject>>
  count?: Maybe<Scalars['Int']['output']>
  geometry?: Maybe<Geometry>
  id: Scalars['ID']['output']
  light?: Maybe<Light>
  material?: Maybe<Material>
  name?: Maybe<Scalars['String']['output']>
  position?: Maybe<Vector3>
  rotation?: Maybe<Vector3>
  scale?: Maybe<Vector3>
  type: SceneObjectType
}

export type SceneObjectInput = {
  prompt: Scalars['String']['input']
}

export enum SceneObjectType {
  Camera = 'CAMERA',
  Group = 'GROUP',
  Light = 'LIGHT',
  Mesh = 'MESH',
}

export type Vector3 = {
  __typename?: 'Vector3'
  x: Scalars['Float']['output']
  y: Scalars['Float']['output']
  z: Scalars['Float']['output']
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Animation: ResolverTypeWrapper<Animation>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>
  Camera: ResolverTypeWrapper<Camera>
  CameraType: CameraType
  Float: ResolverTypeWrapper<Scalars['Float']['output']>
  Geometry: ResolverTypeWrapper<Geometry>
  GeometryType: GeometryType
  ID: ResolverTypeWrapper<Scalars['ID']['output']>
  Int: ResolverTypeWrapper<Scalars['Int']['output']>
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>
  Light: ResolverTypeWrapper<Light>
  LightType: LightType
  Material: ResolverTypeWrapper<Material>
  MaterialType: MaterialType
  Mutation: ResolverTypeWrapper<{}>
  Query: ResolverTypeWrapper<{}>
  Scene: ResolverTypeWrapper<Scene>
  SceneInput: SceneInput
  SceneObject: ResolverTypeWrapper<SceneObject>
  SceneObjectInput: SceneObjectInput
  SceneObjectType: SceneObjectType
  String: ResolverTypeWrapper<Scalars['String']['output']>
  Vector3: ResolverTypeWrapper<Vector3>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Animation: Animation
  Boolean: Scalars['Boolean']['output']
  Camera: Camera
  Float: Scalars['Float']['output']
  Geometry: Geometry
  ID: Scalars['ID']['output']
  Int: Scalars['Int']['output']
  JSON: Scalars['JSON']['output']
  Light: Light
  Material: Material
  Mutation: {}
  Query: {}
  Scene: Scene
  SceneInput: SceneInput
  SceneObject: SceneObject
  SceneObjectInput: SceneObjectInput
  String: Scalars['String']['output']
  Vector3: Vector3
}

export type AnimationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Animation'] = ResolversParentTypes['Animation'],
> = {
  delay?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  from?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  property?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  repeat?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  to?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CameraResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Camera'] = ResolversParentTypes['Camera'],
> = {
  far?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  fov?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  near?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  type?: Resolver<ResolversTypes['CameraType'], ParentType, ContextType>
  zoom?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GeometryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Geometry'] = ResolversParentTypes['Geometry'],
> = {
  colors?: Resolver<Maybe<Array<ResolversTypes['Float']>>, ParentType, ContextType>
  indices?: Resolver<Maybe<Array<ResolversTypes['Int']>>, ParentType, ContextType>
  normals?: Resolver<Maybe<Array<ResolversTypes['Float']>>, ParentType, ContextType>
  params?: Resolver<Maybe<Array<ResolversTypes['Float']>>, ParentType, ContextType>
  type?: Resolver<ResolversTypes['GeometryType'], ParentType, ContextType>
  uvs?: Resolver<Maybe<Array<ResolversTypes['Float']>>, ParentType, ContextType>
  vertices?: Resolver<Maybe<Array<ResolversTypes['Float']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON'
}

export type LightResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Light'] = ResolversParentTypes['Light'],
> = {
  angle?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  distance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  intensity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  position?: Resolver<Maybe<ResolversTypes['Vector3']>, ParentType, ContextType>
  target?: Resolver<Maybe<ResolversTypes['Vector3']>, ParentType, ContextType>
  type?: Resolver<ResolversTypes['LightType'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MaterialResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Material'] = ResolversParentTypes['Material'],
> = {
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  metalness?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  opacity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  roughness?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  transparent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  type?: Resolver<ResolversTypes['MaterialType'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  generateScene?: Resolver<
    ResolversTypes['Scene'],
    ParentType,
    ContextType,
    RequireFields<MutationGenerateSceneArgs, 'input'>
  >
  generateSceneObject?: Resolver<
    ResolversTypes['SceneObject'],
    ParentType,
    ContextType,
    RequireFields<MutationGenerateSceneObjectArgs, 'input'>
  >
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  getScene?: Resolver<
    Maybe<ResolversTypes['Scene']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetSceneArgs, 'id'>
  >
}

export type SceneResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Scene'] = ResolversParentTypes['Scene'],
> = {
  background?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  objects?: Resolver<Array<ResolversTypes['SceneObject']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type SceneObjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SceneObject'] = ResolversParentTypes['SceneObject'],
> = {
  animations?: Resolver<Maybe<Array<ResolversTypes['Animation']>>, ParentType, ContextType>
  camera?: Resolver<Maybe<ResolversTypes['Camera']>, ParentType, ContextType>
  children?: Resolver<Maybe<Array<ResolversTypes['SceneObject']>>, ParentType, ContextType>
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  geometry?: Resolver<Maybe<ResolversTypes['Geometry']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  light?: Resolver<Maybe<ResolversTypes['Light']>, ParentType, ContextType>
  material?: Resolver<Maybe<ResolversTypes['Material']>, ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  position?: Resolver<Maybe<ResolversTypes['Vector3']>, ParentType, ContextType>
  rotation?: Resolver<Maybe<ResolversTypes['Vector3']>, ParentType, ContextType>
  scale?: Resolver<Maybe<ResolversTypes['Vector3']>, ParentType, ContextType>
  type?: Resolver<ResolversTypes['SceneObjectType'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type Vector3Resolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Vector3'] = ResolversParentTypes['Vector3'],
> = {
  x?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  y?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  z?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type Resolvers<ContextType = any> = {
  Animation?: AnimationResolvers<ContextType>
  Camera?: CameraResolvers<ContextType>
  Geometry?: GeometryResolvers<ContextType>
  JSON?: GraphQLScalarType
  Light?: LightResolvers<ContextType>
  Material?: MaterialResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  Scene?: SceneResolvers<ContextType>
  SceneObject?: SceneObjectResolvers<ContextType>
  Vector3?: Vector3Resolvers<ContextType>
}
