"use strict";

class IndexProcessor {
    constructor(keyInfoArray) {
        this.raw = keyInfoArray[0];
    }

    getArray() {
        let filtered = this.raw.filter(function (rawColumn) {
            return (rawColumn.Key_name !== 'PRIMARY');
        });

        return filtered.map(function (rawKeyInfo) {
            let column = rawKeyInfo.Column_name;
            let unique = ! rawKeyInfo.Non_unique;
            let indexType = rawKeyInfo.Index_type;
            return {column, unique, indexType};
        })
    }
}

module.exports = IndexProcessor;