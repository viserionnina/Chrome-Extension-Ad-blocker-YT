chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [{
        id: 1,
        priority: 1,
        action: {type: "block"},
        condition: {
            urlFilter: "*://*.youtube.com/*", //Blocks everything from YT domain
            resourceTypes: ["script", "image", "sub_frame"] //logos, icnons, scripts,..
        }
        
    }],
    removeRuleIds: [1]
})
