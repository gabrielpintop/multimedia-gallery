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

  constructor() {}

  public clip = {
    name: '',
    startSecond: 0,
    endSecond: 0
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

  private clipsOptions = [
    {
      name: 'First clip',
      startSecond: 0,
      endSecond: 12
    },
    {
      name: 'Second clip',
      startSecond: 4,
      endSecond: 12
    },
    {
      name: 'Third clip',
      startSecond: 8,
      endSecond: 10
    }
  ];

  public urlToPlay = '';

  private originalUrl = '';

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.multimedia.currentValue) {
      this.originalUrl = changes.multimedia.currentValue.url;
      this.urlToPlay = this.originalUrl;
    }
  }

  setDuration(media) {
    this.duration = Math.floor(media.duration);
    this.clip.endSecond = this.duration;
    this.loadedMetadata = true;
    this.clips = this.clipsOptions;
  }

  onSubmit() {
    if (this.clip.name === '') {
      this.clipFormErrorMessage = 'The name of the clip is required';
      this.clipFormError = true;
    } else if (this.clip.startSecond >= this.duration) {
      this.clipFormErrorMessage =
        'The start second can´t be equal or greater to the video duration';
      this.clipFormError = true;
    } else if (this.clip.endSecond <= 0) {
      this.clipFormErrorMessage =
        'The end second can´t be equal or less than 0';
      this.clipFormError = true;
    } else if (this.clip.endSecond <= this.clip.startSecond) {
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
        this.clip.startSecond = 0;
        this.clip.endSecond = this.duration;
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
      this.originalUrl + '#t=' + clip.startSecond + ',' + clip.endSecond;
    document.getElementById('mediaBody').scrollIntoView();
  }

  close() {
    this.multimedia = null;
    this.clipFormError = false;
    this.clipFormErrorMessage = '';
    this.clipLoadingForm = false;
    this.selectedClip = false;
    this.closeModal.emit(true);
  }
}
