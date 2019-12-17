import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../forbidden-name.directive';
import { identityRevealedValidator } from '../identity-revealed.directive';
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.less']
})
export class HeroFormComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  hero = new Hero(19, 'test','ctse','street')
  submitted = false;
  heroForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      'id': new FormControl(this.hero.id),
      'name': new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i)
      ]),
      'alterEgo': new FormControl(this.hero.alterEgo),
      'power': new FormControl(this.hero.power,Validators.required)
    },{validators: identityRevealedValidator })
  }
  onSubmit(){
    this.submitted = true;
    console.log(this.model);
  }
  get diagostic(){
    return JSON.stringify(this.model);
  }
  newHero(){
    this.model = new Hero(42,'','');
  }
  get name(){
    return this.heroForm.get('name')
  }
  get power(){return this.heroForm.get('power')}
}
