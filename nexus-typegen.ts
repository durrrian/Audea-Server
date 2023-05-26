/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./src/context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-time format.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
    /**
     * The `File` scalar type represents a file upload.
     */
    file<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "File";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-time format.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
    /**
     * The `File` scalar type represents a file upload.
     */
    file<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "File";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  SignInProviderEnum: "APPLE" | "GOOGLE" | "MICROSOFT" | "PASSWORD"
  SubscriptionTypeEnum: "EARLYADOPTER" | "LIFETIME" | "MONTHLY" | "TRIAL" | "YEARLY"
  typeOfMutationType: "ADD" | "DELETE" | "EDIT"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
  File: File
}

export interface NexusGenObjects {
  AuthPayLoad: { // root type
    token: string; // String!
  }
  Content: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    gptGenerated?: string | null; // String
    id: string; // String!
    title?: string | null; // String
    transcript?: string | null; // String
    typeOfPromptId?: string | null; // String
    userId: string; // String!
    voiceNoteUrl?: string | null; // String
  }
  ContentSubscriptionType: { // root type
    content: NexusGenRootTypes['Content']; // Content!
    mutationType: NexusGenEnums['typeOfMutationType']; // typeOfMutationType!
  }
  Mutation: {};
  Query: {};
  ResponseMessage: { // root type
    response?: string | null; // String
  }
  Subscription: {};
  TypeOfPrompt: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    displayName: string; // String!
    id: string; // String!
    systemPrompt: string; // String!
  }
  User: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    id: string; // String!
    name: string; // String!
    signInProvider: NexusGenEnums['SignInProviderEnum']; // SignInProviderEnum!
  }
  UserSubscription: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    endDate: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
    startDate: NexusGenScalars['DateTime']; // DateTime!
    type: NexusGenEnums['SubscriptionTypeEnum']; // SubscriptionTypeEnum!
    user: NexusGenRootTypes['User']; // User!
    userId: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  AuthPayLoad: { // field return type
    token: string; // String!
  }
  Content: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    gptGenerated: string | null; // String
    id: string; // String!
    title: string | null; // String
    transcript: string | null; // String
    typeOfPromptId: string | null; // String
    userId: string; // String!
    voiceNoteUrl: string | null; // String
  }
  ContentSubscriptionType: { // field return type
    content: NexusGenRootTypes['Content']; // Content!
    mutationType: NexusGenEnums['typeOfMutationType']; // typeOfMutationType!
  }
  Mutation: { // field return type
    changePassword: NexusGenRootTypes['AuthPayLoad']; // AuthPayLoad!
    createNewContent: NexusGenRootTypes['Content']; // Content!
    createNewUserSubscription: NexusGenRootTypes['UserSubscription']; // UserSubscription!
    deleteContent: NexusGenRootTypes['ResponseMessage']; // ResponseMessage!
    editEmail: NexusGenRootTypes['User']; // User!
    editUserInfo: NexusGenRootTypes['User']; // User!
    extendTrialSubscription: NexusGenRootTypes['UserSubscription']; // UserSubscription!
    signUpWithPassword: NexusGenRootTypes['AuthPayLoad']; // AuthPayLoad!
    updateContent: NexusGenRootTypes['Content']; // Content!
  }
  Query: { // field return type
    getAllContent: NexusGenRootTypes['Content'][] | null; // [Content!]
    getEmailOtp: NexusGenRootTypes['ResponseMessage']; // ResponseMessage!
    getOneContent: NexusGenRootTypes['Content']; // Content!
    getTypeOfPromptFromId: NexusGenRootTypes['TypeOfPrompt'] | null; // TypeOfPrompt
    getUserInfo: NexusGenRootTypes['User']; // User!
    getUserSubscription: NexusGenRootTypes['UserSubscription']; // UserSubscription!
    loginWithPassword: NexusGenRootTypes['AuthPayLoad']; // AuthPayLoad!
    pushNewUserToNotion: NexusGenRootTypes['ResponseMessage']; // ResponseMessage!
    searchUserByEmail: NexusGenRootTypes['User'] | null; // User
    sendNewUserEmail: NexusGenRootTypes['ResponseMessage']; // ResponseMessage!
    verifyEmailOtp: NexusGenRootTypes['AuthPayLoad']; // AuthPayLoad!
  }
  ResponseMessage: { // field return type
    response: string | null; // String
  }
  Subscription: { // field return type
    contentSubscription: NexusGenRootTypes['ContentSubscriptionType'] | null; // ContentSubscriptionType
  }
  TypeOfPrompt: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    displayName: string; // String!
    id: string; // String!
    systemPrompt: string; // String!
  }
  User: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    id: string; // String!
    name: string; // String!
    signInProvider: NexusGenEnums['SignInProviderEnum']; // SignInProviderEnum!
  }
  UserSubscription: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    endDate: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
    startDate: NexusGenScalars['DateTime']; // DateTime!
    type: NexusGenEnums['SubscriptionTypeEnum']; // SubscriptionTypeEnum!
    user: NexusGenRootTypes['User']; // User!
    userId: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayLoad: { // field return type name
    token: 'String'
  }
  Content: { // field return type name
    createdAt: 'DateTime'
    gptGenerated: 'String'
    id: 'String'
    title: 'String'
    transcript: 'String'
    typeOfPromptId: 'String'
    userId: 'String'
    voiceNoteUrl: 'String'
  }
  ContentSubscriptionType: { // field return type name
    content: 'Content'
    mutationType: 'typeOfMutationType'
  }
  Mutation: { // field return type name
    changePassword: 'AuthPayLoad'
    createNewContent: 'Content'
    createNewUserSubscription: 'UserSubscription'
    deleteContent: 'ResponseMessage'
    editEmail: 'User'
    editUserInfo: 'User'
    extendTrialSubscription: 'UserSubscription'
    signUpWithPassword: 'AuthPayLoad'
    updateContent: 'Content'
  }
  Query: { // field return type name
    getAllContent: 'Content'
    getEmailOtp: 'ResponseMessage'
    getOneContent: 'Content'
    getTypeOfPromptFromId: 'TypeOfPrompt'
    getUserInfo: 'User'
    getUserSubscription: 'UserSubscription'
    loginWithPassword: 'AuthPayLoad'
    pushNewUserToNotion: 'ResponseMessage'
    searchUserByEmail: 'User'
    sendNewUserEmail: 'ResponseMessage'
    verifyEmailOtp: 'AuthPayLoad'
  }
  ResponseMessage: { // field return type name
    response: 'String'
  }
  Subscription: { // field return type name
    contentSubscription: 'ContentSubscriptionType'
  }
  TypeOfPrompt: { // field return type name
    createdAt: 'DateTime'
    displayName: 'String'
    id: 'String'
    systemPrompt: 'String'
  }
  User: { // field return type name
    createdAt: 'DateTime'
    email: 'String'
    id: 'String'
    name: 'String'
    signInProvider: 'SignInProviderEnum'
  }
  UserSubscription: { // field return type name
    createdAt: 'DateTime'
    endDate: 'DateTime'
    id: 'String'
    startDate: 'DateTime'
    type: 'SubscriptionTypeEnum'
    user: 'User'
    userId: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    changePassword: { // args
      email: string; // String!
      jwtToken: string; // String!
      password: string; // String!
    }
    createNewUserSubscription: { // args
      type: NexusGenEnums['SubscriptionTypeEnum']; // SubscriptionTypeEnum!
    }
    deleteContent: { // args
      contentId: string; // String!
    }
    editEmail: { // args
      email: string; // String!
      jwtToken: string; // String!
    }
    editUserInfo: { // args
      name?: string | null; // String
    }
    signUpWithPassword: { // args
      email: string; // String!
      jwtToken: string; // String!
      name: string; // String!
      password: string; // String!
    }
    updateContent: { // args
      contentId: string; // String!
      gptGenerated?: string | null; // String
      title?: string | null; // String
      transcript?: string | null; // String
      typeOfPromptId?: string | null; // String
      voiceNoteUrl?: string | null; // String
    }
  }
  Query: {
    getEmailOtp: { // args
      email: string; // String!
    }
    getOneContent: { // args
      contentId: string; // String!
    }
    getTypeOfPromptFromId: { // args
      typeOfPromptId: string; // String!
    }
    loginWithPassword: { // args
      email: string; // String!
      password: string; // String!
    }
    pushNewUserToNotion: { // args
      email: string; // String!
      name: string; // String!
    }
    searchUserByEmail: { // args
      email: string; // String!
    }
    sendNewUserEmail: { // args
      email: string; // String!
      name: string; // String!
    }
    verifyEmailOtp: { // args
      email: string; // String!
      otp: string; // String!
    }
  }
  Subscription: {
    contentSubscription: { // args
      userId: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}