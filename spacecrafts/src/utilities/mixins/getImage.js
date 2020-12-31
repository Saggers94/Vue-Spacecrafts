const getImage = {
  data() {
    return { image: "" };
  },
  methods: {
    getImage(imageName) {
      return `/images/${imageName}`;
    },
  },
};

export default getImage;
