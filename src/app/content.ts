export const PRACTICE_NIGHTS_TITLE = 'Practice Nights'
export const PRACTICE_NIGHTS_CONTENT =
    'We practice from 7:30pm on Thursday nights with 3 tables available. We have a range of ability levels from beginner to national league as well as a range of ages from teenagers to 60+.'

export const COMPETITION_TITLE = 'Competition'
export const COMPETITION_CONTENT =
    'We play in the Peterborough & District Table Tennis League having entered 3 teams for the 2024/25 season. It runs through the Winter from roughly late September to March. Players of all abilities are welcome to join the club and play in the league.'

type FAQ = {
    question: string
    answer: string
}

export const FAQS_TITLE = 'FAQs'
export const FAQs: FAQ[] = [
    {
        question: 'Do I need to be a member to play?',
        answer: 'No, feel free to come along and play. If you enjoy it, you can join one of our teams to play in the local league.',
    },
    {
        question: 'Do I need to bring my own bat?',
        answer: 'No, we have a few bats available to borrow. However, if you have your own bat, bring it along.',
    },
    {
        question: 'Do I need to book a place?',
        answer: 'No, you can just turn up on the night. If you are new to the club we recommend that you email before coming to make sure that practice is on. Whilst we play all year round, there are a few weeks across the year where the hall is being used. We have 3 tables available and rotate players around to get a range of matches.',
    },
    {
        question: 'What is the cost?',
        answer: "It's free!",
    },
    {
        question: 'Is there a minimum age?',
        answer: 'No, we have players of all ages from teenagers to 60+. As long as you can see over the table, you can play.',
    },
    {
        question: 'Is there a coach?',
        answer: 'No, we do not have an official coach. However, we have a range of players of all abilities and will be happy to help you learn the game - we all give each other tips and advice.',
    },
    {
        question: 'What if I have never played before?',
        answer: 'No problem! We have a range of players of all abilities and will be happy to help you learn the game.',
    },
]
