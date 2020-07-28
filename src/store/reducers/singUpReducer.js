import { REGISTER } from "../../redux/actionTypes";

let initialState = { status: 0 };

const singUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        status: state.status + action.status,
      };
    default:
      return state;
  }
};

export default singUpReducer;

export const data = [
  {
    id: 1,
    name: "Gagp",
    topic: "Hooks",
    project: "Canvas",
    members: [
      {
        firstName: "brat",
        lastName: "Lname",
        avatarUrl:
          "https://sun9-57.userapi.com/c830508/v830508655/a6b55/Jc7lYIlpOZk.jpg",
      },
      {
        firstName: "bratan",
        lastName: "Lname",
        avatarUrl:
          "https://sun9-57.userapi.com/c830508/v830508655/a6b55/Jc7lYIlpOZk.jpg",
      },
      {
        firstName: "bratishka",
        lastName: "Lname",
        avatarUrl:
          "https://sun9-57.userapi.com/c830508/v830508655/a6b55/Jc7lYIlpOZk.jpg",
      },
      {
        firstName: "jigyar",
        lastName: "Lname",
        avatarUrl:
          "https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG",
      },
    ],
  },


  {
    id: 1,
    name: "Gagp",
    topic: "JS",
    project: "React",
    members: [
      {
        firstName: "brat",
        lastName: "Lname",
        avatarUrl:
            "https://sun9-57.userapi.com/c830508/v830508655/a6b55/Jc7lYIlpOZk.jpg",
      },
      {
        firstName: "bratan",
        lastName: "Lname",
        avatarUrl:
            "https://sun9-57.userapi.com/c830508/v830508655/a6b55/Jc7lYIlpOZk.jpg",
      },
      {
        firstName: "bratishka",
        lastName: "Lname",
        avatarUrl:
            "https://sun9-57.userapi.com/c830508/v830508655/a6b55/Jc7lYIlpOZk.jpg",
      },
      {
        firstName: "jigyar",
        lastName: "Lname",
        avatarUrl:
            "https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG",
      },
    ],
  },
];
