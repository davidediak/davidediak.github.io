import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ShellComponent} from '../core-site/components/shell/shell.component';
import {DiffDatesPipe} from './pipes/diff-dates.pipe';
import {MatTooltipModule} from '@angular/material/tooltip';
import {AppRoutingModule} from '../app-routing.module';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const components = [ShellComponent, DiffDatesPipe];
const modules = [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    AppRoutingModule,
    MatCardModule,
    ClipboardModule,
    MatSnackBarModule,
];
@NgModule({
    declarations: [...components],
    imports: [...modules],
    exports: [...modules, ...components],
})
export class SharedModule {}
