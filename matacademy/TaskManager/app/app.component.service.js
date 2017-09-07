"use strict";
var app_component_1 = require("./app.component");
var DataService = (function () {
    function DataService() {
        this.tasks = JSON.parse(localStorage.getItem("LocalTasks"));
    }
    DataService.prototype.getData = function () {
        return this.tasks;
    };
    DataService.prototype.addData = function (task) {
        if (task == null || task.trim() == "")
            return;
        //debugger;
        if (this.tasks == null)
            this.tasks = [];
        this.tasks.push(new app_component_1.Task(task));
        this.saveChangesAtLocalStorage();
    };
    DataService.prototype.deleteData = function (task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
        this.saveChangesAtLocalStorage();
    };
    DataService.prototype.doneData = function (task) {
        var t = this.tasks[this.tasks.indexOf(task)];
        if (t.done == true)
            t.done = false;
        else
            t.done = true;
        this.saveChangesAtLocalStorage();
    };
    DataService.prototype.ShowEditData = function (task) {
        document.getElementById("editinput").setAttribute("value", task._task);
        document.getElementById("editdiv").removeAttribute("hidden");
        this.temp_task = task;
    };
    DataService.prototype.editData = function (task) {
        document.getElementById('editinput').getAttribute('value');
        var text = document.getElementById("editinput");
        var inp = text.value;
        console.log(task);
        this.temp_task._task = inp;
        this.saveChangesAtLocalStorage();
        this.cancelEditData();
    };
    DataService.prototype.cancelEditData = function () {
        document.getElementById("editdiv").setAttribute("hidden", "true");
    };
    DataService.prototype.saveChangesAtLocalStorage = function () {
        var serialObj = JSON.stringify(this.tasks);
        localStorage.setItem("LocalTasks", serialObj);
    };
    return DataService;
}());
exports.DataService = DataService;
;
//# sourceMappingURL=app.component.service.js.map