const foods = [
  {
    "id": 1,
    "name": "Chicken Biryani",
    "category": "Indian"
  },
  {
    "id": 2,
    "name": "Mutton Biryani",
    "category": "Indian"
  },
  {
    "id": 3,
    "name": "Egg Biryani",
    "category": "Indian"
  },
  {
    "id": 4,
    "name": "Fish Biryani",
    "category": "Indian"
  },
  {
    "id": 5,
    "name": "Prawn Biryani",
    "category": "Indian"
  },
  {
    "id": 6,
    "name": "Veg Biryani",
    "category": "Indian"
  },
  {
    "id": 7,
    "name": "Paneer Biryani",
    "category": "Indian"
  },
  {
    "id": 8,
    "name": "Mushroom Biryani",
    "category": "Indian"
  },
  {
    "id": 9,
    "name": "Masala Dosa",
    "category": "Indian"
  },
  {
    "id": 10,
    "name": "Plain Dosa",
    "category": "Indian"
  },
  {
    "id": 11,
    "name": "Onion Dosa",
    "category": "Indian"
  },
  {
    "id": 12,
    "name": "Rava Dosa",
    "category": "Indian"
  },
  {
    "id": 13,
    "name": "Mysore Masala Dosa",
    "category": "Indian"
  },
  {
    "id": 14,
    "name": "Set Dosa",
    "category": "Indian"
  },
  {
    "id": 15,
    "name": "Neer Dosa",
    "category": "Indian"
  },
  {
    "id": 16,
    "name": "Pesarattu",
    "category": "Indian"
  },
  {
    "id": 17,
    "name": "Idli",
    "category": "Indian"
  },
  {
    "id": 18,
    "name": "Medu Vada",
    "category": "Indian"
  },
  {
    "id": 19,
    "name": "Masala Vada",
    "category": "Indian"
  },
  {
    "id": 20,
    "name": "Pongal",
    "category": "Indian"
  },
  {
    "id": 21,
    "name": "Upma",
    "category": "Indian"
  },
  {
    "id": 22,
    "name": "Puttu",
    "category": "Indian"
  },
  {
    "id": 23,
    "name": "Appam",
    "category": "Indian"
  },
  {
    "id": 24,
    "name": "Idiyappam",
    "category": "Indian"
  },
  {
    "id": 25,
    "name": "Parotta",
    "category": "Indian"
  },
  {
    "id": 26,
    "name": "Chapati",
    "category": "Indian"
  },
  {
    "id": 27,
    "name": "Poori",
    "category": "Indian"
  },
  {
    "id": 28,
    "name": "Aloo Paratha",
    "category": "Indian"
  },
  {
    "id": 29,
    "name": "Chole Bhature",
    "category": "Indian"
  },
  {
    "id": 30,
    "name": "Pav Bhaji",
    "category": "Indian"
  },
  {
    "id": 31,
    "name": "Vada Pav",
    "category": "Indian"
  },
  {
    "id": 32,
    "name": "Pani Puri",
    "category": "Indian"
  },
  {
    "id": 33,
    "name": "Bhel Puri",
    "category": "Indian"
  },
  {
    "id": 34,
    "name": "Dahi Puri",
    "category": "Indian"
  },
  {
    "id": 35,
    "name": "Samosa",
    "category": "Indian"
  },
  {
    "id": 36,
    "name": "Pakora",
    "category": "Indian"
  },
  {
    "id": 37,
    "name": "Kachori",
    "category": "Indian"
  },
  {
    "id": 38,
    "name": "Dhokla",
    "category": "Indian"
  },
  {
    "id": 39,
    "name": "Chicken 65",
    "category": "Indian"
  },
  {
    "id": 40,
    "name": "Chilli Chicken",
    "category": "Indian"
  },
  {
    "id": 41,
    "name": "Pepper Chicken",
    "category": "Indian"
  },
  {
    "id": 42,
    "name": "Butter Chicken",
    "category": "Indian"
  },
  {
    "id": 43,
    "name": "Chicken Tikka",
    "category": "Indian"
  },
  {
    "id": 44,
    "name": "Chicken Tandoori",
    "category": "Indian"
  },
  {
    "id": 45,
    "name": "Chicken Chettinad",
    "category": "Indian"
  },
  {
    "id": 46,
    "name": "Chicken Sukka",
    "category": "Indian"
  },
  {
    "id": 47,
    "name": "Mutton Chukka",
    "category": "Indian"
  },
  {
    "id": 48,
    "name": "Mutton Rogan Josh",
    "category": "Indian"
  },
  {
    "id": 49,
    "name": "Mutton Curry",
    "category": "Indian"
  },
  {
    "id": 50,
    "name": "Mutton Korma",
    "category": "Indian"
  },
  {
    "id": 51,
    "name": "Mutton Pepper Fry",
    "category": "Indian"
  },
  {
    "id": 52,
    "name": "Mutton Chettinad",
    "category": "Indian"
  },
  {
    "id": 53,
    "name": "Fish Fry",
    "category": "Indian"
  },
  {
    "id": 54,
    "name": "Fish Curry",
    "category": "Indian"
  },
  {
    "id": 55,
    "name": "Fish Tikka",
    "category": "Indian"
  },
  {
    "id": 56,
    "name": "Kerala Fish Curry",
    "category": "Indian"
  },
  {
    "id": 57,
    "name": "Goan Fish Curry",
    "category": "Indian"
  },
  {
    "id": 58,
    "name": "Prawn Masala",
    "category": "Indian"
  },
  {
    "id": 59,
    "name": "Prawn Fry",
    "category": "Indian"
  },
  {
    "id": 60,
    "name": "Prawn Curry",
    "category": "Indian"
  },
  {
    "id": 61,
    "name": "Paneer Butter Masala",
    "category": "Indian"
  },
  {
    "id": 62,
    "name": "Kadai Paneer",
    "category": "Indian"
  },
  {
    "id": 63,
    "name": "Palak Paneer",
    "category": "Indian"
  },
  {
    "id": 64,
    "name": "Shahi Paneer",
    "category": "Indian"
  },
  {
    "id": 65,
    "name": "Paneer Tikka",
    "category": "Indian"
  },
  {
    "id": 66,
    "name": "Matar Paneer",
    "category": "Indian"
  },
  {
    "id": 67,
    "name": "Chilli Paneer",
    "category": "Indian"
  },
  {
    "id": 68,
    "name": "Paneer Bhurji",
    "category": "Indian"
  },
  {
    "id": 69,
    "name": "Dal Tadka",
    "category": "Indian"
  },
  {
    "id": 70,
    "name": "Dal Makhani",
    "category": "Indian"
  },
  {
    "id": 71,
    "name": "Rajma Masala",
    "category": "Indian"
  },
  {
    "id": 72,
    "name": "Chana Masala",
    "category": "Indian"
  },
  {
    "id": 73,
    "name": "Aloo Gobi",
    "category": "Indian"
  },
  {
    "id": 74,
    "name": "Aloo Matar",
    "category": "Indian"
  },
  {
    "id": 75,
    "name": "Baingan Bharta",
    "category": "Indian"
  },
  {
    "id": 76,
    "name": "Bhindi Masala",
    "category": "Indian"
  },
  {
    "id": 77,
    "name": "Malai Kofta",
    "category": "Indian"
  },
  {
    "id": 78,
    "name": "White Pasta",
    "category": "Italian"
  },
  {
    "id": 79,
    "name": "Red Sauce Pasta",
    "category": "Italian"
  },
  {
    "id": 80,
    "name": "Arrabbiata Pasta",
    "category": "Italian"
  },
  {
    "id": 81,
    "name": "Alfredo Pasta",
    "category": "Italian"
  },
  {
    "id": 82,
    "name": "Pesto Pasta",
    "category": "Italian"
  },
  {
    "id": 83,
    "name": "Mac and Cheese",
    "category": "Indian"
  },
  {
    "id": 84,
    "name": "Lasagna",
    "category": "Italian"
  },
  {
    "id": 85,
    "name": "Ravioli",
    "category": "Italian"
  },
  {
    "id": 86,
    "name": "Spaghetti Carbonara",
    "category": "Indian"
  },
  {
    "id": 87,
    "name": "Spaghetti Bolognese",
    "category": "Indian"
  },
  {
    "id": 88,
    "name": "Margherita Pizza",
    "category": "Italian"
  },
  {
    "id": 89,
    "name": "Pepperoni Pizza",
    "category": "Italian"
  },
  {
    "id": 90,
    "name": "Farmhouse Pizza",
    "category": "Italian"
  },
  {
    "id": 91,
    "name": "Paneer Pizza",
    "category": "Italian"
  },
  {
    "id": 92,
    "name": "Chicken Pizza",
    "category": "Italian"
  },
  {
    "id": 93,
    "name": "Veggie Pizza",
    "category": "Italian"
  },
  {
    "id": 94,
    "name": "Cheese Pizza",
    "category": "Italian"
  },
  {
    "id": 95,
    "name": "Garlic Bread",
    "category": "Indian"
  },
  {
    "id": 96,
    "name": "Bruschetta",
    "category": "Italian"
  },
  {
    "id": 97,
    "name": "Fried Rice",
    "category": "Chinese"
  },
  {
    "id": 98,
    "name": "Chicken Fried Rice",
    "category": "Chinese"
  },
  {
    "id": 99,
    "name": "Egg Fried Rice",
    "category": "Chinese"
  },
  {
    "id": 100,
    "name": "Schezwan Fried Rice",
    "category": "Chinese"
  },
  {
    "id": 101,
    "name": "Veg Fried Rice",
    "category": "Chinese"
  },
  {
    "id": 102,
    "name": "Mushroom Fried Rice",
    "category": "Chinese"
  },
  {
    "id": 103,
    "name": "Prawn Fried Rice",
    "category": "Chinese"
  },
  {
    "id": 104,
    "name": "Thai Fried Rice",
    "category": "Thai"
  },
  {
    "id": 105,
    "name": "Chicken Noodles",
    "category": "Chinese"
  },
  {
    "id": 106,
    "name": "Veg Hakka Noodles",
    "category": "Chinese"
  },
  {
    "id": 107,
    "name": "Schezwan Noodles",
    "category": "Chinese"
  },
  {
    "id": 108,
    "name": "Egg Noodles",
    "category": "Chinese"
  },
  {
    "id": 109,
    "name": "Chow Mein",
    "category": "Chinese"
  },
  {
    "id": 110,
    "name": "Pad Thai",
    "category": "Thai"
  },
  {
    "id": 111,
    "name": "Ramen",
    "category": "Japanese"
  },
  {
    "id": 112,
    "name": "Udon Noodles",
    "category": "Japanese"
  },
  {
    "id": 113,
    "name": "Soba Noodles",
    "category": "Japanese"
  },
  {
    "id": 114,
    "name": "Chicken Manchurian",
    "category": "Chinese"
  },
  {
    "id": 115,
    "name": "Gobi Manchurian",
    "category": "Chinese"
  },
  {
    "id": 116,
    "name": "Veg Manchurian",
    "category": "Chinese"
  },
  {
    "id": 117,
    "name": "Spring Rolls",
    "category": "Indian"
  },
  {
    "id": 118,
    "name": "Momos",
    "category": "Chinese"
  },
  {
    "id": 119,
    "name": "Chicken Momos",
    "category": "Chinese"
  },
  {
    "id": 120,
    "name": "Dim Sum",
    "category": "Indian"
  },
  {
    "id": 121,
    "name": "Wontons",
    "category": "Chinese"
  },
  {
    "id": 122,
    "name": "Tom Yum Soup",
    "category": "Thai"
  },
  {
    "id": 123,
    "name": "Hot and Sour Soup",
    "category": "Indian"
  },
  {
    "id": 124,
    "name": "Sweet Corn Soup",
    "category": "Indian"
  },
  {
    "id": 125,
    "name": "Manchow Soup",
    "category": "Indian"
  },
  {
    "id": 126,
    "name": "Miso Soup",
    "category": "Indian"
  },
  {
    "id": 127,
    "name": "Rasam",
    "category": "Indian"
  },
  {
    "id": 128,
    "name": "Sambar",
    "category": "Indian"
  },
  {
    "id": 129,
    "name": "Chicken Soup",
    "category": "Indian"
  },
  {
    "id": 130,
    "name": "Mushroom Soup",
    "category": "Indian"
  },
  {
    "id": 131,
    "name": "Chicken Shawarma",
    "category": "Indian"
  },
  {
    "id": 132,
    "name": "Falafel Wrap",
    "category": "Indian"
  },
  {
    "id": 133,
    "name": "Hummus",
    "category": "Indian"
  },
  {
    "id": 134,
    "name": "Baba Ganoush",
    "category": "Indian"
  },
  {
    "id": 135,
    "name": "Chicken Kebab",
    "category": "Indian"
  },
  {
    "id": 136,
    "name": "Seekh Kebab",
    "category": "Indian"
  },
  {
    "id": 137,
    "name": "Shish Kebab",
    "category": "Indian"
  },
  {
    "id": 138,
    "name": "Doner Kebab",
    "category": "Indian"
  },
  {
    "id": 139,
    "name": "Gyro",
    "category": "Indian"
  },
  {
    "id": 140,
    "name": "Chicken Burger",
    "category": "Fast Food"
  },
  {
    "id": 141,
    "name": "Veg Burger",
    "category": "Fast Food"
  },
  {
    "id": 142,
    "name": "Paneer Burger",
    "category": "Fast Food"
  },
  {
    "id": 143,
    "name": "Cheese Burger",
    "category": "Fast Food"
  },
  {
    "id": 144,
    "name": "Fish Burger",
    "category": "Fast Food"
  },
  {
    "id": 145,
    "name": "Mushroom Burger",
    "category": "Fast Food"
  },
  {
    "id": 146,
    "name": "French Fries",
    "category": "Fast Food"
  },
  {
    "id": 147,
    "name": "Peri Peri Fries",
    "category": "Fast Food"
  },
  {
    "id": 148,
    "name": "Cheese Fries",
    "category": "Fast Food"
  },
  {
    "id": 149,
    "name": "Sweet Potato Fries",
    "category": "Fast Food"
  },
  {
    "id": 150,
    "name": "Onion Rings",
    "category": "Indian"
  },
  {
    "id": 151,
    "name": "Potato Wedges",
    "category": "Indian"
  },
  {
    "id": 152,
    "name": "Nachos",
    "category": "Mexican"
  },
  {
    "id": 153,
    "name": "Cheese Nachos",
    "category": "Mexican"
  },
  {
    "id": 154,
    "name": "Chocolate Cake",
    "category": "Dessert"
  },
  {
    "id": 155,
    "name": "Vanilla Cake",
    "category": "Dessert"
  },
  {
    "id": 156,
    "name": "Red Velvet Cake",
    "category": "Dessert"
  },
  {
    "id": 157,
    "name": "Black Forest Cake",
    "category": "Dessert"
  },
  {
    "id": 158,
    "name": "Pineapple Cake",
    "category": "Dessert"
  },
  {
    "id": 159,
    "name": "Carrot Cake",
    "category": "Dessert"
  },
  {
    "id": 160,
    "name": "Coffee Cake",
    "category": "Dessert"
  },
  {
    "id": 161,
    "name": "Marble Cake",
    "category": "Dessert"
  },
  {
    "id": 162,
    "name": "Fruit Cake",
    "category": "Dessert"
  },
  {
    "id": 163,
    "name": "Cheesecake",
    "category": "Dessert"
  },
  {
    "id": 164,
    "name": "Chocolate Brownie",
    "category": "Dessert"
  },
  {
    "id": 165,
    "name": "Fudge Brownie",
    "category": "Dessert"
  },
  {
    "id": 166,
    "name": "Chocolate Muffin",
    "category": "Dessert"
  },
  {
    "id": 167,
    "name": "Blueberry Muffin",
    "category": "Dessert"
  },
  {
    "id": 168,
    "name": "Banana Muffin",
    "category": "Dessert"
  },
  {
    "id": 169,
    "name": "Cupcake",
    "category": "Dessert"
  },
  {
    "id": 170,
    "name": "Chocolate Cookies",
    "category": "Dessert"
  },
  {
    "id": 171,
    "name": "Oatmeal Cookies",
    "category": "Dessert"
  },
  {
    "id": 172,
    "name": "Butter Cookies",
    "category": "Dessert"
  },
  {
    "id": 173,
    "name": "Macarons",
    "category": "Indian"
  },
  {
    "id": 174,
    "name": "Donuts",
    "category": "Dessert"
  },
  {
    "id": 175,
    "name": "Churros",
    "category": "Dessert"
  },
  {
    "id": 176,
    "name": "Chocolate Ice Cream",
    "category": "Dessert"
  },
  {
    "id": 177,
    "name": "Vanilla Ice Cream",
    "category": "Dessert"
  },
  {
    "id": 178,
    "name": "Strawberry Ice Cream",
    "category": "Dessert"
  },
  {
    "id": 179,
    "name": "Mango Ice Cream",
    "category": "Dessert"
  },
  {
    "id": 180,
    "name": "Butterscotch Ice Cream",
    "category": "Dessert"
  },
  {
    "id": 181,
    "name": "Pistachio Ice Cream",
    "category": "Dessert"
  },
  {
    "id": 182,
    "name": "Kulfi",
    "category": "Dessert"
  },
  {
    "id": 183,
    "name": "Falooda",
    "category": "Dessert"
  },
  {
    "id": 184,
    "name": "Gulab Jamun",
    "category": "Indian"
  },
  {
    "id": 185,
    "name": "Rasgulla",
    "category": "Dessert"
  },
  {
    "id": 186,
    "name": "Rasmalai",
    "category": "Indian"
  },
  {
    "id": 187,
    "name": "Jalebi",
    "category": "Dessert"
  },
  {
    "id": 188,
    "name": "Mysore Pak",
    "category": "Indian"
  },
  {
    "id": 189,
    "name": "Kaju Katli",
    "category": "Indian"
  },
  {
    "id": 190,
    "name": "Soan Papdi",
    "category": "Indian"
  },
  {
    "id": 191,
    "name": "Ladoo",
    "category": "Dessert"
  },
  {
    "id": 192,
    "name": "Kaju Burfi",
    "category": "Dessert"
  },
  {
    "id": 193,
    "name": "Coconut Burfi",
    "category": "Dessert"
  },
  {
    "id": 194,
    "name": "Payasam",
    "category": "Dessert"
  },
  {
    "id": 195,
    "name": "Semiya Payasam",
    "category": "Dessert"
  },
  {
    "id": 196,
    "name": "Pal Payasam",
    "category": "Dessert"
  },
  {
    "id": 197,
    "name": "Carrot Halwa",
    "category": "Dessert"
  },
  {
    "id": 198,
    "name": "Gajar Halwa",
    "category": "Dessert"
  },
  {
    "id": 199,
    "name": "Sooji Halwa",
    "category": "Dessert"
  },
  {
    "id": 200,
    "name": "Moong Dal Halwa",
    "category": "Dessert"
  },
  {
    "id": 201,
    "name": "Kesari",
    "category": "Dessert"
  },
  {
    "id": 202,
    "name": "Basundi",
    "category": "Indian"
  },
  {
    "id": 203,
    "name": "Custard",
    "category": "Indian"
  },
  {
    "id": 204,
    "name": "Tacos",
    "category": "Mexican"
  },
  {
    "id": 205,
    "name": "Chicken Tacos",
    "category": "Mexican"
  },
  {
    "id": 206,
    "name": "Fish Tacos",
    "category": "Mexican"
  },
  {
    "id": 207,
    "name": "Veg Tacos",
    "category": "Mexican"
  },
  {
    "id": 208,
    "name": "Burrito",
    "category": "Mexican"
  },
  {
    "id": 209,
    "name": "Chicken Burrito",
    "category": "Mexican"
  },
  {
    "id": 210,
    "name": "Quesadilla",
    "category": "Mexican"
  },
  {
    "id": 211,
    "name": "Enchiladas",
    "category": "Mexican"
  },
  {
    "id": 212,
    "name": "Guacamole",
    "category": "Mexican"
  },
  {
    "id": 213,
    "name": "Salsa",
    "category": "Mexican"
  },
  {
    "id": 214,
    "name": "Greek Salad",
    "category": "Indian"
  },
  {
    "id": 215,
    "name": "Caesar Salad",
    "category": "Indian"
  },
  {
    "id": 216,
    "name": "Caprese Salad",
    "category": "Indian"
  },
  {
    "id": 217,
    "name": "Coleslaw",
    "category": "Indian"
  },
  {
    "id": 218,
    "name": "Potato Salad",
    "category": "Indian"
  },
  {
    "id": 219,
    "name": "Pasta Salad",
    "category": "Italian"
  },
  {
    "id": 220,
    "name": "Chicken Salad",
    "category": "Indian"
  },
  {
    "id": 221,
    "name": "Club Sandwich",
    "category": "Fast Food"
  },
  {
    "id": 222,
    "name": "Grilled Cheese Sandwich",
    "category": "Fast Food"
  },
  {
    "id": 223,
    "name": "Chicken Sandwich",
    "category": "Fast Food"
  },
  {
    "id": 224,
    "name": "Veg Sandwich",
    "category": "Fast Food"
  },
  {
    "id": 225,
    "name": "Egg Sandwich",
    "category": "Fast Food"
  },
  {
    "id": 226,
    "name": "Tuna Sandwich",
    "category": "Fast Food"
  },
  {
    "id": 227,
    "name": "BLT Sandwich",
    "category": "Fast Food"
  },
  {
    "id": 228,
    "name": "Chicken Wings",
    "category": "Fast Food"
  },
  {
    "id": 229,
    "name": "BBQ Wings",
    "category": "Fast Food"
  },
  {
    "id": 230,
    "name": "Buffalo Wings",
    "category": "Fast Food"
  },
  {
    "id": 231,
    "name": "Chicken Nuggets",
    "category": "Indian"
  },
  {
    "id": 232,
    "name": "Chicken Strips",
    "category": "Indian"
  },
  {
    "id": 233,
    "name": "Popcorn Chicken",
    "category": "Indian"
  },
  {
    "id": 234,
    "name": "Corn Fritters",
    "category": "Indian"
  },
  {
    "id": 235,
    "name": "Thai Green Curry",
    "category": "Thai"
  },
  {
    "id": 236,
    "name": "Thai Red Curry",
    "category": "Thai"
  },
  {
    "id": 237,
    "name": "Massaman Curry",
    "category": "Thai"
  },
  {
    "id": 238,
    "name": "Pad Kra Pao",
    "category": "Thai"
  },
  {
    "id": 239,
    "name": "Tom Kha Soup",
    "category": "Thai"
  },
  {
    "id": 240,
    "name": "Mango Sticky Rice",
    "category": "Indian"
  },
  {
    "id": 241,
    "name": "Som Tam",
    "category": "Indian"
  },
  {
    "id": 242,
    "name": "Thai Satay",
    "category": "Thai"
  },
  {
    "id": 243,
    "name": "Japanese Curry",
    "category": "Indian"
  },
  {
    "id": 244,
    "name": "Chicken Katsu",
    "category": "Indian"
  },
  {
    "id": 245,
    "name": "Tonkatsu",
    "category": "Indian"
  },
  {
    "id": 246,
    "name": "Teriyaki Chicken",
    "category": "Japanese"
  },
  {
    "id": 247,
    "name": "Yakitori",
    "category": "Japanese"
  },
  {
    "id": 248,
    "name": "Okonomiyaki",
    "category": "Indian"
  },
  {
    "id": 249,
    "name": "Takoyaki",
    "category": "Japanese"
  },
  {
    "id": 250,
    "name": "Gyoza",
    "category": "Japanese"
  },
  {
    "id": 251,
    "name": "Onigiri",
    "category": "Japanese"
  },
  {
    "id": 252,
    "name": "Sushi Rolls",
    "category": "Japanese"
  },
  {
    "id": 253,
    "name": "Tempura",
    "category": "Japanese"
  },
  {
    "id": 254,
    "name": "Korean Fried Chicken",
    "category": "Indian"
  },
  {
    "id": 255,
    "name": "Bibimbap",
    "category": "Indian"
  },
  {
    "id": 256,
    "name": "Bulgogi",
    "category": "Indian"
  },
  {
    "id": 257,
    "name": "Japchae",
    "category": "Indian"
  },
  {
    "id": 258,
    "name": "Tteokbokki",
    "category": "Indian"
  },
  {
    "id": 259,
    "name": "Kimchi Fried Rice",
    "category": "Chinese"
  },
  {
    "id": 260,
    "name": "Korean BBQ",
    "category": "Indian"
  },
  {
    "id": 261,
    "name": "Jajangmyeon",
    "category": "Indian"
  },
  {
    "id": 262,
    "name": "Kung Pao Chicken",
    "category": "Chinese"
  },
  {
    "id": 263,
    "name": "Sweet and Sour Chicken",
    "category": "Indian"
  },
  {
    "id": 264,
    "name": "Mongolian Beef",
    "category": "Indian"
  },
  {
    "id": 265,
    "name": "Mapo Tofu",
    "category": "Chinese"
  },
  {
    "id": 266,
    "name": "Dan Dan Noodles",
    "category": "Chinese"
  },
  {
    "id": 267,
    "name": "Char Siu",
    "category": "Indian"
  },
  {
    "id": 268,
    "name": "Chinese Dumplings",
    "category": "Chinese"
  },
  {
    "id": 269,
    "name": "Peking Duck",
    "category": "Indian"
  },
  {
    "id": 270,
    "name": "Congee",
    "category": "Chinese"
  },
  {
    "id": 271,
    "name": "Singapore Noodles",
    "category": "Chinese"
  },
  {
    "id": 272,
    "name": "Hainanese Chicken Rice",
    "category": "Indian"
  },
  {
    "id": 273,
    "name": "Laksa",
    "category": "Indian"
  },
  {
    "id": 274,
    "name": "Nasi Goreng",
    "category": "Indian"
  },
  {
    "id": 275,
    "name": "Mee Goreng",
    "category": "Indian"
  },
  {
    "id": 276,
    "name": "Satay Chicken",
    "category": "Thai"
  },
  {
    "id": 277,
    "name": "Beef Rendang",
    "category": "Indian"
  },
  {
    "id": 278,
    "name": "Nasi Lemak",
    "category": "Indian"
  },
  {
    "id": 279,
    "name": "Char Kway Teow",
    "category": "Indian"
  },
  {
    "id": 280,
    "name": "Roti Canai",
    "category": "Indian"
  },
  {
    "id": 281,
    "name": "Vietnamese Pho",
    "category": "Indian"
  },
  {
    "id": 282,
    "name": "Banh Mi",
    "category": "Indian"
  },
  {
    "id": 283,
    "name": "Bun Cha",
    "category": "Indian"
  },
  {
    "id": 284,
    "name": "Bun Bo Hue",
    "category": "Indian"
  },
  {
    "id": 285,
    "name": "Vietnamese Spring Rolls",
    "category": "Indian"
  },
  {
    "id": 286,
    "name": "French Onion Soup",
    "category": "Indian"
  },
  {
    "id": 287,
    "name": "Ratatouille",
    "category": "Indian"
  },
  {
    "id": 288,
    "name": "Quiche Lorraine",
    "category": "Indian"
  },
  {
    "id": 289,
    "name": "Croque Monsieur",
    "category": "Indian"
  },
  {
    "id": 290,
    "name": "Coq au Vin",
    "category": "Indian"
  },
  {
    "id": 291,
    "name": "Beef Bourguignon",
    "category": "Indian"
  },
  {
    "id": 292,
    "name": "Bouillabaisse",
    "category": "Indian"
  },
  {
    "id": 293,
    "name": "Crepes",
    "category": "Indian"
  },
  {
    "id": 294,
    "name": "Nicoise Salad",
    "category": "Indian"
  },
  {
    "id": 295,
    "name": "Chicken Parmesan",
    "category": "Indian"
  },
  {
    "id": 296,
    "name": "Eggplant Parmesan",
    "category": "Indian"
  },
  {
    "id": 297,
    "name": "Risotto",
    "category": "Italian"
  },
  {
    "id": 298,
    "name": "Minestrone",
    "category": "Indian"
  },
  {
    "id": 299,
    "name": "Gnocchi",
    "category": "Italian"
  },
  {
    "id": 300,
    "name": "Cannelloni",
    "category": "Indian"
  },
  {
    "id": 301,
    "name": "Calzone",
    "category": "Italian"
  },
  {
    "id": 302,
    "name": "Focaccia",
    "category": "Italian"
  },
  {
    "id": 303,
    "name": "Greek Moussaka",
    "category": "Indian"
  },
  {
    "id": 304,
    "name": "Souvlaki",
    "category": "Indian"
  },
  {
    "id": 305,
    "name": "Spanakopita",
    "category": "Indian"
  },
  {
    "id": 306,
    "name": "Pastitsio",
    "category": "Indian"
  },
  {
    "id": 307,
    "name": "Tzatziki",
    "category": "Indian"
  },
  {
    "id": 308,
    "name": "Dolma",
    "category": "Indian"
  },
  {
    "id": 309,
    "name": "Baklava",
    "category": "Dessert"
  },
  {
    "id": 310,
    "name": "Spanish Paella",
    "category": "Indian"
  },
  {
    "id": 311,
    "name": "Tortilla Española",
    "category": "Indian"
  },
  {
    "id": 312,
    "name": "Patatas Bravas",
    "category": "Indian"
  },
  {
    "id": 313,
    "name": "Gazpacho",
    "category": "Indian"
  },
  {
    "id": 314,
    "name": "Croquetas",
    "category": "Indian"
  },
  {
    "id": 315,
    "name": "Empanada",
    "category": "Indian"
  },
  {
    "id": 316,
    "name": "Fish and Chips",
    "category": "Indian"
  },
  {
    "id": 317,
    "name": "Shepherd's Pie",
    "category": "Dessert"
  },
  {
    "id": 318,
    "name": "Cottage Pie",
    "category": "Dessert"
  },
  {
    "id": 319,
    "name": "Beef Wellington",
    "category": "Indian"
  },
  {
    "id": 320,
    "name": "Yorkshire Pudding",
    "category": "Dessert"
  },
  {
    "id": 321,
    "name": "Cornish Pasty",
    "category": "Indian"
  },
  {
    "id": 322,
    "name": "Chicken Pot Pie",
    "category": "Dessert"
  },
  {
    "id": 323,
    "name": "Sausage Roll",
    "category": "Indian"
  },
  {
    "id": 324,
    "name": "Scotch Egg",
    "category": "Indian"
  },
  {
    "id": 325,
    "name": "American Pancakes",
    "category": "Dessert"
  },
  {
    "id": 326,
    "name": "French Toast",
    "category": "Indian"
  },
  {
    "id": 327,
    "name": "Waffles",
    "category": "Fast Food"
  },
  {
    "id": 328,
    "name": "Belgian Waffles",
    "category": "Fast Food"
  },
  {
    "id": 329,
    "name": "Eggs Benedict",
    "category": "Indian"
  },
  {
    "id": 330,
    "name": "Hash Browns",
    "category": "Indian"
  },
  {
    "id": 331,
    "name": "Clam Chowder",
    "category": "Indian"
  },
  {
    "id": 332,
    "name": "Gumbo",
    "category": "Indian"
  },
  {
    "id": 333,
    "name": "Jambalaya",
    "category": "Indian"
  },
  {
    "id": 334,
    "name": "BBQ Ribs",
    "category": "Fast Food"
  },
  {
    "id": 335,
    "name": "Meatloaf",
    "category": "Indian"
  },
  {
    "id": 336,
    "name": "Cornbread",
    "category": "Indian"
  },
  {
    "id": 337,
    "name": "Chicken and Waffles",
    "category": "Fast Food"
  },
  {
    "id": 338,
    "name": "Sloppy Joe",
    "category": "Indian"
  },
  {
    "id": 339,
    "name": "New York Cheesecake",
    "category": "Dessert"
  },
  {
    "id": 340,
    "name": "Apple Pie",
    "category": "Dessert"
  },
  {
    "id": 341,
    "name": "Pumpkin Pie",
    "category": "Dessert"
  },
  {
    "id": 342,
    "name": "Pecan Pie",
    "category": "Dessert"
  },
  {
    "id": 343,
    "name": "Key Lime Pie",
    "category": "Dessert"
  },
  {
    "id": 344,
    "name": "Mango Lassi",
    "category": "Indian"
  },
  {
    "id": 345,
    "name": "Sweet Lassi",
    "category": "Indian"
  },
  {
    "id": 346,
    "name": "Salted Lassi",
    "category": "Indian"
  },
  {
    "id": 347,
    "name": "Rose Milk",
    "category": "Indian"
  },
  {
    "id": 348,
    "name": "Badam Milk",
    "category": "Indian"
  },
  {
    "id": 349,
    "name": "Masala Chai",
    "category": "Indian"
  },
  {
    "id": 350,
    "name": "Filter Coffee",
    "category": "Indian"
  },
  {
    "id": 351,
    "name": "Cold Coffee",
    "category": "Indian"
  },
  {
    "id": 352,
    "name": "Mango Shake",
    "category": "Indian"
  },
  {
    "id": 353,
    "name": "Banana Shake",
    "category": "Indian"
  },
  {
    "id": 354,
    "name": "Strawberry Shake",
    "category": "Indian"
  },
  {
    "id": 355,
    "name": "Chocolate Shake",
    "category": "Indian"
  },
  {
    "id": 356,
    "name": "Mango Smoothie",
    "category": "Indian"
  },
  {
    "id": 357,
    "name": "Berry Smoothie",
    "category": "Indian"
  },
  {
    "id": 358,
    "name": "Banana Smoothie",
    "category": "Indian"
  },
  {
    "id": 359,
    "name": "Lemonade",
    "category": "Indian"
  },
  {
    "id": 360,
    "name": "Mint Lemonade",
    "category": "Indian"
  },
  {
    "id": 361,
    "name": "Iced Tea",
    "category": "Indian"
  },
  {
    "id": 362,
    "name": "Spicy Chicken Biryani",
    "category": "Indian"
  },
  {
    "id": 363,
    "name": "Spicy Mutton Biryani",
    "category": "Indian"
  },
  {
    "id": 364,
    "name": "Spicy Egg Biryani",
    "category": "Indian"
  },
  {
    "id": 365,
    "name": "Spicy Fish Biryani",
    "category": "Indian"
  },
  {
    "id": 366,
    "name": "Spicy Prawn Biryani",
    "category": "Indian"
  },
  {
    "id": 367,
    "name": "Spicy Veg Biryani",
    "category": "Indian"
  },
  {
    "id": 368,
    "name": "Spicy Paneer Biryani",
    "category": "Indian"
  },
  {
    "id": 369,
    "name": "Spicy Mushroom Biryani",
    "category": "Indian"
  },
  {
    "id": 370,
    "name": "Spicy Masala Dosa",
    "category": "Indian"
  },
  {
    "id": 371,
    "name": "Spicy Plain Dosa",
    "category": "Indian"
  },
  {
    "id": 372,
    "name": "Spicy Onion Dosa",
    "category": "Indian"
  },
  {
    "id": 373,
    "name": "Spicy Rava Dosa",
    "category": "Indian"
  },
  {
    "id": 374,
    "name": "Spicy Mysore Masala Dosa",
    "category": "Indian"
  },
  {
    "id": 375,
    "name": "Spicy Set Dosa",
    "category": "Indian"
  },
  {
    "id": 376,
    "name": "Spicy Neer Dosa",
    "category": "Indian"
  },
  {
    "id": 377,
    "name": "Spicy Pesarattu",
    "category": "Indian"
  },
  {
    "id": 378,
    "name": "Spicy Idli",
    "category": "Indian"
  },
  {
    "id": 379,
    "name": "Spicy Medu Vada",
    "category": "Indian"
  },
  {
    "id": 380,
    "name": "Spicy Masala Vada",
    "category": "Indian"
  },
  {
    "id": 381,
    "name": "Spicy Pongal",
    "category": "Indian"
  },
  {
    "id": 382,
    "name": "Spicy Upma",
    "category": "Indian"
  },
  {
    "id": 383,
    "name": "Spicy Puttu",
    "category": "Indian"
  },
  {
    "id": 384,
    "name": "Spicy Appam",
    "category": "Indian"
  },
  {
    "id": 385,
    "name": "Spicy Idiyappam",
    "category": "Indian"
  },
  {
    "id": 386,
    "name": "Spicy Parotta",
    "category": "Indian"
  },
  {
    "id": 387,
    "name": "Spicy Chapati",
    "category": "Indian"
  },
  {
    "id": 388,
    "name": "Spicy Poori",
    "category": "Indian"
  },
  {
    "id": 389,
    "name": "Spicy Aloo Paratha",
    "category": "Indian"
  },
  {
    "id": 390,
    "name": "Spicy Chole Bhature",
    "category": "Indian"
  },
  {
    "id": 391,
    "name": "Spicy Pav Bhaji",
    "category": "Indian"
  },
  {
    "id": 392,
    "name": "Spicy Vada Pav",
    "category": "Indian"
  },
  {
    "id": 393,
    "name": "Spicy Pani Puri",
    "category": "Indian"
  },
  {
    "id": 394,
    "name": "Spicy Bhel Puri",
    "category": "Indian"
  },
  {
    "id": 395,
    "name": "Spicy Dahi Puri",
    "category": "Indian"
  },
  {
    "id": 396,
    "name": "Spicy Samosa",
    "category": "Indian"
  },
  {
    "id": 397,
    "name": "Spicy Pakora",
    "category": "Indian"
  },
  {
    "id": 398,
    "name": "Spicy Kachori",
    "category": "Indian"
  },
  {
    "id": 399,
    "name": "Spicy Dhokla",
    "category": "Indian"
  },
  {
    "id": 400,
    "name": "Spicy Chicken 65",
    "category": "Indian"
  },
  {
    "id": 401,
    "name": "Spicy Chilli Chicken",
    "category": "Indian"
  },
  {
    "id": 402,
    "name": "Spicy Pepper Chicken",
    "category": "Indian"
  },
  {
    "id": 403,
    "name": "Spicy Butter Chicken",
    "category": "Indian"
  },
  {
    "id": 404,
    "name": "Spicy Chicken Tikka",
    "category": "Indian"
  },
  {
    "id": 405,
    "name": "Spicy Chicken Tandoori",
    "category": "Indian"
  },
  {
    "id": 406,
    "name": "Spicy Chicken Chettinad",
    "category": "Indian"
  },
  {
    "id": 407,
    "name": "Spicy Chicken Sukka",
    "category": "Indian"
  },
  {
    "id": 408,
    "name": "Spicy Mutton Chukka",
    "category": "Indian"
  },
  {
    "id": 409,
    "name": "Spicy Mutton Rogan Josh",
    "category": "Indian"
  },
  {
    "id": 410,
    "name": "Spicy Mutton Curry",
    "category": "Indian"
  },
  {
    "id": 411,
    "name": "Spicy Mutton Korma",
    "category": "Indian"
  },
  {
    "id": 412,
    "name": "Spicy Mutton Pepper Fry",
    "category": "Indian"
  },
  {
    "id": 413,
    "name": "Spicy Mutton Chettinad",
    "category": "Indian"
  },
  {
    "id": 414,
    "name": "Spicy Fish Fry",
    "category": "Indian"
  },
  {
    "id": 415,
    "name": "Spicy Fish Curry",
    "category": "Indian"
  },
  {
    "id": 416,
    "name": "Spicy Fish Tikka",
    "category": "Indian"
  },
  {
    "id": 417,
    "name": "Spicy Kerala Fish Curry",
    "category": "Indian"
  },
  {
    "id": 418,
    "name": "Spicy Goan Fish Curry",
    "category": "Indian"
  },
  {
    "id": 419,
    "name": "Spicy Prawn Masala",
    "category": "Indian"
  },
  {
    "id": 420,
    "name": "Spicy Prawn Fry",
    "category": "Indian"
  },
  {
    "id": 421,
    "name": "Spicy Prawn Curry",
    "category": "Indian"
  },
  {
    "id": 422,
    "name": "Spicy Paneer Butter Masala",
    "category": "Indian"
  },
  {
    "id": 423,
    "name": "Spicy Kadai Paneer",
    "category": "Indian"
  },
  {
    "id": 424,
    "name": "Spicy Palak Paneer",
    "category": "Indian"
  },
  {
    "id": 425,
    "name": "Spicy Shahi Paneer",
    "category": "Indian"
  },
  {
    "id": 426,
    "name": "Spicy Paneer Tikka",
    "category": "Indian"
  },
  {
    "id": 427,
    "name": "Spicy Matar Paneer",
    "category": "Indian"
  },
  {
    "id": 428,
    "name": "Spicy Chilli Paneer",
    "category": "Indian"
  },
  {
    "id": 429,
    "name": "Spicy Paneer Bhurji",
    "category": "Indian"
  },
  {
    "id": 430,
    "name": "Spicy Dal Tadka",
    "category": "Indian"
  },
  {
    "id": 431,
    "name": "Spicy Dal Makhani",
    "category": "Indian"
  },
  {
    "id": 432,
    "name": "Spicy Rajma Masala",
    "category": "Indian"
  },
  {
    "id": 433,
    "name": "Spicy Chana Masala",
    "category": "Indian"
  },
  {
    "id": 434,
    "name": "Spicy Aloo Gobi",
    "category": "Indian"
  },
  {
    "id": 435,
    "name": "Spicy Aloo Matar",
    "category": "Indian"
  },
  {
    "id": 436,
    "name": "Spicy Baingan Bharta",
    "category": "Indian"
  },
  {
    "id": 437,
    "name": "Spicy Bhindi Masala",
    "category": "Indian"
  },
  {
    "id": 438,
    "name": "Spicy Malai Kofta",
    "category": "Indian"
  },
  {
    "id": 439,
    "name": "Spicy White Pasta",
    "category": "Italian"
  },
  {
    "id": 440,
    "name": "Spicy Red Sauce Pasta",
    "category": "Italian"
  },
  {
    "id": 441,
    "name": "Spicy Arrabbiata Pasta",
    "category": "Italian"
  },
  {
    "id": 442,
    "name": "Spicy Alfredo Pasta",
    "category": "Italian"
  },
  {
    "id": 443,
    "name": "Spicy Pesto Pasta",
    "category": "Italian"
  },
  {
    "id": 444,
    "name": "Spicy Mac and Cheese",
    "category": "Indian"
  },
  {
    "id": 445,
    "name": "Spicy Lasagna",
    "category": "Italian"
  },
  {
    "id": 446,
    "name": "Spicy Ravioli",
    "category": "Italian"
  },
  {
    "id": 447,
    "name": "Spicy Spaghetti Carbonara",
    "category": "Indian"
  },
  {
    "id": 448,
    "name": "Spicy Spaghetti Bolognese",
    "category": "Indian"
  },
  {
    "id": 449,
    "name": "Spicy Margherita Pizza",
    "category": "Italian"
  },
  {
    "id": 450,
    "name": "Spicy Pepperoni Pizza",
    "category": "Italian"
  },
  {
    "id": 451,
    "name": "Spicy Farmhouse Pizza",
    "category": "Italian"
  },
  {
    "id": 452,
    "name": "Spicy Paneer Pizza",
    "category": "Italian"
  },
  {
    "id": 453,
    "name": "Spicy Chicken Pizza",
    "category": "Italian"
  },
  {
    "id": 454,
    "name": "Spicy Veggie Pizza",
    "category": "Italian"
  },
  {
    "id": 455,
    "name": "Spicy Cheese Pizza",
    "category": "Italian"
  },
  {
    "id": 456,
    "name": "Spicy Garlic Bread",
    "category": "Indian"
  },
  {
    "id": 457,
    "name": "Spicy Bruschetta",
    "category": "Italian"
  },
  {
    "id": 458,
    "name": "Spicy Fried Rice",
    "category": "Chinese"
  },
  {
    "id": 459,
    "name": "Spicy Chicken Fried Rice",
    "category": "Chinese"
  },
  {
    "id": 460,
    "name": "Spicy Egg Fried Rice",
    "category": "Chinese"
  },
  {
    "id": 461,
    "name": "Spicy Schezwan Fried Rice",
    "category": "Chinese"
  },
  {
    "id": 462,
    "name": "Spicy Veg Fried Rice",
    "category": "Chinese"
  },
  {
    "id": 463,
    "name": "Spicy Mushroom Fried Rice",
    "category": "Chinese"
  },
  {
    "id": 464,
    "name": "Spicy Prawn Fried Rice",
    "category": "Chinese"
  },
  {
    "id": 465,
    "name": "Spicy Thai Fried Rice",
    "category": "Thai"
  },
  {
    "id": 466,
    "name": "Spicy Chicken Noodles",
    "category": "Chinese"
  },
  {
    "id": 467,
    "name": "Spicy Veg Hakka Noodles",
    "category": "Chinese"
  },
  {
    "id": 468,
    "name": "Spicy Schezwan Noodles",
    "category": "Chinese"
  },
  {
    "id": 469,
    "name": "Spicy Egg Noodles",
    "category": "Chinese"
  },
  {
    "id": 470,
    "name": "Spicy Chow Mein",
    "category": "Chinese"
  },
  {
    "id": 471,
    "name": "Spicy Pad Thai",
    "category": "Thai"
  },
  {
    "id": 472,
    "name": "Spicy Ramen",
    "category": "Japanese"
  },
  {
    "id": 473,
    "name": "Spicy Udon Noodles",
    "category": "Japanese"
  },
  {
    "id": 474,
    "name": "Spicy Soba Noodles",
    "category": "Japanese"
  },
  {
    "id": 475,
    "name": "Spicy Chicken Manchurian",
    "category": "Chinese"
  },
  {
    "id": 476,
    "name": "Spicy Gobi Manchurian",
    "category": "Chinese"
  },
  {
    "id": 477,
    "name": "Spicy Veg Manchurian",
    "category": "Chinese"
  },
  {
    "id": 478,
    "name": "Spicy Spring Rolls",
    "category": "Indian"
  },
  {
    "id": 479,
    "name": "Spicy Momos",
    "category": "Chinese"
  },
  {
    "id": 480,
    "name": "Spicy Chicken Momos",
    "category": "Chinese"
  },
  {
    "id": 481,
    "name": "Spicy Dim Sum",
    "category": "Indian"
  },
  {
    "id": 482,
    "name": "Spicy Wontons",
    "category": "Chinese"
  },
  {
    "id": 483,
    "name": "Spicy Tom Yum Soup",
    "category": "Thai"
  },
  {
    "id": 484,
    "name": "Spicy Hot and Sour Soup",
    "category": "Indian"
  },
  {
    "id": 485,
    "name": "Spicy Sweet Corn Soup",
    "category": "Indian"
  },
  {
    "id": 486,
    "name": "Spicy Manchow Soup",
    "category": "Indian"
  },
  {
    "id": 487,
    "name": "Spicy Miso Soup",
    "category": "Indian"
  },
  {
    "id": 488,
    "name": "Spicy Rasam",
    "category": "Indian"
  },
  {
    "id": 489,
    "name": "Spicy Sambar",
    "category": "Indian"
  },
  {
    "id": 490,
    "name": "Spicy Chicken Soup",
    "category": "Indian"
  },
  {
    "id": 491,
    "name": "Spicy Mushroom Soup",
    "category": "Indian"
  },
  {
    "id": 492,
    "name": "Spicy Chicken Shawarma",
    "category": "Indian"
  },
  {
    "id": 493,
    "name": "Spicy Falafel Wrap",
    "category": "Indian"
  },
  {
    "id": 494,
    "name": "Spicy Hummus",
    "category": "Indian"
  },
  {
    "id": 495,
    "name": "Spicy Baba Ganoush",
    "category": "Indian"
  },
  {
    "id": 496,
    "name": "Spicy Chicken Kebab",
    "category": "Indian"
  },
  {
    "id": 497,
    "name": "Spicy Seekh Kebab",
    "category": "Indian"
  },
  {
    "id": 498,
    "name": "Spicy Shish Kebab",
    "category": "Indian"
  },
  {
    "id": 499,
    "name": "Spicy Doner Kebab",
    "category": "Indian"
  },
  {
    "id": 500,
    "name": "Spicy Gyro",
    "category": "Indian"
  },
  {
    "id": 501,
    "name": "Spicy Chicken Burger",
    "category": "Fast Food"
  },
  {
    "id": 502,
    "name": "Spicy Veg Burger",
    "category": "Fast Food"
  },
  {
    "id": 503,
    "name": "Spicy Paneer Burger",
    "category": "Fast Food"
  },
  {
    "id": 504,
    "name": "Spicy Cheese Burger",
    "category": "Fast Food"
  },
  {
    "id": 505,
    "name": "Spicy Fish Burger",
    "category": "Fast Food"
  },
  {
    "id": 506,
    "name": "Spicy Mushroom Burger",
    "category": "Fast Food"
  },
  {
    "id": 507,
    "name": "Spicy French Fries",
    "category": "Fast Food"
  },
  {
    "id": 508,
    "name": "Spicy Peri Peri Fries",
    "category": "Fast Food"
  },
  {
    "id": 509,
    "name": "Spicy Cheese Fries",
    "category": "Fast Food"
  },
  {
    "id": 510,
    "name": "Spicy Sweet Potato Fries",
    "category": "Fast Food"
  },
  {
    "id": 511,
    "name": "Spicy Onion Rings",
    "category": "Indian"
  },
  {
    "id": 512,
    "name": "Spicy Potato Wedges",
    "category": "Indian"
  },
  {
    "id": 513,
    "name": "Spicy Nachos",
    "category": "Mexican"
  },
  {
    "id": 514,
    "name": "Spicy Cheese Nachos",
    "category": "Mexican"
  },
  {
    "id": 515,
    "name": "Spicy Chocolate Cake",
    "category": "Dessert"
  },
  {
    "id": 516,
    "name": "Spicy Vanilla Cake",
    "category": "Dessert"
  },
  {
    "id": 517,
    "name": "Spicy Red Velvet Cake",
    "category": "Dessert"
  },
  {
    "id": 518,
    "name": "Spicy Black Forest Cake",
    "category": "Dessert"
  },
  {
    "id": 519,
    "name": "Spicy Pineapple Cake",
    "category": "Dessert"
  },
  {
    "id": 520,
    "name": "Spicy Carrot Cake",
    "category": "Dessert"
  },
  {
    "id": 521,
    "name": "Spicy Coffee Cake",
    "category": "Dessert"
  },
  {
    "id": 522,
    "name": "Spicy Marble Cake",
    "category": "Dessert"
  },
  {
    "id": 523,
    "name": "Spicy Fruit Cake",
    "category": "Dessert"
  },
  {
    "id": 524,
    "name": "Spicy Cheesecake",
    "category": "Dessert"
  },
  {
    "id": 525,
    "name": "Spicy Chocolate Brownie",
    "category": "Dessert"
  },
  {
    "id": 526,
    "name": "Spicy Fudge Brownie",
    "category": "Dessert"
  },
  {
    "id": 527,
    "name": "Spicy Chocolate Muffin",
    "category": "Dessert"
  },
  {
    "id": 528,
    "name": "Spicy Blueberry Muffin",
    "category": "Dessert"
  },
  {
    "id": 529,
    "name": "Spicy Banana Muffin",
    "category": "Dessert"
  },
  {
    "id": 530,
    "name": "Spicy Cupcake",
    "category": "Dessert"
  },
  {
    "id": 531,
    "name": "Spicy Chocolate Cookies",
    "category": "Dessert"
  },
  {
    "id": 532,
    "name": "Spicy Oatmeal Cookies",
    "category": "Dessert"
  },
  {
    "id": 533,
    "name": "Spicy Butter Cookies",
    "category": "Dessert"
  },
  {
    "id": 534,
    "name": "Spicy Macarons",
    "category": "Indian"
  },
  {
    "id": 535,
    "name": "Spicy Donuts",
    "category": "Dessert"
  },
  {
    "id": 536,
    "name": "Spicy Churros",
    "category": "Dessert"
  },
  {
    "id": 537,
    "name": "Spicy Chocolate Ice Cream",
    "category": "Dessert"
  },
  {
    "id": 538,
    "name": "Spicy Vanilla Ice Cream",
    "category": "Dessert"
  },
  {
    "id": 539,
    "name": "Spicy Strawberry Ice Cream",
    "category": "Dessert"
  },
  {
    "id": 540,
    "name": "Spicy Mango Ice Cream",
    "category": "Dessert"
  },
  {
    "id": 541,
    "name": "Spicy Butterscotch Ice Cream",
    "category": "Dessert"
  },
  {
    "id": 542,
    "name": "Spicy Pistachio Ice Cream",
    "category": "Dessert"
  },
  {
    "id": 543,
    "name": "Spicy Kulfi",
    "category": "Dessert"
  },
  {
    "id": 544,
    "name": "Spicy Falooda",
    "category": "Dessert"
  },
  {
    "id": 545,
    "name": "Spicy Gulab Jamun",
    "category": "Indian"
  },
  {
    "id": 546,
    "name": "Spicy Rasgulla",
    "category": "Dessert"
  },
  {
    "id": 547,
    "name": "Spicy Rasmalai",
    "category": "Indian"
  },
  {
    "id": 548,
    "name": "Spicy Jalebi",
    "category": "Dessert"
  },
  {
    "id": 549,
    "name": "Spicy Mysore Pak",
    "category": "Indian"
  },
  {
    "id": 550,
    "name": "Spicy Kaju Katli",
    "category": "Indian"
  },
  {
    "id": 551,
    "name": "Spicy Soan Papdi",
    "category": "Indian"
  },
  {
    "id": 552,
    "name": "Spicy Ladoo",
    "category": "Dessert"
  },
  {
    "id": 553,
    "name": "Spicy Kaju Burfi",
    "category": "Dessert"
  },
  {
    "id": 554,
    "name": "Spicy Coconut Burfi",
    "category": "Dessert"
  },
  {
    "id": 555,
    "name": "Spicy Payasam",
    "category": "Dessert"
  },
  {
    "id": 556,
    "name": "Spicy Semiya Payasam",
    "category": "Dessert"
  },
  {
    "id": 557,
    "name": "Spicy Pal Payasam",
    "category": "Dessert"
  },
  {
    "id": 558,
    "name": "Spicy Carrot Halwa",
    "category": "Dessert"
  },
  {
    "id": 559,
    "name": "Spicy Gajar Halwa",
    "category": "Dessert"
  },
  {
    "id": 560,
    "name": "Spicy Sooji Halwa",
    "category": "Dessert"
  },
  {
    "id": 561,
    "name": "Spicy Moong Dal Halwa",
    "category": "Dessert"
  },
  {
    "id": 562,
    "name": "Spicy Kesari",
    "category": "Dessert"
  },
  {
    "id": 563,
    "name": "Spicy Basundi",
    "category": "Indian"
  },
  {
    "id": 564,
    "name": "Spicy Custard",
    "category": "Indian"
  },
  {
    "id": 565,
    "name": "Spicy Tacos",
    "category": "Mexican"
  },
  {
    "id": 566,
    "name": "Spicy Chicken Tacos",
    "category": "Mexican"
  },
  {
    "id": 567,
    "name": "Spicy Fish Tacos",
    "category": "Mexican"
  },
  {
    "id": 568,
    "name": "Spicy Veg Tacos",
    "category": "Mexican"
  },
  {
    "id": 569,
    "name": "Spicy Burrito",
    "category": "Mexican"
  },
  {
    "id": 570,
    "name": "Spicy Chicken Burrito",
    "category": "Mexican"
  },
  {
    "id": 571,
    "name": "Spicy Quesadilla",
    "category": "Mexican"
  },
  {
    "id": 572,
    "name": "Spicy Enchiladas",
    "category": "Mexican"
  },
  {
    "id": 573,
    "name": "Spicy Guacamole",
    "category": "Mexican"
  },
  {
    "id": 574,
    "name": "Spicy Salsa",
    "category": "Mexican"
  },
  {
    "id": 575,
    "name": "Spicy Greek Salad",
    "category": "Indian"
  },
  {
    "id": 576,
    "name": "Spicy Caesar Salad",
    "category": "Indian"
  },
  {
    "id": 577,
    "name": "Spicy Caprese Salad",
    "category": "Indian"
  },
  {
    "id": 578,
    "name": "Spicy Coleslaw",
    "category": "Indian"
  },
  {
    "id": 579,
    "name": "Spicy Potato Salad",
    "category": "Indian"
  },
  {
    "id": 580,
    "name": "Spicy Pasta Salad",
    "category": "Italian"
  },
  {
    "id": 581,
    "name": "Spicy Chicken Salad",
    "category": "Indian"
  },
  {
    "id": 582,
    "name": "Spicy Club Sandwich",
    "category": "Fast Food"
  },
  {
    "id": 583,
    "name": "Spicy Grilled Cheese Sandwich",
    "category": "Fast Food"
  },
  {
    "id": 584,
    "name": "Spicy Chicken Sandwich",
    "category": "Fast Food"
  },
  {
    "id": 585,
    "name": "Spicy Veg Sandwich",
    "category": "Fast Food"
  },
  {
    "id": 586,
    "name": "Spicy Egg Sandwich",
    "category": "Fast Food"
  },
  {
    "id": 587,
    "name": "Spicy Tuna Sandwich",
    "category": "Fast Food"
  },
  {
    "id": 588,
    "name": "Spicy BLT Sandwich",
    "category": "Fast Food"
  },
  {
    "id": 589,
    "name": "Spicy Chicken Wings",
    "category": "Fast Food"
  },
  {
    "id": 590,
    "name": "Spicy BBQ Wings",
    "category": "Fast Food"
  },
  {
    "id": 591,
    "name": "Spicy Buffalo Wings",
    "category": "Fast Food"
  },
  {
    "id": 592,
    "name": "Spicy Chicken Nuggets",
    "category": "Indian"
  },
  {
    "id": 593,
    "name": "Spicy Chicken Strips",
    "category": "Indian"
  },
  {
    "id": 594,
    "name": "Spicy Popcorn Chicken",
    "category": "Indian"
  },
  {
    "id": 595,
    "name": "Spicy Corn Fritters",
    "category": "Indian"
  },
  {
    "id": 596,
    "name": "Spicy Thai Green Curry",
    "category": "Thai"
  },
  {
    "id": 597,
    "name": "Spicy Thai Red Curry",
    "category": "Thai"
  },
  {
    "id": 598,
    "name": "Spicy Massaman Curry",
    "category": "Thai"
  },
  {
    "id": 599,
    "name": "Spicy Pad Kra Pao",
    "category": "Thai"
  },
  {
    "id": 600,
    "name": "Spicy Tom Kha Soup",
    "category": "Thai"
  },
  {
    "id": 601,
    "name": "Spicy Mango Sticky Rice",
    "category": "Indian"
  },
  {
    "id": 602,
    "name": "Spicy Som Tam",
    "category": "Indian"
  },
  {
    "id": 603,
    "name": "Spicy Thai Satay",
    "category": "Thai"
  },
  {
    "id": 604,
    "name": "Spicy Japanese Curry",
    "category": "Indian"
  },
  {
    "id": 605,
    "name": "Spicy Chicken Katsu",
    "category": "Indian"
  },
  {
    "id": 606,
    "name": "Spicy Tonkatsu",
    "category": "Indian"
  },
  {
    "id": 607,
    "name": "Spicy Teriyaki Chicken",
    "category": "Japanese"
  },
  {
    "id": 608,
    "name": "Spicy Yakitori",
    "category": "Japanese"
  },
  {
    "id": 609,
    "name": "Spicy Okonomiyaki",
    "category": "Indian"
  },
  {
    "id": 610,
    "name": "Spicy Takoyaki",
    "category": "Japanese"
  },
  {
    "id": 611,
    "name": "Spicy Gyoza",
    "category": "Japanese"
  },
  {
    "id": 612,
    "name": "Spicy Onigiri",
    "category": "Japanese"
  },
  {
    "id": 613,
    "name": "Spicy Sushi Rolls",
    "category": "Japanese"
  },
  {
    "id": 614,
    "name": "Spicy Tempura",
    "category": "Japanese"
  },
  {
    "id": 615,
    "name": "Spicy Korean Fried Chicken",
    "category": "Indian"
  },
  {
    "id": 616,
    "name": "Spicy Bibimbap",
    "category": "Indian"
  },
  {
    "id": 617,
    "name": "Spicy Bulgogi",
    "category": "Indian"
  },
  {
    "id": 618,
    "name": "Spicy Japchae",
    "category": "Indian"
  },
  {
    "id": 619,
    "name": "Spicy Tteokbokki",
    "category": "Indian"
  },
  {
    "id": 620,
    "name": "Spicy Kimchi Fried Rice",
    "category": "Chinese"
  },
  {
    "id": 621,
    "name": "Spicy Korean BBQ",
    "category": "Indian"
  },
  {
    "id": 622,
    "name": "Spicy Jajangmyeon",
    "category": "Indian"
  },
  {
    "id": 623,
    "name": "Spicy Kung Pao Chicken",
    "category": "Chinese"
  },
  {
    "id": 624,
    "name": "Spicy Sweet and Sour Chicken",
    "category": "Indian"
  },
  {
    "id": 625,
    "name": "Spicy Mongolian Beef",
    "category": "Indian"
  },
  {
    "id": 626,
    "name": "Spicy Mapo Tofu",
    "category": "Chinese"
  },
  {
    "id": 627,
    "name": "Spicy Dan Dan Noodles",
    "category": "Chinese"
  },
  {
    "id": 628,
    "name": "Spicy Char Siu",
    "category": "Indian"
  },
  {
    "id": 629,
    "name": "Spicy Chinese Dumplings",
    "category": "Chinese"
  },
  {
    "id": 630,
    "name": "Spicy Peking Duck",
    "category": "Indian"
  },
  {
    "id": 631,
    "name": "Spicy Congee",
    "category": "Chinese"
  },
  {
    "id": 632,
    "name": "Spicy Singapore Noodles",
    "category": "Chinese"
  },
  {
    "id": 633,
    "name": "Spicy Hainanese Chicken Rice",
    "category": "Indian"
  },
  {
    "id": 634,
    "name": "Spicy Laksa",
    "category": "Indian"
  },
  {
    "id": 635,
    "name": "Spicy Nasi Goreng",
    "category": "Indian"
  },
  {
    "id": 636,
    "name": "Spicy Mee Goreng",
    "category": "Indian"
  },
  {
    "id": 637,
    "name": "Spicy Satay Chicken",
    "category": "Thai"
  },
  {
    "id": 638,
    "name": "Spicy Beef Rendang",
    "category": "Indian"
  },
  {
    "id": 639,
    "name": "Spicy Nasi Lemak",
    "category": "Indian"
  },
  {
    "id": 640,
    "name": "Spicy Char Kway Teow",
    "category": "Indian"
  },
  {
    "id": 641,
    "name": "Spicy Roti Canai",
    "category": "Indian"
  },
  {
    "id": 642,
    "name": "Spicy Vietnamese Pho",
    "category": "Indian"
  },
  {
    "id": 643,
    "name": "Spicy Banh Mi",
    "category": "Indian"
  },
  {
    "id": 644,
    "name": "Spicy Bun Cha",
    "category": "Indian"
  },
  {
    "id": 645,
    "name": "Spicy Bun Bo Hue",
    "category": "Indian"
  },
  {
    "id": 646,
    "name": "Spicy Vietnamese Spring Rolls",
    "category": "Indian"
  },
  {
    "id": 647,
    "name": "Spicy French Onion Soup",
    "category": "Indian"
  },
  {
    "id": 648,
    "name": "Spicy Ratatouille",
    "category": "Indian"
  },
  {
    "id": 649,
    "name": "Spicy Quiche Lorraine",
    "category": "Indian"
  },
  {
    "id": 650,
    "name": "Spicy Croque Monsieur",
    "category": "Indian"
  },
  {
    "id": 651,
    "name": "Spicy Coq au Vin",
    "category": "Indian"
  },
  {
    "id": 652,
    "name": "Spicy Beef Bourguignon",
    "category": "Indian"
  },
  {
    "id": 653,
    "name": "Spicy Bouillabaisse",
    "category": "Indian"
  },
  {
    "id": 654,
    "name": "Spicy Crepes",
    "category": "Indian"
  },
  {
    "id": 655,
    "name": "Spicy Nicoise Salad",
    "category": "Indian"
  },
  {
    "id": 656,
    "name": "Spicy Chicken Parmesan",
    "category": "Indian"
  },
  {
    "id": 657,
    "name": "Spicy Eggplant Parmesan",
    "category": "Indian"
  },
  {
    "id": 658,
    "name": "Spicy Risotto",
    "category": "Italian"
  },
  {
    "id": 659,
    "name": "Spicy Minestrone",
    "category": "Indian"
  },
  {
    "id": 660,
    "name": "Spicy Gnocchi",
    "category": "Italian"
  },
  {
    "id": 661,
    "name": "Spicy Cannelloni",
    "category": "Indian"
  },
  {
    "id": 662,
    "name": "Spicy Calzone",
    "category": "Italian"
  },
  {
    "id": 663,
    "name": "Spicy Focaccia",
    "category": "Italian"
  },
  {
    "id": 664,
    "name": "Spicy Greek Moussaka",
    "category": "Indian"
  },
  {
    "id": 665,
    "name": "Spicy Souvlaki",
    "category": "Indian"
  },
  {
    "id": 666,
    "name": "Spicy Spanakopita",
    "category": "Indian"
  },
  {
    "id": 667,
    "name": "Spicy Pastitsio",
    "category": "Indian"
  },
  {
    "id": 668,
    "name": "Spicy Tzatziki",
    "category": "Indian"
  },
  {
    "id": 669,
    "name": "Spicy Dolma",
    "category": "Indian"
  },
  {
    "id": 670,
    "name": "Spicy Baklava",
    "category": "Dessert"
  },
  {
    "id": 671,
    "name": "Spicy Spanish Paella",
    "category": "Indian"
  },
  {
    "id": 672,
    "name": "Spicy Tortilla Española",
    "category": "Indian"
  },
  {
    "id": 673,
    "name": "Spicy Patatas Bravas",
    "category": "Indian"
  },
  {
    "id": 674,
    "name": "Spicy Gazpacho",
    "category": "Indian"
  },
  {
    "id": 675,
    "name": "Spicy Croquetas",
    "category": "Indian"
  },
  {
    "id": 676,
    "name": "Spicy Empanada",
    "category": "Indian"
  },
  {
    "id": 677,
    "name": "Spicy Fish and Chips",
    "category": "Indian"
  },
  {
    "id": 678,
    "name": "Spicy Shepherd's Pie",
    "category": "Dessert"
  },
  {
    "id": 679,
    "name": "Spicy Cottage Pie",
    "category": "Dessert"
  },
  {
    "id": 680,
    "name": "Spicy Beef Wellington",
    "category": "Indian"
  },
  {
    "id": 681,
    "name": "Spicy Yorkshire Pudding",
    "category": "Dessert"
  },
  {
    "id": 682,
    "name": "Spicy Cornish Pasty",
    "category": "Indian"
  },
  {
    "id": 683,
    "name": "Spicy Chicken Pot Pie",
    "category": "Dessert"
  },
  {
    "id": 684,
    "name": "Spicy Sausage Roll",
    "category": "Indian"
  },
  {
    "id": 685,
    "name": "Spicy Scotch Egg",
    "category": "Indian"
  },
  {
    "id": 686,
    "name": "Spicy American Pancakes",
    "category": "Dessert"
  },
  {
    "id": 687,
    "name": "Spicy French Toast",
    "category": "Indian"
  },
  {
    "id": 688,
    "name": "Spicy Waffles",
    "category": "Fast Food"
  },
  {
    "id": 689,
    "name": "Spicy Belgian Waffles",
    "category": "Fast Food"
  },
  {
    "id": 690,
    "name": "Spicy Eggs Benedict",
    "category": "Indian"
  },
  {
    "id": 691,
    "name": "Spicy Hash Browns",
    "category": "Indian"
  },
  {
    "id": 692,
    "name": "Spicy Clam Chowder",
    "category": "Indian"
  },
  {
    "id": 693,
    "name": "Spicy Gumbo",
    "category": "Indian"
  },
  {
    "id": 694,
    "name": "Spicy Jambalaya",
    "category": "Indian"
  },
  {
    "id": 695,
    "name": "Spicy BBQ Ribs",
    "category": "Fast Food"
  },
  {
    "id": 696,
    "name": "Spicy Meatloaf",
    "category": "Indian"
  },
  {
    "id": 697,
    "name": "Spicy Cornbread",
    "category": "Indian"
  },
  {
    "id": 698,
    "name": "Spicy Chicken and Waffles",
    "category": "Fast Food"
  },
  {
    "id": 699,
    "name": "Spicy Sloppy Joe",
    "category": "Indian"
  },
  {
    "id": 700,
    "name": "Spicy New York Cheesecake",
    "category": "Dessert"
  },
  {
    "id": 701,
    "name": "Spicy Apple Pie",
    "category": "Dessert"
  },
  {
    "id": 702,
    "name": "Spicy Pumpkin Pie",
    "category": "Dessert"
  },
  {
    "id": 703,
    "name": "Spicy Pecan Pie",
    "category": "Dessert"
  },
  {
    "id": 704,
    "name": "Spicy Key Lime Pie",
    "category": "Dessert"
  },
  {
    "id": 705,
    "name": "Spicy Mango Lassi",
    "category": "Indian"
  },
  {
    "id": 706,
    "name": "Spicy Sweet Lassi",
    "category": "Indian"
  },
  {
    "id": 707,
    "name": "Spicy Salted Lassi",
    "category": "Indian"
  },
  {
    "id": 708,
    "name": "Spicy Rose Milk",
    "category": "Indian"
  },
  {
    "id": 709,
    "name": "Spicy Badam Milk",
    "category": "Indian"
  },
  {
    "id": 710,
    "name": "Spicy Masala Chai",
    "category": "Indian"
  },
  {
    "id": 711,
    "name": "Spicy Filter Coffee",
    "category": "Indian"
  },
  {
    "id": 712,
    "name": "Spicy Cold Coffee",
    "category": "Indian"
  },
  {
    "id": 713,
    "name": "Spicy Mango Shake",
    "category": "Indian"
  },
  {
    "id": 714,
    "name": "Spicy Banana Shake",
    "category": "Indian"
  },
  {
    "id": 715,
    "name": "Spicy Strawberry Shake",
    "category": "Indian"
  },
  {
    "id": 716,
    "name": "Spicy Chocolate Shake",
    "category": "Indian"
  },
  {
    "id": 717,
    "name": "Spicy Mango Smoothie",
    "category": "Indian"
  },
  {
    "id": 718,
    "name": "Spicy Berry Smoothie",
    "category": "Indian"
  },
  {
    "id": 719,
    "name": "Spicy Banana Smoothie",
    "category": "Indian"
  },
  {
    "id": 720,
    "name": "Spicy Lemonade",
    "category": "Indian"
  },
  {
    "id": 721,
    "name": "Spicy Mint Lemonade",
    "category": "Indian"
  },
  {
    "id": 722,
    "name": "Spicy Iced Tea",
    "category": "Indian"
  },
  {
    "id": 723,
    "name": "Cheesy Chicken Biryani",
    "category": "Indian"
  },
  {
    "id": 724,
    "name": "Cheesy Mutton Biryani",
    "category": "Indian"
  },
  {
    "id": 725,
    "name": "Cheesy Egg Biryani",
    "category": "Indian"
  },
  {
    "id": 726,
    "name": "Cheesy Fish Biryani",
    "category": "Indian"
  },
  {
    "id": 727,
    "name": "Cheesy Prawn Biryani",
    "category": "Indian"
  },
  {
    "id": 728,
    "name": "Cheesy Veg Biryani",
    "category": "Indian"
  },
  {
    "id": 729,
    "name": "Cheesy Paneer Biryani",
    "category": "Indian"
  },
  {
    "id": 730,
    "name": "Cheesy Mushroom Biryani",
    "category": "Indian"
  },
  {
    "id": 731,
    "name": "Cheesy Masala Dosa",
    "category": "Indian"
  },
  {
    "id": 732,
    "name": "Cheesy Plain Dosa",
    "category": "Indian"
  },
  {
    "id": 733,
    "name": "Cheesy Onion Dosa",
    "category": "Indian"
  },
  {
    "id": 734,
    "name": "Cheesy Rava Dosa",
    "category": "Indian"
  },
  {
    "id": 735,
    "name": "Cheesy Mysore Masala Dosa",
    "category": "Indian"
  },
  {
    "id": 736,
    "name": "Cheesy Set Dosa",
    "category": "Indian"
  },
  {
    "id": 737,
    "name": "Cheesy Neer Dosa",
    "category": "Indian"
  },
  {
    "id": 738,
    "name": "Cheesy Pesarattu",
    "category": "Indian"
  },
  {
    "id": 739,
    "name": "Cheesy Idli",
    "category": "Indian"
  },
  {
    "id": 740,
    "name": "Cheesy Medu Vada",
    "category": "Indian"
  },
  {
    "id": 741,
    "name": "Cheesy Masala Vada",
    "category": "Indian"
  },
  {
    "id": 742,
    "name": "Cheesy Pongal",
    "category": "Indian"
  },
  {
    "id": 743,
    "name": "Cheesy Upma",
    "category": "Indian"
  },
  {
    "id": 744,
    "name": "Cheesy Puttu",
    "category": "Indian"
  },
  {
    "id": 745,
    "name": "Cheesy Appam",
    "category": "Indian"
  },
  {
    "id": 746,
    "name": "Cheesy Idiyappam",
    "category": "Indian"
  },
  {
    "id": 747,
    "name": "Cheesy Parotta",
    "category": "Indian"
  },
  {
    "id": 748,
    "name": "Cheesy Chapati",
    "category": "Indian"
  },
  {
    "id": 749,
    "name": "Cheesy Poori",
    "category": "Indian"
  },
  {
    "id": 750,
    "name": "Cheesy Aloo Paratha",
    "category": "Indian"
  },
  {
    "id": 751,
    "name": "Cheesy Chole Bhature",
    "category": "Indian"
  },
  {
    "id": 752,
    "name": "Cheesy Pav Bhaji",
    "category": "Indian"
  },
  {
    "id": 753,
    "name": "Cheesy Vada Pav",
    "category": "Indian"
  },
  {
    "id": 754,
    "name": "Cheesy Pani Puri",
    "category": "Indian"
  },
  {
    "id": 755,
    "name": "Cheesy Bhel Puri",
    "category": "Indian"
  },
  {
    "id": 756,
    "name": "Cheesy Dahi Puri",
    "category": "Indian"
  },
  {
    "id": 757,
    "name": "Cheesy Samosa",
    "category": "Indian"
  },
  {
    "id": 758,
    "name": "Cheesy Pakora",
    "category": "Indian"
  },
  {
    "id": 759,
    "name": "Cheesy Kachori",
    "category": "Indian"
  },
  {
    "id": 760,
    "name": "Cheesy Dhokla",
    "category": "Indian"
  },
  {
    "id": 761,
    "name": "Cheesy Chicken 65",
    "category": "Indian"
  },
  {
    "id": 762,
    "name": "Cheesy Chilli Chicken",
    "category": "Indian"
  },
  {
    "id": 763,
    "name": "Cheesy Pepper Chicken",
    "category": "Indian"
  },
  {
    "id": 764,
    "name": "Cheesy Butter Chicken",
    "category": "Indian"
  },
  {
    "id": 765,
    "name": "Cheesy Chicken Tikka",
    "category": "Indian"
  },
  {
    "id": 766,
    "name": "Cheesy Chicken Tandoori",
    "category": "Indian"
  },
  {
    "id": 767,
    "name": "Cheesy Chicken Chettinad",
    "category": "Indian"
  },
  {
    "id": 768,
    "name": "Cheesy Chicken Sukka",
    "category": "Indian"
  },
  {
    "id": 769,
    "name": "Cheesy Mutton Chukka",
    "category": "Indian"
  },
  {
    "id": 770,
    "name": "Cheesy Mutton Rogan Josh",
    "category": "Indian"
  },
  {
    "id": 771,
    "name": "Cheesy Mutton Curry",
    "category": "Indian"
  },
  {
    "id": 772,
    "name": "Cheesy Mutton Korma",
    "category": "Indian"
  },
  {
    "id": 773,
    "name": "Cheesy Mutton Pepper Fry",
    "category": "Indian"
  },
  {
    "id": 774,
    "name": "Cheesy Mutton Chettinad",
    "category": "Indian"
  },
  {
    "id": 775,
    "name": "Cheesy Fish Fry",
    "category": "Indian"
  },
  {
    "id": 776,
    "name": "Cheesy Fish Curry",
    "category": "Indian"
  },
  {
    "id": 777,
    "name": "Cheesy Fish Tikka",
    "category": "Indian"
  },
  {
    "id": 778,
    "name": "Cheesy Kerala Fish Curry",
    "category": "Indian"
  },
  {
    "id": 779,
    "name": "Cheesy Goan Fish Curry",
    "category": "Indian"
  },
  {
    "id": 780,
    "name": "Cheesy Prawn Masala",
    "category": "Indian"
  },
  {
    "id": 781,
    "name": "Cheesy Prawn Fry",
    "category": "Indian"
  },
  {
    "id": 782,
    "name": "Cheesy Prawn Curry",
    "category": "Indian"
  },
  {
    "id": 783,
    "name": "Cheesy Paneer Butter Masala",
    "category": "Indian"
  },
  {
    "id": 784,
    "name": "Cheesy Kadai Paneer",
    "category": "Indian"
  },
  {
    "id": 785,
    "name": "Cheesy Palak Paneer",
    "category": "Indian"
  },
  {
    "id": 786,
    "name": "Cheesy Shahi Paneer",
    "category": "Indian"
  },
  {
    "id": 787,
    "name": "Cheesy Paneer Tikka",
    "category": "Indian"
  },
  {
    "id": 788,
    "name": "Cheesy Matar Paneer",
    "category": "Indian"
  },
  {
    "id": 789,
    "name": "Cheesy Chilli Paneer",
    "category": "Indian"
  },
  {
    "id": 790,
    "name": "Cheesy Paneer Bhurji",
    "category": "Indian"
  },
  {
    "id": 791,
    "name": "Cheesy Dal Tadka",
    "category": "Indian"
  },
  {
    "id": 792,
    "name": "Cheesy Dal Makhani",
    "category": "Indian"
  },
  {
    "id": 793,
    "name": "Cheesy Rajma Masala",
    "category": "Indian"
  },
  {
    "id": 794,
    "name": "Cheesy Chana Masala",
    "category": "Indian"
  },
  {
    "id": 795,
    "name": "Cheesy Aloo Gobi",
    "category": "Indian"
  },
  {
    "id": 796,
    "name": "Cheesy Aloo Matar",
    "category": "Indian"
  },
  {
    "id": 797,
    "name": "Cheesy Baingan Bharta",
    "category": "Indian"
  },
  {
    "id": 798,
    "name": "Cheesy Bhindi Masala",
    "category": "Indian"
  },
  {
    "id": 799,
    "name": "Cheesy Malai Kofta",
    "category": "Indian"
  },
  {
    "id": 800,
    "name": "Cheesy White Pasta",
    "category": "Italian"
  },
  {
    "id": 801,
    "name": "Cheesy Red Sauce Pasta",
    "category": "Italian"
  },
  {
    "id": 802,
    "name": "Cheesy Arrabbiata Pasta",
    "category": "Italian"
  },
  {
    "id": 803,
    "name": "Cheesy Alfredo Pasta",
    "category": "Italian"
  },
  {
    "id": 804,
    "name": "Cheesy Pesto Pasta",
    "category": "Italian"
  },
  {
    "id": 805,
    "name": "Cheesy Mac and Cheese",
    "category": "Indian"
  },
  {
    "id": 806,
    "name": "Cheesy Lasagna",
    "category": "Italian"
  },
  {
    "id": 807,
    "name": "Cheesy Ravioli",
    "category": "Italian"
  },
  {
    "id": 808,
    "name": "Cheesy Spaghetti Carbonara",
    "category": "Indian"
  },
  {
    "id": 809,
    "name": "Cheesy Spaghetti Bolognese",
    "category": "Indian"
  },
  {
    "id": 810,
    "name": "Cheesy Margherita Pizza",
    "category": "Italian"
  },
  {
    "id": 811,
    "name": "Cheesy Pepperoni Pizza",
    "category": "Italian"
  },
  {
    "id": 812,
    "name": "Cheesy Farmhouse Pizza",
    "category": "Italian"
  },
  {
    "id": 813,
    "name": "Cheesy Paneer Pizza",
    "category": "Italian"
  },
  {
    "id": 814,
    "name": "Cheesy Chicken Pizza",
    "category": "Italian"
  },
  {
    "id": 815,
    "name": "Cheesy Veggie Pizza",
    "category": "Italian"
  },
  {
    "id": 816,
    "name": "Cheesy Cheese Pizza",
    "category": "Italian"
  },
  {
    "id": 817,
    "name": "Cheesy Garlic Bread",
    "category": "Indian"
  },
  {
    "id": 818,
    "name": "Cheesy Bruschetta",
    "category": "Italian"
  },
  {
    "id": 819,
    "name": "Cheesy Fried Rice",
    "category": "Chinese"
  },
  {
    "id": 820,
    "name": "Cheesy Chicken Fried Rice",
    "category": "Chinese"
  },
  {
    "id": 821,
    "name": "Cheesy Egg Fried Rice",
    "category": "Chinese"
  },
  {
    "id": 822,
    "name": "Cheesy Schezwan Fried Rice",
    "category": "Chinese"
  },
  {
    "id": 823,
    "name": "Cheesy Veg Fried Rice",
    "category": "Chinese"
  },
  {
    "id": 824,
    "name": "Cheesy Mushroom Fried Rice",
    "category": "Chinese"
  },
  {
    "id": 825,
    "name": "Cheesy Prawn Fried Rice",
    "category": "Chinese"
  },
  {
    "id": 826,
    "name": "Cheesy Thai Fried Rice",
    "category": "Thai"
  },
  {
    "id": 827,
    "name": "Cheesy Chicken Noodles",
    "category": "Chinese"
  },
  {
    "id": 828,
    "name": "Cheesy Veg Hakka Noodles",
    "category": "Chinese"
  },
  {
    "id": 829,
    "name": "Cheesy Schezwan Noodles",
    "category": "Chinese"
  },
  {
    "id": 830,
    "name": "Cheesy Egg Noodles",
    "category": "Chinese"
  },
  {
    "id": 831,
    "name": "Cheesy Chow Mein",
    "category": "Chinese"
  },
  {
    "id": 832,
    "name": "Cheesy Pad Thai",
    "category": "Thai"
  },
  {
    "id": 833,
    "name": "Cheesy Ramen",
    "category": "Japanese"
  },
  {
    "id": 834,
    "name": "Cheesy Udon Noodles",
    "category": "Japanese"
  },
  {
    "id": 835,
    "name": "Cheesy Soba Noodles",
    "category": "Japanese"
  },
  {
    "id": 836,
    "name": "Cheesy Chicken Manchurian",
    "category": "Chinese"
  },
  {
    "id": 837,
    "name": "Cheesy Gobi Manchurian",
    "category": "Chinese"
  },
  {
    "id": 838,
    "name": "Cheesy Veg Manchurian",
    "category": "Chinese"
  },
  {
    "id": 839,
    "name": "Cheesy Spring Rolls",
    "category": "Indian"
  },
  {
    "id": 840,
    "name": "Cheesy Momos",
    "category": "Chinese"
  },
  {
    "id": 841,
    "name": "Cheesy Chicken Momos",
    "category": "Chinese"
  },
  {
    "id": 842,
    "name": "Cheesy Dim Sum",
    "category": "Indian"
  },
  {
    "id": 843,
    "name": "Cheesy Wontons",
    "category": "Chinese"
  },
  {
    "id": 844,
    "name": "Cheesy Tom Yum Soup",
    "category": "Thai"
  },
  {
    "id": 845,
    "name": "Cheesy Hot and Sour Soup",
    "category": "Indian"
  },
  {
    "id": 846,
    "name": "Cheesy Sweet Corn Soup",
    "category": "Indian"
  },
  {
    "id": 847,
    "name": "Cheesy Manchow Soup",
    "category": "Indian"
  },
  {
    "id": 848,
    "name": "Cheesy Miso Soup",
    "category": "Indian"
  },
  {
    "id": 849,
    "name": "Cheesy Rasam",
    "category": "Indian"
  },
  {
    "id": 850,
    "name": "Cheesy Sambar",
    "category": "Indian"
  },
  {
    "id": 851,
    "name": "Cheesy Chicken Soup",
    "category": "Indian"
  },
  {
    "id": 852,
    "name": "Cheesy Mushroom Soup",
    "category": "Indian"
  },
  {
    "id": 853,
    "name": "Cheesy Chicken Shawarma",
    "category": "Indian"
  },
  {
    "id": 854,
    "name": "Cheesy Falafel Wrap",
    "category": "Indian"
  },
  {
    "id": 855,
    "name": "Cheesy Hummus",
    "category": "Indian"
  },
  {
    "id": 856,
    "name": "Cheesy Baba Ganoush",
    "category": "Indian"
  },
  {
    "id": 857,
    "name": "Cheesy Chicken Kebab",
    "category": "Indian"
  },
  {
    "id": 858,
    "name": "Cheesy Seekh Kebab",
    "category": "Indian"
  },
  {
    "id": 859,
    "name": "Cheesy Shish Kebab",
    "category": "Indian"
  },
  {
    "id": 860,
    "name": "Cheesy Doner Kebab",
    "category": "Indian"
  },
  {
    "id": 861,
    "name": "Cheesy Gyro",
    "category": "Indian"
  },
  {
    "id": 862,
    "name": "Cheesy Chicken Burger",
    "category": "Fast Food"
  },
  {
    "id": 863,
    "name": "Cheesy Veg Burger",
    "category": "Fast Food"
  },
  {
    "id": 864,
    "name": "Cheesy Paneer Burger",
    "category": "Fast Food"
  },
  {
    "id": 865,
    "name": "Cheesy Cheese Burger",
    "category": "Fast Food"
  },
  {
    "id": 866,
    "name": "Cheesy Fish Burger",
    "category": "Fast Food"
  },
  {
    "id": 867,
    "name": "Cheesy Mushroom Burger",
    "category": "Fast Food"
  },
  {
    "id": 868,
    "name": "Cheesy French Fries",
    "category": "Fast Food"
  },
  {
    "id": 869,
    "name": "Cheesy Peri Peri Fries",
    "category": "Fast Food"
  },
  {
    "id": 870,
    "name": "Cheesy Cheese Fries",
    "category": "Fast Food"
  },
  {
    "id": 871,
    "name": "Cheesy Sweet Potato Fries",
    "category": "Fast Food"
  },
  {
    "id": 872,
    "name": "Cheesy Onion Rings",
    "category": "Indian"
  },
  {
    "id": 873,
    "name": "Cheesy Potato Wedges",
    "category": "Indian"
  },
  {
    "id": 874,
    "name": "Cheesy Nachos",
    "category": "Mexican"
  },
  {
    "id": 875,
    "name": "Cheesy Cheese Nachos",
    "category": "Mexican"
  },
  {
    "id": 876,
    "name": "Cheesy Chocolate Cake",
    "category": "Dessert"
  },
  {
    "id": 877,
    "name": "Cheesy Vanilla Cake",
    "category": "Dessert"
  },
  {
    "id": 878,
    "name": "Cheesy Red Velvet Cake",
    "category": "Dessert"
  },
  {
    "id": 879,
    "name": "Cheesy Black Forest Cake",
    "category": "Dessert"
  },
  {
    "id": 880,
    "name": "Cheesy Pineapple Cake",
    "category": "Dessert"
  },
  {
    "id": 881,
    "name": "Cheesy Carrot Cake",
    "category": "Dessert"
  },
  {
    "id": 882,
    "name": "Cheesy Coffee Cake",
    "category": "Dessert"
  },
  {
    "id": 883,
    "name": "Cheesy Marble Cake",
    "category": "Dessert"
  },
  {
    "id": 884,
    "name": "Cheesy Fruit Cake",
    "category": "Dessert"
  },
  {
    "id": 885,
    "name": "Cheesy Cheesecake",
    "category": "Dessert"
  },
  {
    "id": 886,
    "name": "Cheesy Chocolate Brownie",
    "category": "Dessert"
  },
  {
    "id": 887,
    "name": "Cheesy Fudge Brownie",
    "category": "Dessert"
  },
  {
    "id": 888,
    "name": "Cheesy Chocolate Muffin",
    "category": "Dessert"
  },
  {
    "id": 889,
    "name": "Cheesy Blueberry Muffin",
    "category": "Dessert"
  },
  {
    "id": 890,
    "name": "Cheesy Banana Muffin",
    "category": "Dessert"
  },
  {
    "id": 891,
    "name": "Cheesy Cupcake",
    "category": "Dessert"
  },
  {
    "id": 892,
    "name": "Cheesy Chocolate Cookies",
    "category": "Dessert"
  },
  {
    "id": 893,
    "name": "Cheesy Oatmeal Cookies",
    "category": "Dessert"
  },
  {
    "id": 894,
    "name": "Cheesy Butter Cookies",
    "category": "Dessert"
  },
  {
    "id": 895,
    "name": "Cheesy Macarons",
    "category": "Indian"
  },
  {
    "id": 896,
    "name": "Cheesy Donuts",
    "category": "Dessert"
  },
  {
    "id": 897,
    "name": "Cheesy Churros",
    "category": "Dessert"
  },
  {
    "id": 898,
    "name": "Cheesy Chocolate Ice Cream",
    "category": "Dessert"
  },
  {
    "id": 899,
    "name": "Cheesy Vanilla Ice Cream",
    "category": "Dessert"
  },
  {
    "id": 900,
    "name": "Cheesy Strawberry Ice Cream",
    "category": "Dessert"
  },
  {
    "id": 901,
    "name": "Cheesy Mango Ice Cream",
    "category": "Dessert"
  },
  {
    "id": 902,
    "name": "Cheesy Butterscotch Ice Cream",
    "category": "Dessert"
  },
  {
    "id": 903,
    "name": "Cheesy Pistachio Ice Cream",
    "category": "Dessert"
  },
  {
    "id": 904,
    "name": "Cheesy Kulfi",
    "category": "Dessert"
  },
  {
    "id": 905,
    "name": "Cheesy Falooda",
    "category": "Dessert"
  },
  {
    "id": 906,
    "name": "Cheesy Gulab Jamun",
    "category": "Indian"
  },
  {
    "id": 907,
    "name": "Cheesy Rasgulla",
    "category": "Dessert"
  },
  {
    "id": 908,
    "name": "Cheesy Rasmalai",
    "category": "Indian"
  },
  {
    "id": 909,
    "name": "Cheesy Jalebi",
    "category": "Dessert"
  },
  {
    "id": 910,
    "name": "Cheesy Mysore Pak",
    "category": "Indian"
  },
  {
    "id": 911,
    "name": "Cheesy Kaju Katli",
    "category": "Indian"
  },
  {
    "id": 912,
    "name": "Cheesy Soan Papdi",
    "category": "Indian"
  },
  {
    "id": 913,
    "name": "Cheesy Ladoo",
    "category": "Dessert"
  },
  {
    "id": 914,
    "name": "Cheesy Kaju Burfi",
    "category": "Dessert"
  },
  {
    "id": 915,
    "name": "Cheesy Coconut Burfi",
    "category": "Dessert"
  },
  {
    "id": 916,
    "name": "Cheesy Payasam",
    "category": "Dessert"
  },
  {
    "id": 917,
    "name": "Cheesy Semiya Payasam",
    "category": "Dessert"
  },
  {
    "id": 918,
    "name": "Cheesy Pal Payasam",
    "category": "Dessert"
  },
  {
    "id": 919,
    "name": "Cheesy Carrot Halwa",
    "category": "Dessert"
  },
  {
    "id": 920,
    "name": "Cheesy Gajar Halwa",
    "category": "Dessert"
  },
  {
    "id": 921,
    "name": "Cheesy Sooji Halwa",
    "category": "Dessert"
  },
  {
    "id": 922,
    "name": "Cheesy Moong Dal Halwa",
    "category": "Dessert"
  },
  {
    "id": 923,
    "name": "Cheesy Kesari",
    "category": "Dessert"
  },
  {
    "id": 924,
    "name": "Cheesy Basundi",
    "category": "Indian"
  },
  {
    "id": 925,
    "name": "Cheesy Custard",
    "category": "Indian"
  },
  {
    "id": 926,
    "name": "Cheesy Tacos",
    "category": "Mexican"
  },
  {
    "id": 927,
    "name": "Cheesy Chicken Tacos",
    "category": "Mexican"
  },
  {
    "id": 928,
    "name": "Cheesy Fish Tacos",
    "category": "Mexican"
  },
  {
    "id": 929,
    "name": "Cheesy Veg Tacos",
    "category": "Mexican"
  },
  {
    "id": 930,
    "name": "Cheesy Burrito",
    "category": "Mexican"
  },
  {
    "id": 931,
    "name": "Cheesy Chicken Burrito",
    "category": "Mexican"
  },
  {
    "id": 932,
    "name": "Cheesy Quesadilla",
    "category": "Mexican"
  },
  {
    "id": 933,
    "name": "Cheesy Enchiladas",
    "category": "Mexican"
  },
  {
    "id": 934,
    "name": "Cheesy Guacamole",
    "category": "Mexican"
  },
  {
    "id": 935,
    "name": "Cheesy Salsa",
    "category": "Mexican"
  },
  {
    "id": 936,
    "name": "Cheesy Greek Salad",
    "category": "Indian"
  },
  {
    "id": 937,
    "name": "Cheesy Caesar Salad",
    "category": "Indian"
  },
  {
    "id": 938,
    "name": "Cheesy Caprese Salad",
    "category": "Indian"
  },
  {
    "id": 939,
    "name": "Cheesy Coleslaw",
    "category": "Indian"
  },
  {
    "id": 940,
    "name": "Cheesy Potato Salad",
    "category": "Indian"
  },
  {
    "id": 941,
    "name": "Cheesy Pasta Salad",
    "category": "Italian"
  },
  {
    "id": 942,
    "name": "Cheesy Chicken Salad",
    "category": "Indian"
  },
  {
    "id": 943,
    "name": "Cheesy Club Sandwich",
    "category": "Fast Food"
  },
  {
    "id": 944,
    "name": "Cheesy Grilled Cheese Sandwich",
    "category": "Fast Food"
  },
  {
    "id": 945,
    "name": "Cheesy Chicken Sandwich",
    "category": "Fast Food"
  },
  {
    "id": 946,
    "name": "Cheesy Veg Sandwich",
    "category": "Fast Food"
  },
  {
    "id": 947,
    "name": "Cheesy Egg Sandwich",
    "category": "Fast Food"
  },
  {
    "id": 948,
    "name": "Cheesy Tuna Sandwich",
    "category": "Fast Food"
  },
  {
    "id": 949,
    "name": "Cheesy BLT Sandwich",
    "category": "Fast Food"
  },
  {
    "id": 950,
    "name": "Cheesy Chicken Wings",
    "category": "Fast Food"
  },
  {
    "id": 951,
    "name": "Cheesy BBQ Wings",
    "category": "Fast Food"
  },
  {
    "id": 952,
    "name": "Cheesy Buffalo Wings",
    "category": "Fast Food"
  },
  {
    "id": 953,
    "name": "Cheesy Chicken Nuggets",
    "category": "Indian"
  },
  {
    "id": 954,
    "name": "Cheesy Chicken Strips",
    "category": "Indian"
  },
  {
    "id": 955,
    "name": "Cheesy Popcorn Chicken",
    "category": "Indian"
  },
  {
    "id": 956,
    "name": "Cheesy Corn Fritters",
    "category": "Indian"
  },
  {
    "id": 957,
    "name": "Cheesy Thai Green Curry",
    "category": "Thai"
  },
  {
    "id": 958,
    "name": "Cheesy Thai Red Curry",
    "category": "Thai"
  },
  {
    "id": 959,
    "name": "Cheesy Massaman Curry",
    "category": "Thai"
  },
  {
    "id": 960,
    "name": "Cheesy Pad Kra Pao",
    "category": "Thai"
  },
  {
    "id": 961,
    "name": "Cheesy Tom Kha Soup",
    "category": "Thai"
  },
  {
    "id": 962,
    "name": "Cheesy Mango Sticky Rice",
    "category": "Indian"
  },
  {
    "id": 963,
    "name": "Cheesy Som Tam",
    "category": "Indian"
  },
  {
    "id": 964,
    "name": "Cheesy Thai Satay",
    "category": "Thai"
  },
  {
    "id": 965,
    "name": "Cheesy Japanese Curry",
    "category": "Indian"
  },
  {
    "id": 966,
    "name": "Cheesy Chicken Katsu",
    "category": "Indian"
  },
  {
    "id": 967,
    "name": "Cheesy Tonkatsu",
    "category": "Indian"
  },
  {
    "id": 968,
    "name": "Cheesy Teriyaki Chicken",
    "category": "Japanese"
  },
  {
    "id": 969,
    "name": "Cheesy Yakitori",
    "category": "Japanese"
  },
  {
    "id": 970,
    "name": "Cheesy Okonomiyaki",
    "category": "Indian"
  },
  {
    "id": 971,
    "name": "Cheesy Takoyaki",
    "category": "Japanese"
  },
  {
    "id": 972,
    "name": "Cheesy Gyoza",
    "category": "Japanese"
  },
  {
    "id": 973,
    "name": "Cheesy Onigiri",
    "category": "Japanese"
  },
  {
    "id": 974,
    "name": "Cheesy Sushi Rolls",
    "category": "Japanese"
  },
  {
    "id": 975,
    "name": "Cheesy Tempura",
    "category": "Japanese"
  },
  {
    "id": 976,
    "name": "Cheesy Korean Fried Chicken",
    "category": "Indian"
  },
  {
    "id": 977,
    "name": "Cheesy Bibimbap",
    "category": "Indian"
  },
  {
    "id": 978,
    "name": "Cheesy Bulgogi",
    "category": "Indian"
  },
  {
    "id": 979,
    "name": "Cheesy Japchae",
    "category": "Indian"
  },
  {
    "id": 980,
    "name": "Cheesy Tteokbokki",
    "category": "Indian"
  },
  {
    "id": 981,
    "name": "Cheesy Kimchi Fried Rice",
    "category": "Chinese"
  },
  {
    "id": 982,
    "name": "Cheesy Korean BBQ",
    "category": "Indian"
  },
  {
    "id": 983,
    "name": "Cheesy Jajangmyeon",
    "category": "Indian"
  },
  {
    "id": 984,
    "name": "Cheesy Kung Pao Chicken",
    "category": "Chinese"
  },
  {
    "id": 985,
    "name": "Cheesy Sweet and Sour Chicken",
    "category": "Indian"
  },
  {
    "id": 986,
    "name": "Cheesy Mongolian Beef",
    "category": "Indian"
  },
  {
    "id": 987,
    "name": "Cheesy Mapo Tofu",
    "category": "Chinese"
  },
  {
    "id": 988,
    "name": "Cheesy Dan Dan Noodles",
    "category": "Chinese"
  },
  {
    "id": 989,
    "name": "Cheesy Char Siu",
    "category": "Indian"
  },
  {
    "id": 990,
    "name": "Cheesy Chinese Dumplings",
    "category": "Chinese"
  },
  {
    "id": 991,
    "name": "Cheesy Peking Duck",
    "category": "Indian"
  },
  {
    "id": 992,
    "name": "Cheesy Congee",
    "category": "Chinese"
  },
  {
    "id": 993,
    "name": "Cheesy Singapore Noodles",
    "category": "Chinese"
  },
  {
    "id": 994,
    "name": "Cheesy Hainanese Chicken Rice",
    "category": "Indian"
  },
  {
    "id": 995,
    "name": "Cheesy Laksa",
    "category": "Indian"
  },
  {
    "id": 996,
    "name": "Cheesy Nasi Goreng",
    "category": "Indian"
  },
  {
    "id": 997,
    "name": "Cheesy Mee Goreng",
    "category": "Indian"
  },
  {
    "id": 998,
    "name": "Cheesy Satay Chicken",
    "category": "Thai"
  },
  {
    "id": 999,
    "name": "Cheesy Beef Rendang",
    "category": "Indian"
  },
  {
    "id": 1000,
    "name": "Cheesy Nasi Lemak",
    "category": "Indian"
  }
];
