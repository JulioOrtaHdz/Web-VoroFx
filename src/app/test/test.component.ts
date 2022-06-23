import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { AxinService } from '../services/vorofx.service';
import { Category } from './interface';
import { Post } from './interface';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnDestroy {


  //Almecenar la categoria comparando los datos de la interfaz para que sean los mismos
  categories: Category[] = [];

  //Almecenar los articulos comparando los datos de la interfaz para que sean los mismos 
  articles: Post[] = [];

  // declaro un nuevo array para almecenar los articulo publicados, le paso la interfaz de post para que cumpla con los datos y esta es la variable que se va a iterar en el template
  posts: Post[] = [];

  //Acceder al servicio que apunta al api
  constructor(private test: AxinService) {
    

    //acceder al metodo del servicio encargado de traer los datos de la categoria
    this.test.test().subscribe((res: any) => {
      //acceder a los posts que corresponden a la categoria consultada y guardarlos en el array de articles
      this.articles = res.data.posts    


      // itero cada uno de los articulos de la categoria para acceder al status 
      this.articles.forEach(obj => {


        console.log(obj.status);
        // verifico si es estatus es 4
        if(obj.status == 4) {
          //como el status es 4 agrego ese registro al nuevo array que cree
            this.posts.push(obj);
        }

      });

      // verifico que me regrese los articulos publicados nadamas
      console.log(this.posts);
    
    });

    
   }

  ngOnInit(): void {
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }

}
