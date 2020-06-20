const base = require('@high-standards-js/base');
const semanticRelease = require('@high-standards-js/semantic-release');

(async() => {
    await base.checkAcceptedHighStandards();
    const config = JSON.parse(
        base.getTemplate(__dirname, 'github.json')
    );
    semanticRelease.addPluginConfig(config);
})();
