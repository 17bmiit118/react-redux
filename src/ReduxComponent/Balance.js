import { useSelector } from "react-redux";

const Balance = () => {

    const amount = useSelector(state => state.amountState);

    return (
        <button>Balance :{amount}</button>
    )
}

export default Balance;