
export type Description = {
    id: number
    imgSrc:string
    title: string
    description: string
    likeCount:number
    watchCount:number
}

const newsCardsArray:Description[] = [
    {
        id:1,
        imgSrc:'images/news-img/analgesic-injections.png',
        title:'Injections against pain',
        description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eligendi aliquam vel repellat ipsam reprehenderit quis, nesciunt ab provident autem est eaque libero adipisci quisquam illum natus! Libero, molestias nesciunt!`,
    likeCount:123,
    watchCount:131235,
    },
    {
        id:2,
        imgSrc:'images/news-img/electroneuromyography.png',
        title:'5 questions about electroneuromyography',
        description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eligendi aliquam vel repellat ipsam reprehenderit quis, nesciunt ab provident autem est eaque libero adipisci quisquam illum natus! Libero, molestias nesciunt!`,
    likeCount:5434,
    watchCount:1124345,
    },
    {
        id:3,
        imgSrc:'images/news-img/knee-pain.png',
        title:'How to cure knee pain?',
        description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eligendi aliquam vel repellat ipsam reprehenderit quis, nesciunt ab provident autem est eaque libero adipisci quisquam illum natus! Libero, molestias nesciunt!`,
    likeCount:123,
    watchCount:4513,
    },
    {
        id:4,
        imgSrc:'images/news-img/foundation-of-foundations.jpg',
        title:'The foundation of the foundations',
        description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eligendi aliquam vel repellat ipsam reprehenderit quis, nesciunt ab provident autem est eaque libero adipisci quisquam illum natus! Libero, molestias nesciunt!`,
    likeCount:3243,
    watchCount:1312345,
    },
    {
        id:5,
        imgSrc:'images/news-img/renewal.jpg',
        title:'The art of recovery',
        description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eligendi aliquam vel repellat ipsam reprehenderit quis, nesciunt ab provident autem est eaque libero adipisci quisquam illum natus! Libero, molestias nesciunt!`,
    likeCount:123,
    watchCount:131145,
    },
    {
        id:6,
        imgSrc:'images/news-img/medical-fitness.jpg',
        title:'Medical fitness',
        description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eligendi aliquam vel repellat ipsam reprehenderit quis, nesciunt ab provident autem est eaque libero adipisci quisquam illum natus! Libero, molestias nesciunt!`,
    likeCount:141,
    watchCount:13145,
    },

]

export const getProductsNews = (array:Description[]) => 
array.reduce(
    (object,product) => ({
        ...object,
        [product.id]:product,
    }),
    {}
    )


    export default newsCardsArray
    