import { APIVersionFile } from "./version-files";

// TYPES

export type APIVersion = {
    /**
     * The name of this version.
     */
    name: string;

    /**
     * The version number. Ideally will follow semantic versioning.
     */
    version_number: string;

    /**
     * The changelog for this version.
     */
    changelog: string | null;

    /**
     * A list of specific versions of projects that this version depends on.
     */
    dependencies: APIVersionDependency[];

    /**
     * A list of versions of Minecraft that this version supports.
     */
    game_versions: string[];

    /**
     * The release channel for this version.
     */
    version_type: VersionType;

    /**
     * The mod loaders that this version supports. In case of resource packs, use “minecraft”.
     */
    loaders: string;

    /**
     * Whether the version is featured or not.
     */
    featured: boolean;

    /**
     * The status of this version.
     */
    status: VersionStatus;

    /**
     * The requested status of this version.
     */
    requested_status: VersionRequestedStatus | null;

    /**
     * The ID of the version, encoded as a base62 string.
     */
    id: string;

    /**
     * The ID of the project this version is for.
     */
    project_id: string;

    /**
     * The ID of the author who published this version.
     */
    author_id: string;

    /**
     * The date this version was published.
     */
    date_published: Date;

    /**
     * The number of times this version has been downloaded.
     */
    downloads: number;

    /**
     * A link to the changelog for this version. Always `null`, only kept for legacy compatibility.
     */
    changelog_url: null;

    /**
     * A list of files available for download for this version.
     */
    files: APIVersionFile[];
};

export type APIVersionDependency = {
    /**
     * The ID of the version that this version depends on.
     */
    version_id: string | null;

    /**
     * The ID of the project that this version depends on.
     */
    project_id: string | null;

    /**
     * The file name of the dependency, mostly used for showing external dependencies on modpacks.
     */
    file_name: string | null;

    /**
     * The type of dependency that this version has.
     */
    dependency_type: DependencyType;
};

// ENUMS

export enum VersionType {
    Release = "release",
    Beta = "beta",
    Alpha = "alpha"
};

export enum VersionStatus {
    Listed = "listed",
    Archived = "archived",
    Draft = "draft",
    Unlisted = "unlisted",
    Scheduled = "scheduled",
    Unknown = "unknown"
};

export enum VersionRequestedStatus {
    Listed = "listed",
    Archived = "archived",
    Draft = "draft",
    Unlisted = "unlisted"
};

export enum DependencyType {
    Required = "required",
    Optional = "optional",
    Incompatible = "incompatible",
    Embedded = "embedded"
};