{
    // generic -- interface

    interface Developer<T> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWatch: T
    }


    const poorDevelper: Developer<{
        brand: string;
        model: string;
        dispaly: string
    }> = {
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

    const richDevelper: Developer<{
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }> = {
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
        }
    }




















    //
}