export const defineConfig = (config) => ({ files } = {}) => {
    if (typeof config === "function") {
        return config({ files: files ?? [] });
    }
    if (files === undefined || files.length === 0) {
        return config;
    }
    return config.map((config) => ({ ...config, files }));
};
