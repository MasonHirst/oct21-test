const colorsDatabase = [{favColorInput: 'black'}, {favColorInput: 'purple'}, {favColorInput: 'salmon'}]

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "'Your Javascript skills are stellar."]
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ['You will be successful in your work.',
            'You will be traveling and coming into a fortune.',
            'You will be unusually successful in business.',
            'You will become a great philanthropist in your later years.',
            'You will become more and more wealthy.',
            'You will enjoy good health.',
            'You will enjoy good health; you will be surrounded by luxury.',
            'You will find great contentment in the daily, routine activities.',
            'You will have a fine capacity for the enjoyment of life.',
            'You will have gold pieces by the bushel.',
            'You will inherit a large sum of money.',
            'You will make change for the better.',
            'You will soon be surrounded by good friends and laughter.',
            'You will take a chance in something in near future.',
            'You will travel far and wide, both pleasure and business.',
            'You will travel far and wide,both pleasure and business.',
            'Your abilities are unparalleled.',
            'Your ability is appreciated.',
            'Your ability to juggle many tasks will take you far.',
            'Your biggest virtue is your modesty.',
            'Your character can be described as natural and unrestrained.',
            'Your difficulties will strengthen you.',
            'Your dreams are never silly; depend on them to guide you.',
            'Your dreams are worth your best efforts to achieve them.',
            'Your energy returns and you get things done.',
            'Your family is young, gifted and attractive.',
            'Your first love has never forgotten you.',
            'Your goal will be reached very soon.',
            'Your happiness is before you, not behind you! Cherish it.',
            'Your hard work will payoff today.',
            'Your heart will always make itself known through your words.',
            'Your home is the center of great love.',
            'Your ideals are well within your reach.',
            'Your infinite capacity for patience will be rewarded sooner or later.',
            'Your leadership qualities will be tested and proven.',
            'Your life will be happy and peaceful.',
            'Your life will get more and more exciting.',
            'Your love life will be happy and harmonious.',
            'Your love of music will be an important part of your life.',
            'Your loyalty is a virtue, but not when it’s wedded with blind stubbornness.',
            'Your mentality is alert, practical, and analytical.',
            'Your mind is creative, original and alert.',
            'Your mind is your greatest asset.',
            'Your moods signal a period of change.',
            'Your quick wits will get you out of a tough situation.',
            'Your reputation is your wealth.',
            'Your success will astonish everyone. (2)',
            'Your talents will be recognized and suitably rewarded.',
            'Your work interests can capture the highest status or prestige.']

            //choose random fortune
            let randomIndex = Math.floor(Math.random() * fortunes.length)
            let randomFortune = fortunes[randomIndex]

            res.status(200).send(randomFortune)
    },

    addFavColor: (req, res) => {
        let {favColorInput} = req.body

        let newObj = {
            favColorInput: favColorInput
        }

        // console.log(favColorInput)
        colorsDatabase.push(newObj)
        res.status(200).send(colorsDatabase)
    },

    deleteColor: (req, res) => {
        let deleteIndex = +req.params.id
        console.log(deleteIndex)
        colorsDatabase.splice((deleteIndex - 1), 1)

        res.status(200).send(colorsDatabase)
    }

}