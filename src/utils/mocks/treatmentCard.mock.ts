export type Description = {
    id: number
    title?:string
    link1?:string
    link2?:string
    link3?:string
    link4?:string
    link5?:string
    link6?:string
    link7?:string
    link8?:string
    
}

const treatmentCard:Description[] = [
    {
id:1,
title:'Treatment of spine diseases',
    link1:'Hernias, protrusions of the intervertebral disc',
    link2:'Deformations of the spine',
    link3:'Stenosis of the spinal canal',
    link4:'Osteochondrosis of the spine',
    link5:'Spondylolisthesis, spondyloarthrosis',
    link6:'Myofascial syndrome',
    link7:'Radiculitis',

},
{
    id:2,
title:'Treatment of joint diseases',
    link1:'Arthrosis',
    link2:'Arthritis',
    link3:'Contracture',
    link4:'Bursitis',
    link5:'Gout',
    link6:'Osteoarthritis',
    link7:'Osteoporosis',
},
{
    id:3,
title:'Treatment of pain syndrome',
    link1:'Pain in the joints',
    link2:'Back ache',
    link3:'Pain in the neck',
    link4:'Pelvic pain',
    link5:'Headache and dizziness',
    link6:'Tunnel syndromes (pain in the upper and lower extremities)',
    link7:'Neuralgia of the facial nerve',
    link8:'Postherpetic neuralgia',
},
{
    id:4,
title:`Children's rehabilitation`,
    link1:'Diseases of the musculoskeletal system',
    link2:`Children's scoliosis`,
    link3:'ASD, an autistic spectrum disorder, autism',
    link4:'CP is infantile cerebral palsy',
    link5:'MR Mental retardation',
    link6:'Down syndrome',
    link7:'SMA - spinal muscular atrophy',
    link8:'ССI - craniocerebral injuries',
},
{
    id:5,
title:'Prevention and recovery',
    link1:'After fractures',
    link2:'After sports injuries',
    link3:'Spinal injuries',
    link4:'After operations',
    link5:'Recovery after a stroke',
    link6:'Therapy during pregnancy',
    link7:'Postpartum rehabilitation',
    link8:'Rehabilitation after Covid',
},
{
    id:6,
title:`Treatment of diseases of the
muscular system`,
    link1:'Weakness in connections',
    link2:'Myalgia',
    link3:'Myositis',
    link4:'Hypertonus',
    link5:'Muscle weakness (hypotonus)',
    link6:'Slaughter',
    link7:'Flatfoot',
},]

export default treatmentCard