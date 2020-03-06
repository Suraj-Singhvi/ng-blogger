import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtalyticsConfig {
  readonly Ajax = {
    // in milliseconds
    ShortTimeout: 5000,
    DefaultTimeout: 10000,
    LongTimeout: 30000
  };
}
