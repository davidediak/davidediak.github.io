import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.less'],
})
export class HomePageComponent implements OnInit {
    public firstDayOfWork: Date = new Date('2018-10-15');

    constructor() {}

    ngOnInit(): void {}
}
