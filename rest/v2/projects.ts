import {
    ImageExtension,
    NumberRange,
    RequireAtLeastOne
} from "../../globals";
import {
    APIProject,
    APIProjectDonationURL,
    APIVersion,
    ProjectClientSide,
    ProjectRequestedStatus,
    ProjectServerSide,
    ProjectStatus,
    ProjectType
} from "../../payloads/v2";

// TYPES

export type APIProjectResolvable =
    | APIProject
    | string;

export type APIProjectSearchParameters = {
    /**
     * The query to search for.
     */
    query?: string;

    /**
     * Facets are an essential concept for understanding how to filter our results.
     * 
     * In order to use facets, you need a value to filter by, as well as an operation to perform on this value.
     * Join together a `type`, `operation` and `value` and you have your string.
     * 
     * **Examples:**
     * - `categories` `=` `adventure`
     * - `versions` `!=` `1.20.1`
     * 
     * You then join these strings together in arrays to signal `AND` and `OR` operators.
     * 
     * -----
     * **OR:**
     * 
     * All elements in a single array are considered to be joined by OR statements. For example:
     * 
     * `[["versions=1.16.5","versions=1.17.1"]]` translates to Projects that support 1.16.5 `OR` 1.17.1.
     * 
     * **AND:**
     * 
     * Separate arrays are considered to be joined by AND statements. For example:
     * 
     * `[["versions=1.16.5"],["project_type=modpack"]]` translates to Projects that support 1.16.5 `AND` are modpacks.
     */
    facets?: string;

    /**
     * The sorting method used for sorting search results.
     * 
     * The default is `relevance`.
     */
    index?: ProjectSearchParametersIndex;

    /**
     * The offset into the search. Skips this number of results.
     */
    offset?: number;

    /**
     * The number of results returned by the search.
     * 
     * The default is `10`.
     */
    limit?: NumberRange<1, 101>;
};

export type APIProjectAddGalleryImageParameters = {
    /**
     * Image extension.
     */
    ext: ImageExtension;

    /**
     * Whether an image is featured.
     */
    featured: boolean;

    /**
     * Title of the image.
     */
    title?: string;

    /**
     * Description of the image.
     */
    description?: string;

    /**
     * Ordering of the image.
     */
    ordering?: number;
};

export type APIProjectEditGalleryImageParameters = {
    /**
     * URL link of the image to edit.
     */
    url: string;
} & RequireAtLeastOne<{
    /**
     * Whether an image is featured.
     */
    featured: boolean;

    /**
     * Title of the image.
     */
    title: string;

    /**
     * Description of the image.
     */
    description: string;

    /**
     * Ordering of the image.
     */
    ordering: number;
}>;

export type APIProjectDeleteGalleryImageParameters = {
    /**
     * URL link of the gallery image to delete.
     */
    url: string;
};

export type APIProjectGalleryImageParameters =
    | APIProjectAddGalleryImageParameters
    | APIProjectDeleteGalleryImageParameters
    | APIProjectEditGalleryImageParameters;

export type APIProjectEditBody = RequireAtLeastOne<{
    /**
     * The slug of a project, used for vanity URLs.
     * 
     * Uses Regular Expression:
     * ```
     * /^[\w!@$()`.+,"\-']{3,64}$/
     * ```
     */
    slug?: string;

    /**
     * The title or name of the project.
     */
    title?: string;

    /**
     * A short description of the project.
     */
    description?: string;

    /**
     * A list of the categories that the project has.
     */
    categories?: string[];

    /**
     * The client side support of the project.
     */
    client_side?: ProjectClientSide;

    /**
     * The server side support of the project.
     */
    server_side?: ProjectServerSide;

    /**
     * A long form description of the project.
     */
    body?: string;

    /**
     * The status of the project.
     */
    status?: ProjectStatus;

    /**
     * The requested status when submitting for review or scheduling the project for release.
     */
    requested_status?: ProjectRequestedStatus | null;

    /**
     * A list of categories which are searchable but non-primary.
     */
    additional_categories?: string[];

    /**
     * An optional link to where to submit bugs or issues with the project.
     */
    issues_url?: string | null;

    /**
     * An optional link to the source code of the project.
     */
    source_url?: string | null;

    /**
     * An optional link to the project’s wiki page or other relevant information.
     */
    wiki_url?: string | null;

    /**
     * An optional invite link to the project’s Discord server.
     */
    discord_url?: string | null;

    /**
     * A list of donation links for the project.
     */
    donation_urls?: APIProjectDonationURL[];

    /**
     * The SPDX license ID for the project.
     */
    license_id?: string;

    /**
     * The URL to this license.
     */
    license_url?: string | null;

    /**
     * The title of the moderator's message for the project.
     */
    moderation_message?: string | null;

    /**
     * The body of the moderator's message for the project.
     */
    moderation_message_body?: string | null;
}>;

