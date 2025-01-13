import { Component, Input } from '@angular/core';
import { IUsuarios } from '../../interfaces/iusuarios';
import { BotoneraUsersComponent } from '../botonera-users/botonera-users.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [RouterLink, BotoneraUsersComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() miUsuario!: IUsuarios;
  

}
