import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multimedia-list',
  templateUrl: './multimedia-list.component.html',
  styleUrls: ['./multimedia-list.component.css']
})
export class MultimediaListComponent implements OnInit {
  private multimediaListOptions = [
    {
      type: {
        typeId: 'Video'
      },
      title: 'Forest from a drone',
      author: 'Pexels',
      creationDate: '2019-02-14',
      city: 'Bogotá',
      country: 'Colombia',
      category: {
        name: 'Forests'
      },
      url:
        // tslint:disable-next-line: max-line-length
        'https://player.vimeo.com/external/214503702.hd.mp4?s=024a43c102f8e7bbe0f54105ae3bbe7cef64ffb1&profile_id=119&oauth2_token_id=57447761&download=1',
      imageFile: '',
      user: {
        username: 'gabopinto'
      }
    },
    {
      type: {
        typeId: 'Image'
      },
      title: 'Gorilla',
      author: 'Pixabay',
      creationDate: '2019-02-15',
      city: 'Kampala',
      country: 'Uganda',
      category: {
        name: 'Animals'
      },
      imageFile: '',
      url:
        // tslint:disable-next-line: max-line-length
        'https://images.pexels.com/photos/39571/gorilla-silverback-animal-silvery-grey-39571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      user: {
        username: 'gabopinto'
      }
    },
    {
      type: {
        typeId: 'Audio'
      },
      title: 'To My Love',
      author: 'Bomba Estereo',
      creationDate: '2019-02-14',
      city: 'Bogotá',
      country: 'Colombia',
      category: {
        name: 'Songs'
      },
      imageFile: '',
      url:
        // tslint:disable-next-line: max-line-length
        'https://d2tml28x3t0b85.cloudfront.net/tracks/stream_files/000/696/722/original/Bomba%20Est%C3%A9reo%20-%20To%20My%20Love%20%28Moombahton%20Bootleg%29.mp3?1514668785',
      user: {
        username: 'gabopinto'
      }
    },
    {
      type: {
        typeId: 'Video'
      },
      title: 'Dog playing',
      author: 'Fan made',
      creationDate: '2019-02-14',
      city: 'London',
      country: 'England',
      category: {
        name: 'Animals'
      },
      url:
        // tslint:disable-next-line: max-line-length
        'https://player.vimeo.com/external/210743784.hd.mp4?s=54d206e642d880aa41dfbae377ca80f71c466761&profile_id=119&oauth2_token_id=57447761&download=1',
      imageFile: '',
      user: {
        username: 'gabopinto'
      }
    }
  ];

  private modal = null;

  public multimediaList = [];

  public loading = true;

  public mediaType = '';

  public category = '';

  public categories = [];

  public selectedMultimedia = null;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
      this.loadCategories();
      this.multimediaListOptions.sort(this.compare);
      this.multimediaList = this.multimediaListOptions;
    }, 0);
  }

  showFilter() {
    if (this.mediaType === '' && this.category === '') {
      this.multimediaList = this.multimediaListOptions;
    } else {
      this.multimediaList = this.multimediaListOptions.filter(multimedia => {
        const categoryBoolean =
          this.category === ''
            ? true
            : multimedia.category.name === this.category;

        const mediaBoolean =
          this.mediaType === ''
            ? true
            : multimedia.type.typeId === this.mediaType;

        console.log(
          mediaBoolean + ' ' + multimedia.title + ' ' + categoryBoolean
        );

        return categoryBoolean && mediaBoolean;
      });
    }
  }

  loadCategories() {
    this.multimediaListOptions.map(multimedia => {
      const category = multimedia.category.name;
      if (this.categories.indexOf(category) === -1) {
        this.categories.push(category);
      }
    });
  }

  selectMultimedia(multimedia, modal) {
    this.selectedMultimedia = multimedia;
    this.modal = modal;
    this.modal.show();
  }

  openLoginModal(modal) {
    this.modal = modal;
    this.modal.show();
  }

  closeModal(close) {
    this.modal.hide();
  }

  compare(a, b) {
    if (a.creationDate < b.creationDate) {
      return 1;
    }
    if (a.creationDate > b.creationDate) {
      return -1;
    }
    return 0;
  }
}
