import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void{
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyBZR_BBEVxHirSEnAD6lwaJIzmZr8xq_r8",
      authDomain: "ftecinstarj.firebaseapp.com",
      projectId: "ftecinstarj",
      databaseUrl: "https://ftecinstarj-default-rtdb.firebaseio.com/",
      storageBucket: "ftecinstarj.appspot.com",
      messagingSenderId: "264896638708",
      appId: "1:264896638708:web:a219dc393857d8ff18b8a1"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
