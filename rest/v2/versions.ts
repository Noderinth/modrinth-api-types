import { RequireAtLeastOne } from "../../globals";
import {
    APIVersion,
    DependencyType,
    VersionFileType,
    VersionRequestedStatus,
    VersionStatus,
    VersionType
} from "../../payloads/v2";
import { APIProjectResolvable } from "./projects";
import { HashAlgorithm } from "./version-files";

// TYPES

export type APIVersionResolvable =
    | APIVersion
    | string;

export type APIProjectListParameters = {
    /**
     * The types of loaders to filter for.
     */
    loaders?: string;

    /**
     * The game versions to filter for.
     */
    game_versions?: string;

    /**
     * Allows to filter for featured or non-featured versions only.
     */
    featured?: boolean;
};

export type APIVersionEditBody = RequireAtLeastOne<{
    /**
     * The name of this version.
     */
    name?: string;

    /**
     * The version number. Ideally will follow semantic versioning.
     */
    version_number?: string;

    /**
     * The changelog for this version.
     */
    changelog?: string;

    /**
     * A list of specific versions of projects that this version depends on.
     */
    dependencies?: APIVersionEditDependency[];

    /**
     * A list of versions of Minecraft that this version supports.
     */
    game_versions?: string[];

    /**
     * The release channel for this version.
     */
    version_type?: VersionType;

    /**
     * The mod loaders that this version supports.
     */
    loaders?: string[];

    /**
     * Whether the version is featured or not.
     */
    featured?: boolean;

    /**
     * The status of this version.
     */
    status?: VersionStatus;

    /**
     * The requested status of this version.
     */
    requested_status?: VersionRequestedStatus;

    /**
     * The hash format and the hash of the new primary file.
     */
    primary_file?: string[];

    /**
     * A list of file_types to edit.
     */
    file_types?: APIVersionFileTypesBody[];
}>;

export type APIVersionFileTypesBody = {
    /**
     * The hash algorithm of the hash specified in the hash field.
     */
    algorithm: HashAlgorithm;

    /**
     * The hash of the file you’re editing.
     */
    hash: string;

    /**
     * The hash algorithm of the file you’re editing.
     */
    file_type: VersionFileType;
};

export type APIVersionEditDependency = {
    /**
     * The ID of the version that this version depends on.
     */
    version_id?: string | null;

    /**
     * The ID of the project that this version depends on.
     */
    project_id?: string | null;

    /**
     * The file name of the dependency, mostly used for showing external dependencies on modpacks.
     */
    file_name?: string | null;

    /**
     * The type of dependency that this version has.
     */
    dependency_type: DependencyType;
};

// ROUTES

/**
 * Route for the following:
 * - GET `/project/${project}/version`
 * @param project The ID or slug of the project.
 * @param options The options to filter for.
 */
export function projectVersions(project: APIProjectResolvable, options: APIProjectListParameters): `/project/${string}/version?${string}`;
export function projectVersions(project: APIProjectResolvable): `/project/${string}/version`;
export function projectVersions(project: APIProjectResolvable, options?: APIProjectListParameters) {
    let projectId = typeof project == "string" ? project : project.id;
    if (options) {
        let params = new URLSearchParams();
        Object.entries(options).forEach(([k, v]) => params.append(k, v.toString()));
        return `/project/${projectId}/version?${new URLSearchParams(params)}`;
    } else {
        return `/project/${projectId}/version`;
    };
};

/**
 * Route for the following:
 * - DELETE `/version/${version}`
 * - GET    `/version/${version}`
 * - PATCH  `/version/${version}`
 * @param version The ID of the version.
 */
export function version(version: APIVersionResolvable): `/version/${string}` {
    if (typeof version == "string") {
        return `/version/${version}`;
    } else {
        return `/version/${version.id}`;
    };
};

/**
 * Route for the following:
 * - GET `/project/${project}/version/${version}`
 * @param project The ID of the project.
 * @param version The ID of the version.
 */
export function projectVersion(project: APIProjectResolvable, version: APIVersionResolvable): `/project/${string}/version/${string}` {
    let projectId = typeof project == "string" ? project : project.id;
    if (typeof version == "string") {
        return `/project/${projectId}/version/${version}`;
    } else {
        return `/project/${projectId}/version/${version.id}`;
    };
};

/**
 * Route for the following:
 * - POST `/version`
 */
export function versionCreate(): `/version` {
    return `/version`;
};

/**
 * Route for the following:
 * - POST `/version/${version}/schedule`
 * @param version The ID of the version.
 */
export function versionSchedule(version: APIVersionResolvable): `/version/${string}/schedule` {
    if (typeof version == "string") {
        return `/version/${version}/schedule`;
    } else {
        return `/version/${version.id}/schedule`;
    };
};

/**
 * Route for the following:
 * - GET `/versions`
 * @param versions The IDs of the versions.
 */
export function versions(versions: APIVersionResolvable[]): `/versions?ids=[${string}]` {
    return `/versions?ids=[${versions.map(v => typeof v == "string" ? `"${v}"` : `"${v.id}"`)}]`;
};

/**
 * Route for the following:
 * - POST `/version/${version}/file`
 * @param version The ID of the version.
 */
export function versionAddFiles(version: APIVersionResolvable): `/version/${string}/file` {
    if (typeof version == "string") {
        return `/version/${version}/file`;
    } else {
        return `/version/${version.id}/file`;
    };
};