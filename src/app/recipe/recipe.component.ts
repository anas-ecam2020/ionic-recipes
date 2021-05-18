import { Component, OnInit } from '@angular/core';
import { RestService, Recipe } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  recipes : Recipe[] = [];
  recipe : Recipe = {
      id: 0,
      category: {
        title: "Déjeuner"
      },
      title: "test test test",
      content: "test test test",
      image: "",
      favorite: false,
      time: 5,
      difficulty: "",
      portions: 0
  };

  show = false;

  //instancier les services Rest & d'une Route à partir de librarie Router
  constructor(public rest:RestService, private router: Router) { }

  //au démarrage du composant
  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes() {
    this.rest.getRecipes().subscribe(
      (response) => {
        console.log(response);
        this.recipes = response;
      }
    )
  }

  add() {
    this.router.navigate(['/recipe-add']);
  }

  delete(id: number) {
    this.rest.deleteRecipe(id).subscribe(
      (response) => {
        console.log(response);
        this.ngOnInit();
      },
    err => {
      console.log("Error");
    }
    )   
  }

  showDetail(recipe: Recipe) {
    console.log(recipe);
    this.recipe = recipe;
    this.show = true;
  }

  deleteRecipe(id: number) {
    this.rest.deleteRecipe(id).subscribe(
      (response) => {
        console.log(response);
        this.ngOnInit();
      },
    err => {
      console.log("Error");
    }
    )   
  }
}