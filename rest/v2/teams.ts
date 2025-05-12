import { RequireAtLeastOne } from "../../globals";
import {
    APIProject,
    APITeamMember
} from "../../payloads/v2";
import { TeamMemberPermissions } from "./bitfields";
import { APIProjectResolvable } from "./projects";
import { APIUserResolvable } from "./users";

// TYPES

export type APITeamResolvable =
    | APIProject
    | APITeamMember
    | string;

export type APITeamAddUserBody = {
    /**
     * The ID of the user.
     */
    user_id: string;
};

export type APITeamEditMemberBody = RequireAtLeastOne<{
    /**
     * 
     */
    role?: string;

    /**
     * The user’s permissions in bitfield format
     *
     * In order from first to tenth bit, the bits are:
     * - `UPLOAD_VERSION`: `1n << 0n`
     * - `DELETE_VERSION`: `1n << 1n`
     * - `EDIT_DETAILS`: `1n << 2n`
     * - `EDIT_BODY`: `1n << 3n`
     * - `MANAGE_INVITES`: `1n << 4n`
     * - `REMOVE_MEMBER`: `1n << 5n`
     * - `EDIT_MEMBER`: `1n << 6n`
     * - `DELETE_PROJECT`: `1n << 7n`
     * - `VIEW_ANALYTICS`: `1n << 8n`
     * - `VIEW_PAYOUTS`: `1n << 9n`
     */
    permissions?: TeamMemberPermissions;

    /**
     * The split of payouts going to this user. The proportion of payouts they get is their split divided by the sum of the splits of all members.
     */
    payout_split?: number;

    /**
     * The order of the team member.
     */
    ordering?: number;
}>;

export type APITransferTeamOwnershipBody = string;

// ROUTES

/**
 * Route for the following:
 * - GET `/project/${project}/members`
 * @param project The ID or slug of the project.
 */
export function projectTeamMembers(project: APIProjectResolvable): `/project/${string}/members` {
    if (typeof project == "string") {
        return `/project/${project}/members`;
    } else {
        return `/project/${project.id}/members`;
    };
};

/**
 * Route for the following:
 * - GET  `/team/${team}/members`
 * - POST `/team/${team}/members`
 * @param team The ID of the team.
 */
export function teamMembers(team: APITeamResolvable): `/team/${string}/members` {
    if (typeof team == "object") {
        if ("team_id" in team) {
            return `/team/${team.team_id}/members`;
        } else {
            return `/team/${team.team}/members`;
        };
    } else {
        return `/team/${team}/members`;
    };
};

/**
 * Route for the following:
 * - GET `/teams`
 * @param teams The IDs of the teams.
 */
export function teams(teams: APITeamResolvable[]): `/teams?ids=${string}` {
    return `/teams?ids=[${teams.map(t => typeof t == "object" ? "team_id" in t ? `"${t.team_id}"` : `"{t.team}"` : `"${t}"`).join(",")}]`;
};

/**
 * Route for the following:
 * - POST `/team/${team}/join`
 * @param team The ID of the team.
 */
export function teamJoin(team: APITeamResolvable): `/team/${string}/join` {
    if (typeof team == "object") {
        if ("team_id" in team) {
            return `/team/${team.team_id}/join`;
        } else {
            return `/team/${team.team}/join`;
        };
    } else {
        return `/team/${team}/join`;
    };
};

/**
 * Route for the following:
 * - DELETE `/team/${team}/members/${user}`
 * - PATCH  `/team/${team}/members/${user}`
 * @param team The ID of the team.
 * @param user The ID or username of the user.
 */
export function teamMember(team: APITeamResolvable, user: APIUserResolvable): `/team/${string}/members/${string}` {
    let userId = typeof user == "string" ? user : user.id;
    if (typeof team == "object") {
        if ("team_id" in team) {
            return `/team/${team.team_id}/members/${userId}`;
        } else {
            return `/team/${team.team}/members/${userId}`;
        };
    } else {
        return `/team/${team}/members/${userId}`;
    };
};

/**
 * Route for the following:
 * - PATCH `/team/${team}/owner`
 * @param team The ID of the team.
 */
export function teamOwner(team: APITeamResolvable): `/team/${string}/owner` {
    if (typeof team == "object") {
        if ("team_id" in team) {
            return `/team/${team.team_id}/owner`;
        } else {
            return `/team/${team.team}/owner`;
        };
    } else {
        return `/team/${team}/owner`;
    };
};