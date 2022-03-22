import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Routes
import { appRouting } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
  ],
  imports: [BrowserModule, appRouting],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
