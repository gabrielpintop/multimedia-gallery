import { ClipsService } from 'src/app/services/clips/clips.service';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-multimedia-details',
  templateUrl: './multimedia-details.component.html',
  styleUrls: ['./multimedia-details.component.css']
})
export class MultimediaDetailsComponent implements OnInit, OnChanges {
  @Input() multimedia;

  @Input() authenticated;

  @Output() private closeModal = new EventEmitter<boolean>();

  constructor(
    private clipsService: ClipsService
  ) {}

  public clip = {
    name: '',
    initialSec: 0,
    finalSec: 0
  };

  public selectedClip = null;

  public clipLoadingForm = false;

  public clipFormErrorMessage = '';

  public clipFormError = false;

  public duration = 0;

  public loadedMetadata = false;

  public success = '#28a745';

  public clipSubmitSuccess = false;

  public clips = null;

  public startTime = 0;
  public endTime = Number.MAX_VALUE;

  private clipsOptions = [];

  public urlToPlay = '';

  private originalUrl = '';

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.multimedia.currentValue) {
      this.originalUrl = changes.multimedia.currentValue.url;
      this.urlToPlay = this.originalUrl;
      this.loadClips();
    }
  }

  loadClips() {
    console.log(this.multimedia);
    this.clipsService
      .getClips(this.multimedia)
      .then((data: any) => {
        this.clipsOptions = data.fields;
        console.log(this.clipsOptions)
        this.clipsOptions.sort(this.compare);
        this.clips = this.clipsOptions;
      })
      .catch(err => {
        alert(err);
      });
  }

  compare(a, b) {
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
    return 0;
  }

  setDuration(media) {
    this.duration = Math.floor(media.duration);
    this.clip.finalSec = this.duration;
    this.loadedMetadata = true;
    this.clips = this.clipsOptions;
  }

  onSubmit() {

    if (this.clip.name === '') {
      this.clipFormErrorMessage = 'The name of the clip is required';
      this.clipFormError = true;
    } else if (this.clip.initialSec >= this.duration) {
      this.clipFormErrorMessage =
        'The start second can´t be equal or greater to the video duration';
      this.clipFormError = true;
    } else if (this.clip.finalSec <= 0) {
      this.clipFormErrorMessage =
        'The end second can´t be equal or less than 0';
      this.clipFormError = true;
    } else if (this.clip.finalSec <= this.clip.initialSec) {
      this.clipFormErrorMessage =
        'The end second can´t be equal or less than the start second';
      this.clipFormError = true;
    } else {
      this.clipFormErrorMessage = '';
      this.clipFormError = false;
      this.clipSubmitSuccess = false;
      this.clipLoadingForm = true;

      setTimeout(() => {
        this.clip.name = '';
        this.clip.initialSec = 0;
        this.clip.finalSec = this.duration;
        this.clipLoadingForm = false;
        this.clipSubmitSuccess = true;
      }, 1000);
    }
  }

  removeClip() {
    if (this.selectedClip) {
      this.selectedClip = null;
    }
  }

  playClip(clip) {
    console.log(clip);
    this.selectedClip = clip;
    this.urlToPlay =
      this.originalUrl + '#t=' + clip.initialSec + ',' + clip.finalSec;
    document.getElementById('mediaBody').scrollIntoView();
  }

  close() {
    if (this.multimedia.type.typeId === 'Video') {
      const video = document.getElementById('mediaPlayer') as HTMLVideoElement;
      video.pause();
    } else if (this.multimedia.type.typeId === 'Audio') {
      const audio: HTMLMediaElement = document.getElementById(
        'mediaPlayer'
      ) as HTMLAudioElement;
      audio.pause();
    }

    this.clipFormError = false;
    this.clipFormErrorMessage = '';
    this.clipLoadingForm = false;
    this.selectedClip = false;
    this.closeModal.emit(true);
  }
}
