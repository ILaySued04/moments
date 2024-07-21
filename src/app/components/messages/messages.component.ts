import { Component } from '@angular/core';
import { MessagensService } from '../../services/messagens.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [
  ],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {

  constructor(public messagesServices: MessagensService) {}
}
