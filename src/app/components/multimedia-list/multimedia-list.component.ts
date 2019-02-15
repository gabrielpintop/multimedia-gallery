import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multimedia-list',
  templateUrl: './multimedia-list.component.html',
  styleUrls: ['./multimedia-list.component.css']
})
export class MultimediaListComponent implements OnInit {
  public multimediaList = [
    {
      type: {
        typeId: 'Video'
      },
      title: 'Test video',
      author: 'Pexels',
      creationDate: '2019-02-14',
      city: 'Bogotá',
      country: 'Colombia',
      category: {
        name: 'Forest'
      },
      url:
        // tslint:disable-next-line: max-line-length
        'https://player.vimeo.com/external/214503702.hd.mp4?s=024a43c102f8e7bbe0f54105ae3bbe7cef64ffb1&profile_id=119&oauth2_token_id=57447761&download=1',
      imageFile: '',
      createdBy: {
        user: {
          username: 'gabopinto'
        }
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
      createdBy: {
        user: {
          username: 'gabopinto'
        }
      }
    },
    {
      type: {
        typeId: 'Image'
      },
      title: 'Gorilla',
      author: 'Pixabay',
      creationDate: '2019-02-14',
      city: 'Kampala',
      country: 'Uganda',
      category: {
        name: 'Animals'
      },
      imageFile: '',
      url:
        // tslint:disable-next-line: max-line-length
        'https://images.pexels.com/photos/39571/gorilla-silverback-animal-silvery-grey-39571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      createdBy: {
        user: {
          username: 'gabopinto'
        }
      }
    }
  ];

  public loading = true;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
