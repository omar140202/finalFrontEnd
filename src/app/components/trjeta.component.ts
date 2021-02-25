import{Component, Input, OnInit} from '@angular/core';


@Component({
    selector:'tarjeta',
    templateUrl: './tarjeta.component.html'
       
})
export class tarjeta implements OnInit{

    @Input() nombre: String = "Omar Alejandro Espitia Sanchez"
    
    ngOnInit(): void{}
}