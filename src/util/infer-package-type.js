import { readdir, readFile } from "node:fs/promises";
export const inferPackageTypes = async (packagesDirs) => {
    const packageTypes = {
        browserPackages: [],
        nodePackages: [],
    };
    for (const packagesDir of packagesDirs) {
        for (const packageDir of await listPackages(packagesDir)) {
            const packagePath = `${packagesDir}/${packageDir}`;
            const packageType = await inferPackageType(packagePath);
            packageTypes[packageType].push(packagePath);
        }
    }
    return packageTypes;
};
const listPackages = async (packagesDir) => {
    const packages = [];
    try {
        for (const entry of await readdir(packagesDir, { withFileTypes: true })) {
            if (!entry.isDirectory())
                continue;
            packages.push(entry.name);
        }
    }
    catch (e) {
        console.log(e);
    }
    return packages;
};
const inferPackageType = async (packagePath) => {
    const content = await readFile(`${packagePath}/package.json`, "utf8");
    const pkg = JSON.parse(content);
    return containsDependencies(pkg, "solid-js") ||
        containsDependencies(pkg, "astro")
        ? "browserPackages"
        : "nodePackages";
};
const containsDependencies = (pkg, dependency) => Boolean(pkg.dependencies?.[dependency] ||
    pkg.devDependencies?.[dependency] ||
    pkg.peerDependencies?.[dependency]);
