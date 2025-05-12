import { APIUserResolvable } from "./users";
import { APINotification } from "../../payloads/v2";

// TYPES

export type APINotificationResolvable =
    | APINotification
    | string;

// ROUTES

/**
 * Route for the following:
 * - GET `/user/${user}/notifications`
 * @param user The ID or username of the user.
 */
export function userNotifications(user: APIUserResolvable) {
    if (typeof user == "string") {
        return `/user/${user}/notifications`;
    } else {
        return `/user/${user.id}/notifications`;
    };
};

/**
 * Route for the following:
 * - DELETE `/notification/${notification}`
 * - GET    `/notification/${notification}`
 * - PATCH  `/notification/${notification}`
 * @param notification The ID of the notification.
 */
export function notification(notification: APINotificationResolvable) {
    if (typeof notification == "string") {
        return `/notification/${notification}`;
    } else {
        return `/notification/${notification.id}`;
    };
};

/**
 * Route for the following:
 * - DELETE `/notifications`
 * - GET    `/notifications`
 * - PATCH  `/notifications`
 * @param notifications The IDs of the notifications.
 */
export function notifications(notifications: APINotificationResolvable[]) {
    return `/notifications?ids=[${notifications.map(n => typeof n == "string" ? `"${n}"` : `"${n.id}"`).join(",")}]`;
};