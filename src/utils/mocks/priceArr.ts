export type Services = {
    category: string
    service: string
    price: number

}


const priceArr: Services[] = [
    {
        service: 'Consultation of a neurologist (adult / child)',
        category: 'consultation',
        price: 500,
    },
    
    {
        service: 'Consultation of a neurologist of the highest category (adult / child)',
        category: 'consultation',
        price: 600,
    },
    
    {
        service: 'Consultation of a child neurologist of the highest category (ASD disorders)',
        category: 'consultation',
        price: 850,
    },
    
    {
        service: 'Consultation of an orthopedist-traumatologist (adult / children)',
        category: 'consultation',
        price: 500,
    },
    
    {
        service: 'Consultation of an orthopedist-traumatologist of the highest category (adult / children)',
        category: 'consultation',
        price: 650,
    },
    
    {
        service: 'Consultation of a doctor of physical and rehabilitation medicine (PRM)',
        category: 'consultation',
        price: 500,
    },
    
    {
        service: 'Individual training with a physical therapist H.C.',
        category: 'Rehabilitation for adults',
        price: 600,
    },
    {
        service: 'Individual training with a physical therapist',
        category: 'Rehabilitation for adults',
        price: 500,
    },
    {
        service: 'Therapeutic general massage',
        category: 'Rehabilitation for adults',
        price: 600,
    },
    {
        service: 'Therapeutic back massage',
        category: 'Rehabilitation for adults',
        price: 500,
    },
    {
        service: 'Therapeutic massage of the collar zone',
        category: 'Rehabilitation for adults',
        price: 450,
    },
    {
        service: 'Therapeutic chest massage',
        category: 'Rehabilitation for adults',
        price: 450,
    },
    {
        service: 'Therapeutic massage of the lumbar-sacral area',
        category: 'Rehabilitation for adults',
        price: 450,
    },
    {
        service: 'Therapeutic massage of the upper limbs',
        category: 'Rehabilitation for adults',
        price: 350,
    },
    {
        service: 'Therapeutic massage of the lower extremities',
        category: 'Rehabilitation for adults',
        price: 350,
    },
    {
        service: 'Individual training with a physical therapist H.C.',
        category: 'Rehabilitation for children',
        price: 600,
    },
    {
        service: 'Individual training with a physical therapist',
        category: 'Rehabilitation for children',
        price: 500,
    },
    {
        service: `Therapeutic general children's massage`,
        category: 'Rehabilitation for children',
        price: 350,
    },
    {
        service: `Children's massage with elements of Bobat therapy`,
        category: 'Rehabilitation for children',
        price: 400,
    },
    {
        service: 'Shock wave therapy session (one zone)',
        category: 'Physiotherapy',
        price: 400,
    },
    {
        service: 'Shock wave therapy session (two zone)',
        category: 'Physiotherapy',
        price: 480,
    },
    {
        service: 'High-frequency laser therapy',
        category: 'Physiotherapy',
        price: 250,
    },
    {
        service: 'Kinesio taping (1 zone)',
        category: 'Physiotherapy',
        price: 150,
    },
    {
        service: 'Kinesio taping (2 zone)',
        category: 'Physiotherapy',
        price: 250,
    },
    {
        service: 'Kinesio taping (3 zone)',
        category: 'Physiotherapy',
        price: 450,
    },
    {
        service: 'Vacuum therapy',
        category: 'Physiotherapy',
        price: 150,
    },
    {
        service: 'Electrical stimulation',
        category: 'Physiotherapy',
        price: 150,
    },
    {
        service: 'Magnetotherapy',
        category: 'Physiotherapy',
        price: 150,
    },
    {
        service: 'Vibration massage',
        category: 'Physiotherapy',
        price: 150,
    },
    {
        service: 'Su-Jok acupuncture, classic',
        category: 'Physiotherapy',
        price: 200,
    },
]


export default priceArr