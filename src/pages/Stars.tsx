import { useParams } from "react-router";


export default function Stars(){
    let { starId } = useParams();
    return (
        <>
            the starId is {starId}
        </>
    )
}