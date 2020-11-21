import { Component, OnInit } from '@angular/core';
import { CommonEmitService, PersonajesService } from 'src/app/_services';
import { Router } from '@angular/router';
import { PlanetasInterface } from 'src/app/_interfaces';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.scss']
})
export class PlanetasComponent implements OnInit {
  dataSource: PlanetasInterface[];
  statuses: any[];
  activityValues: number[] = [0, 100];
  totalItemsPerPage: number = 10;
  page: number = 1;
  totalRecords: number;

  constructor(
    private router: Router,
    private personajesServices: PersonajesService,
    private commonService: CommonEmitService
  ) { }

  ngOnInit(): void {
    this.loadInfo(true);
  }

  private loadInfo(refresh: boolean, filter: any = null): void {
    if (refresh) this.page = 1;

    this.personajesServices.getResidentes(this.page, filter).subscribe(
      succ => {
        this.dataSource = succ.results.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));;
        this.totalRecords = succ.count;
      },
      err => {
        this.loadInfo(true);
      }
    );
  }

  nextPage(event: LazyLoadEvent) {
    let _filter = null;
    this.page = (event.first / 10) + 1;
    if (event.filters.global) {
      _filter = event.filters.global.value;
    }
    this.loadInfo(false, _filter);
  }

  displayInfo(info: string[]): void {
    let _residents: string[] = [];
    info.forEach(el => {
      let _id = el.slice(0, -1).split('/');
      _residents.push(_id[_id.length - 1]);
    });

    this.commonService.AClicked(_residents.toString());

    this.router.navigate(['/residentes']);
  }
}
