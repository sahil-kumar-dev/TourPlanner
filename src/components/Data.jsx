const Datas = [
    {
        id: 1,
        name: "Jaipur",
        price: "49,999.00",
        info: "Jaipur, the capital of Rajasthan, India, is known as the 'Pink City' due to its iconic pink-hued buildings. This historic city is a treasure trove of culture, featuring stunning palaces like Hawa Mahal and City Palace, and the magnificent Amer Fort. Jaipur's streets are alive with vibrant markets, where you can shop for traditional textiles, jewelry, and handicrafts. The city's rich history is complemented by its modern amenities, making it a favorite destination for tourists from around the world. Explore the grandeur of Rajput architecture, savor delicious Rajasthani cuisine, and immerse yourself in the colors and traditions of Jaipur.",
        image: "https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123_640.jpg"
    },
    {
        id: 2,
        name: "Mumbai",
        price: "64,999.00",
        info: "Mumbai, India's financial capital, is a bustling metropolis on the west coast. This vibrant city is known for its incredible diversity, the Bollywood film industry, and iconic landmarks like the Gateway of India and Marine Drive. Mumbai's fast-paced lifestyle is balanced by its rich cultural heritage. You can visit historic sites such as the Chhatrapati Shivaji Terminus and Elephanta Caves, explore vibrant markets, and indulge in a variety of culinary delights. From art galleries to street food stalls, Mumbai offers a kaleidoscope of experiences that captivate visitors and reflect India's dynamic spirit.",
        image: "https://cdn.pixabay.com/photo/2022/02/08/09/28/boats-7001054_1280.jpg"
    },
    {
        id: 3,
        name: "Delhi",
        price: "59,999.00",
        info: "Delhi, India's bustling capital, is a city steeped in history and culture. From the grandeur of the Red Fort and the towering Qutub Minar to the solemnity of India Gate, Delhi's landmarks reflect its diverse heritage. The city's ancient markets, such as Chandni Chowk, offer a taste of traditional India, while its modern malls and restaurants cater to contemporary tastes. Delhi's streets are a tapestry of languages, cuisines, and traditions. It's a place where the past coexists with the present, making it a must-visit destination for those seeking a journey through time and culture.",
        image: "https://cdn.pixabay.com/photo/2020/02/02/17/24/travel-4813658_640.jpg"
    },
    {
        id: 4,
        name: "Varanasi",
        price: "42,999.00",
        info: "Varanasi, one of the world's oldest cities, is a spiritual and cultural gem on the banks of the sacred Ganges River. This ancient city is famous for its ghats, where pilgrims and tourists gather to witness colorful rituals and ceremonies. The Kashi Vishwanath Temple and Sarnath are significant religious sites. Varanasi's labyrinthine streets are filled with temples, music, and the aroma of incense. It's a place where spirituality permeates the air, offering a profound and immersive experience for those seeking a deep connection with India's spiritual heritage.",
        image: "https://cdn.pixabay.com/photo/2020/06/07/04/44/ganga-ghats-5268994_1280.jpg"
    },
    {
        id: 5,
        name: "Kolkata",
        price: "54,999.00",
        info: "Kolkata, the cultural capital of India, is a city that resonates with artistic and intellectual energy. Known for its historic Durga Puja celebrations, it boasts architectural marvels like the Victoria Memorial and Howrah Bridge. The city's streets are filled with the scent of street food, and its cultural institutions, including the Indian Museum, showcase a rich tapestry of heritage. Kolkata's literary and artistic traditions have left an indelible mark on India's cultural landscape. Explore its vibrant markets, attend a traditional dance performance, and relish the city's unique blend of tradition and modernity.",
        image: "https://cdn.pixabay.com/photo/2020/12/28/23/03/victoria-memorial-5868794_640.jpg"
    },
    {
        id: 6,
        name: "Chennai",
        price: "48,999.00",
        info: "Chennai, the capital of Tamil Nadu, is a city known for its classical music, historic temples, and long sandy beaches. The Marina Beach, one of the world's longest urban beaches, is a popular spot for leisurely strolls. Chennai's rich cultural heritage is evident in its architecture, such as the Kapaleeshwarar Temple and San Thome Basilica. The city's diverse cuisine includes South Indian delicacies like dosa and idli. Whether you're exploring its temples, enjoying a Bharatanatyam dance performance, or savoring its spicy cuisine, Chennai offers a warm and welcoming South Indian experience.",
        image: "https://cdn.pixabay.com/photo/2017/02/02/18/03/temple-2033409_640.jpg"
    },
    {
        id: 7,
        name: "Bangalore",
        price: "56,999.00",
        info: "Bangalore, known as the 'Silicon Valley of India,' is a dynamic city that blends technology with green spaces. It boasts a pleasant climate and is home to lush gardens like Lalbagh Botanical Garden. The city's vibrant nightlife, with its numerous pubs and restaurants, offers a cosmopolitan experience. Bangalore's cultural scene includes classical music, dance, and theater. The Vidhana Soudha and Bangalore Palace are architectural highlights. Whether you're exploring its innovative tech hubs or enjoying a walk in Cubbon Park, Bangalore has a lot to offer for both business and leisure travelers.",
        image: "https://cdn.pixabay.com/photo/2014/01/14/18/53/kempegowda-international-airport-245024_640.jpg"
    },
    {
        id: 8,
        name: "Hyderabad",
        price: "52,999.00",
        info: "Hyderabad, with its rich Nizami heritage, is a city known for its historical grandeur and culinary delights. The Charminar, a 16th-century mosque with four ornate minarets, is an iconic symbol of the city. Golconda Fort offers a glimpse into its glorious past. Hyderabad's cuisine, including biryani and haleem, is celebrated across the country. The city seamlessly blends tradition and modernity, with high-tech industries and historic landmarks coexisting. Whether you're exploring the bustling bazaars of the old city or savoring delectable Hyderabadi dishes, Hyderabad leaves a lasting impression.",
        image: "https://cdn.pixabay.com/photo/2015/08/19/15/41/charminar-896162_640.jpg"
    },
    {
        id: 9,
        name: "Amritsar",
        price: "44,999.00",
        info: "Amritsar, located in Punjab, is a city of spiritual significance and warm Punjabi hospitality. The Golden Temple, a gleaming place of worship, is the city's most iconic attraction. Visitors are welcomed with langar, a communal meal. The Jallianwala Bagh memorializes a tragic historical event. Amritsar's bustling streets offer a taste of Punjabi culture and cuisine, with vibrant markets and mouthwatering dishes like butter chicken and paratha. The city's rich Sikh heritage and heartwarming hospitality make it a unique destination for those seeking spirituality and a taste of North India.",
        image: "https://cdn.pixabay.com/photo/2018/01/15/10/41/amritsar-3083693_640.jpg"
    },
    {
        id: 10,
        name: "Udaipur",
        price: "47,999.00",
        info: "Udaipur, often referred to as the 'City of Lakes,' is a picturesque city in Rajasthan, India. It's known for its stunning lakes, including Lake Pichola and Fateh Sagar Lake, which are surrounded by majestic palaces and lush gardens. The City Palace, a magnificent royal residence, offers panoramic views of the city. Udaipur's rich artistic and cultural heritage is evident in its temples, traditional Rajasthani architecture, and vibrant markets. Visitors can explore the vibrant streets, take boat rides on the serene lakes, and witness the charm of this romantic and regal city.",
        image: "https://cdn.pixabay.com/photo/2017/05/14/10/45/udaipur-2311788_640.jpg"
    }
    // {
    //     id: 15,
    //     name: "Kochi",
    //     price: "46,999.00",
    //     info: "Kochi, also known as Cochin, is a coastal city in Kerala, South India. It's famous for its picturesque backwaters, historic Fort Kochi, and diverse culture. Visitors can explore the Chinese fishing nets, stroll through Fort Kochi's charming streets, and enjoy a Kathakali dance performance. The city's culinary scene is renowned for its seafood and traditional Kerala cuisine.",
    //     image: "https://cdn.pixabay.com/photo/2018/07/08/19/32/kochi-3521556_640.jpg",
    // },
    // {
    //     id: 11,
    //     name: "Agra",
    //     price: "45,999.00",
    //     info: "Agra, located in the northern state of Uttar Pradesh, is famous for the iconic Taj Mahal, one of the Seven Wonders of the World. This stunning white marble mausoleum is a symbol of eternal love and a UNESCO World Heritage site. Agra Fort and Fatehpur Sikri are other historical gems that showcase Mughal architecture. The city is also known for its exquisite handicrafts and traditional cuisine. A visit to Agra offers a glimpse into India's rich history and architectural marvels.",
    //     image: "https://cdn.pixabay.com/photo/2016/09/23/21/08/taj-mahal-1698851_640.jpg",
    // },
    // {
    //     id: 12,
    //     name: "Goa",
    //     price: "58,999.00",
    //     info: "Goa, India's smallest state on the western coast, is known for its pristine beaches, vibrant nightlife, and Portuguese-influenced architecture. Whether you're relaxing on the sandy shores, exploring historic churches like Basilica of Bom Jesus, or enjoying water sports, Goa offers a diverse range of experiences. The state's unique blend of Indian and Western cultures makes it a popular destination for tourists seeking a tropical paradise.",
    //     image: "https://cdn.pixabay.com/photo/2016/05/30/22/51/beach-1422196_640.jpg",
    // },
    // {
    //     id: 13,
    //     name: "Shimla",
    //     price: "38,999.00",
    //     info: "Shimla, the capital of Himachal Pradesh, is a charming hill station nestled in the Himalayas. Known for its colonial-era architecture, lush greenery, and pleasant climate, Shimla is a popular destination for nature lovers and adventure enthusiasts. The Ridge, Mall Road, and Jakhu Temple are some of the key attractions in the city. Visitors can enjoy trekking, skiing, and taking in the panoramic mountain views in this picturesque location.",
    //     image: "https://cdn.pixabay.com/photo/2019/05/16/22/58/shimla-4203522_640.jpg",
    // },
    // {
    //     id: 14,
    //     name: "Jaipur",
    //     price: "49,999.00",
    //     info: "Jaipur, the capital of Rajasthan, India, is known as the 'Pink City' due to its iconic pink-hued buildings. This historic city is a treasure trove of culture, featuring stunning palaces like Hawa Mahal and City Palace, and the magnificent Amer Fort. Jaipur's streets are alive with vibrant markets, where you can shop for traditional textiles, jewelry, and handicrafts. The city's rich history is complemented by its modern amenities, making it a favorite destination for tourists from around the world. Explore the grandeur of Rajput architecture, savor delicious Rajasthani cuisine, and immerse yourself in the colors and traditions of Jaipur.",
    //     image: "https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123_640.jpg",
    // },
    // {
    //     id: 16,
    //     name: "Pune",
    //     price: "41,999.00",
    //     info: "Pune, located in Maharashtra, is a thriving city known for its educational institutions, historic landmarks, and pleasant climate. It's home to Aga Khan Palace, Shaniwar Wada, and the Osho International Meditation Resort. Pune's vibrant street food culture and cultural festivals make it a lively destination for travelers.",
    //     image: "https://cdn.pixabay.com/photo/2016/02/24/13/38/pune-1213004_640.jpg",
    // },
    // {
    //     id: 17,
    //     name: "Mysore",
    //     price: "37,999.00",
    //     info: "Mysore, in the state of Karnataka, is known for its royal heritage and grand palaces. The Mysore Palace, a stunning example of Indo-Saracenic architecture, is a must-visit attraction. The city is also famous for its Dasara festival, intricate silk sarees, and sandalwood products. Mysore offers a glimpse into India's royal history and cultural traditions.",
    //     image: "https://cdn.pixabay.com/photo/2017/11/02/01/14/mysore-2918608_640.jpg",
    // },
    // {
    //     id: 18,
    //     name: "Aurangabad",
    //     price: "34,999.00",
    //     info: "Aurangabad, located in Maharashtra, is known for its historical significance and architectural wonders. The Ajanta and Ellora Caves, both UNESCO World Heritage sites, showcase ancient rock-cut temples and sculptures. Aurangabad also has a rich culinary heritage, with dishes like the Mutton Pathani and Naan Qalia being popular local specialties.",
    //     image: "https://cdn.pixabay.com/photo/2014/05/12/21/48/aurangabad-343236_640.jpg",
    // },
    // {
    //     id: 19,
    //     name: "Lucknow",
    //     price: "43,999.00",
    //     info: "Lucknow, the capital of Uttar Pradesh, is known for its rich history, cultural heritage, and Nawabi cuisine. The Bara Imambara and Chota Imambara are iconic architectural marvels. The city's kebabs, biryanis, and sweets like the famous 'Tunday Kababi' are a gastronomic delight. Lucknow's tehzeeb (etiquette) and traditional arts add to its charm.",
    //     image: "https://cdn.pixabay.com/photo/2016/07/29/03/21/india-1552007_640.jpg",
    // },
    // {
    //     id: 20,
    //     name: "Chandigarh",
    //     price: "39,999.00",
    //     info: "Chandigarh, a union territory and the capital of Punjab and Haryana, is known for its modern city planning, green spaces, and architectural landmarks designed by Le Corbusier. The Rock Garden, Sukhna Lake, and the Capitol Complex are notable attractions. Chandigarh's organized layout and cleanliness make it a unique urban destination.",
    //     image: "https://cdn.pixabay.com/photo/2018/05/25/17/42/chandigarh-3435285_640.jpg",
    // },
    // {
    //     id: 21,
    //     name: "Ahmedabad",
    //     price: "37,999.00",
    //     info: "Ahmedabad, in the state of Gujarat, is a city steeped in history and culture. The Sabarmati Ashram, associated with Mahatma Gandhi, is a place of great historical significance. The city is also known for its vibrant textile industry, colorful kite festivals, and delectable Gujarati cuisine.",
    //     image: "https://cdn.pixabay.com/photo/2016/03/16/23/05/ahmedabad-1262988_640.jpg",
    // },
    // {
    //     id: 22,
    //     name: "Rishikesh",
    //     price: "36,999.00",
    //     info: "Rishikesh, located in the state of Uttarakhand, is a spiritual and adventure hub on the banks of the Ganges River. It's known for yoga retreats, ashrams, and the iconic Laxman Jhula and Ram Jhula suspension bridges. Rishikesh offers opportunities for meditation, white-water rafting, and trekking in the nearby Himalayas.",
    //     image: "https://cdn.pixabay.com/photo/2016/04/12/23/52/india-1320920_640.jpg",
    // },
    // {
    //     id: 23,
    //     name: "Bhubaneswar",
    //     price: "33,999.00",
    //     info: "Bhubaneswar, the capital of Odisha, is known for its ancient temples and rich cultural heritage. The Lingaraja Temple, dedicated to Lord Shiva, is a remarkable architectural wonder. The city's Kalinga architecture, classical dance forms, and Odia cuisine are a testament to its cultural richness.",
    //     image: "https://cdn.pixabay.com/photo/2017/03/29/15/18/bhubaneshwar-2181791_640.jpg",
    // },
    // {
    //     id: 24,
    //     name: "Jaisalmer",
    //     price: "49,999.00",
    //     info: "Jaisalmer, located in the heart of the Thar Desert in Rajasthan, is known as the 'Golden City' due to its golden sandstone architecture. The Jaisalmer Fort, a UNESCO World Heritage site, and the intricate havelis (mansions) are key attractions. Visitors can also experience desert safaris, camel rides, and cultural performances in this enchanting desert town.",
    //     image: "https://cdn.pixabay.com/photo/2018/05/11/18/32/jaisalmer-3399222_640.jpg",
    // }
];


export default Datas;