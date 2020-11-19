import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
// import { DropdownModule } from 'primeng/primeng';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AccordionModule } from 'primeng/accordion';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TableModule } from 'primeng/table';
import { FieldsetModule } from 'primeng/fieldset';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

const modules = [
  MenubarModule,
  MessagesModule,
  MessageModule,
  InputTextModule,
  PasswordModule,
  AccordionModule,
  SlideMenuModule,
  SidebarModule,
  ButtonModule,
  BreadcrumbModule,
  PanelModule,
  MatDialogModule,
  OverlayPanelModule,
  TableModule,
  DataViewModule,
  FieldsetModule,
  CalendarModule,
  SliderModule,
  DialogModule,
  MultiSelectModule,
  ContextMenuModule,
  DropdownModule,
  ToastModule,
  ProgressBarModule,
  DynamicDialogModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    modules
  ],
  exports: [
    MenubarModule,

    modules
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ]
})
export class PrimeModule { }
