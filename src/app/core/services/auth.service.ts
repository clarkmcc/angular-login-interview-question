import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor() {}

    /*
    Authenticates with the following data:
    Username: blake
    Password: 12341234
     */
    public login(loginObject: { username: string; password: string }): Observable<boolean> {
        return new Observable<boolean>(subscriber => {
            loginObject.username === 'blake' && loginObject.password === '12341234'
                ? subscriber.next(true)
                : subscriber.error(new Error('Unauthenticated'));
        });
    }
}
