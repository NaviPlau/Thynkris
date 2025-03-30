import { Component, inject, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NavigatorService } from '../../shared/services/navigator/navigator.service';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  auth = inject(AuthService)
  navigator = inject(NavigatorService)
  passVisible = signal(false)

  togglePassVisible(){
    this.passVisible.set(!this.passVisible())
  }
 
}
