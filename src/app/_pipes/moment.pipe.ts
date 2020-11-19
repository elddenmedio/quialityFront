import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {
  private userLang: string;

  constructor() {
    let _userLang = navigator.language.split('-'); // || navigator.userLanguage;
    this.userLang = _userLang[0];
  }

  transform(date: string, ...args: any[]): any {
    let _return;
    switch (args[0]) {
      case 1:
        _return = (this.userLang.toLowerCase() === 'es') ? moment(date).format('DD/MM/YYYY') : moment(date).format('MM/DD/YYYY');
        break;
      case 2:
        _return = (this.userLang.toLowerCase() === 'es') ? moment(date).format('DD [de] M [del] YYYY') : moment(date).format('MMM Do YYYY');
        break;
    }

    return _return;
  }
}
