import { trigger, animate, transition, style, query, group } from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  transition('* => *', [   // * => * make a transition to any component
    style({
      position:'relative'
    }),
    query(':enter, :leave',[
      style({
        position:'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ],{optional:true}),

    query(':enter',[
      style({
        opacity:0
      })
    ],{optional:true}),
  // using group([]) to make a combination between the transitions
    group([
      query(':leave',[
        style({
          height:'100%'
        }),
        animate(200,style({
          opacity:0
        }))
      ],{optional:true}),
  
     query(':enter',[
        style({
          opacity:0,
          height: '100%'
        }),
        animate(200,style({
          opacity:1,
        }))
     ],{optional:true})  
  
    ])
 ])

])
