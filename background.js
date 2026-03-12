chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [{
        id: 1,
        priority: 1,
        action: {type: "block"},
        condition: {
            urlFilter: "*://googleads.g.doubleclick.net/*", //Blocks everything from YT domain - *://*.youtube.com/*
            resourceTypes: ["script", "image", "sub_frame", "xmlhttprequest"] //logos, icnons, scripts,..
        }
        
    },
    {
        id: 2,
        priority: 1,
        action: {type: "block"},
        condition: {
            urlFilter: "*://static.doubleclick.net/*",
            resourceTypes: ["script", "image", "sub_frame"] //logos, icnons, scripts,..
        }
        
    }],
    removeRuleIds: [1, 2]
});
