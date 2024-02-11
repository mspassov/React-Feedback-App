import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) =>{
    const [feedbackArray, setFeedbackArray] = useState([{id:100, rating: 5, text: "Some sample text with id = 100"}]);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

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
        feedbackEdit,
        handleFeedbackEdit,
        handleUpdate
        }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;