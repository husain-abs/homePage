import { inject, Injectable, signal } from '@angular/core';
import { FirebaseService } from './firebase-service';
import { collection, getDocs, Query, query } from 'firebase/firestore';
import { FIRESTORE_CONSTANTS } from './constants';
import { Project } from './models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private fb = inject(FirebaseService);
  public projects = signal<Project[] | null>(null);


  async fetchProjects(){
    const collectionRef = collection(this.fb.firestore, FIRESTORE_CONSTANTS.PROJECTS_COLLECTION);
    const q = query(collectionRef);
    let projs: Project[] = [];
    (await getDocs(q)).docs.forEach(doc => {
      let data = doc.data();
      projs.push({
        id: doc.id,
        title: data['title'] || "",
        subtitle: data['subtitle'] || "",
        displayType: data['displayType'] || "writeup",
        description: data['description'] || "",
      })
    })

    this.projects.set(projs);

  }
}
