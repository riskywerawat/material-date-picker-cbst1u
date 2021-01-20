import { Component } from '@angular/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-form-field>
      <input matInput
        [matDatepicker]="picker"
        placeholder="Different locale"
        (dateChange)="setDate($event.value)">
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
    <p>{{ date | date: 'y년 MM월 dd일' }}</p>
  `,
  styles: [``],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ko-KR' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})
export class AppComponent {
  date: string;

  setDate(date: string) {
    this.date = date ? date : '';
  }
}
