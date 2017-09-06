"use strict";
var app_component_1 = require("./app.component");
var TaskDataService = (function () {
    function TaskDataService() {
        this.TaskData = JSON.parse(localStorage.getItem("LocalTasks"));
    }
    TaskDataService.prototype.getTasksData = function () {
        return this.TaskData;
    };
    TaskDataService.prototype.addTaskData = function (task) {
        if (task == null || task == undefined || task.trim() == "")
            return;
        this.tasks.push(new app_component_1.Task(task));
        localStorage.serialTasks = JSON.stringify(this.tasks);
        localStorage.setItem("LocalTasks", localStorage.serialTasks);
    };
    return TaskDataService;
}());
exports.TaskDataService = TaskDataService;
//# sourceMappingURL=app.component.service.js.map