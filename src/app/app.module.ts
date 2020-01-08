import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Instructions ---->
// Replace configPlaceholder with environment.firebase
// import { environment } from '../environments/environment';
// import configPlaceholder from './env';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';

var config = {
  apiKey: "AIzaSyBIlpg2ZgEtY1CCRVNKPDMpxMDrxdU6cLo",
  authDomain: "firesidechat-dev.firebaseapp.com",
  databaseURL: "https://firesidechat-dev.firebaseio.com",
  projectId: "firesidechat-dev",
  storageBucket: "firesidechat-dev.appspot.com",
  messagingSenderId: "312073688827",
  appId: "1:312073688827:web:3407e0a855bd710673025e",
  measurementId: "G-R8G2BDX2J9"
};

@NgModule({
  declarations: [AppComponent, ChatComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}