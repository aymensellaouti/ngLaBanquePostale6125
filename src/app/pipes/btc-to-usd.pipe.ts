import { Pipe, PipeTransform } from '@angular/core';
const BTC_RATE = 101685;
@Pipe({
    name: 'btcToUsd',
    standalone: true
})
export class BtcToUsdPipe implements PipeTransform {

  transform(amount: number, reverse = false): number {
    return reverse ? amount / BTC_RATE :  amount * BTC_RATE;
  }

}
