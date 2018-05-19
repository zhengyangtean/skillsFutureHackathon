
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
    "files": ["public/*.*", "public/*.*"],
    "watchEvents": [
        "change"
    ],
    "watchOptions": {
        "ignoreInitial": true
    },
    "server": {
        baseDir: "public"
    },
    "port": 3001,
    "serveStatic": ["./public/*.html"],
    "logLevel": "info",
    "logPrefix": "BS",
    "logConnections": true,
    "logFileChanges": true,
    "logSnippet": true,
    "rewriteRules": [],
    "open": "external",
    "browser": "default",
    "reloadOnRestart": false,
    "notify": true,
    "minify": true,
    "host": "localhost",
    "codeSync": true,
    "timestamps": true,
    "clientEvents": [
        "scroll",
        "scroll:element",
        "input:text",
        "input:toggles",
        "form:submit",
        "form:reset",
        "click"
    ],
};
