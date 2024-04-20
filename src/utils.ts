export const getRandomLink = () => {
  const links = [
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "https://www.youtube.com/watch?v=lTxYYxb-wBw",
    "https://www.youtube.com/watch?v=M2MHMxvydbA",
    "https://www.youtube.com/watch?v=4jXEuIHY9ic",
    "https://www.youtube.com/watch?v=onGdcH0vW50",
    "https://www.youtube.com/watch?v=cSCrVixkLzY",
    "https://www.youtube.com/watch?v=_7yZdwDR-Xg",
  ];

  // randomly grabbing one of the links
  const randomNum = Math.floor(Math.random() * 7);

  return links[randomNum];
};

export interface TourDate {
  date: string;
  location: string;
}

export interface ShowRequest {
  id: string;
  city: string;
  likes: number;
  name: string;
}

export interface Item {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

export const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
};

export const mockApiUrl = "https://66234bc83e17a3ac846ef8b2.mockapi.io";
