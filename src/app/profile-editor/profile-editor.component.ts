import { Component, OnInit } from '@angular/core';

import { FormArray,FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.less']
})
export class ProfileEditorComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['',Validators.required,Validators.minLength(4)],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: ['']
    }),
    aliases: this.fb.array([this.fb.control('')])
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get aliases(){
    return this.profileForm.get('aliases') as FormArray;
  }
  addAlias(){
    this.aliases.push(this.fb.control(''));
  }
  onSubmit(){
    console.log(this.profileForm.value);
  }
}
