const base = require('@high-standards-js/base');
const semanticRelease = require('@high-standards-js/semanticRelease');
const fs = require('fs');
const path = require('path');

(async() => {
    await base.checkAcceptedHighStandards();
    const config = JSON.parse(
        base.getTemplate(__dirname, 'github.json')
    );
    semanticRelease.addPluginConfig(config.plugins[0]);
})();
