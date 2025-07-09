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

export type Geometry = {
  __typename?: 'Geometry'
  indices?: Maybe<Array<Scalars['Int']['output']>>
  params?: Maybe<Scalars['JSON']['output']>
  type: GeometryType
  vertices?: Maybe<Array<Scalars['Float']['output']>>
}

export enum GeometryType {
  Box = 'box',
  Cone = 'cone',
  Custom = 'custom',
  Cylinder = 'cylinder',
  Sphere = 'sphere',
}

export type Material = {
  __typename?: 'Material'
  color?: Maybe<Scalars['String']['output']>
  metalness?: Maybe<Scalars['Float']['output']>
  roughness?: Maybe<Scalars['Float']['output']>
  textureUrl?: Maybe<Scalars['String']['output']>
}

export type MeshObject = {
  __typename?: 'MeshObject'
  children?: Maybe<Array<MeshObject>>
  geometry: Geometry
  id: Scalars['ID']['output']
  material: Material
  name?: Maybe<Scalars['String']['output']>
  position?: Maybe<Vector3>
  rotation?: Maybe<Vector3>
  scale?: Maybe<Vector3>
}

export type Mutation = {
  __typename?: 'Mutation'
  generateMesh: MeshObject
}

export type MutationGenerateMeshArgs = {
  prompt: Scalars['String']['input']
}

export type Query = {
  __typename?: 'Query'
  _empty?: Maybe<Scalars['String']['output']>
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>
  Float: ResolverTypeWrapper<Scalars['Float']['output']>
  Geometry: ResolverTypeWrapper<Geometry>
  GeometryType: GeometryType
  ID: ResolverTypeWrapper<Scalars['ID']['output']>
  Int: ResolverTypeWrapper<Scalars['Int']['output']>
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>
  Material: ResolverTypeWrapper<Material>
  MeshObject: ResolverTypeWrapper<MeshObject>
  Mutation: ResolverTypeWrapper<{}>
  Query: ResolverTypeWrapper<{}>
  String: ResolverTypeWrapper<Scalars['String']['output']>
  Vector3: ResolverTypeWrapper<Vector3>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output']
  Float: Scalars['Float']['output']
  Geometry: Geometry
  ID: Scalars['ID']['output']
  Int: Scalars['Int']['output']
  JSON: Scalars['JSON']['output']
  Material: Material
  MeshObject: MeshObject
  Mutation: {}
  Query: {}
  String: Scalars['String']['output']
  Vector3: Vector3
}

export type GeometryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Geometry'] = ResolversParentTypes['Geometry'],
> = {
  indices?: Resolver<Maybe<Array<ResolversTypes['Int']>>, ParentType, ContextType>
  params?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>
  type?: Resolver<ResolversTypes['GeometryType'], ParentType, ContextType>
  vertices?: Resolver<Maybe<Array<ResolversTypes['Float']>>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON'
}

export type MaterialResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Material'] = ResolversParentTypes['Material'],
> = {
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  metalness?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  roughness?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  textureUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MeshObjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MeshObject'] = ResolversParentTypes['MeshObject'],
> = {
  children?: Resolver<Maybe<Array<ResolversTypes['MeshObject']>>, ParentType, ContextType>
  geometry?: Resolver<ResolversTypes['Geometry'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  material?: Resolver<ResolversTypes['Material'], ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  position?: Resolver<Maybe<ResolversTypes['Vector3']>, ParentType, ContextType>
  rotation?: Resolver<Maybe<ResolversTypes['Vector3']>, ParentType, ContextType>
  scale?: Resolver<Maybe<ResolversTypes['Vector3']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  generateMesh?: Resolver<
    ResolversTypes['MeshObject'],
    ParentType,
    ContextType,
    RequireFields<MutationGenerateMeshArgs, 'prompt'>
  >
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
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
  Geometry?: GeometryResolvers<ContextType>
  JSON?: GraphQLScalarType
  Material?: MaterialResolvers<ContextType>
  MeshObject?: MeshObjectResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  Vector3?: Vector3Resolvers<ContextType>
}
