import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) =>{
    const [isLoading, setIsLoading] = useState(false);
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
    //Added proxy to pacakge JSON to shorten the URL
    const getFeedback = async () =>{
        setIsLoading(true);
        const res = await fetch('/feedback', {
            method: "GET"
        })
        const data = await res.json();

        setFeedbackArray(data);
        setIsLoading(false);
    }

    //DELETE feedback from backend    
    const handleDelete = async (id) => {
        const response = await fetch(`/feedback/${id}`, {
            method: "DELETE"
        })

        const newFeedback = feedbackArray.filter((item) => item.id !== id);
        setFeedbackArray(newFeedback);
    };

    const handleFeedbackEdit = (item) =>{
        setFeedbackEdit({item: item, edit: true});
    }

    const handleUpdate = async (updFeedback) =>{
        const response = await fetch(`/feedback/${updFeedback.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updFeedback)
        });
        const data = await response.json();


        setFeedbackArray(feedbackArray.map((item) =>{
            if(item.id == updFeedback.id){
                const newItem = {
                    id: data.id,
                    rating: data.rating,
                    text: data.text
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