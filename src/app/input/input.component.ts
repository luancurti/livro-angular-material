import { Component, OnInit } from '@angular/core';
import { FloatPlaceholderType } from '@angular/material';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  valor: FloatPlaceholderType = 'always';
  mostar: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}