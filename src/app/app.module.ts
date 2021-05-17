import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent, RecipeComponent, RecipeAddComponent, RecipeEditComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
