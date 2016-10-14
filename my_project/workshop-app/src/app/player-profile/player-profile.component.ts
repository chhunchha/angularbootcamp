import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css'],
  providers: [FormBuilder]

})

export class PlayerProfileComponent implements OnInit {

  profileFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.profileFormGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.minLength(3)] ],
      birthdate: ['', Validators.required],
      phone: ['']
    });
  }

  saveProfile(): void {
    alert("Saved!");
    console.log("Profile Saved", this.profileFormGroup.value);
  }
}
