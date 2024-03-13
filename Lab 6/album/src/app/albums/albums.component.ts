import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {Album} from "../models";
import {NgForOf, NgIf} from "@angular/common";
import {AlbumsService} from "../albums.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    NgIf,
    FormsModule
  ],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})

export class AlbumsComponent implements OnInit {
  albums!: Album[];
  loaded!: Boolean;
  newAlbum!: Album;

  constructor(private albumsService: AlbumsService) {
    this.newAlbum = {
      userId: 1,
      id: 101,
      title: ''
    }
  }

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums(){
    this.loaded = false;
    this.albumsService.getAlbums().subscribe((albums) => {
        this.albums = albums;
        this.loaded = true;
      }
    );
  }

  deleteAlbum(id: number) {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      console.log(`Deleted: ${id} album`);
    })
    this.albums = this.albums.filter((album) => album.id !== id);
  }

  addAlbum() {
    this.albumsService.createAlbum(this.newAlbum).subscribe((album) => {
      album.id = this.albums.length+1;
      console.log(album)
      this.albums.push(album)
      alert("Album Created")
    })
  }

}