export type APIProjectsEditBody = RequireAtLeastOne<{
    /**
     * Set all of the categories to the categories specified here.
     */
    categories?: string[];

    /**
     * Add all of the categories specified here.
     */
    add_categories?: string[];

    /**
     * Remove all of the categories specified here.
     */
    remove_categories?: string[];

    /**
     * Set all of the additional categories to the categories specified here.
     */
    additional_categories?: string[];

    /**
     * Add all of the additional categories specified here.
     */
    add_additional_categories?: string[];

    /**
     * Remove all of the additional categories specified here.
     */
    remove_additional_categories?: string[];

    /**
     * Set all of the donation links to the donation links specified here.
     */
    donation_urls?: APIProjectDonationURL[];

    /**
     * Add all of the donation links specified here.
     */
    add_donation_urls?: APIProjectDonationURL[];

    /**
     * Remove all of the donation links specified here.
     */
    remove_donation_urls?: APIProjectDonationURL[];

    /**
     * An optional link to where to submit bugs or issues with the project.
     */
    issues_url?: string | null;

    /**
     * An optional link to the source code of the project.
     */
    source_url?: string | null;

    /**
     * An optional link to the project’s wiki page or other relevant information.
     */
    wiki_url?: string | null;

    /**
     * An optional invite link to the project’s Discord server.
     */
    discord_url?: string | null;
}>;

export type APIProjectCreateBody = {
    /**
     * The slug of a project, used for vanity URLs.
     * 
     * Uses Regular Expression:
     * ```
     * /^[\w!@$()`.+,"\-']{3,64}$/
     * ```
     */
    slug?: string;

    /**
     * The title or name of the project.
     */
    title?: string;

    /**
     * A short description of the project.
     */
    description?: string;

    /**
     * A list of the categories that the project has.
     */
    categories?: string[];

    /**
     * The client side support of the project.
     */
    client_side?: ProjectClientSide;

    /**
     * The server side support of the project.
     */
    server_side?: ProjectServerSide;

    /**
     * A long form description of the project.
     */
    body?: string;

    /**
     * The status of the project.
     */
    status?: ProjectStatus;

    /**
     * The requested status when submitting for review or scheduling the project for release.
     */
    requested_status?: ProjectRequestedStatus | null;

    /**
     * A list of categories which are searchable but non-primary.
     */
    additional_categories?: string[];

    /**
     * An optional link to where to submit bugs or issues with the project.
     */
    issues_url?: string | null;

    /**
     * An optional link to the source code of the project.
     */
    source_url?: string | null;

    /**
     * An optional link to the project’s wiki page or other relevant information.
     */
    wiki_url?: string | null;

    /**
     * An optional invite link to the project’s Discord server.
     */
    discord_url?: string | null;

    /**
     * A list of donation links for the project.
     */
    donation_urls?: APIProjectDonationURL[];

    /**
     * The SPDX license ID for the project.
     */
    license_id?: string;

    /**
     * The URL to this license.
     */
    license_url?: string | null;

    /**
     * The project type of the project.
     */
    project_type: ProjectType;

    /**
     * A list of initial versions to upload with the created project.
     * @deprecated Please upload version files after initial upload.
     */
    initial_versions: APIVersion[];

    /**
     * Whether the project should be saved as a draft instead of being sent to moderation for review.
     * @deprecated This is required to always be `true`.
     */
    is_draft: true;

    /**
     * Gallery images to be uploaded with the created project.
     * @deprecated Please upload gallery images after initial upload.
     */
    gallery_items: APIProjectAddGalleryImageParameters;
};

export type APIProjectEditIconBody = string;

export type APIProjectAddGalleryImageBody = string;

export type APIProjectScheduleBody = {
    /**
     * The date and time to schedule the project.
     */
    time: Date;

    /**
     * The requested status when scheduling the project for release.
     */
    requested_status: ProjectRequestedStatus;
};

// ENUMS

export enum ProjectSearchParametersIndex {
    Relevance = "relevance",
    Downloads = "downloads",
    Follows = "follows",
    Newest = "newest",
    Updated = "updated"
};

// ROUTES

/**
 * Route for the following:
 * - GET `/search`
 * @param options Options to filter the search.
 */
export function searchProjects(options: APIProjectSearchParameters): `/search?${string}`;
export function searchProjects(): `/search`;
export function searchProjects(options: string): `/search?query=${string}`;
export function searchProjects(options?: APIProjectSearchParameters | string) {
    // If no options provided
    if (!options) {
        return `/search`;
    }
    // If options is a string (query only search)
    else if (typeof options == "string") {
        return `/search?query=${options}`;
    }
    // Else parse options object
    else {
        let params = new URLSearchParams();

        // Add query if available
        if (options.query) {
            params.append("query", options.query);
        };

        // Add facets if available
        if (options.facets) {
            params.append("facets", options.facets);
        };

        // Add index if available
        if (options.index) {
            params.append("index", options.index);
        };

        // Add offset if available
        if (options.offset) {
            params.append("offset", options.offset.toString());
        };

        // Add limit if available
        if (options.limit) {
            params.append("limit", options.limit.toString());
        };

        return `/search?${params}`;
    };
};

