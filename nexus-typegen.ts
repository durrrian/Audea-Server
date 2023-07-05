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
  IntegrationsEnum: "CLICKUP" | "CRAFT" | "EVERNOTE" | "GITHUB" | "GMAIL" | "MONDAY" | "NOTION" | "OBSIDIAN" | "SUNSAMA" | "TODOIST" | "WHATSAPP" | "ZAPIER"
  OutputLanguageEnum: "ARABIC" | "ASK" | "BAHASAINDONESIA" | "CHINESE" | "ENGLISH" | "FRENCH" | "HINDI" | "JAPANESE" | "RUSSIAN" | "SPANISH" | "TRANSCRIPT" | "URDU"
  PlatformVoteEnum: "ANDROID" | "ANDROIDTABLET" | "IOS" | "IPADOS" | "LINUX" | "MACOS" | "WINDOWS"
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
  Content: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    gptGenerated?: string | null; // String
    id: string; // String!
    outputLanguage?: NexusGenEnums['OutputLanguageEnum'] | null; // OutputLanguageEnum
    title?: string | null; // String
    transcript?: string | null; // String
    typeOfPromptId?: string | null; // String
    userId: string; // String!
    voiceNoteUrl?: string | null; // String
    writingStyle?: string | null; // String
  }
  ContentSettings: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
    lastUpdate: NexusGenScalars['DateTime']; // DateTime!
    outputLanguage: NexusGenEnums['OutputLanguageEnum']; // OutputLanguageEnum!
    typeOfPrompt: NexusGenRootTypes['TypeOfPrompt']; // TypeOfPrompt!
    typeOfPromptId: string; // String!
    user: NexusGenRootTypes['User']; // User!
    userId: string; // String!
    writingStyle: string; // String!
  }
  ContentSubscriptionType: { // root type
    content: NexusGenRootTypes['Content']; // Content!
    mutationType: NexusGenEnums['typeOfMutationType']; // typeOfMutationType!
  }
  DarkMode: { // root type
    darkMode: boolean; // Boolean!
    id: string; // String!
    userId: string; // String!
  }
  DeletedUser: { // root type
    email: string; // String!
    id: string; // String!
  }
  GeneratedNotionPage: { // root type
    contentId: string; // String!
    id: string; // String!
    notionAccountId: string; // String!
    notionPageId: string; // String!
    url: string; // String!
  }
  Mutation: {};
  NotionAccount: { // root type
    accessToken: string; // String!
    automaticPost: boolean; // Boolean!
    botId: string; // String!
    clerkUserId: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
    ownerUserId: string; // String!
    primaryDatabase?: string | null; // String
    userId: string; // String!
    workspaceIcon: string; // String!
    workspaceId: string; // String!
    workspaceName: string; // String!
  }
  NotionDatabase: { // root type
    icon?: string | null; // String
    id: string; // String!
    title: string; // String!
    url?: string | null; // String
  }
  PlatformVote: { // root type
    count: number; // Int!
    platform: NexusGenEnums['PlatformVoteEnum']; // PlatformVoteEnum!
  }
  PlatformVoteSubscription: { // root type
    platform: NexusGenEnums['PlatformVoteEnum']; // PlatformVoteEnum!
    vote: boolean; // Boolean!
  }
  PlatformVoteUser: { // root type
    platform: NexusGenEnums['PlatformVoteEnum']; // PlatformVoteEnum!
    voted: boolean; // Boolean!
  }
  Query: {};
  RequestedIntegration: { // root type
    integration: NexusGenEnums['IntegrationsEnum']; // IntegrationsEnum!
    requested: boolean; // Boolean!
  }
  ResponseMessage: { // root type
    response?: string | null; // String
  }
  StripeCustomer: { // root type
    clerkUserId: string; // String!
    email: string; // String!
    id: string; // String!
    name: string; // String!
    stripeCustomerId: string; // String!
    userId: string; // String!
  }
  StripePaidObject: { // root type
    clerkUserId: string; // String!
    id: string; // String!
    redeem: boolean; // Boolean!
    sessionId: string; // String!
    stripeCustomerDbId: string; // String!
  }
  Subscription: {};
  TypeOfPrompt: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    displayName: string; // String!
    id: string; // String!
    systemPrompt: string; // String!
  }
  User: { // root type
    clerkUserId: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    firstName: string; // String!
    id: string; // String!
    lastName: string; // String!
  }
  UserSubscription: { // root type
    clerkUserId: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    endDate: NexusGenScalars['DateTime']; // DateTime!
    extended: boolean; // Boolean!
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
  Content: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    gptGenerated: string | null; // String
    id: string; // String!
    outputLanguage: NexusGenEnums['OutputLanguageEnum'] | null; // OutputLanguageEnum
    title: string | null; // String
    transcript: string | null; // String
    typeOfPromptId: string | null; // String
    userId: string; // String!
    voiceNoteUrl: string | null; // String
    writingStyle: string | null; // String
  }
  ContentSettings: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
    lastUpdate: NexusGenScalars['DateTime']; // DateTime!
    outputLanguage: NexusGenEnums['OutputLanguageEnum']; // OutputLanguageEnum!
    typeOfPrompt: NexusGenRootTypes['TypeOfPrompt']; // TypeOfPrompt!
    typeOfPromptId: string; // String!
    user: NexusGenRootTypes['User']; // User!
    userId: string; // String!
    writingStyle: string; // String!
  }
  ContentSubscriptionType: { // field return type
    content: NexusGenRootTypes['Content']; // Content!
    mutationType: NexusGenEnums['typeOfMutationType']; // typeOfMutationType!
  }
  DarkMode: { // field return type
    darkMode: boolean; // Boolean!
    id: string; // String!
    userId: string; // String!
  }
  DeletedUser: { // field return type
    email: string; // String!
    id: string; // String!
  }
  GeneratedNotionPage: { // field return type
    contentId: string; // String!
    id: string; // String!
    notionAccountId: string; // String!
    notionPageId: string; // String!
    url: string; // String!
  }
  Mutation: { // field return type
    connectNotionAccount: NexusGenRootTypes['NotionAccount']; // NotionAccount!
    createNewContent: NexusGenRootTypes['Content']; // Content!
    createNewContentSettings: NexusGenRootTypes['ContentSettings']; // ContentSettings!
    createNewDarkModePreferences: NexusGenRootTypes['DarkMode']; // DarkMode!
    createNewUserSubscription: NexusGenRootTypes['UserSubscription']; // UserSubscription!
    createPaidObject: NexusGenRootTypes['StripePaidObject']; // StripePaidObject!
    createStripeCustomer: NexusGenRootTypes['StripeCustomer']; // StripeCustomer!
    createUserFromClerk: NexusGenRootTypes['User']; // User!
    deleteAccount: NexusGenRootTypes['ResponseMessage']; // ResponseMessage!
    deleteAllContent: NexusGenRootTypes['ResponseMessage']; // ResponseMessage!
    deleteContent: NexusGenRootTypes['ResponseMessage']; // ResponseMessage!
    deleteUserIfRegistrationFailed: NexusGenRootTypes['ResponseMessage']; // ResponseMessage!
    deletingNotionConnection: NexusGenRootTypes['ResponseMessage']; // ResponseMessage!
    dreamWorkflowForm: NexusGenRootTypes['ResponseMessage']; // ResponseMessage!
    extendTrialSubscription: NexusGenRootTypes['UserSubscription']; // UserSubscription!
    generateNotionPage: NexusGenRootTypes['GeneratedNotionPage']; // GeneratedNotionPage!
    purchasedSubscription: NexusGenRootTypes['UserSubscription']; // UserSubscription!
    setNotionPrimaryDatabase: NexusGenRootTypes['ResponseMessage']; // ResponseMessage!
    updateContent: NexusGenRootTypes['Content']; // Content!
    updateContentSettings: NexusGenRootTypes['ContentSettings']; // ContentSettings!
    updateDarkModePreferences: NexusGenRootTypes['DarkMode']; // DarkMode!
    userRequestIntegration: NexusGenRootTypes['RequestedIntegration']; // RequestedIntegration!
    votePlatform: NexusGenRootTypes['PlatformVote']; // PlatformVote!
  }
  NotionAccount: { // field return type
    accessToken: string; // String!
    automaticPost: boolean; // Boolean!
    botId: string; // String!
    clerkUserId: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
    ownerUserId: string; // String!
    primaryDatabase: string | null; // String
    userId: string; // String!
    workspaceIcon: string; // String!
    workspaceId: string; // String!
    workspaceName: string; // String!
  }
  NotionDatabase: { // field return type
    icon: string | null; // String
    id: string; // String!
    title: string; // String!
    url: string | null; // String
  }
  PlatformVote: { // field return type
    count: number; // Int!
    platform: NexusGenEnums['PlatformVoteEnum']; // PlatformVoteEnum!
  }
  PlatformVoteSubscription: { // field return type
    platform: NexusGenEnums['PlatformVoteEnum']; // PlatformVoteEnum!
    vote: boolean; // Boolean!
  }
  PlatformVoteUser: { // field return type
    platform: NexusGenEnums['PlatformVoteEnum']; // PlatformVoteEnum!
    voted: boolean; // Boolean!
  }
  Query: { // field return type
    checkIfAlreadyVotedPlatform: NexusGenRootTypes['PlatformVoteUser']; // PlatformVoteUser!
    getAllAllowedNotionDatabase: NexusGenRootTypes['NotionDatabase'][] | null; // [NotionDatabase!]
    getAllContent: NexusGenRootTypes['Content'][] | null; // [Content!]
    getAllTypeOfPrompt: NexusGenRootTypes['TypeOfPrompt'][]; // [TypeOfPrompt!]!
    getContentSettings: NexusGenRootTypes['ContentSettings'] | null; // ContentSettings
    getDarkModePreferences: NexusGenRootTypes['DarkMode'] | null; // DarkMode
    getDeletedUser: NexusGenRootTypes['DeletedUser'] | null; // DeletedUser
    getIntegrationRequest: NexusGenRootTypes['RequestedIntegration'] | null; // RequestedIntegration
    getNotionAccount: NexusGenRootTypes['NotionAccount'] | null; // NotionAccount
    getNotionTitleName: NexusGenRootTypes['ResponseMessage']; // ResponseMessage!
    getOneContent: NexusGenRootTypes['Content']; // Content!
    getPaidObject: NexusGenRootTypes['StripePaidObject'] | null; // StripePaidObject
    getPlatformVote: NexusGenRootTypes['PlatformVote']; // PlatformVote!
    getStripeCustomer: NexusGenRootTypes['StripeCustomer'] | null; // StripeCustomer
    getTypeOfPromptFromId: NexusGenRootTypes['TypeOfPrompt'] | null; // TypeOfPrompt
    getUserInfo: NexusGenRootTypes['User']; // User!
    getUserSubscription: NexusGenRootTypes['UserSubscription']; // UserSubscription!
    getUserSubscriptionEDGE: NexusGenRootTypes['UserSubscription']; // UserSubscription!
    pushNewUserToNotion: NexusGenRootTypes['ResponseMessage']; // ResponseMessage!
    pushSupportTicket: NexusGenRootTypes['ResponseMessage']; // ResponseMessage!
    searchUserByClerkId: NexusGenRootTypes['User'] | null; // User
    searchUserByEmail: NexusGenRootTypes['User'] | null; // User
    sendInvitationEmailFromUser: NexusGenRootTypes['ResponseMessage']; // ResponseMessage!
    sendNewUserEmail: NexusGenRootTypes['ResponseMessage']; // ResponseMessage!
  }
  RequestedIntegration: { // field return type
    integration: NexusGenEnums['IntegrationsEnum']; // IntegrationsEnum!
    requested: boolean; // Boolean!
  }
  ResponseMessage: { // field return type
    response: string | null; // String
  }
  StripeCustomer: { // field return type
    clerkUserId: string; // String!
    email: string; // String!
    id: string; // String!
    name: string; // String!
    stripeCustomerId: string; // String!
    userId: string; // String!
  }
  StripePaidObject: { // field return type
    clerkUserId: string; // String!
    id: string; // String!
    redeem: boolean; // Boolean!
    sessionId: string; // String!
    stripeCustomerDbId: string; // String!
  }
  Subscription: { // field return type
    androidTabletVoteSubscription: NexusGenRootTypes['PlatformVoteSubscription'] | null; // PlatformVoteSubscription
    androidVoteSubscription: NexusGenRootTypes['PlatformVoteSubscription'] | null; // PlatformVoteSubscription
    contentSubscription: NexusGenRootTypes['ContentSubscriptionType'] | null; // ContentSubscriptionType
    darkModeSubscription: NexusGenRootTypes['DarkMode'] | null; // DarkMode
    iOSVoteSubscription: NexusGenRootTypes['PlatformVoteSubscription'] | null; // PlatformVoteSubscription
    iPadOSVoteSubscription: NexusGenRootTypes['PlatformVoteSubscription'] | null; // PlatformVoteSubscription
    linuxVoteSubscription: NexusGenRootTypes['PlatformVoteSubscription'] | null; // PlatformVoteSubscription
    macOSVoteSubscription: NexusGenRootTypes['PlatformVoteSubscription'] | null; // PlatformVoteSubscription
    windowsVoteSubscription: NexusGenRootTypes['PlatformVoteSubscription'] | null; // PlatformVoteSubscription
  }
  TypeOfPrompt: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    displayName: string; // String!
    id: string; // String!
    systemPrompt: string; // String!
  }
  User: { // field return type
    clerkUserId: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    firstName: string; // String!
    id: string; // String!
    lastName: string; // String!
  }
  UserSubscription: { // field return type
    clerkUserId: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    endDate: NexusGenScalars['DateTime']; // DateTime!
    extended: boolean; // Boolean!
    id: string; // String!
    startDate: NexusGenScalars['DateTime']; // DateTime!
    type: NexusGenEnums['SubscriptionTypeEnum']; // SubscriptionTypeEnum!
    user: NexusGenRootTypes['User']; // User!
    userId: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Content: { // field return type name
    createdAt: 'DateTime'
    gptGenerated: 'String'
    id: 'String'
    outputLanguage: 'OutputLanguageEnum'
    title: 'String'
    transcript: 'String'
    typeOfPromptId: 'String'
    userId: 'String'
    voiceNoteUrl: 'String'
    writingStyle: 'String'
  }
  ContentSettings: { // field return type name
    createdAt: 'DateTime'
    id: 'String'
    lastUpdate: 'DateTime'
    outputLanguage: 'OutputLanguageEnum'
    typeOfPrompt: 'TypeOfPrompt'
    typeOfPromptId: 'String'
    user: 'User'
    userId: 'String'
    writingStyle: 'String'
  }
  ContentSubscriptionType: { // field return type name
    content: 'Content'
    mutationType: 'typeOfMutationType'
  }
  DarkMode: { // field return type name
    darkMode: 'Boolean'
    id: 'String'
    userId: 'String'
  }
  DeletedUser: { // field return type name
    email: 'String'
    id: 'String'
  }
  GeneratedNotionPage: { // field return type name
    contentId: 'String'
    id: 'String'
    notionAccountId: 'String'
    notionPageId: 'String'
    url: 'String'
  }
  Mutation: { // field return type name
    connectNotionAccount: 'NotionAccount'
    createNewContent: 'Content'
    createNewContentSettings: 'ContentSettings'
    createNewDarkModePreferences: 'DarkMode'
    createNewUserSubscription: 'UserSubscription'
    createPaidObject: 'StripePaidObject'
    createStripeCustomer: 'StripeCustomer'
    createUserFromClerk: 'User'
    deleteAccount: 'ResponseMessage'
    deleteAllContent: 'ResponseMessage'
    deleteContent: 'ResponseMessage'
    deleteUserIfRegistrationFailed: 'ResponseMessage'
    deletingNotionConnection: 'ResponseMessage'
    dreamWorkflowForm: 'ResponseMessage'
    extendTrialSubscription: 'UserSubscription'
    generateNotionPage: 'GeneratedNotionPage'
    purchasedSubscription: 'UserSubscription'
    setNotionPrimaryDatabase: 'ResponseMessage'
    updateContent: 'Content'
    updateContentSettings: 'ContentSettings'
    updateDarkModePreferences: 'DarkMode'
    userRequestIntegration: 'RequestedIntegration'
    votePlatform: 'PlatformVote'
  }
  NotionAccount: { // field return type name
    accessToken: 'String'
    automaticPost: 'Boolean'
    botId: 'String'
    clerkUserId: 'String'
    createdAt: 'DateTime'
    id: 'String'
    ownerUserId: 'String'
    primaryDatabase: 'String'
    userId: 'String'
    workspaceIcon: 'String'
    workspaceId: 'String'
    workspaceName: 'String'
  }
  NotionDatabase: { // field return type name
    icon: 'String'
    id: 'String'
    title: 'String'
    url: 'String'
  }
  PlatformVote: { // field return type name
    count: 'Int'
    platform: 'PlatformVoteEnum'
  }
  PlatformVoteSubscription: { // field return type name
    platform: 'PlatformVoteEnum'
    vote: 'Boolean'
  }
  PlatformVoteUser: { // field return type name
    platform: 'PlatformVoteEnum'
    voted: 'Boolean'
  }
  Query: { // field return type name
    checkIfAlreadyVotedPlatform: 'PlatformVoteUser'
    getAllAllowedNotionDatabase: 'NotionDatabase'
    getAllContent: 'Content'
    getAllTypeOfPrompt: 'TypeOfPrompt'
    getContentSettings: 'ContentSettings'
    getDarkModePreferences: 'DarkMode'
    getDeletedUser: 'DeletedUser'
    getIntegrationRequest: 'RequestedIntegration'
    getNotionAccount: 'NotionAccount'
    getNotionTitleName: 'ResponseMessage'
    getOneContent: 'Content'
    getPaidObject: 'StripePaidObject'
    getPlatformVote: 'PlatformVote'
    getStripeCustomer: 'StripeCustomer'
    getTypeOfPromptFromId: 'TypeOfPrompt'
    getUserInfo: 'User'
    getUserSubscription: 'UserSubscription'
    getUserSubscriptionEDGE: 'UserSubscription'
    pushNewUserToNotion: 'ResponseMessage'
    pushSupportTicket: 'ResponseMessage'
    searchUserByClerkId: 'User'
    searchUserByEmail: 'User'
    sendInvitationEmailFromUser: 'ResponseMessage'
    sendNewUserEmail: 'ResponseMessage'
  }
  RequestedIntegration: { // field return type name
    integration: 'IntegrationsEnum'
    requested: 'Boolean'
  }
  ResponseMessage: { // field return type name
    response: 'String'
  }
  StripeCustomer: { // field return type name
    clerkUserId: 'String'
    email: 'String'
    id: 'String'
    name: 'String'
    stripeCustomerId: 'String'
    userId: 'String'
  }
  StripePaidObject: { // field return type name
    clerkUserId: 'String'
    id: 'String'
    redeem: 'Boolean'
    sessionId: 'String'
    stripeCustomerDbId: 'String'
  }
  Subscription: { // field return type name
    androidTabletVoteSubscription: 'PlatformVoteSubscription'
    androidVoteSubscription: 'PlatformVoteSubscription'
    contentSubscription: 'ContentSubscriptionType'
    darkModeSubscription: 'DarkMode'
    iOSVoteSubscription: 'PlatformVoteSubscription'
    iPadOSVoteSubscription: 'PlatformVoteSubscription'
    linuxVoteSubscription: 'PlatformVoteSubscription'
    macOSVoteSubscription: 'PlatformVoteSubscription'
    windowsVoteSubscription: 'PlatformVoteSubscription'
  }
  TypeOfPrompt: { // field return type name
    createdAt: 'DateTime'
    displayName: 'String'
    id: 'String'
    systemPrompt: 'String'
  }
  User: { // field return type name
    clerkUserId: 'String'
    createdAt: 'DateTime'
    email: 'String'
    firstName: 'String'
    id: 'String'
    lastName: 'String'
  }
  UserSubscription: { // field return type name
    clerkUserId: 'String'
    createdAt: 'DateTime'
    endDate: 'DateTime'
    extended: 'Boolean'
    id: 'String'
    startDate: 'DateTime'
    type: 'SubscriptionTypeEnum'
    user: 'User'
    userId: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    connectNotionAccount: { // args
      notionCode: string; // String!
    }
    createNewDarkModePreferences: { // args
      darkMode?: boolean | null; // Boolean
    }
    createNewUserSubscription: { // args
      type: NexusGenEnums['SubscriptionTypeEnum']; // SubscriptionTypeEnum!
    }
    createPaidObject: { // args
      sessionId: string; // String!
    }
    createUserFromClerk: { // args
      clerkId: string; // String!
      email: string; // String!
      firstName: string; // String!
      lastName: string; // String!
      referralJwt?: string | null; // String
    }
    deleteContent: { // args
      contentId: string; // String!
    }
    deleteUserIfRegistrationFailed: { // args
      id: string; // String!
      secret: string; // String!
    }
    dreamWorkflowForm: { // args
      longText: string; // String!
    }
    generateNotionPage: { // args
      contentId: string; // String!
      notionTitleName: string; // String!
    }
    purchasedSubscription: { // args
      type: NexusGenEnums['SubscriptionTypeEnum']; // SubscriptionTypeEnum!
    }
    setNotionPrimaryDatabase: { // args
      automatic?: boolean | null; // Boolean
      id: string; // String!
    }
    updateContent: { // args
      contentId: string; // String!
      gptGenerated?: string | null; // String
      outputLanguage?: NexusGenEnums['OutputLanguageEnum'] | null; // OutputLanguageEnum
      title?: string | null; // String
      transcript?: string | null; // String
      typeOfPromptId?: string | null; // String
      voiceNoteUrl?: string | null; // String
      writingStyle?: string | null; // String
    }
    updateContentSettings: { // args
      outputLanguage?: NexusGenEnums['OutputLanguageEnum'] | null; // OutputLanguageEnum
      typeOfPromptId?: string | null; // String
      writingStyle?: string | null; // String
    }
    updateDarkModePreferences: { // args
      darkMode: boolean; // Boolean!
    }
    userRequestIntegration: { // args
      integration: NexusGenEnums['IntegrationsEnum']; // IntegrationsEnum!
    }
    votePlatform: { // args
      platform: NexusGenEnums['PlatformVoteEnum']; // PlatformVoteEnum!
      vote: boolean; // Boolean!
    }
  }
  Query: {
    checkIfAlreadyVotedPlatform: { // args
      platform: NexusGenEnums['PlatformVoteEnum']; // PlatformVoteEnum!
    }
    getDeletedUser: { // args
      email: string; // String!
    }
    getIntegrationRequest: { // args
      integration: NexusGenEnums['IntegrationsEnum']; // IntegrationsEnum!
    }
    getOneContent: { // args
      contentId: string; // String!
    }
    getPaidObject: { // args
      sessionId: string; // String!
    }
    getPlatformVote: { // args
      platform: NexusGenEnums['PlatformVoteEnum']; // PlatformVoteEnum!
    }
    getTypeOfPromptFromId: { // args
      typeOfPromptId: string; // String!
    }
    getUserSubscriptionEDGE: { // args
      clerkUserId: string; // String!
      secret: string; // String!
    }
    pushNewUserToNotion: { // args
      email: string; // String!
      firstName: string; // String!
      lastName: string; // String!
    }
    pushSupportTicket: { // args
      area: string; // String!
      description: string; // String!
      severityLevel: string; // String!
      subject: string; // String!
    }
    searchUserByClerkId: { // args
      clerkUserId: string; // String!
    }
    searchUserByEmail: { // args
      email: string; // String!
    }
    sendInvitationEmailFromUser: { // args
      email: string; // String!
      firstName: string; // String!
      lastName: string; // String!
    }
    sendNewUserEmail: { // args
      email: string; // String!
      name: string; // String!
    }
  }
  Subscription: {
    contentSubscription: { // args
      clerkUserId: string; // String!
    }
    darkModeSubscription: { // args
      clerkUserId: string; // String!
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