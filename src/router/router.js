import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Glavnay from '../views/glavnay'
import Carts from '../views/carts'
import Readme from '../views/readme'
import Kontakts from '../views/kontakts'
import Vorotaone from '../routers/vorotaone'
import Vorotatoo  from '../routers/vorotatoo'
import Adressnietablichki  from '../routers/adressnietablichki'
import Besedkiteplici  from '../routers/besedkiteplici'
import Cvetochnicy  from '../routers/cvetochnicy'
import Cyveniry  from '../routers/cyveniry'
import Dekorativnaymebel  from '../routers/dekorativnaymebel'
import Kaminienabory  from '../routers/kaminienabory'
import Kovaniedveri  from '../routers/kovaniedveri'
import Kacheli  from '../routers/kacheli'
import Lestnicaogragdeniy  from '../routers/lestnicaogragdeniy'
import Mangali  from '../routers/mangali'
import Navesykozyrki  from '../routers/navesykozyrki'
import Ogragdeniyzabori  from '../routers/ogragdeniyzabori'
import Okonierechetki  from '../routers/okonierechetki'
import Stolby  from '../routers/stolby'
import Raznoe  from '../routers/raznoe'
import Rityalnieogragdeniy  from '../routers/rityalnieogragdeniy'
import Voliery  from '../routers/voliery'
import Kozyrky  from '../routers/kozyrky'
import Navesi  from '../routers/navesi'
import Naborydlykamina  from '../routers/naborydlykamina'
import Rechetkidlykaminov  from '../routers/rechetkidlykaminov'
import Adresnietablichkione  from '../routers/adresnietablichkione'
import Pochtoviychik  from '../routers/pochtoviychik'
import Pergolyvinogradniki  from '../routers/pergolyvinogradniki'
import Besedki from '../routers/besedki'
import Teplici from '../routers/teplici'
import Yrni from '../routers/yrni'
import Kachelione from '../routers/kachelione'
import Lavki from '../routers/lavki'
import Bytilnici from '../routers/bytilnici'
import Podcvechniki from '../routers/podcvechniki'
import Klychnici from '../routers/klychnici'
import Lestnicaogragdeniydladoma from '../routers/lestnicaogragdeniydladoma'
import Lestnicaogragdeniydlaylici from '../routers/lestnicaogragdeniydlaylici'
import Tyaletnistolik from '../routers/tyaletnistolik'
import Tymbapodobyv from '../routers/tymbapodobyv'
import Itagerka from '../routers/itagerka'
import Styly from '../routers/styly'
import Pyfiki from '../routers/pyfiki'
import Nastenievechalki from '../routers/nastenievechalki'
import Kyxonienabori from '../routers/kyxonienabori'
import Divanikresla from '../routers/divanikresla'
import Kreslokachalka from '../routers/kreslokachalka'
import Tabyretki from '../routers/tabyretki'
import Stoli from '../routers/stoli'
import Polkanastenay from '../routers/polkanastenay'
import Vechalki from '../routers/vechalki'
import Krovati from '../routers/krovati'
import Knignici from '../routers/knignici'
import Zontovnicy from '../routers/zontovnicy'
import Fryktovnicy from '../routers/fryktovnicy'
import Cvetilniki from '../routers/cvetilniki'
import Rychki from '../routers/rychki'
import Podstavkipodvany from '../routers/podstavkipodvany'
import Legaki from '../routers/legaki'
import Lystry from '../routers/lystry'
import Dlagivotnix from '../routers/dlagivotnix'
import Zerkala from '../routers/zerkala'





