// links for the tour page
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

// interface for the tour dates
export interface TourDate {
  id: string;
  date: string;
  location: string;
}

// interface for the show requests
export interface ShowRequest {
  id: string;
  city: string;
  likes: number;
  name: string;
}

// interface for the items in the store
export interface Item {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
}

// function to get the initials of a name for the bubbles
export const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
};

// typically i'd put this in the environment variables, but for the sake of the reviewer
export const mockApiUrl = "https://66234bc83e17a3ac846ef8b2.mockapi.io";
