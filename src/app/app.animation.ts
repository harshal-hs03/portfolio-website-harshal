// app.animations.ts
import { trigger, animate, transition, style } from '@angular/animations';

export const fadeInAnimation = trigger('fadeInAnimation', [
  transition(':enter,:leave', [
    style({ opacity: 0 }),
    animate('500ms', style({ opacity: 1 })),
  ]),
]);

// import { trigger, animate, state, transition, style } from '@angular/animations';

// export const fadeInAnimation = trigger('fadeInAnimation', [
//   state('void', style({opacity:0})),
//   transition(':enter,:leave', [
//     // style({ opacity: 0 }),
//     animate('800')
//   ])
// ]);
