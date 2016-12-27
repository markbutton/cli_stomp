import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';

import { FeedService } from '../../services/rss/feed.service';
import { FeedEntry } from '../../models/feed-entry';
import { Feed } from '../../models/feed';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  private feedUrl: string = 'https%3A%2F%2Fwww.becompany.ch%2Fen%2Fblog%2Ffeed.xml';
  private feeds: Array<FeedEntry> = [];
  private feed: Feed;

  constructor (private feedService: FeedService) {}

  ngOnInit() {
    this.refreshFeed();
  }

  private refreshFeed() {
    this.feedService.getFeedContent(this.feedUrl)
        .subscribe(
            feed => this.feeds = feed.items,
            error => console.log(error));
  }

 private openLinkInBrowser(link) {
    window.open(link);
  }

}
