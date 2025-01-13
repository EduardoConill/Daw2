import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUsuarios } from '../../interfaces/iusuarios';
import { UserCardComponent } from "../../components/user-card/user-card.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  usersService = inject(UsersService);
  arrUsers : IUsuarios[] ;

  constructor(){
    this.arrUsers = [];
  }

  async ngOnInit() : Promise<void>{
    try{
      const users = await this.usersService.getAllWithPromises();
    this.arrUsers = users;
    }catch(err) {
      console.log('Error al conectar a la API: '+err);
    }
  }



  
}
