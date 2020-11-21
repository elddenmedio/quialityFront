import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PersonajeInterface } from 'src/app/_interfaces';
import { CommonEmitService, PersonajesService } from 'src/app/_services';

@Component({
  selector: 'app-residentes',
  templateUrl: './residentes.component.html',
  styleUrls: ['./residentes.component.scss']
})
export class ResidentesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'height', 'mass', 'birth_year', 'gender', 'created', 'edited']
  dataSource: MatTableDataSource<PersonajeInterface>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private commonService: CommonEmitService,
    private personajesService: PersonajesService
  ) { }

  ngOnInit(): void {
    this.commonService.aClickedEvent
      .subscribe((info: string) => {
        if (info.length > 0)
          localStorage.setItem('_search', info);
      });
    if (!localStorage.getItem('_search')) {
      this.router.navigate(['/planetas']);
    } else {
      this.getInfo();
    }
  }

  private getInfo(): void {
    let _per = [];
    let _info = localStorage.getItem('_search').split(',');
    _info.forEach(el => {
      this.personajesService.getSpecificInfo(el).subscribe(
        succ => {
          _per.push(succ);
          this.dataSource = new MatTableDataSource(_per.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)));
          this.dataSource.sort = this.sort;
        },
        err => {
          debugger
        }
      );
    });

    localStorage.removeItem('_search');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  displayInfo(info: string): void {
    let _id = info.slice(0, -1).split('/');
    let l = _id[_id.length - 1];

    this.router.navigate(['/personaje/' + _id[_id.length - 1]]);
  }
}
