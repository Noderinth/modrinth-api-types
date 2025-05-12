import { APIProjectResolvable } from "./projects";

// ROUTES

/**
 * Route for the following:
 * - GET `/updates/${project}/forge_updates.json`
 * @param project The ID or slug of the project.
 */
export function forgeUpdatesJSON(project: APIProjectResolvable): `/updates/${string}/forge_updates.json` {
    if (typeof project == "string") {
        return `/updates/${project}/forge_updates.json`;
    } else {
        return `/updates/${project.id}/forge_updates.json`;
    };
};

/**
 * Route for the following:
 * - GET `/statistics`
 */
export function statistics(): `/statistics` {
    return `/statistics`;
};