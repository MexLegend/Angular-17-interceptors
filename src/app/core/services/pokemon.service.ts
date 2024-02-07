import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonResults } from '@interfaces/pokemon';
import { environment } from '@environments/environment.development';

@Injectable({
	providedIn: 'root',
})
export class PokemonService {
	private _http: HttpClient = inject(HttpClient);

	getPokemonsList(): Observable<PokemonResults> {
		const url = `${environment.apiUrlBase}/pokemon?limit=10&offset=0`;
		return this._http.get<PokemonResults>(url);
	}
}
