import { useState } from "react";
import axios from "../config/axios";

export default function useGenerate ({
    url,
    parameters 
}) {
    const [error, setError] = useState(false);
    const [image, setImage] = useState(null);

    const generate = async () => {
        axios.get(url, {
            params: {
                ...parameters
            }
        }).then(response => {
            setImage(Buffer.from(response.data, "binary").toString("base64"));
        }).catch(error => {
            console.log(error);
            setError(true);
        });
    }
    return { generate, image, error};
}