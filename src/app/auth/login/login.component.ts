import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup = new FormGroup({
        username: new FormControl(''),
        password: new FormControl('')
    });
    public loggedIn$: Observable<boolean> = new BehaviorSubject(false);

    constructor(private _authService: AuthService, private _fb: FormBuilder) {}

    ngOnInit() {}

    public login(): void {
        this._authService
            .login(this.loginForm.value)
            .pipe(tap(() => (this.loggedIn$ = of(true))))
            .subscribe(
                () => alert('Logged in!'),
                () => alert('Authentication failed')
            );
    }
}
