export type Description = {
    id: number
    imgSrc:string
    title:string
    link1:string
    link2:string
    link3:string
    link4:string
    link5:string
}


const servicesCard:Description[] = [
    {id: 1,
        imgSrc:'/images/cart_adult.png',
        title:'Rehabilitation for adults',
        link1:'REDCORD NEURAC SUSPENSION THERAPY SYSTEM',
        link2:'MEDICAL MASSAGE',
        link3:'SOFT MANUAL THERAPY',
        link4:'SHROT THERAPY',
        link5:'FDM THERAPY',
    },
    {id: 2,
        imgSrc:'/images/cart_injection.png',
        title:'Medical injections',
        link1:'EPIDURAL INJECTION UNDER VISUAL NAVIGATION',
        link2:'TRANSFORAMINAL INJECTION UNDER VISUAL NAVIGATION',
        link3:'MEDICAL AND DIAGNOSTIC INJECTIONS UNDER VISUAL NAVIGATION',
        link4:'RADIO FREQUENCY ABLATION UNDER VISUAL NAVIGATION',
        link5:'INJECTIONS OF HYALURONIC ACID',
    },
    {id: 3,
        imgSrc:'/images/cart_children.png',
        title:'Rehabilitation for children',
        link1:'PHYSICAL THERAPY',
        link2:'SENSORY INTEGRATION',
        link3:'DEVELOPMENT THERAPY',
        link4:'BLOMBERG THERAPY FOR CHILDREN',
        link5:'...',
    },
    {id: 4,
        imgSrc:'/images/cart_physioterapy.png',
        title:'Physiotherapy',
        link1:'SHOCK WAVE THERAPY',
        link2:'HIGH INTENSITY LASER',
        link3:'MAGNETOTHERAPY',
        link4:'ELECTRICAL STIMULATION',
        link5:'NEEDLE REFLEX THERAPY',
    },
    {id: 5,
        imgSrc:'/images/cart_consultation.png',
        title:'Consultation of doctors',
        link1:'CONSULTATION OF A NEUROLOGIST',
        link2:'ORTHOPEDIST-TRAUMALOGIST CONSULTATION',
        link3:`PRM DOCTOR'S CONSULTATION`,
        link4:'CONSULTATION OF A SPORTS MEDICINE DOCTOR',
        link5:`CONSULTATION OF CHILDREN'S NEUROLOGIST`,
    },
    {id: 6,
        imgSrc:'/images/cart_diagnostic.png',
        title:'Diagnostics',
        link1:'ELECTRONEUROMYOGRAPHY',
        link2:'Ultrasound diagnostics',
        link3:'DIGITAL X-RAY',
        link4:'FUNCTIONAL DIAGNOSTICS',
        link5:'...'
    },
]

export default servicesCard