import {
    NumberRange,
    RequireAtLeastOne
} from "../../globals";
import {
    APIReport,
    APIThread,
    APIThreadMessage,
    ProjectStatus,
    ReportItemType,
    ThreadMessageBodyType
} from "../../payloads/v2";

// TYPES

export type APIReportResolvable =
    | APIReport
    | string;

export type APIThreadResolvable =
    | APIThread
    | string;

export type APIThreadMessageResolvable =
    | APIThreadMessage
    | string;

export type APIReportBody = {
    /**
     * The type of the report being sent.
     */
    report_type: string;

    /**
     * The ID of the item (project, version, or user) being reported.
     */
    item_id: string;

    /**
     * The type of the item being reported.
     */
    item_type: ReportItemType;

    /**
     * The extended explanation of the report.
     */
    body: string;
};

export type APIReportEditBody = RequireAtLeastOne<{
    /**
     * The contents of the report.
     */
    body?: string;

    /**
     * Whether the thread should be closed.
     */
    closed?: boolean;
}>;

export type APIReportSendMessageBody =
    | APIReportSendMessageStatusChangeBody
    | APIReportSendMessageTextBody;

// INTERFACES

export interface APIReportSendMessageBodyBase {
    /**
     * The type of message.
     */
    type: ThreadMessageBodyType;
};

export interface APIReportSendMessageTextBody extends APIReportSendMessageBodyBase {
    /**
     * The actual message text.
     */
    body: string;

    /**
     * Whether the message is only visible to moderators.
     */
    private: boolean;

    /**
     * The ID of the message being replied to by this message.
     */
    replying_to: string | null;
};

export interface APIReportSendMessageStatusChangeBody {
    /**
     * The old status of the project.
     */
    old_status: ProjectStatus;

    /**
     * The new status of the project.
     */
    new_status: ProjectStatus;
};

// ROUTES

/**
 * Route for the following:
 * - GET  `/report`
 * @param count Amount of reports to show between 1 and 100.
 */
export function openReports(count: NumberRange<1, 101>): `/report?count=${number}`;
export function openReports(): `/report`;
export function openReports(count?: NumberRange<1, 101>) {
    if (count) {
        return `/report?count=${count}`;
    } else {
        return `/report`;
    };
};

/**
 * Route for the following:
 * - GET   `/report/${report}`
 * - PATCH `/report/${report}`
 * - POST  `/report`
 * @param report The ID of the report.
 */
export function report(report: APIReportResolvable): `/report/${string}`;
export function report(): `/report`;
export function report(report?: APIReportResolvable) {
    if (report) {
        if (typeof report == "string") {
            return `/report/${report}`;
        } else {
            return `/report/${report.id}`;
        };
    } else {
        return `/report`;
    };
};

/**
 * Route for the following:
 * - GET `/reports`
 * @param reports The IDs of the reports.
 */
export function reports(reports: APIReportResolvable[]): `/reports?ids=[${string}]` {
    return `/reports?ids=[${reports.map(r => typeof r == "string" ? `"${r}"` : `"${r.id}"`)}]`;
};

/**
 * Route for the following:
 * - GET  `/thread/${thread}`
 * - POST `/thread/${thread}`
 * @param thread The ID of the thread.
 */
export function thread(thread: APIThreadResolvable): `/thread/${string}` {
    if (typeof thread == "string") {
        return `/thread/${thread}`;
    } else {
        return `/thread/${thread.id}`;
    };
};

/**
 * Route for the following:
 * - GET `/threads`
 * @param threads The IDs of the threads.
 */
export function threads(threads: APIThreadResolvable[]): `/threads?ids=[${string}]` {
    return `/threads?ids=[${threads.map(t => typeof t == "string" ? `"${t}"` : `"${t.id}"`)}]`;
};

/**
 * Route for the following:
 * - DELETE `/message/${messsage}`
 * @param message The ID of the message.
 */
export function threadMessage(message: APIThreadMessageResolvable): `/message/${string}` {
    if (typeof message == "string") {
        return `/message/${message}`;
    } else {
        return `/message/${message.id}`;
    };
};