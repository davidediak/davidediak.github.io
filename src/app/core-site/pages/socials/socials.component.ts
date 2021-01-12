import {Component, OnInit} from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

interface Social {
    link: string;
    classValue: string;
    tooltipValue: string;
    isCustom: boolean;
}
@Component({
    selector: 'app-socials',
    templateUrl: './socials.component.html',
    styleUrls: ['./socials.component.less'],
})
export class SocialsComponent implements OnInit {
    public socials: Social[] = [
        {
            link: 'https://github.com/davidediak',
            classValue: 'fab fa-github',
            tooltipValue: 'GitHub',
            isCustom: false,
        },
        {
            link: 'https://www.linkedin.com/in/davide-diaconu/',
            classValue: 'fab fa-linkedin',
            tooltipValue: 'LinkedIn',
            isCustom: false,
        },
        {
            link: 'davidediaconu@gmail.com',
            classValue: 'far fa-envelope-open',
            tooltipValue: 'Email',
            isCustom: true,
        },
    ];
    constructor(private clipboard: Clipboard, private matSnackBar: MatSnackBar) {}

    ngOnInit(): void {}

    copyToClipboard(value: string) {
        this.clipboard.copy(value);
        const config = new MatSnackBarConfig();
        config.duration = 3 * 1000;
        this.matSnackBar.open('Email copied to clipboard!', null, config);
    }
}
