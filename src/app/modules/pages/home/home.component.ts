import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "../../../core/services/local-storage.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  localStorageChanges$ = this.localStorageService.changes$;

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.localStorageChanges$.subscribe(value => {
      console.log(value);
    });
  }

}
