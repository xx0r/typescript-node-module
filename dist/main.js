"use strict";
var SampleController = (function () {
    function SampleController() {
    }
    SampleController.prototype.process = function () {
        console.log("Sample controller process " + new Date());
    };
    return SampleController;
}());
exports.SampleController = SampleController;
//# sourceMappingURL=main.js.map