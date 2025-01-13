import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { IUsuarios } from '../../interfaces/iusuarios';
@Component({
  selector: 'app-newuser',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './newuser.component.html',
  styleUrl: './newuser.component.css'
})
export class NewuserComponent {
  userForm: FormGroup ;
  tipo: string = "Añadir";

  activatedRoute = inject(ActivatedRoute);
  userService = inject(UsersService);
  router = inject(Router);

  constructor(){
    this.userForm = new FormGroup({
      first_name : new FormControl('',[Validators.required]),  
      last_name : new FormControl('',[Validators.required]),  
      username : new FormControl('',[Validators.required]),  
      email : new FormControl('',[Validators.required]),  
      image : new FormControl('',[Validators.required]),  
      password : new FormControl('',[Validators.required]),  
        }, []);
  }

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(async (params: any) =>{
      if(params.iduser){
        //pedir serie por id
        this.tipo = "Actualizar";
        const response = await this.userService.getById(params.idserie);

        this.userForm = new FormGroup({
          _id: new FormControl(response._id, []),
          first_name: new FormControl(response.first_name, [Validators.required]),
          last_name: new FormControl(response.last_name, [Validators.required]),
          username: new FormControl(response.username, [Validators.required]),
          email: new FormControl(response.email, [Validators.required]),
          image: new FormControl(response.image, [Validators.required]),
          password: new FormControl(response.password,[Validators.required])
        }, []);
      }
    });
  }

  async getDataForm() {
    
    let user: IUsuarios = this.userForm.value;

    if(user.first_name != ''){
          
      if(user._id){
        //Actualizar
        const response = await this.userService.update(user);

        if (response.id) {
          alert(`El usuario ${response.first_name} se ha actualizado correctamente`);
        this.router.navigate(['/home']);
        } else {
          alert(`Ha ocurrido un problema en la actualizacion`);
        }
      }
      else{
        //Insertar
        const response = await this.userService.insert(user);
        if(response.id){
          alert(`El usuario ${response.first_name} se ha añadido correctamente`);
          this.router.navigate(['/home']);
        }
        else {
          alert(`Ha ocurrido un problema en la insercion`);
        }
      }
    }else{
      alert(`Debe de rellenar todos los campos`);
    }
  }

}
