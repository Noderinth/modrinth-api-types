// TYPES

export type APIVersionFile = {
    /**
     * A map of hashes of the file.
     * 
     * The key is the hashing algorithm, and the value is the string version of the hash.
     */
    hashes: APIVersionFileHashes;

    /**
     * A direct link to the file.
     */
    url: string;

    /**
     * The name of the file.
     */
    filename: string;

    /**
     * Whether this file is the primary one for its version.
     * 
     * Only a maximum of one file per version will have this set to true. If there are not any primary files, it can be inferred that the first file is the primary one.
     */
    primary: boolean;

    /**
     * The size of the file in bytes.
     */
    size: number;

    /**
     * The type of the additional file, used mainly for adding resource packs to datapacks.
     */
    file_type: VersionFileType | null;
};

export type APIVersionFileHashes = {
    /**
     * The sha512 hash string for this file.
     */
    sha512: string;

    /**
     * The sha1 hash string for this file.
     */
    sha1: string;
};

// ENUMS

export enum VersionFileType {
    RequiredResourcePack = "required-resource-pack",
    OptionalResourcePack = "optional-resource-pack"
};