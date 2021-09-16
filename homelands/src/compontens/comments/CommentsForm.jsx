import { useContext } from "react";
import {useForm} from 'react-hook-form';
import { myCostumFetch } from "../../helpers/fetch";
import { AuthContext } from "../Login/AuthProvider";
import {useHistory} from 'react-router';
import Style from './comments.module.scss';

export const CommentsForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { loginData } = useContext(AuthContext)
    const history = useHistory()

    const onSubmit = async (data, e) => {
        e.preventDefault()
        let formData = new FormData();
        const token = loginData.access_token
        formData.append('title', data.title)
        formData.append('content', data.content)
        formData.append('user_id', data.user_id)
        formData.append('active', true)
        formData.append('num_stars', 1)

        const url = `https://api.mediehuset.net/homelands/reviews`;
        const options = {
            method: 'POST',
            headers: {
                'Authorization': `Baerer ${loginData.access_token}`
            },
            body: formData
        }
        try {
            const result = await myCostumFetch(url, options);
            console.log(result)
            resetInputs();
            resetSite();
        }
        catch (error) {
            console.error(error);
        }
    }

    const resetInputs = () => {
        const inputs = [...document.querySelectorAll(".required")]
        inputs.forEach(element => element.value = "")
    }
    const resetSite = () => {
        history.go(0)
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <section className={Style.comments_container}>
                <main className={Style.comments_form}>
                <div>
                    <label htmlFor="title">Titel:</label>
                    <input className="required" type="text" name="title" {...register('title', { required: true })} />
                    {errors.title && <span className="error">Du skal indtaste en titel</span>}
                </div>
                <div>
                    <label htmlFor="content">Anmeldelse:</label>
                    <textarea className="required" name="content" cols="30" rows="10" {...register('content', { required: true })}></textarea>
                    {errors.comment && <span className="error">Du skal skrive en anmeldelse</span>}
                </div>
                <div>
                    <button type="submit">Send</button>
                </div>
                </main>
                </section>
            </form>
        </>
    )
}