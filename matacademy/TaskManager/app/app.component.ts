import { Component, OnInit }    from '@angular/core';

import { DataService}           from './app.component.service';

export class Task {
    _task: string;
    done: boolean;

    constructor(task: string) {

        this._task = task;
        this.done = false;

    }
}

@Component({

    selector:       'task-list-app',
    templateUrl:    '/app/app.component.html',
    styleUrls:      ['/app/app.component.css'],
    providers:      [DataService]

})
export class AppComponent implements OnInit {

    tasks: Task[] = [];
    temp_task: Task;
    constructor(private dataService: DataService) {}

    addTask(task: string): void {
        this.dataService.addData(task);
        this.tasks = this.dataService.getData();
    }

    deleteTask(task: Task): void {
        this.dataService.deleteData(task);
    }

    doneTask(task: Task): void {
        this.dataService.doneData(task);
    }

    ShowEditTask(task: Task): void {
        this.dataService.ShowEditData(task);
    }

    editTask(task: Task): void {
        this.dataService.editData(task);
    }

    cancelEdit(): void {
        this.dataService.cancelEditData();
    }

    ngOnInit() {
        this.tasks = this.dataService.getData();
    }
}