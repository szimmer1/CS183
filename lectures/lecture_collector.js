/**
 * Created by mzimmerman on 1/7/15.
 */

"use strict";

var fs = require('fs');
var _ = require('underscore');

// open an output buffer
var out = fs.createWriteStream('lecture_list');
var lectures = fs.readdirSync('./');


// build string --> callback: write to stream --> callback: write to file
getFileString(lectures, function(data) {
    out.write(data,'utf-8',function(err) {
        if (err) {
            throw err;
        }
        out.end();
    });
});

function getFileString(fileArray, callback) {
    var fileString = "";
    _.each(fileArray, function(file, index) {
        var lectureDate = file.slice(0,10);
        if (is2015(new Date(lectureDate))) {
            fileString += lectureDate + ",";
        }
    });
    var formattedFileString = fileString.slice(0,-1);
    callback(formattedFileString);
}

function is2015(dateObj) {
    return dateObj.getFullYear() === 2015;
}

