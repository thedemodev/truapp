
export enum ActionType {
  REHYDRATE = 'REHYDRATE',
  AUTH_SET_CURRENT_ACCOUNT = 'AUTH_SET_CURRENT_ACCOUNT',
  LOGOUT = 'LOGOUT',
  STORE_DEVICE_TOKEN = 'STORE_DEVICE_TOKEN',
  STORE_CURRENT_SETTINGS = 'STORE_CURRENT_SETTINGS',
}

export enum DraftActionType {
  ADD_DRAFT_ARGUMENT = 'ADD_DRAFT_ARGUMENT',
  ADD_DRAFT_SUMMARY = 'ADD_DRAFT_SUMMARY',
  ADD_DRAFT_VOTE = 'ADD_DRAFT_VOTE',
  REMOVE_DRAFT = 'REMOVE_DRAFT',
  REMOVE_ALL_DRAFTS = 'REMOVE_ALL_DRAFTS',
}

export enum CommentDraftActionType {
  ADD_DRAFT = 'ADD_DRAFT',
  REMOVE_DRAFT = 'REMOVE_DRAFT',
  REMOVE_ALL_DRAFTS = 'REMOVE_ALL_DRAFTS',
}

export enum ArgumentCommentDraftActionType {
  ADD_DRAFT_ARGUMENT_COMMENT = 'ADD_DRAFT_ARGUMENT_COMMENT',
  REMOVE_DRAFT_ARGUMENT_COMMENT = 'REMOVE_DRAFT_ARGUMENT_COMMENT',
  REMOVE_ALL_DRAFTS_ARGUMENT_COMMENT = 'REMOVE_ALL_DRAFTS_ARGUMENT_COMMENT',
}

export enum ClaimDraftActionType {
  ADD_DRAFT_CLAIM = 'ADD_DRAFT_CLAIM',
  ADD_DRAFT_COMMUNITY = 'ADD_DRAFT_COMMUNITY',
  ADD_DRAFT_SOURCE = 'ADD_DRAFT_SOURCE',
  ADD_DRAFT_ARGUMENT = 'ADD_DRAFT_ARGUMENT',
  ADD_DRAFT_SUMMARY = 'ADD_DRAFT_SUMMARY',
  ADD_DRAFT_VOTE = 'ADD_DRAFT_VOTE',
  REMOVE_DRAFT = 'REMOVE_DRAFT',
  REMOVE_ALL_DRAFTS = 'REMOVE_ALL_DRAFTS',
}

export enum UserActionsType {
  ONBOARDED = 'ONBOARDED',
  REMOVE_USER_ACTIONS = 'REMOVE_USER_ACTIONS',
}
