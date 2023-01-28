import { Injectable } from '@angular/core';
import { IContactData } from './contactData.interface';

@Injectable()
export class ContactService {
  contacts: IContactData[] = [
    {
      id: 1,
      first_name: 'Otho',
      last_name: 'Tenman',
      email: 'otenman0@ucoz.com',
      gender: 'Male',
      marks: 329,
    },
    {
      id: 2,
      first_name: 'Tades',
      last_name: 'Pering',
      email: 'tpering1@linkedin.com',
      gender: 'Male',
      marks: 288,
    },
    {
      id: 3,
      first_name: 'Skell',
      last_name: 'Gowanson',
      email: 'sgowanson2@yelp.com',
      gender: 'Polygender',
      marks: 268,
    },
    {
      id: 4,
      first_name: 'Cullin',
      last_name: 'Mounsey',
      email: 'cmounsey3@exblog.jp',
      gender: 'Male',
      marks: 44,
    },
    {
      id: 5,
      first_name: 'Domenico',
      last_name: 'Rosenboim',
      email: 'drosenboim4@mail.ru',
      gender: 'Male',
      marks: 228,
    },
    {
      id: 6,
      first_name: 'Leodora',
      last_name: "O' Cuolahan",
      email: 'locuolahan5@amazon.de',
      gender: 'Female',
      marks: 155,
    },
    {
      id: 7,
      first_name: 'Lemar',
      last_name: 'Marnane',
      email: 'lmarnane6@ted.com',
      gender: 'Male',
      marks: 490,
    },
    {
      id: 8,
      first_name: 'Sherlock',
      last_name: 'Titterrell',
      email: 'stitterrell7@webnode.com',
      gender: 'Male',
      marks: 351,
    },
    {
      id: 9,
      first_name: 'Lanae',
      last_name: 'Battista',
      email: 'lbattista8@photobucket.com',
      gender: 'Female',
      marks: 228,
    },
    {
      id: 10,
      first_name: 'Fay',
      last_name: 'Penhaligon',
      email: 'fpenhaligon9@mapquest.com',
      gender: 'Female',
      marks: 377,
    },
    {
      id: 11,
      first_name: 'Butch',
      last_name: 'McColley',
      email: 'bmccolleya@ameblo.jp',
      gender: 'Male',
      marks: 442,
    },
    {
      id: 12,
      first_name: 'Mora',
      last_name: 'Botcherby',
      email: 'mbotcherbyb@t.co',
      gender: 'Female',
      marks: 421,
    },
    {
      id: 13,
      first_name: 'Cyndie',
      last_name: 'Filer',
      email: 'cfilerc@examiner.com',
      gender: 'Female',
      marks: 475,
    },
    {
      id: 14,
      first_name: 'Tobit',
      last_name: 'Carnell',
      email: 'tcarnelld@foxnews.com',
      gender: 'Male',
      marks: 467,
    },
    {
      id: 15,
      first_name: 'Waneta',
      last_name: 'Keeffe',
      email: 'wkeeffee@shop-pro.jp',
      gender: 'Female',
      marks: 59,
    },
    {
      id: 16,
      first_name: 'Sissy',
      last_name: 'Huortic',
      email: 'shuorticf@typepad.com',
      gender: 'Female',
      marks: 46,
    },
    {
      id: 17,
      first_name: 'Paddie',
      last_name: 'Cobbin',
      email: 'pcobbing@nbcnews.com',
      gender: 'Male',
      marks: 117,
    },
    {
      id: 18,
      first_name: 'Gun',
      last_name: 'Jeske',
      email: 'gjeskeh@opensource.org',
      gender: 'Male',
      marks: 472,
    },
    {
      id: 19,
      first_name: 'Edmund',
      last_name: 'McPheat',
      email: 'emcpheati@digg.com',
      gender: 'Male',
      marks: 441,
    },
    {
      id: 20,
      first_name: 'Elizabet',
      last_name: 'Stenhouse',
      email: 'estenhousej@upenn.edu',
      gender: 'Female',
      marks: 138,
    },
    {
      id: 21,
      first_name: 'Aubert',
      last_name: 'Delgardillo',
      email: 'adelgardillok@bloglines.com',
      gender: 'Genderqueer',
      marks: 123,
    },
    {
      id: 22,
      first_name: 'Raff',
      last_name: 'Cristoforetti',
      email: 'rcristoforettil@china.com.cn',
      gender: 'Genderqueer',
      marks: 195,
    },
    {
      id: 23,
      first_name: 'Sapphire',
      last_name: 'Naisey',
      email: 'snaiseym@arstechnica.com',
      gender: 'Female',
      marks: 236,
    },
    {
      id: 24,
      first_name: 'Bernie',
      last_name: 'Dacke',
      email: 'bdacken@discovery.com',
      gender: 'Male',
      marks: 44,
    },
    {
      id: 25,
      first_name: 'Virginia',
      last_name: 'Lantiffe',
      email: 'vlantiffeo@cornell.edu',
      gender: 'Female',
      marks: 476,
    },
    {
      id: 26,
      first_name: 'Coretta',
      last_name: 'Simson',
      email: 'csimsonp@people.com.cn',
      gender: 'Genderqueer',
      marks: 222,
    },
    {
      id: 27,
      first_name: 'Briano',
      last_name: 'Pikesley',
      email: 'bpikesleyq@umich.edu',
      gender: 'Male',
      marks: 5,
    },
    {
      id: 28,
      first_name: 'Fielding',
      last_name: 'MacGebenay',
      email: 'fmacgebenayr@usda.gov',
      gender: 'Male',
      marks: 491,
    },
    {
      id: 29,
      first_name: 'Charmaine',
      last_name: 'Cisneros',
      email: 'ccisneross@dell.com',
      gender: 'Agender',
      marks: 32,
    },
    {
      id: 30,
      first_name: 'Peirce',
      last_name: 'Giovannoni',
      email: 'pgiovannonit@facebook.com',
      gender: 'Male',
      marks: 64,
    },
    {
      id: 31,
      first_name: 'Jana',
      last_name: 'Brikner',
      email: 'jbrikneru@reddit.com',
      gender: 'Female',
      marks: 415,
    },
    {
      id: 32,
      first_name: 'Dayle',
      last_name: 'Swinbourne',
      email: 'dswinbournev@wsj.com',
      gender: 'Female',
      marks: 86,
    },
    {
      id: 33,
      first_name: 'Dorisa',
      last_name: 'MacDirmid',
      email: 'dmacdirmidw@nyu.edu',
      gender: 'Female',
      marks: 262,
    },
    {
      id: 34,
      first_name: 'Coraline',
      last_name: 'Alves',
      email: 'calvesx@va.gov',
      gender: 'Female',
      marks: 174,
    },
    {
      id: 35,
      first_name: 'Malena',
      last_name: 'Lindholm',
      email: 'mlindholmy@nifty.com',
      gender: 'Female',
      marks: 388,
    },
    {
      id: 36,
      first_name: 'Stacee',
      last_name: 'Broster',
      email: 'sbrosterz@arizona.edu',
      gender: 'Non-binary',
      marks: 234,
    },
    {
      id: 37,
      first_name: 'Glenda',
      last_name: 'Medcraft',
      email: 'gmedcraft10@google.com',
      gender: 'Female',
      marks: 173,
    },
    {
      id: 38,
      first_name: 'Kristoforo',
      last_name: 'McCourtie',
      email: 'kmccourtie11@illinois.edu',
      gender: 'Bigender',
      marks: 435,
    },
    {
      id: 39,
      first_name: 'Hastie',
      last_name: 'Climance',
      email: 'hclimance12@smh.com.au',
      gender: 'Male',
      marks: 56,
    },
    {
      id: 40,
      first_name: 'Sansone',
      last_name: 'Myrie',
      email: 'smyrie13@icio.us',
      gender: 'Male',
      marks: 68,
    },
    {
      id: 41,
      first_name: 'Oneida',
      last_name: 'Fasse',
      email: 'ofasse14@github.io',
      gender: 'Female',
      marks: 205,
    },
    {
      id: 42,
      first_name: 'Emelyne',
      last_name: 'Hanton',
      email: 'ehanton15@reference.com',
      gender: 'Female',
      marks: 283,
    },
    {
      id: 43,
      first_name: 'Wes',
      last_name: 'Dugood',
      email: 'wdugood16@latimes.com',
      gender: 'Male',
      marks: 52,
    },
    {
      id: 44,
      first_name: 'Jedediah',
      last_name: 'Burburough',
      email: 'jburburough17@blogspot.com',
      gender: 'Male',
      marks: 401,
    },
    {
      id: 45,
      first_name: 'Eward',
      last_name: 'MacCawley',
      email: 'emaccawley18@wikimedia.org',
      gender: 'Male',
      marks: 401,
    },
    {
      id: 46,
      first_name: 'Evelyn',
      last_name: 'Reignould',
      email: 'ereignould19@indiegogo.com',
      gender: 'Male',
      marks: 64,
    },
    {
      id: 47,
      first_name: 'Wallas',
      last_name: 'Pepler',
      email: 'wpepler1a@unicef.org',
      gender: 'Genderqueer',
      marks: 204,
    },
    {
      id: 48,
      first_name: 'Sapphire',
      last_name: 'Drayton',
      email: 'sdrayton1b@desdev.cn',
      gender: 'Female',
      marks: 23,
    },
    {
      id: 49,
      first_name: 'Harriott',
      last_name: 'Kelsey',
      email: 'hkelsey1c@bigcartel.com',
      gender: 'Bigender',
      marks: 460,
    },
    {
      id: 50,
      first_name: 'Dimitry',
      last_name: 'Greatland',
      email: 'dgreatland1d@cmu.edu',
      gender: 'Male',
      marks: 10,
    },
  ];
}
