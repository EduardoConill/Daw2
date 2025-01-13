import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-botonera-users',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './botonera-users.component.html',
  styleUrl: './botonera-users.component.css'
})
export class BotoneraUsersComponent {

  @Input() miId: string = "";
  @Input() parent: string = "";

  userService = inject(UsersService);
  router = inject(Router);

  async borrarUser(id: string) :Promise<void> {
    let confirmacion = confirm('¿Quiere borrar el usuario: '+this.miId + '?');
    if(confirmacion){
      let response = await this.userService.delete(id);
      if(response._id){
        alert("Se ha borrado correctamente el usuario "+response.username);
        if(this.parent == 'view'){
          this.router.navigate(['/home']);
        }
      }
    }
  }
}
