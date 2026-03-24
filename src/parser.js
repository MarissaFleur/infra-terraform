const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

class Parser {
    constructor(filePath) {
        this.filePath = filePath;
    }

    parse() {
        try {
            const fileExtension = path.extname(this.filePath).toLowerCase();
            const fileContent = fs.readFileSync(this.filePath, 'utf8');

            switch (fileExtension) {
                case '.json':
                    return JSON.parse(fileContent);
                case '.yaml':
                case '.yml':
                    return yaml.load(fileContent);
                default:
                    throw new Error(`Unsupported file format: ${fileExtension}`);
            }
        } catch (error) {
            throw new Error(`Failed to parse file: ${error.message}`);
        }
    }
}

module.exports = Parser;