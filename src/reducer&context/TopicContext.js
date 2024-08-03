import {createContext,useContext,useEffect,useReducer} from 'react'
import { initialState, topicReducer } from './TopicReducer'


const TopicContext = createContext();

function TopicStateProvider ({children}) {
    const [state, dispatch] = useReducer(topicReducer, initialState)

    useEffect(()=> {
        localStorage.setItem('running_topics', JSON.stringify(state.running_topics))
            
    },
    [state.running_topics])

    useEffect(()=> {
        localStorage.setItem('completed_topics', JSON.stringify(state.completed_topics))
    },[state.completed_topics])

    useEffect(()=> {
        localStorage.setItem('trashed_topics', JSON.stringify(state.trashed_topics));
    },[state.trashed_topics])
    return (
        <TopicContext.Provider value={{state,dispatch}}>
            {children}
        </TopicContext.Provider>
    )
}

const useTopicContext = ()=> useContext(TopicContext)
export {TopicStateProvider, useTopicContext}