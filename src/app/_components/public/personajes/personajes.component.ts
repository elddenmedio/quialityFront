import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LazyLoadEvent } from 'primeng/api';
import { PersonajeInterface } from 'src/app/_interfaces';
import { PersonajesService } from 'src/app/_services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {
  dataSource: PersonajeInterface[];
  statuses: any[];
  activityValues: number[] = [0, 100];
  totalItemsPerPage: number = 10;
  page: number = 1;
  totalRecords: number;
  loading: boolean = false;

  constructor(
    private router: Router,
    private personajesService: PersonajesService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.loadInfo(true);
  }

  private loadInfo(refresh: boolean, filter: any = null): void {
    if (refresh) this.page = 1;

    this.personajesService.getInfo(this.page, filter).subscribe(
      succ => {
        this.loading = false;
        this.dataSource = succ.results.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));;
        this.totalRecords = succ.count;
      },
      err => {
        this.loadInfo(true);
      }
    )
  }

  nextPage(event: LazyLoadEvent) {
    let _filter = null;
    this.page = (event.first / 10) + 1;
    if (event.filters.global) {
      _filter = event.filters.global.value;
    }
    this.loadInfo(false, _filter);
  }

  displayInfo(info: string): void {
    let _id = info.slice(0, -1).split('/');
    let l = _id[_id.length - 1];

    this.router.navigate(['/personaje/' + _id[_id.length - 1]]);
  }
}
