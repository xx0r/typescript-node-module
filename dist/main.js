"use strict";
var SampleModule = (function () {
    function SampleModule() {
    }
    SampleModule.prototype.process = function () {
        console.log("Sample module process " + new Date());
    };
    return SampleModule;
}());
exports.SampleModule = SampleModule;
//# sourceMappingURL=main.js.map