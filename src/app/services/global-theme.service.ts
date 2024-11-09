import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalThemeService {
  themeSubject = new BehaviorSubject<boolean>(false);

  themeStream$ = this.themeSubject.asObservable();

  constructor() { }

  updateTheme() {
    let isDarkTheme: boolean = document.body.classList.contains('dark-theme');
    this.themeSubject.next(isDarkTheme);
  }
}
