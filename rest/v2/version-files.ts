// TYPES

export type APIVersionGetFileParmeters = {
    /**
     * The algorithm of the hash.
     */
    algorithm: HashAlgorithm;

    /**
     * Whether to return multiple results when looking for this hash.
     */
    multiple?: boolean;
};

export type APIVersionDeleteFileParameters = {
    /**
     * The algorithm of the hash.
     */
    algorithm: HashAlgorithm;

    /**
     * Version ID to delete the version from, if multiple files of the same hash exist.
     */
    version_id: string;
};

export type APIVersionFileParameters =
    | APIVersionGetFileParmeters
    | APIVersionDeleteFileParameters;

export type APILatestVersionFromHashBody = {
    /**
     * The loaders to filter by.
     */
    loaders: string[];

    /**
     * The game versions to filter by.
     */
    game_versions: string[];
};

export type APIGetVersionsFromHashesBody = {
    /**
     * A list of hashes.
     */
    hashes: string[];

    /**
     * The algorithm of the hash.
     */
    algorithm: HashAlgorithm;
};

export type APILatestVersionsFromHashesBody = {
    /**
     * A list of hashes.
     */
    hashes: string[];

    /**
     * The algorithm of the hash.
     */
    algorithm: HashAlgorithm;

    /**
     * The loaders to filter by.
     */
    loaders: string[];

    /**
     * The game versions to filter by.
     */
    game_versions: string[];
};

// ENUMS

export enum HashAlgorithm {
    Sha1 = "sha1",
    Sha512 = "sha512"
};

// ROUTES

/**
 * Route for the following:
 * - DELETE `/version_file/${hash}`
 * - GET    `/version_file/${hash}`
 * @param hash The hash of the file, considering its byte content, and encoded in hexadecimal.
 * @param options The GET or DELETE options for the version file.
 */
export function versionFile(hash: string, options: APIVersionGetFileParmeters): `/version_file/${string}`;
export function versionFile(hash: string, options: APIVersionDeleteFileParameters): `/version_file/${string}`;
export function versionFile(hash: string, options: APIVersionFileParameters) {
    let params = new URLSearchParams();
    Object.entries(options).forEach(([k, v]) => params.append(k, v));
    // Delete version file
    if ("version_id" in options) {
        return `/version_file/${hash}?${new URLSearchParams(params)}`;
    }
    // Get version file
    else {
        return `/version_file/${hash}?${new URLSearchParams(params)}`;
    };
};

/**
 * Route for the following:
 * - POST `/version_file/${hash}/update`
 * @param hash The hash of the file, considering its byte content, and encoded in hexadecimal.
 * @param algorithm The algorithm of the hash.
 */
export function latestProjectVersionsFromHash(hash: string, algorithm: HashAlgorithm): `/version_file/${string}/update?algorithm=${string}` {
    return `/version_file/${hash}/update?algorithm=${algorithm}`;
};

/**
 * Route for the following:
 * - POST `/version_files`
 */
export function versionsFromHashes(): `/version_files` {
    return `/version_files`;
};

/**
 * Route for the following:
 * - POST `/version_files/update`
 */
export function latestProjectsVersionsFromHashes(): `/version_files/update` {
    return `/version_files/update`;
};