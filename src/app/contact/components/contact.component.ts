import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactItems = [
    {
      name: 'Github',
      url: 'https://github.com/gon250'
    },
    {
      name: 'Stackoverflow',
      url: 'https://stackoverflow.com/users/2545964/gon250?tab=profile'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/gon250'
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/gbarbalopez/'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
