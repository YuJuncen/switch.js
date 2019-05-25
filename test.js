const jasmine = new (require('jasmine'))();

jasmine.loadConfig({
    "spec_dir": "spec",
    "spec_files": [
      "**/*[sS]pec.js"
    ],
    "stopSpecOnExpectationFailure": false,
    "random": false
})

jasmine.execute();