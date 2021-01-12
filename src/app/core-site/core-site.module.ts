import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {SharedModule} from '../shared/shared.module';
import {SkillsComponent} from './pages/skills/skills.component';
import {PortfolioComponent} from './pages/portfolio/portfolio.component';
import {SocialsComponent} from './pages/socials/socials.component';
import {MoviesComponent} from './pages/movies/movies.component';

@NgModule({
    declarations: [
        HomePageComponent,
        SkillsComponent,
        PortfolioComponent,
        SocialsComponent,
        MoviesComponent,
    ],
    imports: [SharedModule],
})
export class CoreSiteModule {}
