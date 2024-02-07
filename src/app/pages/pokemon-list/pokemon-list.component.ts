import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { PokemonItemComponent } from '../../components/pokemon-item/pokemon-item.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';

import { EMPTY, Observable, catchError } from 'rxjs';
import { PokemonResults } from '../../interfaces/pokemon';
import { PokemonService } from '@services/pokemon.service';

@Component({
	selector: 'app-pokemon-list',
	standalone: true,
	imports: [AsyncPipe, PokemonItemComponent, ErrorMessageComponent],
	templateUrl: './pokemon-list.component.html',
	styleUrl: './pokemon-list.component.css',
})
export class PokemonListComponent implements OnInit {
	public pokemonResults$!: Observable<PokemonResults>;
	public errorMessage!: string;
	private _pokemonsService: PokemonService = inject(PokemonService);

	ngOnInit(): void {
		this.pokemonResults$ = this._pokemonsService.getPokemonsList().pipe(
			catchError((error: string) => {
				this.errorMessage = error;
				return EMPTY;
			})
		);
	}
}
