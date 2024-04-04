export function unignore(files) {
    return files.map((file) => `!${file}`);
}
