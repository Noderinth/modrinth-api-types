// TYPES

export type APIUser = {
    /**
     * The user’s username.
     */
    username: string;

    /**
     * The user’s display name.
     */
    name: string | null;

    /**
     * The user’s email.
     * 
     * @ Only displayed if requesting your own account.
     * @ Requires `USER_READ_EMAIL` PAT scope.
     */
    email: string | null;

    /**
     * A description of the user.
     */
    bio: string;

    /**
     * Various data relating to the user’s payouts status.
     * 
     * @ Only displayed if requesting your own account.
     */
    payout_data: APIUserPayoutData | null;

    /**
     * The user’s ID.
     */
    id: string;

    /**
     * The user’s avatar url.
     */
    avatar_url: string;

    /**
     * The time at which the user was created.
     */
    created: Date;

    /**
     * The user’s role.
     */
    role: UserRole;

    /**
     * Any badges applicable to this user.
     *
     * In order from first to seventh bit, the current bits are:
     * - (unused): `1n << 0n`
     * - `EARLY_MODPACK_ADOPTER`: `1n << 1n`
     * - `EARLY_RESPACK_ADOPTER`: `1n << 2n`
     * - `EARLY_PLUGIN_ADOPTER`: `1n << 3n`
     * - `ALPHA_TESTER`: `1n << 4n`
     * - `CONTRIBUTOR`: `1n << 5n`
     * - `TRANSLATOR`: `1n << 6n`
     * 
     * @ These are currently unused and undisplayed, and as such are subject to change.
     */
    badges: number;

    /**
     * A list of authentication providers you have signed up for.
     * 
     * @ Only displayed if requesting your own account.
     */
    auth_providers: string[] | null;

    /**
     * Whether your email is verified.
     * 
     * @ Only displayed if requesting your own account.
     */
    email_verified: boolean | null;

    /**
     * Whether you have a password associated with your account.
     * 
     * @ Only displayed if requesting your own account.
     */
    has_password: boolean | null;

    /**
     * Whether you have TOTP two-factor authentication connected to your account.
     * 
     * @ Only displayed if requesting your own account.
     */
    has_totp: boolean | null;

    /**
     * @deprecated
     * This is no longer public for security reasons and is always `null`.
     */
    github_id: null;
};

export type APIUserPayoutData = {
    /**
     * The payout balance available for the user to withdraw. 
     * 
     * @ You cannot modify this in a `PATCH` request.
     */
    balance: number;

    /**
     * The wallet that the user has selected.
     */
    payout_wallet: UserPayoutWallet;

    /**
     * The type of the user’s wallet.
     */
    payout_wallet_type: UserPayoutWalletType;

    /**
     * The user’s payout address.
     */
    payout_address: string;
};

export type APIUserPayoutHistory = {
    /**
     * The all-time balance accrued by this user in USD.
     */
    all_time: number;

    /**
     * The amount in USD made by the user in the previous 30 days.
     */
    last_month: number;

    /**
     * A history of all of the user’s past transactions.
     */
    payouts: APIUserPayout[];
};

export type APIUserPayout = {
    /**
     * The date of this transaction.
     */
    created: Date;

    /**
     * The amount of this transaction in USD.
     */
    amount: number;

    /**
     * The status of this transaction.
     */
    status: string;
};

// ENUMS

export enum UserRole {
    Admin = "admin",
    Moderator = "moderator",
    Developer = "developer"
};

export enum UserPayoutWallet {
    PayPal = "paypal",
    Venmo = "venmo"
};

export enum UserPayoutWalletType {
    Email = "email",
    Phone = "phone",
    UserHandle = "user_handle"
};