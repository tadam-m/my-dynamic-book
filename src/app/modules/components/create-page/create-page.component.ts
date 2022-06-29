import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {LocalStorageService} from "../../../core/services/local-storage.service";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class CreatePageComponent implements OnInit {

  composeForm!: FormGroup;
  editorStyle = {
    height: '300px',
    width: '500px'
  };
  quillModules: any = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'header': 1 }],
      [{align: []}, {list: 'ordered'}, {list: 'bullet'}],
    ]
  };

  constructor(
    public matDialogRef: MatDialogRef<CreatePageComponent>,
    private _formBuilder: FormBuilder,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.composeForm = this._formBuilder.group({
      image: ['', []],
      body   : ['', []]
    });
  }

  persist(): void {
    let currentData = this.localStorageService.get('pages');
    if (!currentData) {
      if (this.composeForm.getRawValue().image) {
        this.localStorageService.set('pages', [{'type': 'image', 'value': this.composeForm.getRawValue().image}]);
      } else {
        this.localStorageService.set('pages', [{'type': 'text', 'value': this.composeForm.getRawValue().body}]);
      }
    } else {
      if (this.composeForm.getRawValue().image) {
        currentData.push({'type': 'image', 'value': this.composeForm.getRawValue().image})
        this.localStorageService.set('pages', currentData);
      } else {
        currentData.push({'type': 'text', 'value': this.composeForm.getRawValue().body})
        this.localStorageService.set('pages', currentData);
      }
    }
    this.matDialogRef.close();
  }

  closeDialog(): void {
    this.matDialogRef.close();
  }

  checkValidator(): boolean {
    return !(this.composeForm.getRawValue().image && !this.composeForm.getRawValue().body
      || this.composeForm.getRawValue().body && !this.composeForm.getRawValue().image);
  }
}
