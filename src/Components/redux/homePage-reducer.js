import prev1 from "../../Assets/img/preview/storyPrev1.png"
import prev2 from "../../Assets/img/preview/storyPrev2.png"
import prev3 from "../../Assets/img/preview/storyPrev3.png"
import prev4 from "../../Assets/img/preview/storyPrev4.png"
import video from "../../Assets/img/video.png"

const ADD_POST = 'ADD_POST'


let initialState = {
    stories: [{id: 1, date: '15.09.2020', title: 'Отдыхаю на природе', preview: prev4, video},{id: 2, date: '15.09.2020', title: 'Отдыхаю на природе', preview: prev3, video},
    {id: 3, date: '15.09.2020', title: 'Отдыхаю на природе', preview: prev3, video}, {id: 4, date: '15.09.2020', title: 'Отдыхаю на природе', preview: prev4, video}],
    posts: [{id: 1, title: 'Как писать код быстро и безболезненно?', fullText: '', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
img: '', date: '21.06.2020', tags: ''}],
}

let HomePageReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            return{
                ...state,
                posts: [...state.posts, action.newPost]
            }
        
        default:
            return state
    }
}

export let addPost = (newPostText, date, id) => ({type: ADD_POST, newPost: {text: newPostText, date, id}})
export default HomePageReducer