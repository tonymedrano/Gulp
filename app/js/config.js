module.exports = {
    seed: [
        "./index.html.ejs"
    ],
    options: {
        parseExclude: [
            "/libs/",
            /\/libs-optional\/[^\/]+\/includes\//i
        ],
        requiredFiles: [],
        ignoredTemplates: [
            /assets/
        ],
        requiredLibs: [
            "/libs/"
        ],
        filePriority: [
            "jquery.js",
            "lodash.js",
            "angular.js"
        ],
        optionalLibs: [
            "/libs-optional/"
        ],
        optionalLibsInclude: "includes/*.js",
        globalDependencies: [
            "Restangular"
        ],
        appModule: "myAngularApp",
        globalModules: [
            "ngAnimate",
            "ui.router",
            "ui.bootstrap",
            "restangular"
        ],
        filesWithResolvedDeps: [
            /modal/i
        ]
    }
}