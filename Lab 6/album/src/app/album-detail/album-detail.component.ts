import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Album} from "../models";
import {AlbumsService} from "../albums.service";
import {NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  album!: Album;
  loaded!: boolean;
  newAlbum!: Album;
  constructor(private route: ActivatedRoute, private albumService: AlbumsService) {
    this.newAlbum = {
      userId: 1,
      id: 1,
      title: ''
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params)=> {
      const albumId = Number(params.get('id'))
      this.loaded = false;

      this.albumService.geAlbum(albumId).subscribe((album) => {
        this.album = album;
        this.newAlbum.id = album.id;
        this.loaded = true;
      })
    })
  }

  updateAlbum() {
    this.albumService.updateAlbum(this.newAlbum, this.album.id).subscribe(() =>{
      alert('Updated');
      this.album = this.newAlbum;
    })
  }
}
