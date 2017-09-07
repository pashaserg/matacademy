"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var app_component_service_1 = require("./app.component.service");
var Task = (function () {
    function Task(task) {
        this._task = task;
        this.done = false;
    }
    return Task;
}());
exports.Task = Task;
var AppComponent = (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.tasks = [];
    }
    AppComponent.prototype.addTask = function (task) {
        this.dataService.addData(task);
        this.tasks = this.dataService.getData();
    };
    AppComponent.prototype.deleteTask = function (task) {
        this.dataService.deleteData(task);
    };
    AppComponent.prototype.doneTask = function (task) {
        this.dataService.doneData(task);
    };
    AppComponent.prototype.ShowEditTask = function (task) {
        this.dataService.ShowEditData(task);
    };
    AppComponent.prototype.editTask = function (task) {
        this.dataService.editData(task);
    };
    AppComponent.prototype.cancelEdit = function () {
        this.dataService.cancelEditData();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.tasks = this.dataService.getData();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'task-list-app',
        templateUrl: '/app/app.component.html',
        styleUrls: ['/app/app.component.css'],
        providers: [app_component_service_1.DataService]
    }),
    __metadata("design:paramtypes", [app_component_service_1.DataService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map