let router = new Router({
    routes: [
     
        {
            path:'/',
            name: 'glavnay',
            component: Glavnay
        },
        {
            path:'/carts',
            name: 'carts',
            component: Carts,
            // props: true
        },
        {
            path:'/readme',
            name: 'readme',
            component: Readme
        },
        {
            path:'/kontakts',
            name: 'kontakts',
            component: Kontakts
        },
        {
            path:'/vorotaone',
            name: 'vorotaone',
            component: Vorotaone 
        },
        {
            path:'/vorotatoo',
            name: 'vorotatoo',
            component:Vorotatoo  
        },
        {
            path:'/navesykozyrki',
            name: 'navesykozyrki',
            component: Navesykozyrki   
        },
        {
            path:'/adressnietablichki',
            name: 'adressnietablichki',
            component: Adressnietablichki  
        },
       
        {
            path:'/besedkiteplici',
            name: 'besedkiteplici',
            component: Besedkiteplici  
        },
        {
            path:'/cvetochnicy',
            name: 'cvetochnicy',
            component: Cvetochnicy   
        },
        {
            path:'/cyveniry',
            name: 'cyveniry',
            component: Cyveniry,
            
        },
        {
            path:'/dekorativnaymebel',
            name: 'dekorativnaymebel',
            component: Dekorativnaymebel,
            props: true
        },
        {
            path:'/kaminienabory',
            name: 'kaminienabory',
            component: Kaminienabory
        },
       
        {
            path:'/kovaniedveri',
            name: 'kovaniedveri',
            component: Kovaniedveri
        },
        {
            path:'/kacheli',
            name: 'kacheli',
            component: Kacheli
        },
        {
            path:'/lestnicaogragdeniy',
            name: 'lestnicaogragdeniy',
            component: Lestnicaogragdeniy
        },
        {
            path:'/mangali',
            name: 'mangali',
            component: Mangali
        },
        {
            path:'/navesykozyrki',
            name: 'navesykozyrki',
            component: Navesykozyrki
        },
        {
            path:'/ogragdeniyzabori',
            name: 'ogragdeniyzabori',
            component: Ogragdeniyzabori
        },
        {
            path:'/okonierechetki',
            name: 'okonierechetki',
            component: Okonierechetki
        },
        {
            path:'/itagerka',
            name: 'itagerka',
            component: Itagerka
        },
        {
            path:'/raznoe',
            name: 'raznoe',
            component: Raznoe
        },
        {
            path:'/rityalnieogragdeniy',
            name: 'rityalnieogragdeniy',
            component: Rityalnieogragdeniy
        },
        {
            path:'/voliery',
            name: 'voliery',
            component: Voliery
        },
        {
            path:'/kozyrky',
            name: 'kozyrky',
            component: Kozyrky
        },
        {
            path:'/navesi',
            name: 'navesi',
            component: Navesi
        },
        {
            path:'/naborydlykamina',
            name: 'naborydlykamina',
            component: Naborydlykamina 
        },
        {
            path:'/rechetkidlykaminov',
            name: 'rechetkidlykaminov',
            component: Rechetkidlykaminov
        },
        {
            path:'/adresnietablichkione',
            name: 'adresnietablichkione',
            component: Adresnietablichkione
        },
        {
            path:'/pochtoviychik',
            name: 'pochtoviychik',
            component: Pochtoviychik
        },
        {
            path:'/pergolyvinogradniki',
            name: 'pergolyvinogradniki',
            component: Pergolyvinogradniki
        },
        {
            path:'/besedki',
            name: 'besedki',
            component: Besedki
        },
        {
            path:'/teplici',
            name: 'teplici',
            component: Teplici
        },
        {
            path:'/yrni',
            name: 'yrni',
            component: Yrni
        },
        {
            path:'/kachelione',
            name: 'kachelione',
            component: Kachelione
        },
        {
            path:'/lavki',
            name: 'lavki',
            component: Lavki
        },
        {
            path:'/bytilnici',
            name: 'bytilnici',
            component: Bytilnici
        },
        {
            path:'/podcvechniki',
            name: 'podcvechniki',
            component: Podcvechniki
        },
        {
            path:'/klychnici',
            name: 'klychnici',
            component: Klychnici
        },
        {
            path:'/lestnicaogragdeniydladoma',
            name: 'lestnicaogragdeniydladoma',
            component: Lestnicaogragdeniydladoma
        },
        {
            path:'/lestnicaogragdeniydlaylici',
            name: 'lestnicaogragdeniydlaylici',
            component: Lestnicaogragdeniydlaylici
        },
        {
            path:'/tyaletnistolik',
            name: 'tyaletnistolik',
            component: Tyaletnistolik
        },
        {
            path:'/tymbapodobyv',
            name: 'tymbapodobyv',
            component: Tymbapodobyv
        },
        {
            path:'/styly',
            name: 'styly',
            component: Styly
        },
        {
            path:'/pyfiki',
            name: 'pyfiki',
            component: Pyfiki
        },
        {
            path:'/nastenievechalki',
            name: 'nastenievechalki',
            component: Nastenievechalki
        },
        {
            path:'/kyxonienabori',
            name: 'kyxonienabori',
            component: Kyxonienabori
        },
        {
            path:'/divanikresla',
            name: 'divanikresla',
            component: Divanikresla
        },
        {
            path:'/kreslokachalka',
            name: 'kreslokachalka',
            component: Kreslokachalka
        },
        {
            path:'/tabyretki',
            name: 'tabyretki',
            component: Tabyretki
        },
        {
            path:'/stoli',
            name: 'stoli',
            component: Stoli
        },
        {
            path:'/polkanastenay',
            name: 'polkanastenay',
            component: Polkanastenay
        }, 
        {
            path:'/vechalki ',
            name: 'vechalki ',
            component: Vechalki 
        },
        {
            path:'/krovati',
            name: 'krovati',
            component: Krovati
        },
        {
            path:'/knignici',
            name: 'knignici',
            component: Knignici
        },
        {
            path:'/zontovnicy',
            name: 'zontovnicy',
            component: Zontovnicy
        },
        {
            path:'/fryktovnicy',
            name: 'fryktovnicy',
            component: Fryktovnicy
        },
        {
            path:'/stolby',
            name: 'stolby',
            component: Stolby
        },
        {
            path:'/cvetilniki',
            name: 'cvetilniki',
            component: Cvetilniki
        },
        {
            path:'/rychki',
            name: 'rychki',
            component: Rychki
        },
        {
            path:'/podstavkipodvany',
            name: 'podstavkipodvany',
            component: Podstavkipodvany
        },
        {
            path:'/legaki',
            name: 'knignilegakici',
            component: Legaki
        },
        {
            path:'/lystry',
            name: 'lystry',
            component: Lystry
        },
        {
            path:'/dlagivotnix',
            name: 'dlagivotnix',
            component: Dlagivotnix
        },
        {
            path:'/zerkala',
            name: 'zerkala',
            component: Zerkala
        },
           
    ],
    mode: 'history'
})

export default router