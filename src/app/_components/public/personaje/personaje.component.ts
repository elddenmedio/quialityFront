import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { PersonajeInterface } from 'src/app/_interfaces';
import { PersonajesService } from 'src/app/_services';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss']
})
export class PersonajeComponent implements OnInit {
  person: PersonajeInterface;

  constructor(
    private router: Router,
    private personajesServices: PersonajesService
  ) {
    this.router.events.subscribe((event: Event) => {
      (event['snapshot']) ? this.getInfo(event['snapshot'].params.id_per) : '';
      // if (event instanceof NavigationStart) {
      //   if (event.url.includes('/')) {
      //     let _url = event.url.split('/');
      //     _url.shift();
      //     console.log('*****' + _url);
      //     this.getInfo(_url);
      //   }
      // }

      if (event instanceof NavigationError) {
        console.error(event.error);
      }
    });
  }

  ngOnInit(): void {
  }

  private getInfo(url): void {
    if (url) {
      this.personajesServices.getSpecificInfo(url).subscribe(
        succ => {
          this.person = succ
        },
        err => {
          debugger
        }
      );
    }
  }
}
