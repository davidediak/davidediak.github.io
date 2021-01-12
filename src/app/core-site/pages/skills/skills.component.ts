import {Component, OnInit} from '@angular/core';

interface Skill {
    className: string;
    tooltipValue: string;
}

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.less'],
})
export class SkillsComponent implements OnInit {
    public frontendSkills: Skill[] = [
        {
            className: 'typescript',
            tooltipValue: 'TypeScript',
        },
        {
            className: 'javascript',
            tooltipValue: 'JavaScript',
        },
        {
            className: 'angularjs',
            tooltipValue: 'Angular',
        },
        {
            className: 'react',
            tooltipValue: 'React',
        },
        {
            className: 'html5',
            tooltipValue: 'HTML',
        },
        {
            className: 'css3',
            tooltipValue: 'CSS',
        },
    ];

    public backendSkills: Skill[] = [
        {
            className: 'postgresql',
            tooltipValue: 'PostgreSQL',
        },
        {
            className: 'python',
            tooltipValue: 'Python',
        },
        {
            className: 'java',
            tooltipValue: 'Java',
        },
    ];

    public toolsSkills: Skill[] = [
        {
            className: 'docker',
            tooltipValue: 'Docker',
        },
        {
            className: 'git',
            tooltipValue: 'Git',
        },
    ];
    constructor() {}

    ngOnInit(): void {}
}
