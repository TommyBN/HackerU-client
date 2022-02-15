import { Component, OnInit } from '@angular/core';
import { Lecturer } from '../models/Lecturer';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  lecturers: Lecturer[]
  lecturersCopy: Lecturer[]
  languages: number[]

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.getLecturers()
    this.getLanguages()
  }

  getLecturers() {
    this.mainService.getLecturers().subscribe(data => {
      this.lecturers = [...data]
      this.lecturersCopy = [...data]
    })
  }

  getLanguages() {
    this.mainService.getLanguages().subscribe(data => {
      this.languages = data
    })
  }

  filterByPlanguage(event) {
    let val = event.target.value
    if (val == "all") this.lecturers = this.lecturersCopy
    else {
      this.lecturers = this.lecturersCopy.filter(lect => 
        lect.languages.find(lang => lang == Number(val))
      )
    }
  }

}
