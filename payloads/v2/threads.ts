import { ProjectStatus } from "./projects";
import { APIUser } from "./users";

// INTERFACES

export interface APIThreadMessageBodyBase {
    /**
     * The type of message.
     */
    type: ThreadMessageBodyType;
};

export interface APIThreadMessageBodyThreadClosure extends APIThreadMessageBodyBase {
    type: ThreadMessageBodyType.ThreadClosure;
};

export interface APIThreadMessageBodyDeleted extends APIThreadMessageBodyBase {
    type: ThreadMessageBodyType.Deleted;
};

export interface APIThreadMessageBodyText extends APIThreadMessageBodyBase {
    type: ThreadMessageBodyType.Text;
    /**
     * The actual message text.
     * 
     * Only present for `text` message type.
     */
    body: string;

    /**
     * Whether the message is only visible to moderators.
     * 
     * Only present for `text` message type.
     */
    private: boolean;

    /**
     * The ID of the message being replied to by this message.
     * 
     * Only present for `text` message type.
     */
    replying_to: string | null;
};

export interface APIThreadMessageBodyStatusChange extends APIThreadMessageBodyBase {
    type: ThreadMessageBodyType.StatusChange;
    /**
     * The old status of the project.
     * 
     * Only present for `status_change` message type.
     */
    old_status: ProjectStatus;

    /**
     * The new status of the project.
     * 
     * Only present for `status_change` message type.
     */
    new_status: ProjectStatus;
};

// TYPES

export type APIReport = {
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

    /**
     * The ID of the report.
     */
    id: string;

    /**
     * The ID of the user who reported the item.
     */
    reporter: string;

    /**
     * The time at which the report was created.
     */
    created: Date;

    /**
     * Whether the report is resolved.
     */
    closed: boolean;

    /**
     * The ID of the moderation thread associated with this report.
     */
    thread_id: string;
};

export type APIThread = {
    /**
     * The ID of the thread.
     */
    id: string;

    /**
     * The type of thread.
     */
    type: ThreadMessageType;

    /**
     * The ID of the associated project if a project thread.
     */
    project_id: string | null;

    /**
     * The ID of the associated report if a report thread.
     */
    report_id: string | null;

    /**
     * List of messages in this thread.
     */
    messages: APIThreadMessage[];

    /**
     * List of members part of this thread.
     */
    members: APIUser[];
};

export type APIThreadMessage = {
    /**
     * The ID of the message itself.
     */
    id: string;

    /**
     * The ID of the author.
     */
    author_id: string | null;

    /**
     * The contents of the message.
     * 
     * Fields will vary depending on message type.
     */
    body: APIThreadMessageBody;

    /**
     * The time at which the message was created.
     */
    created: Date;
};

export type APIThreadMessageBody =
    | APIThreadMessageBodyStatusChange
    | APIThreadMessageBodyThreadClosure
    | APIThreadMessageBodyText
    | APIThreadMessageBodyDeleted;

// ENUMS

export enum ReportItemType {
    Project = "project",
    User = "user",
    Version = "version"
};

export enum ThreadMessageType {
    Project = "project",
    Report = "report",
    DirectMessage = "direct_message"
};

export enum ThreadMessageBodyType {
    StatusChange = "status_change",
    Text = "text",
    ThreadClosure = "thread_closure",
    Deleted = "deleted"
};