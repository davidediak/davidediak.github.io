import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './core-site/pages/home-page/home-page.component';
import {SkillsComponent} from './core-site/pages/skills/skills.component';
import {PortfolioComponent} from './core-site/pages/portfolio/portfolio.component';
import {SocialsComponent} from './core-site/pages/socials/socials.component';
import {MoviesComponent} from './core-site/pages/movies/movies.component';

const routes: Routes = [
    {path: '', redirectTo: 'homepage', pathMatch: 'full'},
    {
        path: 'homepage',
        component: HomePageComponent,
        data: {animation: 'homepage'},
    },
    {
        path: 'skills',
        component: SkillsComponent,
        data: {animation: 'skills'},
    },
    {
        path: 'portfolio',
        component: PortfolioComponent,
        data: {animation: 'portfolio'},
    },
    {
        path: 'socials',
        component: SocialsComponent,
        data: {animation: 'socials'},
    },
    {
        path: 'movies',
        component: MoviesComponent,
        data: {animation: 'movies'},
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: false})],
    exports: [RouterModule],
})
export class AppRoutingModule {}
