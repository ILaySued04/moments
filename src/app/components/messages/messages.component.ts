import { Component } from '@angular/core';
import { MessagensService } from '../../services/messagens.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {

  constructor(public messagesServices: MessagensService) {}
}
