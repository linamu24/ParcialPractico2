import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  promedio=0;
  total=0;
  selectedBAnime!: Anime;
  selected = false;
  animes: Array<Anime> = [];
  constructor(private animeService: AnimeService) {}

  getAnimes(): void {
    
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
      animes.forEach(anime => {
        this.total+=anime.episode
        this.promedio += anime.Rating/animes.length
        
      });
    });
    
  }

  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedBAnime = anime;
  }

  ngOnInit() {
    this.getAnimes();
  }

}
