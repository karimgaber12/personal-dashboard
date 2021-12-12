import { trigger, animate, transition, style } from '@angular/animations';

export const todoAnim = trigger('todoAnim', [
    transition(':leave',[
        animate(300,style({
            opacity: 0,
            height:0,
            marginBottom:0,
        }))
    ])
])