// TYPES

export type APICategoryTag = {
    /**
     * The SVG icon of a category.
     */
    icon: string;

    /**
     * The name of the category.
     */
    name: string;

    /**
     * The project type this category is applicable to.
     */
    project_type: string;

    /**
     * The header under which the category should go.
     */
    header: string;
};

export type APILoaderTag = {
    /**
     * The SVG icon of a loader.
     */
    icon: string;

    /**
     * The name of the loader.
     */
    name: string;

    /**
     * The project types that this loader is applicable to.
     */
    supported_project_types: string[];
};

export type APIGameVersionTag = {
    /**
     * The name/number of the game version.
     */
    version: string;

    /**
     * The type of the game version.
     */
    version_type: GameVersionType;

    /**
     * The date of the game version release.
     */
    date: Date;

    /**
     * Whether or not this is a major version, used for Featured Versions.
     */
    major: boolean;
};

export type APILicense = {
    /**
     * The short identifier of the license.
     */
    short: string;

    /**
     * The full name of the license.
     */
    name: string;
};

export type APILicenseData = {
    /**
     * The title of the license.
     */
    title: string;

    /**
     * The body of the license.
     */
    body: string;
};

export type APIDonationPlatformTag = {
    /**
     * The short identifier of the donation platform.
     */
    short: string;

    /**
     * The full name of the donation platform.
     */
    name: string;
};

export type APIReportTypes = string[];

export type APIProjectTypes = string[];

export type APISideTypes = string[];

// ENUMS

export enum GameVersionType {
    Release = "release",
    Snapshot = "snapshot",
    Alpha = "alpha",
    Beta = "beta",
};