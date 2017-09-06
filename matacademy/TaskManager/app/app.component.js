"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Task = (function () {
    function Task(task) {
        this._task = task;
        this.done = false;
    }
    return Task;
}());
exports.Task = Task;
var AppComponent = (function () {
    function AppComponent() {
        this.tasks = JSON.parse(localStorage.getItem("LocalTasks"));
    }
    AppComponent.prototype.addTask = function (task) {
        if (task == null || task == undefined || task.trim() == "")
            return;
        //debugger;
        if (this.tasks == null)
            this.tasks = [];
        this.tasks.push(new Task(task));
        var serialObj = JSON.stringify(this.tasks);
        localStorage.setItem("LocalTasks", serialObj);
    };
    AppComponent.prototype.deleteTask = function (task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
        var serialObj = JSON.stringify(this.tasks);
        localStorage.setItem("LocalTasks", serialObj);
    };
    AppComponent.prototype.doneTask = function (task) {
        var t = this.tasks[this.tasks.indexOf(task)];
        if (t.done == true)
            t.done = false;
        else
            t.done = true;
        //t.done==false?t.done=true:t.done=false;
        var serialObj = JSON.stringify(this.tasks);
        localStorage.setItem("LocalTasks", serialObj);
    };
    AppComponent.prototype.ShowEditTask = function (task) {
        document.getElementById("editinput").setAttribute("value", task._task);
        document.getElementById("editdiv").removeAttribute("hidden");
        this.temp_task = task;
    };
    AppComponent.prototype.editTask = function (task) {
        document.getElementById('editinput').getAttribute('value');
        var text = document.getElementById("editinput");
        var inp = text.value;
        console.log(task);
        this.temp_task._task = inp;
        var serialObj = JSON.stringify(this.tasks);
        localStorage.setItem("LocalTasks", serialObj);
        this.cancelEdit();
    };
    AppComponent.prototype.cancelEdit = function () {
        document.getElementById("editdiv").setAttribute("hidden", "true");
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'task-list-app',
        templateUrl: '/app/app.component.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map