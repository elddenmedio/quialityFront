import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PersonajeInterface } from 'src/app/_interfaces';
import { PersonajesService } from 'src/app/_services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class PersonajesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'height', 'mass', 'birth_year', 'gender', 'created', 'edited']
  dataSource: MatTableDataSource<PersonajeInterface>;
  lengthPagination: number = 0;
  page: number = 1;
  count: number = 10;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private personajesService: PersonajesService
  ) { }

  ngOnInit(): void {
    this.getInfo(true)
  }

  private getInfo(refresh: boolean): void {
    if (refresh) {
      this.page = 1;
      this.count = 10;
    }

    this.personajesService.getInfo(this.page).subscribe(
      succ => {
        this.lengthPagination = 0;
        this.dataSource = new MatTableDataSource(succ.results);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.lengthPagination = succ.count;
        debugger
      },
      err => {
        debugger
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  changePage(event: MatPaginator) {
    this.page = (event.pageIndex + 1);
    this.count = event.pageSize;
    event.pageSize
    debugger
    this.getInfo(false);
  }

  displayInfo(info: string): void {
    let _id = info.slice(0, -1).split('/');
    let l = _id[_id.length - 1];

    this.router.navigate(['/personaje/' + _id[_id.length - 1]]);
  }
}
