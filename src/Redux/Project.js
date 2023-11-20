import img from "../Assets/Images/project.png";
export const reProject = (
  state = [
    {
      id: 1,
      name: "safari online-shop",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos voluptatem eius",
      img,
      delay: 0,
      github:"",
      demo:""
    },
    {
      id: 1,
      name: "safari online-shop",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos voluptatem eius",
      img,
      delay: 0,
      github:"",
      demo:""
    },
    {
      id: 1,
      name: "safari online-shop",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos voluptatem eius",
      img,
      delay: 0,
      github:"",
      demo:""
    },
    {
      id: 1,
      name: "safari online-shop",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos voluptatem eius",
      img,
      delay: 0,
      github:"",
      demo:""
    },
    {
      id: 1,
      name: "safari online-shop",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos voluptatem eius",
      img,
      delay: 0,
      github:"",
      demo:""
    },
    {
      id: 1,
      name: "safari online-shop",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos voluptatem eius",
      img,
      delay: 0,
      github:"",
      demo:""
    },
    {
      id: 1,
      name: "safari online-shop",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos voluptatem eius",
      img,
      delay: 0,
      github:"",
      demo:""
    },
    {
      id: 1,
      name: "safari online-shop",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos voluptatem eius",
      img,
      delay: 0,
      github:"",
      demo:""
    },
  ],
  action
) => {
  switch (action.type) {
    case "PROJECT":
      return action.paylod;
    default:
      return state;
  }
};

export const acProject = (paylod) => {
  // const paylod = [];
  // data.map((item, index) => {
  //   paylod.push({
  //     id: item.id,
  //     name: item.name,
  //     text: item.text,
  //     img: item.img,
  //     delay: index / 4,
  //   });
  //   return null;
  // });
  return {
    type: "PROJECT",
    paylod,
  };
};
