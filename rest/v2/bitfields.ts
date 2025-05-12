export enum TeamMemberPermissions {
    UPLOAD_VERSION = 1 << 0,
    DELETE_VERSION = 1 << 1,
    EDIT_DETAILS = 1 << 2,
    EDIT_BODY = 1 << 3,
    MANAGE_INVITES = 1 << 4,
    REMOVE_MEMBER = 1 << 5,
    EDIT_MEMBER = 1 << 6,
    DELETE_PROJECT = 1 << 7,
    VIEW_ANALYTICS = 1 << 8,
    VIEW_PAYOUTS = 1 << 9,
    ALL = ~(~0 << 9)
};

export enum UserBadges {
    EARLY_MODPACK_ADOPTER = 1 << 1,
    EARLY_RESPACK_ADOPTER = 1 << 2,
    EARLY_PLUGIN_ADOPTER = 1 << 3,
    ALPHA_TESTER = 1 << 4,
    CONTRIBUTOR = 1 << 5,
    TRANSLATOR = 1 << 6,
    ALL = 1 << 7,
};