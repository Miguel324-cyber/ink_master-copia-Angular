import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  //verifica que el usuario este iniciado
  isAuthenticated(): boolean {
    if (typeof window !== 'undefined' && window.localStorage) {
      return !!localStorage.getItem('token');
    }
    return false;
  }

  logout(){
    if (typeof window !== 'undefined' && window.localStorage) {

      localStorage.removeItem('token');
      console.log('Token eliminado')
    }
    this.router.navigate(['/inicio'])
  }
}

