// TYPES

/**
 * Internal function for NumberRange.
 * @private
 */
export type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc['length']]>;

/**
 * Creates a restricted Number type between 2 specified values
 * @param F Lowest value (inclusive)
 * @param T Highest value (exclusive)
 * @returns list of valid integers, starting with the value of F (inclusive) and ending with the value of T (exclusive)
 */
export type NumberRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

/**
 * Creates a type from an object that requires at least 1 key to be present.
 * @param T The type object.
 */
export type RequireAtLeastOne<T> = {
    [K in keyof T]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>>;
}[keyof T];

// ENUMS

export enum ImageExtension {
    PNG = "png",
    JPG = "jpg",
    JPEG = "jpeg",
    BMP = "bmp",
    GIF = "gif",
    WEBP = "webp",
    SVG = "svg",
    SVGZ = "svgz",
    RGB = "rgb"
};