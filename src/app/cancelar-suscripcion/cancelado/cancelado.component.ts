import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-cancelado',
  templateUrl: './cancelado.component.html',
  styleUrls: ['./cancelado.component.css']
})
export class CanceladoComponent implements OnInit {

  segundos = 16;
  tiempo = timer(0, 1000);
  clock: any;

  constructor(private route: Router) {}

  ngOnInit(): void {
    // this.tiempoAtras();
    this.clock = this.tiempo.subscribe(t=>{
      if(this.segundos == 0){
        this.clock.unsubscribe();
        this.route.navigateByUrl('/');
      }else{
        this.segundos--;
      }
    });
  }

  // @host
  ngOnDestroy(){
    this.clock.unsubscribe();
  }

}
