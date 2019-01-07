import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  topics = [
    { name: 'Alexa', popularity: 1 },
    { name: 'TikTok', popularity: 0.9 },
    { name: 'Siri', popularity: 0.8 },
    { name: 'Premium Fuel', popularity: 0.7 },
    { name: 'Hair Trend', popularity: 0.6 },
    { name: 'Apple Inc.', popularity: 0.5 },
    { name: 'Nvidia Gaming Display', popularity: 0.45 },
    { name: 'Huawei', popularity: 0.4 },
    { name: 'CES 2019', popularity: 0.35 },
    { name: 'Blizzard', popularity: 0.3 },
    { name: 'Kohler\'s smart toilet', popularity: 0.29 },
    { name: 'HP Chromebook', popularity: 0.28 },
    { name: 'Cyberpunk', popularity: 0.27 },
    { name: 'Golden Globes', popularity: 0.26 },
    { name: 'Brie Larson', popularity: 0.25 },
    { name: 'ASB Classic Final', popularity: 0.2 },
    { name: 'NFC', popularity: 0.19 },
    { name: 'World Junior Championship', popularity: 0.19 },
    { name: 'Global Housing Downturn', popularity: 0.18 },
    { name: 'Bitcoin', popularity: 0.15 },
    { name: 'SQDC', popularity: 0.14 },
    { name: 'Crowdfunding', popularity: 0.1 },
  ]

  constructor() { }

  ngOnInit() {
  }

}
