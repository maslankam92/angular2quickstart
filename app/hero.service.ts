
/**
 * Created by MarcinM on 26-Feb-16.
 */
import {Injectable} from "angular2/core";
import {HEROES} from "./mock-heroes";
import {Hero} from './hero';

@Injectable()
export class HeroService {
    getHeroes(){
        return Promise.resolve(HEROES);
    }
//    getHeroesSlowly(){
//        return new Promise<Hero[]>(resolve =>
//        setTimeout(()=>resolve(HEROES), 3000)
//        );
//    }
}