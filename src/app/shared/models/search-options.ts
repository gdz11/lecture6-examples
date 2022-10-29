
import { InjectionToken } from '@angular/core'

export interface SearchOptions {
    enableLimits: boolean;
    maxItemCount: number;
}


export const SearchOptionsToken = new InjectionToken<SearchOptions>('search-options');

