import { Component } from '@angular/core';
import {Photo} from "../models";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {AlbumsService} from "../albums.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  albumId!: number;
  photos!: Photo[];
  loaded!: boolean;

  constructor(private route: ActivatedRoute, private albumService: AlbumsService) {
  }

  ngOnInit(){
    this.route.paramMap.subscribe((params) =>{
      this.albumId = Number(params.get('id'))
      this.loaded = false;

      this.albumService.getPhotos(this.albumId).subscribe((photos) => {
        this.photos = photos;
        this.loaded = true;
      })
    })
  }

}
