import { RequireAtLeastOne } from "../../globals";
import {
    APIUser,
    UserPayoutWallet,
    UserPayoutWalletType
} from "../../payloads/v2";

// TYPES

export type APIUserResolvable =
    | APIUser
    | string;

export type APIUserEditBody = RequireAtLeastOne<{
    /**
     * The user’s username.
     */
    username?: string;

    /**
     * The user’s display name.
     */
    name?: string;

    /**
     * The user’s email.
     */
    email?: string | null;

    /**
     * A description of the user.
     */
    bio?: string;

    /**
     * Various data relating to the user’s payouts status.
     */
    payout_data?: {
        /**
         * The wallet that the user has selected.
         */
        payout_wallet?: UserPayoutWallet;

        /**
         * The type of the user’s wallet.
         */
        payout_wallet_type?: UserPayoutWalletType;

        /**
         * The user’s payout address.
         */
        payout_address?: string;
    };
}>;

export type APIUserEditAvatarBody = string;

// ROUTES

/**
 * Route for the following:
 * - GET   `/user/${user}`
 * - PATCH `/user/${user}`
 * @param user The ID or username of the user.
 */
export function user(user: APIUserResolvable): `/user/${string}` {
    if (typeof user == "string") {
        return `/user/${user}`;
    } else {
        return `/user/${user.id}`;
    };
};

/**
 * Route for the following:
 * - GET `/user`
 */
export function authorizationUser(): `/user` {
    return `/user`;
};

/**
 * Route for the following:
 * GET `/users`
 * @param users The IDs or usernames of the users.
 */
export function users(users: APIUserResolvable[]): `/users?ids=[${string}]` {
    return `/users?ids=[${users.map(u => typeof u == "string" ? `"${u}"` : `"${u.id}"`).join(",")}]`;
};

/**
 * Route for the following:
 * - DELETE `/user/${user}`
 * - PATCH  `/user/${user}`
 * @param user The ID or username of the user.
 */
export function userIcon(user: APIUserResolvable): `/user/${string}/icon` {
    if (typeof user == "string") {
        return `/user/${user}/icon`;
    } else {
        return `/user/${user.id}/icon`;
    };
};

/**
 * Route for the following:
 * - GET `/user/${user}/projects`
 * @param user The ID or username of the user.
 */
export function userProjects(user: APIUserResolvable): `/user/${string}/projects` {
    if (typeof user == "string") {
        return `/user/${user}/projects`;
    } else {
        return `/user/${user.id}/projects`;
    };
};

/**
 * Route for the following:
 * - GET `/user/${user}/following`
 * @param user The ID or username of the user.
 */
export function userFollows(user: APIUserResolvable): `/user/${string}/follows` {
    if (typeof user == "string") {
        return `/user/${user}/follows`;
    } else {
        return `/user/${user.id}/follows`;
    };
};

/**
 * Route for the following:
 * - GET  `/user/${user}/payouts`
 * - POST `/user/${user}/payouts`
 * @param user The ID or username of the user.
 */
export function userPayouts(user: APIUserResolvable): `/user/${string}/payouts`;
export function userPayouts(user: APIUserResolvable, amount: number): `/user/${string}/payouts?amount=${number}`;
export function userPayouts(user: APIUserResolvable, amount?: number) {
    let userId = typeof user == "string" ? user : user.id;
    if (amount) {
        return `/user/${userId}/payouts?amount=${amount}`;
    } else {
        return `/user/${userId}/payouts`;
    };
};