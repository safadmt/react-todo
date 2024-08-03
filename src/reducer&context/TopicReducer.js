const initialState = {
    running_topics : JSON.parse(localStorage.getItem('running_topics')) || [],
    completed_topics : JSON.parse(localStorage.getItem('completed_topics')) || [],
    trashed_topics : JSON.parse(localStorage.getItem('trashed_topics')) || [],
    
}


function topicReducer(state,action) {
    switch (action.type) {
        case "set_running_topics": {
            const newtopics = [...state.running_topics, action.payload]
            localStorage.setItem('running_topics', JSON.stringify(newtopics))
            return {
                ...state,
                running_topics : newtopics
            }
        } 
        case "set_completed_topics" : {
            const item =  state.running_topics.find(item=> JSON.stringify(item.id) === JSON.stringify(action.payload))
            if(!item) return state;

                const new_running_top = state.running_topics.filter((topic)=> topic.id !== action.payload)
                const newCompletedTopics  = [...state.completed_topics, item]
            
            return {
                ...state,
                running_topics : new_running_top,
                completed_topics : newCompletedTopics 
            }
            
                

        }
        case "set_trashed_topics_from_running": {
            const item =  state.running_topics.find(item=> JSON.stringify(item.id) === JSON.stringify(action.payload))
            if(!item) return state;
            const new_running_top = state.running_topics.filter((topic)=> topic.id !== action.payload)
            const new_trashed_top  = [...state.trashed_topics, item]
            return {
                ...state,
                running_topics : new_running_top,
                trashed_topics : new_trashed_top 
            }
        }
        case "set_trashed_topics_from_complete" : {
            const item =  state.completed_topics.find(item=> JSON.stringify(item.id) === JSON.stringify(action.payload))
            if(!item) return state
            const new_completed_top = state.completed_topics.filter((topic)=> topic.id !== action.payload)
            const new_trashed_top  = [...state.trashed_topics, item]
            return {
                ...state,
                completed_topics : new_completed_top,
                trashed_topics : new_trashed_top 
            }
        }
        case "delete_permenantly" : {
            const newtrashed = state.trashed_topics.filter(item=> item.id !== action.payload)
            return {
                ...state,
                trashed_topics : newtrashed
            }
        }
        case "edit_running_topic" : {
            const topicIndex = state.running_topics.findIndex(item=> item.id === action.payload.id)
            if(topicIndex == -1) return state;
                const running_topics = [...state.running_topics]
                running_topics[topicIndex] = {...running_topics[topicIndex], ...action.payload}
                return {
                    ...state,
                    running_topics: running_topics
                }
            
           
            
        }
        default:
            return state
            
    }
}

export {initialState, topicReducer}