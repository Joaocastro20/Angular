import { Component, OnInit } from '@angular/core';
import { interval} from 'rxjs';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-operador-share-replay',
  templateUrl: './operador-share-replay.component.html',
  styleUrls: ['./operador-share-replay.component.scss']
})
export class OperadorShareReplayComponent implements OnInit {

  constructor(
    private apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
    // const shared$ = interval(2000).pipe(
    //   take(6),
    //   shareReplay(3)
    // );

    // shared$.subscribe(x => console.log('sub A: ', x));
    // shared$.subscribe(y => console.log('sub B: ', y));

    // setTimeout(() => {
    //   shared$.subscribe(y => console.log('sub C: ', y));
    // }, 11000);
    const result$ = this.apiService.getUserSwitchMap();
    const result2$ = this.apiService.getUserSwitchMap();
    const result3$ = this.apiService.getUserSwitchMap();

    result$.subscribe(console.log);
    result2$.subscribe(console.log);
    result3$.subscribe(console.log);

  }

}
