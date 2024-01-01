const events1 = (arr: number[]) => {
  return arr.map((el, i) => {
    return {
      alt: `${el}`,
      src: `/gallery/event1/${i + 1}.jpg`,
      view: "portrait",
      // view: `${i % 3 == 0 ? "portrait" : "landscape"}`,
    };
  });
};
const events2 = (arr: number[]) => {
  return arr.map((el, i) => {
    return {
      alt: `${el}`,
      src: `/gallery/event1/${i + 1}.jpg`,
      // view: `${i % 1 == 0 ? "portrait" : "landscape"}`,
      view: "landscape",
    };
  });
};

// console.log(events1(Array(2).fill(1), 1))

const galleryTemp = [
  {
    eventID: 1,
    name: "event 1",
    date: "12.31.23",
    description: "somewhere",
    poster: "/gallery/event1/1.jpg",

    items: [...events1(Array(28).fill(1)), ...events2(Array(28).fill(1))],
  },
];

const getGalleryData = [];

for (let i = 0; i < 20; i++) {
  getGalleryData.push(...galleryTemp);
}

export default getGalleryData;
