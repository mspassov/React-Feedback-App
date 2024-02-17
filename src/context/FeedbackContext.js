import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) =>{
    const [isLoading, setIsLoading] = useState(true);
    const [feedbackArray, setFeedbackArray] = useState([]);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    //As soon as the context loads, we want to populate the feedback array
    useEffect(()=>{
        getFeedback();
    }, [])

    //GET feedback data
    const getFeedback = async () =>{
        setIsLoading(true);
        const res = await fetch('http://localhost:5000/feedback', {
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            }
        })
        const data = await res.json();

        setFeedbackArray(data);
        setIsLoading(false);
    }

    const handleDelete = (id) => {
        const newFeedback = feedbackArray.filter((item) => item.id !== id);
        setFeedbackArray(newFeedback);
    };

    const handleFeedbackEdit = (item) =>{
        setFeedbackEdit({item: item, edit: true});
    }

    const handleUpdate = (updFeedback) =>{
        setFeedbackArray(feedbackArray.map((item) =>{
            if(item.id == updFeedback.id){
                const newItem = {
                    id: updFeedback.id,
                    rating: updFeedback.rating,
                    text: updFeedback.text
                }
                return newItem;
            }
            else{
                return item;
            }
        }));

        setFeedbackEdit({item: {}, edit: false});
    }

    return <FeedbackContext.Provider value={{
        feedbackArray: feedbackArray, 
        handleDelete: handleDelete,
        setFeedbackArray: setFeedbackArray,
        isLoading,
        feedbackEdit,
        handleFeedbackEdit,
        handleUpdate
        }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;