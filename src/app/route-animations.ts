import {trigger, transition, style, query, group, animate, keyframes} from '@angular/animations';

export const slider = trigger('routeAnimations', [
    transition('homepage => *', slideTo('right')),
    transition('* => homepage', slideTo('left')),

    transition('skills => portfolio', slideTo('right')),
    transition('skills => socials', slideTo('right')),

    transition('portfolio => skills', slideTo('left')),
    transition('portfolio => socials', slideTo('right')),

    transition('socials => skills', slideTo('left')),
    transition('socials => portfolio', slideTo('left')),

    transition('movies => *', slideTo('left')),
    transition('* => movies', slideTo('right')),
]);

function slideTo(direction) {
    const optional = {optional: true};
    return [
        query(
            ':enter, :leave',
            [
                style({
                    position: 'absolute',
                    top: 0,
                    [direction]: 0,
                    width: '100%',
                }),
            ],
            optional
        ),
        query(':enter', [style({[direction]: '-100%'})], optional),
        group([
            query(':leave', [animate('600ms ease', style({[direction]: '100%'}))], optional),
            query(':enter', [animate('600ms ease', style({[direction]: '0%'}))], optional),
        ]),
    ];
}
