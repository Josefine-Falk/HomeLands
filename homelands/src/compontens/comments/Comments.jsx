import { useParams } from "react-router"
import { CommentsForm } from "./CommentsForm";
import { CommentsList } from "./CommentsList";

export const Comments = () => {
    const { id } = useParams();

    return(
        <section>
            <div>
                <CommentsList itemId={id}/>
            </div>
            <div>
                <CommentsForm/>
            </div>
        </section>
    )
}