/**
 * Route for the following:
 * - DELETE `/project/${project}`
 * - GET    `/project/${project}`
 * - PATCH  `/project/${project}`
 * @param project The ID or slug of the project.
 */
export function project(project: APIProjectResolvable): `/project/${string}` {
    if (typeof project == "string") {
        return `/project/${project}`;
    } else {
        return `/project/${project.id}`;
    };
};

/**
 * Route for the following:
 * - GET   `/projects`
 * - PATCH `/projects`
 * @param projects The IDs or slugs of the projects.
 */
export function projects(projects: APIProjectResolvable[]): `/projects?ids=[${string}]` {
    return `/projects?ids=[${projects.map(p => typeof p == "string" ? `"${p}"` : `"${p.id}"`).join(",")}]`;
};

/**
 * Route for the following:
 * - GET `/projects_random`
 * @param count Amount of random projects between 1 and 100.
 */
export function randomProjects(count: number): `/projects_random?count=${number}` {
    return `/projects_random?count=${count}`;
};

/**
 * Route for the following:
 * - POST `/project`
 */
export function projectCreate(): `/project` {
    return `/project`;
};

/**
 * Route for the following:
 * - DELETE `/project/${project}/icon`
 * - PATCH  `/project/${project}/icon`
 * @param project The ID or slug of the project.
 */
export function projectIcon(project: APIProjectResolvable): `/project/${string}/icon` {
    if (typeof project == "string") {
        return `/project/${project}/icon`;
    } else {
        return `/project/${project.id}/icon`;
    };
};

/**
 * Route for the following:
 * - GET `/project/${project}/check`
 * @param project The ID or slug of the project.
 */
export function projectValidity(project: APIProjectResolvable): `/project/${string}/check` {
    if (typeof project == "string") {
        return `/project/${project}/check`;
    } else {
        return `/project/${project.id}/check`;
    };
};

/**
 * Route for the following:
 * - DELETE `/project/${project}/gallery`
 * - PATCH  `/project/${project}/gallery`
 * - POST   `/project/${project}/gallery`
 * @param project The ID or slug of the project.
 */
export function projectGallery(project: APIProjectResolvable, options: APIProjectAddGalleryImageParameters): `/project/${string}/gallery?${string}`;
export function projectGallery(project: APIProjectResolvable, options: APIProjectEditGalleryImageParameters): `/project/${string}/gallery?${string}`;
export function projectGallery(project: APIProjectResolvable, options: APIProjectDeleteGalleryImageParameters): `/project/${string}/gallery?url=${string}`;
export function projectGallery(project: APIProjectResolvable, options: APIProjectGalleryImageParameters) {
    let projectId = typeof project == "string" ? project : project.id;
    let params = new URLSearchParams();
    Object.entries(options).forEach(([k, v]) => params.append(k, v.toString()));
    // Add gallery image
    if ("featured" in options && "url" in options == false) {
        return `/project/${projectId}/gallery?${params}`;
    }
    // Delete gallery image
    else if ("url" in options && !("featured" in options || "title" in options || "description" in options || "ordering" in options)) {
        return `/project/${projectId}/gallery?${params}`;
    }
    // Edit gallery image
    else {
        return `/project/${projectId}/gallery?${params}`;
    };
};

/**
 * Route for the following:
 * - GET `/project/${project}/dependencies`
 * @param project The ID or slug of the project.
 */
export function projectDependencies(project: APIProjectResolvable): `/project/${string}/dependencies` {
    if (typeof project == "string") {
        return `/project/${project}/dependencies`;
    } else {
        return `/project/${project.id}/dependencies`;
    };
};

/**
 * Route for the following:
 * - DELETE `/project/${project}/follow`
 * - POST   `/project/${project}/follow`
 * @param project The ID or slug of the project.
 */
export function projectFollow(project: APIProjectResolvable): `/project/${string}/follow` {
    if (typeof project == "string") {
        return `/project/${project}/follow`;
    } else {
        return `/project/${project.id}/follow`;
    };
};

/**
 * Route for the following:
 * - POST   `/project/${project}/schedule`
 * @param project The ID or slug of the project.
 */
export function projectSchedule(project: APIProjectResolvable): `/project/${string}/schedule` {
    if (typeof project == "string") {
        return `/project/${project}/schedule`;
    } else {
        return `/project/${project.id}/schedule`;
    };
};