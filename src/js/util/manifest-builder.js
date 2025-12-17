const build = (target, version) => {
    const manifest = {};

    // Common properties
    manifest.manifest_version = 3; // Required for MV3
    manifest.name = "CRM Power Pane Returns";
    manifest.short_name = "CRM Power Pane Returns";
    manifest.version = version;
    manifest.description = "CRM Power Pane Returns is a helper tool designed to integrate with Dynamics CRM/365 application and allow you to manipulate forms.";
    manifest.icons = {
        32: "img/icon-32.png",
        48: "img/icon-48.png",
        64: "img/icon-64.png",
        128: "img/icon-128.png"
    };

    // Content Scripts
    manifest.content_scripts = [
        {
            run_at: "document_end",
            matches: [
                "*://*.crm.microsoftdynamics.us/*",
                "*://*.crm.microsoftdynamics.de/*",
                "*://*.dynamics.microsoft.com/*",
                "*://*.crm.appsplatform.us/*",
                "*://*.crm2.dynamics.com*",
                "*://*.crm3.dynamics.com/*",
                "*://*.crm4.dynamics.com/*",
                "*://*.crm5.dynamics.com/*",
                "*://*.crm6.dynamics.com/*",
                "*://*.crm7.dynamics.com/*",
                "*://*.crm8.dynamics.com/*",
                "*://*.crm9.dynamics.com/*",
                "*://*.crm10.dynamics.com/*",
                "*://*.crm11.dynamics.com/*",
                "*://*.crm12.dynamics.com/*",
                "*://*.crm13.dynamics.com/*",
                "*://*.crm14.dynamics.com/*",
                "*://*.crm15.dynamics.com/*",
                "*://*.crm16.dynamics.com/*",
                "*://*.crm17.dynamics.com/*",
                "*://*.crm18.dynamics.com/*",
                "*://*.crm19.dynamics.com/*",
                "*://*.crm20.dynamics.com/*",
                "*://*.crm21.dynamics.com/*",
                "*://*.crm.dynamics.com/*"

            ],
            js: ["js/inject.js"],
            css: ["ui/css/pane.css"]
        }
    ];

    // Permissions
    manifest.permissions = [
        "tabs",
        "activeTab",
        "storage",
        "scripting"
    ];

    // Host Permissions (required for HTTP/HTTPS URLs)
    manifest.host_permissions = [
        "*://*.crm.microsoftdynamics.us/*",
        "*://*.crm.microsoftdynamics.de/*",
        "*://*.dynamics.microsoft.com/*",
        "*://*.crm.appsplatform.us/*",
        "*://*.crm2.dynamics.com*",
            "*://*.crm3.dynamics.com/*",
            "*://*.crm4.dynamics.com/*",
            "*://*.crm5.dynamics.com/*",
            "*://*.crm6.dynamics.com/*",
            "*://*.crm7.dynamics.com/*",
            "*://*.crm8.dynamics.com/*",
            "*://*.crm9.dynamics.com/*",
            "*://*.crm10.dynamics.com/*",
            "*://*.crm11.dynamics.com/*",
            "*://*.crm12.dynamics.com/*",
            "*://*.crm13.dynamics.com/*",
            "*://*.crm14.dynamics.com/*",
            "*://*.crm15.dynamics.com/*",
            "*://*.crm16.dynamics.com/*",
            "*://*.crm17.dynamics.com/*",
            "*://*.crm18.dynamics.com/*",
            "*://*.crm19.dynamics.com/*",
            "*://*.crm20.dynamics.com/*",
            "*://*.crm21.dynamics.com/*",
            "*://*.crm.dynamics.com/*"

    ];

    // Web Accessible Resources
    manifest.web_accessible_resources = [
        {
            resources: ["ui/*", "img/*"],
            matches: [
                "*://*.crm.microsoftdynamics.us/*",
                "*://*.crm.microsoftdynamics.de/*",
                "*://*.dynamics.microsoft.com/*",
                "*://*.crm.appsplatform.us/*",
                "*://*.crm2.dynamics.com*",
                "*://*.crm3.dynamics.com/*",
                "*://*.crm4.dynamics.com/*",
                "*://*.crm5.dynamics.com/*",
                "*://*.crm6.dynamics.com/*",
                "*://*.crm7.dynamics.com/*",
                "*://*.crm8.dynamics.com/*",
                "*://*.crm9.dynamics.com/*",
                "*://*.crm10.dynamics.com/*",
                "*://*.crm11.dynamics.com/*",
                "*://*.crm12.dynamics.com/*",
                "*://*.crm13.dynamics.com/*",
                "*://*.crm14.dynamics.com/*",
                "*://*.crm15.dynamics.com/*",
                "*://*.crm16.dynamics.com/*",
                "*://*.crm17.dynamics.com/*",
                "*://*.crm18.dynamics.com/*",
                "*://*.crm19.dynamics.com/*",
                "*://*.crm20.dynamics.com/*",
                "*://*.crm21.dynamics.com/*",
                "*://*.crm.dynamics.com/*"

            ]
        }
    ];

    // Background Service Worker
    manifest.background = {
        service_worker: "js/background.js", // Using service worker for background
        type: "module" // Recommended for modern JavaScript
    };

    // Browser Action (renamed to `action` in MV3)
    manifest.action = {
        default_title: "CRM Power Pane Returns",
        default_icon: {
            "48": "img/icon-48.png"
        }
    };

    // Options Page
    if (target === "chrome" || target === "edge-chromium" || target === "edge") {
        manifest.options_page = "ui/options.html";
    } else if (target === "firefox") {
        manifest.options_ui = {
            page: "ui/options.html",
            browser_style: true
        };
    }

    // Edge-specific properties
    if (target === "edge") {
        manifest.author = "Ryan Rettinger, Oguzhan Can, Onur Menal";
    }

    // Browser-specific adjustments
    if (target === "firefox") {
        // Firefox-specific adjustments for compatibility
        manifest.permissions.push("webRequest");
        manifest.browser_specific_settings = {
            gecko: {
                id: "{your-addon-id}",
                strict_min_version: "91.0"
            }
        };
    }

    return manifest;
};

module.exports = {
    build
};
