// Misc routes
export {
    forgeUpdatesJSON,
    statistics
} from "./misc";

// Notifications routes
export {
    notification,
    notifications,
    userNotifications
} from "./notifications";

// Projects routes
export {
    project,
    projectCreate,
    projectDependencies,
    projectFollow,
    projectGallery,
    projectIcon,
    projectSchedule,
    projectValidity,
    projects,
    randomProjects,
    searchProjects
} from "./projects";

// Tags routes
export {
    categories,
    donationPlatforms,
    gameVersions,
    licenses,
    loaders,
    projectTypes,
    reportTypes,
    sideTypes
} from "./tags";

// Teams routes
export {
    projectTeamMembers,
    teamJoin,
    teamMember,
    teamMembers,
    teamOwner,
    teams
} from "./teams";

// Threads routes
export {
    openReports,
    report,
    reports,
    thread,
    threadMessage,
    threads
} from "./threads";

// Users routes
export {
    authorizationUser,
    user,
    users,
    userFollows,
    userIcon,
    userPayouts,
    userProjects
} from "./users";

// Version files routes
export {
    latestProjectVersionsFromHash,
    latestProjectsVersionsFromHashes,
    versionFile,
    versionsFromHashes
} from "./version-files";

// Versions routes
export {
    projectVersion,
    projectVersions,
    version,
    versionAddFiles,
    versionCreate,
    versionSchedule,
    versions
} from "./versions";