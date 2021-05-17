import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [AppComponent, RecipeComponent, RecipeAddComponent, RecipeEditComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
