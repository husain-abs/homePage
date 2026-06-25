import { Injectable, signal } from '@angular/core';
import { getAuth, User } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  auth = getAuth();
  firestore = getFirestore();
  public currentUser = signal<User | null>(null);

  constructor() {
    this.auth.onAuthStateChanged((user) => {
      this.currentUser.set(user);
    });
  }

}
