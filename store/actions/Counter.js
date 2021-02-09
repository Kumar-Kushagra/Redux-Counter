// THIS IS THE ACTION 

export const INC_COUNTER = "INC_COUNTER";
export const DEC_COUNTER = "DEC_COUNTER";

export const increaseCount = () => {
    return {
        type: INC_COUNTER,
    }
};
export const decreaseCount = () => {
    return {
        type: DEC_COUNTER,
    };
};