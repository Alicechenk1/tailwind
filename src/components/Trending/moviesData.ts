import BatmanBegins from '../../assets/batman_begins.jpg'
import Dune from '../../assets/dune.jpg'
import Sing2 from '../../assets/sing_2.jpg'
import SpiderMan from '../../assets/spider_man.jpg'
import TDKRises from '../../assets/the_dark_knight_rises.jpg'
import TDK from '../../assets/the_knight_knight.jpg'

export interface Movie {
    src: string;
    title: string;
    main: string;
    runtime: string;

}

export const movieData: Movie[] =[
    {
        src: BatmanBegins, title: 'Batman Begins', main: 'Christan Bale', runtime: '120m'
    },
     {
        src: Dune, title: 'Batman Begins', main: 'Christan Bale', runtime: '120m'
    },

     {
        src: Sing2, title: 'Batman Begins', main: 'Christan Bale', runtime: '120m'
    },
     {
        src: SpiderMan, title: 'Batman Begins', main: 'Christan Bale', runtime: '120m'
    },
     {
        src: TDKRises, title: 'Batman Begins', main: 'Christan Bale', runtime: '120m'
    },
     {
        src: TDK, title: 'Batman Begins', main: 'Christan Bale', runtime: '120m'
    }
]