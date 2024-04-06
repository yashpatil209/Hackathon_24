const sampleListings = [
    {
        "name": "Ravi Kumar",
        "email": "ravikumar@example.com",
        "phone": 9876543210,
        "username": "ravik",
        "role": "farmer",
        "state": "Maharashtra",
        "dist": "Dhule"
    },
    {
        "name": "Priya Patel",
        "email": "priya.p@example.com",
        "phone": 8765432109,
        "username": "priyap",
        "role": "farmer",
        "state": "Maharashtra",
        "dist": "Pune"
    },
    {
        "name": "Suresh Singh",
        "email": "suresh.s@example.com",
        "phone": 7654321098,
        "username": "sureshs",
        "role": "farmer",
        "state": "Uttar Pradesh",
        "dist": "Lucknow"
    },
    {
        "name": "Anita Sharma",
        "email": "anita.sharma@example.com",
        "phone": 6543210987,
        "username": "anitas",
        "role": "farmer",
        "state": "Rajasthan",
        "dist": "Jaipur"
    },
    {
        "name": "Vijay Yadav",
        "email": "vijay.y@example.com",
        "phone": 5432109876,
        "username": "vijayy",
        "role": "farmer",
        "state": "Bihar",
        "dist": "Patna"
    },
    {
        "name": "Aarti Gupta",
        "email": "aarti.g@example.com",
        "phone": 4321098765,
        "username": "aartig",
        "role": "farmer",
        "state": "Uttar Pradesh",
        "dist": "Varanasi"
    },
    {
        "name": "Rajesh Kumar",
        "email": "rajesh.k@example.com",
        "phone": 3210987654,
        "username": "rajeshk",
        "role": "farmer",
        "state": "Bihar",
        "dist": "Gaya"
    },
    {
        "name": "Kiran Singh",
        "email": "kiran.s@example.com",
        "phone": 2109876543,
        "username": "kirans",
        "role": "farmer",
        "state": "Madhya Pradesh",
        "dist": "Indore"
    },
    {
        "name": "Anjali Tiwari",
        "email": "anjali.t@example.com",
        "phone": 1098765432,
        "username": "anjalit",
        "role": "farmer",
        "state": "Uttar Pradesh",
        "dist": "Allahabad"
    },
    {
        "name": "Rajiv Mishra",
        "email": "rajiv.m@example.com",
        "phone": 9876543211,
        "username": "rajivm",
        "role": "farmer",
        "state": "Maharashtra",
        "dist": "Nagpur"
    },
    {
        "name": "Neha Verma",
        "email": "neha.v@example.com",
        "phone": 8765432110,
        "username": "nehav",
        "role": "farmer",
        "state": "Uttarakhand",
        "dist": "Dehradun"
    },
    {
        "name": "Sanjay Singh",
        "email": "sanjay.s@example.com",
        "phone": 7654321109,
        "username": "sanjays",
        "role": "farmer",
        "state": "Uttar Pradesh",
        "dist": "Gorakhpur"
    },
    {
        "name": "Pooja Sharma",
        "email": "pooja.s@example.com",
        "phone": 6543210988,
        "username": "poojas",
        "role": "farmer",
        "state": "Rajasthan",
        "dist": "Jodhpur"
    },
    {
        "name": "Amit Kumar",
        "email": "amit.k@example.com",
        "phone": 5432109877,
        "username": "amitk",
        "role": "hotel",
        "state": "Bihar",
        "dist": "Muzaffarpur"
    },
    {
        "name": "Manisha Patel",
        "email": "manisha.p@example.com",
        "phone": 4321098766,
        "username": "manishap",
        "role": "hotel",
        "state": "Gujarat",
        "dist": "Ahmedabad"
    },
    {
        "name": "Rajendra Singh",
        "email": "rajendra.s@example.com",
        "phone": 3210987655,
        "username": "rajendras",
        "role": "hotel",
        "state": "Haryana",
        "dist": "Hisar"
    },
    {
        "name": "Geeta Sharma",
        "email": "geeta.s@example.com",
        "phone": 2109876544,
        "username": "geetas",
        "role": "hotel",
        "state": "Punjab",
        "dist": "Ludhiana"
    },
    {
        "name": "Vivek Singh",
        "email": "vivek.s@example.com",
        "phone": 1098765433,
        "username": "viveks",
        "role": "hotel",
        "state": "Uttar Pradesh",
        "dist": "Kanpur"
    },
    {
        "name": "Nisha Gupta",
        "email": "nisha.g@example.com",
        "phone": 9876543212,
        "username": "nishag",
        "role": "hotel",
        "state": "Madhya Pradesh",
        "dist": "Bhopal"
    },
    {
        "name": "Alok Mishra",
        "email": "alok.m@example.com",
        "phone": 8765432111,
        "username": "alokm",
        "role": "hotel",
        "state": "Uttar Pradesh",
        "dist": "Agra"
    },
    {
        "name": "Shalini Verma",
        "email": "shalini.v@example.com",
        "phone": 7654321110,
        "username": "shaliniv",
        "role": "broker",
        "state": "Uttarakhand",
        "dist": "Haridwar"
    },
    {
        "name": "Rakesh Kumar",
        "email": "rakesh.k@example.com",
        "phone": 6543210989,
        "username": "rakeshk",
        "role": "broker",
        "state": "Bihar",
        "dist": "Bhagalpur"
    },
    {
        "name": "Ritu Singh",
        "email": "ritu.s@example.com",
        "phone": 5432109878,
        "username": "ritus",
        "role": "broker",
        "state": "Uttar Pradesh",
        "dist": "Lucknow"
    },
    {
        "name": "Sandeep Patel",
        "email": "sandeep.p@example.com",
        "phone": 4321098767,
        "username": "sandeepp",
        "role": "broker",
        "state": "Gujarat",
        "dist": "Surat"
    },
    {
        "name": "Santosh Kumar",
        "email": "santosh.k@example.com",
        "phone": 3210987656,
        "username": "santoshk",
        "role": "broker",
        "state": "Bihar",
        "dist": "Darbhanga"
    },
    {
        "name": "Suman Sharma",
        "email": "suman.s@example.com",
        "phone": 2109876545,
        "username": "sumans",
        "role": "broker",
        "state": "Rajasthan",
        "dist": "Udaipur"
    },
    {
        "name": "Rajni Devi",
        "email": "rajni.d@example.com",
        "phone": 1098765434,
        "username": "rajnid",
        "role": "broker",
        "state": "Uttar Pradesh",
        "dist": "Ghaziabad"
    },
    {
        "name": "Gopal Singh",
        "email": "gopal.s@example.com",
        "phone": 9876543213,
        "username": "gopals",
        "role": "broker",
        "state": "Madhya Pradesh",
        "dist": "Jabalpur"
    },
    {
        "name": "Sonali Gupta",
        "email": "sonali.g@example.com",
        "phone": 8765432112,
        "username": "sonalig",
        "role": "broker",
        "state": "Uttar Pradesh",
        "dist": "Meerut"
    },
    {
        "name": "Mukesh Kumar",
        "email": "mukesh.k@example.com",
        "phone": 7654321111,
        "username": "mukeshk",
        "role": "broker",
        "state": "Bihar",
        "dist": "Begusarai"
    },
    {
        "name": "Preeti Sharma",
        "email": "preeti.s@example.com",
        "phone": 6543210990,
        "username": "preetis",
        "role": "broker",
        "state": "Rajasthan",
        "dist": "Ajmer"
    },
    {
        "name": "Vinod Yadav",
        "email": "vinod.y@example.com",
        "phone": 5432109879,
        "username": "vinody",
        "role": "broker",
        "state": "Uttar Pradesh",
        "dist": "Gorakhpur"
    },
    {
        "name": "Aradhana Tiwari",
        "email": "aradhana.t@example.com",
        "phone": 4321098768,
        "username": "aradhanat",
        "role": "broker",
        "state": "Uttarakhand",
        "dist": "Nainital"
    },
    {
        "name": "Ajay Kumar",
        "email": "ajay.k@example.com",
        "phone": 3210987657,
        "username": "ajayk",
        "role": "broker",
        "state": "Haryana",
        "dist": "Faridabad"
    },
    {
        "name": "Meera Devi",
        "email": "meera.d@example.com",
        "phone": 2109876546,
        "username": "meerad",
        "role": "broker",
        "state": "Punjab",
        "dist": "Amritsar"
    },
    {
        "name": "Shivam Singh",
        "email": "shivam.s@example.com",
        "phone": 1098765435,
        "username": "shivams",
        "role": "broker",
        "state": "Uttar Pradesh",
        "dist": "Lucknow"
    },
    {
        "name": "Sangeeta Gupta",
        "email": "sangeeta.g@example.com",
        "phone": 9876543214,
        "username": "sangeetag",
        "role": "broker",
        "state": "Madhya Pradesh",
        "dist": "Gwalior"
    },
    {
        "name": "Prakash Patel",
        "email": "prakash.p@example.com",
        "phone": 8765432113,
        "username": "prakashp",
        "role": "broker",
        "state": "Gujarat",
        "dist": "Rajkot"
    }    
];

module.exports = { data: sampleListings };