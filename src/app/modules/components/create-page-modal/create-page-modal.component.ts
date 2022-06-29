import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreatePageComponent} from "../create-page/create-page.component";

@Component({
  selector: 'app-create-page-modal',
  templateUrl: './create-page-modal.component.html',
  styleUrls: ['./create-page-modal.component.scss'],
  encapsulation  : ViewEncapsulation.None,
})
export class CreatePageModalComponent implements OnInit {

  constructor(
    private _matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Open Create Page dialog
   */
  openCreatePage(): void
  {
    // Open the dialog
    const dialogRef = this._matDialog.open(CreatePageComponent);

    dialogRef.afterClosed()
      .subscribe((result) => {});
  }
}
