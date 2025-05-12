import { NumberRange } from "../../globals";
import { APIVersion } from "./versions";

// INTERFACES

export interface APIBaseProject {
    /**
     * The slug of a project, used for vanity URLs.
     * 
     * Uses Regular Expression:
     * ```
     * /^[\w!@$()`.+,"\-']{3,64}$/
     * ```
     */
    slug: string;

    /**
     * The title or name of the project.
     */
    title: string;

    /**
     * A short description of the project.
     */
    description: string;

    /**
     * A list of the categories that the project has.
     */
    categories: string[];

    /**
     * The client side support of the project.
     */
    client_side: ProjectClientSide;

    /**
     * The server side support of the project.
     */
    server_side: ProjectServerSide;

    /**
     * The type of the project.
     */
    project_type: ProjectType;

    /**
     * The total number of downloads of the project.
     */
    downloads: number;

    /**
     * The URL of the project’s icon.
     */
    icon_url: string | null;

    /**
     * The RGB color of the project, automatically generated from the project icon.
     */
    color: number | null;

    /**
     * The ID of the moderation thread associated with this project.
     */
    thread_id: string;

    /**
     * The monetization status of the project.
     */
    monetization_status: ProjectMonetizationStatus;

    /**
     * The ID of the project, encoded as a base62 string.
     */
    id: string;

    /**
     * The ID of the team that has ownership of this project.
     */
    team: string;

    /**
     * The ID of the organization that has ownership of this project.
     */
    organization: string | null;

    /**
     * A long form description of the project.
     */
    body: string;

    /**
     * The link to the long description of the project. Always `null`, only kept for legacy compatibility.
     */
    body_url: null;

    /**
     * A message that a moderator sent regarding the project.
     */
    moderator_message: APIProjectModeratorMessage;

    /**
     * The date the project was published.
     */
    published: Date;

    /**
     * The date the project was last updated.
     */
    updated: Date;

    /**
     * The date the project’s status was set to an approved status.
     */
    approved: Date | null;

    /**
     * The date the project’s status was submitted to moderators for review.
     */
    queued: Date | null;

    /**
     * The total number of users following the project.
     */
    followers: number;

    /**
     * The license of the project.
     */
    license: APIProjectLicense;

    /**
     * A list of the version IDs of the project.
     * 
     * This will never be empty unless `status` is `draft`.
     */
    versions: string[];

    /**
     * A list of all of the game versions supported by the project.
     */
    game_versions: string[];

    /**
     * A list of all of the loaders supported by the project.
     */
    loaders: string[];

    /**
     * A list of images that have been uploaded to the project’s gallery.
     */
    gallery: APIProjectGalleryItem[];

    /**
     * The status of the project.
     */
    status: ProjectStatus;

    /**
     * The requested status when submitting for review or scheduling the project for release.
     */
    requested_status: ProjectRequestedStatus | null;

    /**
     * A list of categories which are searchable but non-primary.
     */
    additional_categories: string[];

    /**
     * An optional link to where to submit bugs or issues with the project.
     */
    issues_url: string | null;

    /**
     * An optional link to the source code of the project.
     */
    source_url: string | null;

    /**
     * An optional link to the project’s wiki page or other relevant information.
     */
    wiki_url: string | null;

    /**
     * An optional invite link to the project’s Discord server.
     */
    discord_url: string | null;

    /**
     * A list of donation links for the project.
     */
    donation_urls: APIProjectDonationURL[];
};

export interface APIDataPackProject extends APIBaseProject {
    project_type: ProjectType.DataPack;
};

export interface APIModProject extends APIBaseProject {
    project_type: ProjectType.Mod;
};

export interface APIModpackProject extends APIBaseProject {
    project_type: ProjectType.Modpack;
};

export interface APIPluginProject extends APIBaseProject {
    project_type: ProjectType.Plugin;
    client_side: ProjectClientSide.Unsupported;
};

export interface APIResourcePackProject extends APIBaseProject {
    project_type: ProjectType.ResourcePack;
    server_side: ProjectServerSide.Unsupported;
};

export interface APIShaderProject extends APIBaseProject {
    project_type: ProjectType.Shader;
    server_side: ProjectServerSide.Unsupported;
};

// TYPES

export type APIProject =
    | APIDataPackProject
    | APIModProject
    | APIModpackProject
    | APIPluginProject
    | APIResourcePackProject
    | APIShaderProject;

export type APIProjectModeratorMessage = {
    /**
     * The message that a moderator has left for the project.
     */
    message: string;

    /**
     * The longer body of the message that a moderator has left for the project.
     */
    body: string | null;
};

export type APIProjectLicense = {
    /**
     * The SPDX license ID of a project.
     */
    id: string;

    /**
     * The long name of a license.
     */
    name: string;

    /**
     * The URL to this license.
     */
    url: string | null;
};

export type APIProjectGalleryItem = {
    /**
     * The URL of the gallery image.
     */
    url: string;

    /**
     * Whether the image is featured in the gallery.
     */
    featured: boolean;

    /**
     * The title of the gallery image.
     */
    title: string | null;

    /**
     * The description of the gallery image.
     */
    description: string | null;

    /**
     * The date and time the gallery image was created.
     */
    created: Date;

    /**
     * The order of the gallery image. Gallery images are sorted by this field and then alphabetically by title.
     */
    ordering: number | null;
};

export type APIProjectDonationURL = {
    /**
     * The ID of the donation platform.
     */
    id: string;

    /**
     * The donation platform this link is to.
     */
    platform: string;

    /**
     * The URL of the donation platform and user.
     */
    url: string;
};

export type APIProjectSearchResponse = {
    /**
     * The list of results.
     */
    hits: Omit<APIProject, "id"> & {
        /**
         * The ID of the project, encoded as a base62 string.
         */
        project_id: string;
    };

    /**
     * The number of results that were skipped by the query.
     */
    offset: number;

    /**
     * The number of results that were returned by the query.
     */
    limit: NumberRange<1, 101>;

    /**
     * The total number of results that match the query.
     */
    total_hits: number;
};

export type APIProjectDependenciesResponse = {
    /**
     * Projects that the project depends upon.
     */
    projects: APIProject[];

    /**
     * Versions that the project depends upon.
     */
    versions: APIVersion[];
};

export type APIProjectValidityResponse = {
    /**
     * The validated ID.
     */
    id: string;
};

// ENUMS

export enum ProjectType {
    DataPack = "datapack",
    Mod = "mod",
    Modpack = "modpack",
    Plugin = "plugin",
    ResourcePack = "resourcepack",
    Shader = "shader"
};

export enum ProjectClientSide {
    Required = "required",
    Optional = "optional",
    Unsupported = "unsupported",
    Unknown = "unknown"
};

export enum ProjectServerSide {
    Required = "required",
    Optional = "optional",
    Unsupported = "unsupported",
    Unknown = "unknown"
};

export enum ProjectMonetizationStatus {
    Monetized = "monetized",
    Demonetized = "demonetized",
    ForceDemonetized = "force-demonetized"
};

export enum ProjectStatus {
    Approved = "approved",
    Archived = "archived",
    Rejected = "rejected",
    Draft = "draft",
    Unlisted = "unlisted",
    Processing = "processing",
    Witheld = "withheld",
    Scheduled = "scheduled",
    Private = "private",
    Unknown = "unknown"
};

export enum ProjectRequestedStatus {
    Approved = "approved",
    Archived = "archived",
    Unlisted = "unlisted",
    Private = "private",
    Draft = "draft"
};