import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { SelectionScreenComponent } from './selection-screen/selection-screen.component';
import { RacketListComponent } from './racket-list/racket-list.component';
import { RacketCardComponent } from './racket-card/racket-card.component';
import { RacketSearchComponent } from './racket-search/racket-search.component';
import { RacketFilterComponent } from './racket-filter/racket-filter.component';
import { SelectedRacketComponent } from './selected-racket/selected-racket.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { RacketComponent } from './racket/racket.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeScreenComponent },
  { path: 'selection', component: SelectionScreenComponent},
  { path: 'profile', component: PlayerProfileComponent},
  { path: 'racket/:racket', component: RacketComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    SelectionScreenComponent,
    RacketListComponent,
    RacketCardComponent,
    RacketSearchComponent,
    RacketFilterComponent,
    SelectedRacketComponent,
    PlayerProfileComponent,
    RacketComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
