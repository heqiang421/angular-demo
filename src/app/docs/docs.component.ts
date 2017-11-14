import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-docs',
    templateUrl: './docs.component.html',
    styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

    pageSizes = [10, 20, 30, 40, 50];
    pageSize = 40;

    constructor() {
    }

    ngOnInit() {
    }

    changeSelector(event) {
        alert(event.target.value);
    }
}
