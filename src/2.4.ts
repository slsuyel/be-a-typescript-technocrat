{
    // generic -- interface

    interface Developer<T, X=null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWatch: T,
        byke?: X
    }

    type EmilabWatch = {
        brand: string;
        model: string;
        dispaly: string
    }

    const poorDevelper: Developer<EmilabWatch> = {
        name: 'Suyel',
        computer: {
            brand: "asus",
            model: 'X255-ur',
            releaseYear: 2022,

        },

        smartWatch: {
            brand: 'Emilab',
            model: 'kw66',
            dispaly: 'OLED'
        }
    }

/*  */


    interface AppleWach {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }

    interface YamahaByke {
        model: string;
        engineCap: string;
    }

    const richDevelper: Developer<AppleWach, YamahaByke> = {
        name: 'Suyel',
        computer: {
            brand: "Apple",
            model: 'X255-ur',
            releaseYear: 2020,

        },

        smartWatch: {
            brand: 'Apple',
            model: 'kw665d',
            heartTrack: true,
            sleepTrack: true,
        },
        byke: {
            model: 'yamaha',
            engineCap: '100cc'
        }
    }













    //
}