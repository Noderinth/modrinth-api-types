// TYPES

export type APINotification = {
    /**
     * The id of the notification.
     */
    id: string;

    /**
     * The id of the user who received the notification.
     */
    user_id: string;

    /**
     * The type of notification.
     */
    type: NotificationType | null;

    /**
     * The title of the notification.
     */
    title: string;

    /**
     * The body text of the notification.
     */
    text: string;

    /**
     * A link to the related project or version.
     */
    link: string;

    /**
     * Whether the notification has been read or not.
     */
    read: boolean;

    /**
     * The time at which the notification was created.
     */
    created: Date;

    /**
     * A list of actions that can be performed.
     */
    actions: APINotificationAction[];
};

export type APINotificationAction = {
    /**
     * The friendly name for this action.
     */
    title: string;

    /**
     * The HTTP code and path to request in order to perform this action.
     */
    action_route: string[];
};

// ENUMS

export enum NotificationType {
    ProjectUpdate = "project_update",
    TeamInvite = "team_invite",
    StatusChange = "status_change",
    ModeratorMessage = "moderator_message"
};