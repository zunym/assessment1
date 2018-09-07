import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor(private noteSvc: NoteService) { }
  title = "User Registration Form";
  ngOnInit() {
  }

  addMyThought(form: NgForm) {
    console.log('form: ', form.value, 'name: ', form.value.name);

    this.noteSvc
      .addNote(form.value)
      .subscribe((result) => {
        console.log('form value: ', result);
      });

    form.resetForm();
  }
}
