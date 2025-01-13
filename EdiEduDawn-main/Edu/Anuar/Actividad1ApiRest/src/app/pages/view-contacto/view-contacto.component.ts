import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { IUsuarios } from '../../interfaces/iusuarios';
import { BotoneraUsersComponent } from '../../components/botonera-users/botonera-users.component';

@Component({
  selector: 'app-view-contacto',
  standalone: true,
  imports: [RouterLink, BotoneraUsersComponent],
  templateUrl: './view-contacto.component.html',
  styleUrl: './view-contacto.component.css'
})
export class ViewContactoComponent {

  miUsuario! : IUsuarios;

  activatedRoute = inject(ActivatedRoute);
  userService = inject(UsersService);



  ngOnInit(): void{
      this.activatedRoute.params.subscribe( async (params: any) => {
      
        let id : string = params.iduser as string;

        try{
          this.miUsuario = await this.userService.getById(id);
      }catch(err){
        console.log("Error al llamar a la API: "+err);
      }
    });
  }

}