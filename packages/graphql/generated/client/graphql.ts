/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type MeshCommand = {
  __typename?: 'MeshCommand';
  color?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  position: Array<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  generateMesh: MeshCommand;
};


export type MutationGenerateMeshArgs = {
  prompt: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']['output']>;
};

export type MeshCommandFieldsFragment = { __typename?: 'MeshCommand', id: string, type: string, color?: string | null, position: Array<number> } & { ' $fragmentName'?: 'MeshCommandFieldsFragment' };

export type GenerateMeshMutationVariables = Exact<{
  prompt: Scalars['String']['input'];
}>;


export type GenerateMeshMutation = { __typename?: 'Mutation', generateMesh: (
    { __typename?: 'MeshCommand' }
    & { ' $fragmentRefs'?: { 'MeshCommandFieldsFragment': MeshCommandFieldsFragment } }
  ) };

export const MeshCommandFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MeshCommandFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MeshCommand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]} as unknown as DocumentNode<MeshCommandFieldsFragment, unknown>;
export const GenerateMeshDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GenerateMesh"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"prompt"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateMesh"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"prompt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"prompt"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MeshCommandFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MeshCommandFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MeshCommand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]} as unknown as DocumentNode<GenerateMeshMutation, GenerateMeshMutationVariables>;